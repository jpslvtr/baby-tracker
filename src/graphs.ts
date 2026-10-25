import { collection, query, orderBy, where, Timestamp } from 'firebase/firestore';
import { db, qDocs, ReadSource } from './firebase';
import { config, birthDate, dayStartLabel, nightStartLabel } from './config';
import { nowInTZ, toTZDate, parseTZDateTime, formatDateForInput, getSleepDayBounds, computeDaySleepMs, SleepSpan } from './time';
import { convertToOz } from './units';

let dataChart: any = null;
let graphVersion = 0;
let lastGraphSignature = '';

// Chart.js + zoom plugin are loaded lazily on first Graphs-tab use instead of
// on every page load.
let chartLibPromise: Promise<void> | null = null;

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Failed to load ' + src));
        document.head.appendChild(s);
    });
}

export function ensureChartLoaded(): Promise<void> {
    if (chartLibPromise) return chartLibPromise;
    // Zoom plugin must load after Chart.js, so await sequentially.
    chartLibPromise = (async () => {
        await loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js');
        const ChartLib = (window as any).Chart;
        if (ChartLib) {
            ChartLib.defaults.color = '#cccccc';
            ChartLib.defaults.borderColor = 'rgba(255, 255, 255, 0.12)';
        }
    })().catch((err) => {
        chartLibPromise = null;   // allow a retry on the next click
        throw err;
    });
    return chartLibPromise;
}

export function setDefaultGraphDates(): void {
    (document.getElementById('graph-start-date') as HTMLInputElement).value = formatDateForInput(birthDate());
    (document.getElementById('graph-end-date') as HTMLInputElement).value = formatDateForInput(nowInTZ());
}

const SLEEP_LABEL = `Sleep (hrs, ${nightStartLabel}-${dayStartLabel})`;

const SERIES: Record<string, { label: string; color: string }> = {
    'bottle-breast-milk': { label: 'Bottle - Breast Milk', color: '#4CAF50' },
    'bottle-formula': { label: 'Bottle - Formula', color: '#2196F3' },
    'bottle-all': { label: 'Bottle - All', color: '#9C27B0' },
    'diaper-pee': { label: 'Diaper - Pee', color: '#FFEB3B' },
    'diaper-poo': { label: 'Diaper - Poo', color: '#795548' },
    'diaper-mixed': { label: 'Diaper - Mixed', color: '#FF9800' },
    'diaper-all': { label: 'Diaper - All', color: '#607D8B' },
    'pump': { label: 'Pump', color: '#E91E63' },
    'sleep': { label: SLEEP_LABEL, color: '#00897B' }
};

export function labelSleepSeries(): void {
    const sleepLabel = document.querySelector('.graph-checkbox[data-series="sleep"]')?.parentElement;
    const textNode = sleepLabel ? Array.from(sleepLabel.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()) : null;
    if (textNode) textNode.textContent = ` ${SLEEP_LABEL}`;
}

function selectedSeries(): string[] {
    return Array.from(document.querySelectorAll<HTMLInputElement>('.graph-checkbox:checked')).map(c => c.dataset.series!);
}

export async function updateGraph(): Promise<void> {
    const startDateInput = (document.getElementById('graph-start-date') as HTMLInputElement).value;
    const endDateInput = (document.getElementById('graph-end-date') as HTMLInputElement).value;

    if (!startDateInput || !endDateInput) {
        alert('Please select both start and end dates');
        return;
    }

    if (selectedSeries().length === 0) {
        alert('Please select at least one data series to plot');
        return;
    }

    // Make sure Chart.js is loaded (lazy), then paint from cache instantly and
    // refresh from the server.
    await ensureChartLoaded();
    try {
        await renderGraph('cache');
    } catch {
        // cache miss - the server pass handles it
    }
    await renderGraph('server');
}

// Redraws an already-shown graph after a change from another device.
export function refreshGraphIfShown(): void {
    if (dataChart) renderGraph('server').catch(e => console.error('Error refreshing graph:', e));
}

function sleepQuery(fromDay: string, toDay: string) {
    return query(
        collection(db, 'entries'),
        where('type', '==', 'Sleep'),
        where('startTime', '>=', Timestamp.fromDate(parseTZDateTime(`${fromDay}T00:00`))),
        where('startTime', '<', Timestamp.fromDate(parseTZDateTime(`${toDay}T00:00`))),
        orderBy('startTime', 'asc')
    );
}

function addSleepSpans(snapshot: any, spans: SleepSpan[]): void {
    snapshot.forEach((d: any) => {
        const data = d.data();
        spans.push({ startTime: data.startTime.toDate(), endTime: data.endTime ? data.endTime.toDate() : null });
    });
}

async function renderGraph(source: ReadSource): Promise<void> {
    const thisVersion = ++graphVersion;

    const startDateInput = (document.getElementById('graph-start-date') as HTMLInputElement).value;
    const endDateInput = (document.getElementById('graph-end-date') as HTMLInputElement).value;
    if (!startDateInput || !endDateInput) return;

    const series = selectedSeries();
    if (series.length === 0) return;

    const startDate = parseTZDateTime(`${startDateInput}T00:00`);
    const endDate = parseTZDateTime(`${endDateInput}T23:59`);
    endDate.setSeconds(59, 999);

    const snapshot = await qDocs(query(
        collection(db, 'entries'),
        where('startTime', '>=', Timestamp.fromDate(startDate)),
        where('startTime', '<=', Timestamp.fromDate(endDate)),
        orderBy('startTime', 'asc')
    ), source);
    if (thisVersion !== graphVersion) return;
    // On the cache pass, empty usually means "not cached yet" - let the server
    // pass render rather than drawing an empty chart.
    if (source === 'cache' && snapshot.empty) return;

    // Sleep from the day before the start and the day after the end, for the
    // first and last days' overnight sleep.
    const [sY, sM, sD] = startDateInput.split('-').map(Number);
    const [eY, eM, eD] = endDateInput.split('-').map(Number);
    const priorDay = formatDateForInput(new Date(sY, sM - 1, sD - 1));
    const postDay = formatDateForInput(new Date(eY, eM - 1, eD + 1));
    const postDay2 = formatDateForInput(new Date(eY, eM - 1, eD + 2));

    const priorSleepSnap = await qDocs(sleepQuery(priorDay, startDateInput), source);
    if (thisVersion !== graphVersion) return;
    const postSleepSnap = await qDocs(sleepQuery(postDay, postDay2), source);
    if (thisVersion !== graphVersion) return;

    const dateMap: { [key: string]: { [key: string]: number } } = {};
    const iterDate = new Date(sY, sM - 1, sD);
    const iterEndDate = new Date(eY, eM - 1, eD);
    while (iterDate <= iterEndDate) {
        dateMap[formatDateForInput(iterDate)] = Object.fromEntries(Object.keys(SERIES).map(k => [k, 0]));
        iterDate.setDate(iterDate.getDate() + 1);
    }

    const allSleepEntries: SleepSpan[] = [];

    snapshot.forEach((docRef: any) => {
        const data = docRef.data();
        const day = dateMap[formatDateForInput(toTZDate(data.startTime.toDate()))];

        if (day) {
            if (data.type === 'Feed' && data.subType === 'Breast Milk') {
                const amountOz = convertToOz(data.amount, data.unit);
                day['bottle-breast-milk'] += amountOz;
                day['bottle-all'] += amountOz;
            } else if (data.type === 'Feed' && data.subType === 'Formula') {
                const amountOz = convertToOz(data.amount, data.unit);
                day['bottle-formula'] += amountOz;
                day['bottle-all'] += amountOz;
            } else if (data.type === 'Diaper') {
                if (data.diaperType === 'Pee' || data.diaperType === 'Mixed') day['diaper-pee']++;
                if (data.diaperType === 'Poo' || data.diaperType === 'Mixed') day['diaper-poo']++;
                if (data.diaperType === 'Mixed') day['diaper-mixed']++;
                day['diaper-all']++;
            } else if (data.type === 'Pump') {
                day['pump'] += convertToOz(data.amount, data.unit);
            }
        }

        if (data.type === 'Sleep') {
            allSleepEntries.push({ startTime: data.startTime.toDate(), endTime: data.endTime ? data.endTime.toDate() : null });
        }
    });

    addSleepSpans(priorSleepSnap, allSleepEntries);
    addSleepSpans(postSleepSnap, allSleepEntries);

    if (series.includes('sleep')) {
        for (const dateKey of Object.keys(dateMap)) {
            const [y, m, d] = dateKey.split('-').map(Number);
            const bounds = getSleepDayBounds(new Date(y, m - 1, d));
            const ms = computeDaySleepMs(allSleepEntries, bounds.start, bounds.end);
            dateMap[dateKey]['sleep'] = parseFloat((ms / (1000 * 60 * 60)).toFixed(1));
        }
    }

    const labels = Object.keys(dateMap).sort();
    const datasets = series.map(s => ({
        label: SERIES[s].label,
        data: labels.map(date => dateMap[date][s]),
        borderColor: SERIES[s].color,
        backgroundColor: SERIES[s].color + '33',
        tension: 0.1,
        fill: false
    }));

    if (thisVersion !== graphVersion) return;

    const chartContainer = document.querySelector('.chart-container') as HTMLElement | null;

    // Skip the server pass's redraw when the data is identical to what the cache
    // pass just drew, so we don't restart Chart.js's animation needlessly.
    const signature = JSON.stringify({ labels, data: datasets.map(d => d.data) });
    if (source === 'server' && signature === lastGraphSignature) {
        chartContainer?.classList.add('active');
        return;
    }
    lastGraphSignature = signature;

    const ctx = (document.getElementById('data-chart') as HTMLCanvasElement).getContext('2d')!;
    if (dataChart) {
        dataChart.destroy();
    }

    dataChart = new (window as any).Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.map(date => {
                const [, month, day] = date.split('-');
                return `${month}/${day}`;
            }),
            datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: `${config.title} Data`
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (context: any) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = context.parsed.y;
                            const seriesName = context.dataset.label.toLowerCase();

                            if (seriesName.includes('diaper')) {
                                label += Math.round(value);
                            } else if (seriesName.includes('sleep')) {
                                label += value.toFixed(1) + ' hrs';
                            } else {
                                label += value.toFixed(1) + ' oz';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value: any) {
                            const isDiaperOnly = series.every(s => s.startsWith('diaper-'));
                            if (isDiaperOnly) {
                                return Math.round(value);
                            }
                            return value % 1 === 0 ? value : value.toFixed(1) + ' oz';
                        }
                    },
                    title: {
                        display: true,
                        text: 'Amount (oz) / Count / Hours'
                    }
                }
            }
        }
    });
    chartContainer?.classList.add('active');
}
