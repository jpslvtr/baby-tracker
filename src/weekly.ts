import { collection, query, orderBy, where, Timestamp } from 'firebase/firestore';
import { db, qDocs, ReadSource } from './firebase';
import { features, isVisible, isAddable, showStat, anyBottleVisible, birthDate, vitaminDStartDate, dayStartLabel, nightStartLabel } from './config';
import { nowInTZ, toTZDate, getWeekStart, getWeekEnd, formatDateOnly, getSleepDayBounds, computeDaySleepMs, formatSleepDuration, tzDateToDateStr, SleepSpan } from './time';
import { convertToOz, formatBothUnits } from './units';
import { fetchVitaminDDays } from './vitaminD';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let currentWeekStart: Date = getWeekStart(new Date());
let weeklyViewVersion = 0;

interface DayStats {
    date: Date;
    vitaminD: boolean | null;
    bottles: { total: number; breastMilk: number; formula: number; sessions: number };
    diapers: { total: number; pee: number; poo: number; mixed: number };
    pumps: { total: number; sessions: number };
    solids: { sessions: number };
    sleepMs: number;
}

// Public entry point: paint instantly from the local cache, then refresh from
// the server in the background.
export async function loadWeeklyView(): Promise<void> {
    try {
        await renderWeekly('cache');
    } catch {
        // Cache miss / unavailable - the server pass below handles it.
    }
    await renderWeekly('server');
}

function sleepSpans(snapshot: any, onlySleep: boolean): SleepSpan[] {
    const spans: SleepSpan[] = [];
    snapshot.forEach((docSnapshot: any) => {
        const data = docSnapshot.data();
        if (!onlySleep || data.type === 'Sleep') {
            spans.push({ startTime: data.startTime.toDate(), endTime: data.endTime ? data.endTime.toDate() : null });
        }
    });
    return spans;
}

// On: every day from the start date gets Yes/No. Archived: only days it was given.
function vitaminDHTML(given: boolean | null): string {
    if (given === null || (!given && !isAddable(features.vitaminD.state))) return '';
    return `
                <div class="stat-group">
                    <div class="stat-group-title">Vitamin D</div>
                    <div class="stat-line" style="color: ${given ? '#4caf50' : '#f44336'}; font-weight: bold;">${given ? 'Yes' : 'No'}</div>
                </div>`;
}

function dayCardHTML(stats: DayStats): string {
    const f = features;
    const dayName = DAY_NAMES[stats.date.getDay()];
    const dateStr = `${stats.date.getMonth() + 1}/${stats.date.getDate()}`;
    const totalPee = stats.diapers.pee + stats.diapers.mixed;
    const totalPoo = stats.diapers.poo + stats.diapers.mixed;

    const feedLines: string[] = [];
    if (anyBottleVisible() || isVisible(f.solids.state)) {
        feedLines.push(`<div class="stat-line">Number of Feeds: ${stats.bottles.sessions + stats.solids.sessions}</div>`);
    }
    if (showStat(f.breastMilk.state, stats.bottles.breastMilk)) {
        feedLines.push(`<div class="stat-line">Breast Milk: ${formatBothUnits(stats.bottles.breastMilk, 'oz')}</div>`);
    }
    if (showStat(f.formula.state, stats.bottles.formula)) {
        feedLines.push(`<div class="stat-line">Formula: ${formatBothUnits(stats.bottles.formula, 'oz')}</div>`);
    }
    if (anyBottleVisible()) {
        feedLines.push(`<div class="stat-line">Total Milk Volume: ${formatBothUnits(stats.bottles.total, 'oz')}</div>`);
    }
    if (showStat(f.solids.state, stats.solids.sessions)) {
        feedLines.push(`<div class="stat-line">Solid Sessions: ${stats.solids.sessions}</div>`);
    }

    const feedsHTML = feedLines.length ? `
                <div class="stat-group">
                    <div class="stat-group-title">Feeds</div>
                    ${feedLines.join('\n                    ')}
                </div>` : '';

    const pumpsHTML = showStat(f.pumping.state, stats.pumps.sessions) ? `
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${formatBothUnits(stats.pumps.total, 'oz')}</div>
                    <div class="stat-line">Number of sessions: ${stats.pumps.sessions}</div>
                </div>` : '';

    const sleepHTML = showStat(f.sleep.state, stats.sleepMs) ? `
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${formatSleepDuration(stats.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${DAY_NAMES[(stats.date.getDay() + 6) % 7]} ${nightStartLabel} - ${DAY_NAMES[(stats.date.getDay() + 1) % 7]} ${dayStartLabel}</div>
                </div>` : '';

    return `
                <div class="day-stats-header">${dayName}<br>${dateStr}</div>${vitaminDHTML(stats.vitaminD)}${feedsHTML}
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${totalPee}</div>
                    <div class="stat-line">Poo: ${totalPoo}</div>
                </div>${pumpsHTML}${sleepHTML}
            `;
}

async function renderWeekly(source: ReadSource): Promise<void> {
    const thisVersion = ++weeklyViewVersion;
    const weeklyStats = document.getElementById('weekly-stats') as HTMLDivElement;
    const loadingDiv = document.getElementById('weekly-loading') as HTMLDivElement;
    const weekRange = document.getElementById('week-range') as HTMLSpanElement;
    const prevWeekBtn = document.getElementById('prev-week') as HTMLButtonElement;
    const nextWeekBtn = document.getElementById('next-week') as HTMLButtonElement;
    const currentWeekBtn = document.getElementById('current-week') as HTMLButtonElement | null;

    const birthWeekStart = getWeekStart(birthDate());
    const currentWeekStartDate = getWeekStart(nowInTZ());

    const normalizedCurrentWeekStart = new Date(currentWeekStart);
    normalizedCurrentWeekStart.setHours(0, 0, 0, 0);

    if (normalizedCurrentWeekStart < birthWeekStart) {
        currentWeekStart = new Date(birthWeekStart);
    }

    prevWeekBtn.disabled = normalizedCurrentWeekStart.getTime() <= birthWeekStart.getTime();
    nextWeekBtn.disabled = normalizedCurrentWeekStart.getTime() >= currentWeekStartDate.getTime();

    if (currentWeekBtn) {
        if (normalizedCurrentWeekStart.getTime() === currentWeekStartDate.getTime()) {
            currentWeekBtn.disabled = true;
            currentWeekBtn.style.backgroundColor = '#2a2a2a';
            currentWeekBtn.style.color = '#666';
            currentWeekBtn.style.cursor = 'default';
        } else {
            currentWeekBtn.disabled = false;
            currentWeekBtn.style.backgroundColor = '';
            currentWeekBtn.style.color = '';
            currentWeekBtn.style.cursor = 'pointer';
        }
    }

    const weekEnd = getWeekEnd(currentWeekStart);
    weekRange.textContent = `${formatDateOnly(currentWeekStart).split(',')[1].trim()} - ${formatDateOnly(weekEnd).split(',')[1].trim()}`;

    // Only show the loading spinner when nothing is on screen yet, so the
    // background server refresh doesn't flash over cached content.
    if (weeklyStats.children.length === 0) {
        loadingDiv.style.display = 'block';
    }

    try {
        const weekDays: Date[] = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(date.getDate() + i);
            date.setHours(0, 0, 0, 0);
            weekDays.push(date);
        }

        const trackVitaminD = isVisible(features.vitaminD.state);
        const vitaminDStart = vitaminDStartDate();
        const vitaminDKeys = trackVitaminD ? weekDays.filter(d => d >= vitaminDStart).map(tzDateToDateStr) : [];

        const priorSleepStart = new Date(currentWeekStart);
        priorSleepStart.setDate(priorSleepStart.getDate() - 1);
        priorSleepStart.setHours(0, 0, 0, 0);
        const priorSleepEnd = new Date(currentWeekStart);
        priorSleepEnd.setHours(0, 0, 0, 0);

        const postSleepStart = new Date(weekEnd);
        postSleepStart.setDate(postSleepStart.getDate() + 1);
        postSleepStart.setHours(0, 0, 0, 0);
        const postSleepEnd = new Date(postSleepStart);
        postSleepEnd.setDate(postSleepEnd.getDate() + 1);
        postSleepEnd.setHours(0, 0, 0, 0);

        // Fire all Firestore requests in parallel - none depend on each other
        const [snapshot, priorSleepSnapshot, postSleepSnapshot, vitaminDDays] = await Promise.all([
            qDocs(query(
                collection(db, 'entries'),
                where('startTime', '>=', Timestamp.fromDate(currentWeekStart)),
                where('startTime', '<=', Timestamp.fromDate(weekEnd)),
                orderBy('startTime', 'asc')
            ), source),
            qDocs(query(
                collection(db, 'entries'),
                where('type', '==', 'Sleep'),
                where('startTime', '>=', Timestamp.fromDate(priorSleepStart)),
                where('startTime', '<', Timestamp.fromDate(priorSleepEnd)),
                orderBy('startTime', 'asc')
            ), source),
            qDocs(query(
                collection(db, 'entries'),
                where('type', '==', 'Sleep'),
                where('startTime', '>=', Timestamp.fromDate(postSleepStart)),
                where('startTime', '<', Timestamp.fromDate(postSleepEnd)),
                orderBy('startTime', 'asc')
            ), source),
            fetchVitaminDDays(vitaminDKeys, source)
        ]);
        if (thisVersion !== weeklyViewVersion) return;
        // On the cache pass an empty week usually means "not cached yet" - skip
        // and let the server pass render, so we don't flash all-zero cards.
        if (source === 'cache' && snapshot.empty) return;

        const allSleepEntries = [
            ...sleepSpans(snapshot, true),
            ...sleepSpans(priorSleepSnapshot, false),
            ...sleepSpans(postSleepSnapshot, false)
        ];

        const dayStats: { [key: string]: DayStats } = {};
        weekDays.forEach(date => {
            const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const sleepBounds = getSleepDayBounds(date);
            const vitaminDKey = tzDateToDateStr(date);
            dayStats[dateKey] = {
                date: new Date(date),
                vitaminD: vitaminDKey in vitaminDDays ? vitaminDDays[vitaminDKey] : null,
                bottles: { total: 0, breastMilk: 0, formula: 0, sessions: 0 },
                diapers: { total: 0, pee: 0, poo: 0, mixed: 0 },
                pumps: { total: 0, sessions: 0 },
                solids: { sessions: 0 },
                sleepMs: computeDaySleepMs(allSleepEntries, sleepBounds.start, sleepBounds.end)
            };
        });

        snapshot.forEach((docSnapshot: any) => {
            const data = docSnapshot.data();
            const normalizedDate = toTZDate(data.startTime.toDate());
            normalizedDate.setHours(0, 0, 0, 0);
            const stats = dayStats[`${normalizedDate.getFullYear()}-${normalizedDate.getMonth()}-${normalizedDate.getDate()}`];
            if (!stats) return;

            if (data.type === 'Feed') {
                const amount = convertToOz(data.amount, data.unit);
                stats.bottles.total += amount;
                stats.bottles.sessions++;
                if (data.subType === 'Breast Milk') {
                    stats.bottles.breastMilk += amount;
                } else if (data.subType === 'Formula') {
                    stats.bottles.formula += amount;
                }
            } else if (data.type === 'Breast Feed') {
                stats.bottles.sessions++;
            } else if (data.type === 'Diaper') {
                stats.diapers.total++;
                if (data.diaperType === 'Pee') {
                    stats.diapers.pee++;
                } else if (data.diaperType === 'Poo') {
                    stats.diapers.poo++;
                } else if (data.diaperType === 'Mixed') {
                    stats.diapers.mixed++;
                }
            } else if (data.type === 'Pump') {
                stats.pumps.total += convertToOz(data.amount, data.unit);
                stats.pumps.sessions++;
            } else if (data.type === 'Solids') {
                stats.solids.sessions++;
            }
        });

        const daysArray = Object.values(dayStats).sort((a, b) => a.date.getTime() - b.date.getTime());

        const weeklyContainer = document.createElement('div');
        weeklyContainer.className = 'weekly-scroll-container';

        const today = nowInTZ();
        today.setHours(0, 0, 0, 0);
        let currentDayIndex = -1;

        daysArray.forEach((stats, index) => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day-stats';
            if (today.getTime() === stats.date.getTime()) {
                dayDiv.classList.add('current-day');
                currentDayIndex = index;
            }
            dayDiv.innerHTML = dayCardHTML(stats);
            weeklyContainer.appendChild(dayDiv);
        });

        weeklyStats.replaceChildren(weeklyContainer);

        if (currentDayIndex !== -1) {
            setTimeout(() => {
                const currentDayElement = weeklyContainer.children[currentDayIndex] as HTMLElement;
                if (currentDayElement) {
                    const scrollPosition = currentDayElement.offsetLeft - (weeklyContainer.offsetWidth / 2) + (currentDayElement.offsetWidth / 2);
                    weeklyContainer.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
                }
            }, 100);
        }
    } catch (error) {
        // Cache pass failures are silent; on a server failure, only show the
        // error if there's nothing already painted from cache.
        if (source === 'server' && thisVersion === weeklyViewVersion && weeklyStats.children.length === 0) {
            weeklyStats.innerHTML = '<p class="error">Failed to load weekly view</p>';
        }
    } finally {
        if (thisVersion === weeklyViewVersion) {
            loadingDiv.style.display = 'none';
        }
    }
}

export function changeWeek(direction: number): void {
    const birthWeekStart = getWeekStart(birthDate());
    const currentWeekStartDate = getWeekStart(nowInTZ());

    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() + (direction * 7));
    newWeekStart.setHours(0, 0, 0, 0);

    if (newWeekStart.getTime() < birthWeekStart.getTime() || newWeekStart.getTime() > currentWeekStartDate.getTime()) {
        return;
    }

    currentWeekStart = newWeekStart;
    loadWeeklyView();
}

export function goToCurrentWeek(): void {
    currentWeekStart = getWeekStart(nowInTZ());
    loadWeeklyView();
}
