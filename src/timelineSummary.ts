import { collection, query, orderBy, where, Timestamp } from 'firebase/firestore';
import { db, qDocs, ReadSource } from './firebase';
import { features, isVisible, showStat, anyBottleVisible, dayStartLabel, nightStartLabel } from './config';
import { getSleepDayBounds, computeDaySleepMs, SleepSpan } from './time';
import { convertToOz, formatBothUnits } from './units';

export interface TimelineDoc {
    id: string;
    data: any;
}

export interface SummaryStats {
    bottles: { total: number; breastMilk: number; formula: number; sessions: number };
    diapers: { total: number; pee: number; poo: number; mixed: number };
    pumps: { total: number; sessions: number };
    sleep: { sessions: number };
    solids: { sessions: number };
}

export function emptyStats(): SummaryStats {
    return {
        bottles: { total: 0, breastMilk: 0, formula: 0, sessions: 0 },
        diapers: { total: 0, pee: 0, poo: 0, mixed: 0 },
        pumps: { total: 0, sessions: 0 },
        sleep: { sessions: 0 },
        solids: { sessions: 0 }
    };
}

export function addToStats(stats: SummaryStats, data: any): void {
    if (data.type === 'Feed') {
        const amount = convertToOz(data.amount, data.unit);
        stats.bottles.total += amount;
        stats.bottles.sessions++;
        if (data.subType === 'Breast Milk') {
            stats.bottles.breastMilk += amount;
        } else if (data.subType === 'Formula') {
            stats.bottles.formula += amount;
        }
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
    } else if (data.type === 'Sleep') {
        stats.sleep.sessions++;
    } else if (data.type === 'Solids') {
        stats.solids.sessions++;
    }
}

async function sleepDocsForDay(day: Date, source: ReadSource): Promise<TimelineDoc[]> {
    const start = new Date(day);
    start.setHours(0, 0, 0, 0);
    const end = new Date(day);
    end.setHours(23, 59, 59, 999);
    const docs: TimelineDoc[] = [];
    const snap = await qDocs(query(
        collection(db, 'entries'),
        where('type', '==', 'Sleep'),
        where('startTime', '>=', Timestamp.fromDate(start)),
        where('startTime', '<=', Timestamp.fromDate(end)),
        orderBy('startTime', 'asc')
    ), source);
    snap.forEach((d: any) => docs.push({ id: d.id, data: d.data() }));
    return docs;
}

// Total sleep over the filtered days, where each day's sleep runs from the
// previous night to the next morning. Needs the nights just outside the range.
async function sleepTotalMs(docs: TimelineDoc[], startDateInput: string, endDateInput: string, source: ReadSource): Promise<number> {
    // Keyed by id: the timeline list already includes the previous evening's
    // sleep, which the prior-day query returns again.
    const sleepById = new Map<string, any>();
    const collect = (list: TimelineDoc[]) => list.forEach(d => {
        if (d.data.type === 'Sleep') sleepById.set(d.id, d.data);
    });
    collect(docs);

    const [sY, sM, sD] = startDateInput.split('-').map(Number);
    const [eY, eM, eD] = endDateInput.split('-').map(Number);

    try {
        collect(await sleepDocsForDay(new Date(sY, sM - 1, sD - 1), source));
    } catch (e) {
        console.error('Error fetching prior sleep entries:', e);
    }
    try {
        collect(await sleepDocsForDay(new Date(eY, eM - 1, eD + 1), source));
    } catch (e) {
        console.error('Error fetching post sleep entries:', e);
    }

    const sleepEntries: SleepSpan[] = Array.from(sleepById.values()).map(data => ({
        startTime: data.startTime.toDate(),
        endTime: data.endTime ? data.endTime.toDate() : null
    }));

    let totalMs = 0;
    const currentDay = new Date(sY, sM - 1, sD);
    const filterEnd = new Date(eY, eM - 1, eD);
    while (currentDay <= filterEnd) {
        const bounds = getSleepDayBounds(currentDay);
        totalMs += computeDaySleepMs(sleepEntries, bounds.start, bounds.end);
        currentDay.setDate(currentDay.getDate() + 1);
    }
    return totalMs;
}

// Returns the summary's inner HTML, or null when the filter has no summary.
export async function buildSummaryHTML(stats: SummaryStats, docs: TimelineDoc[], typeFilter: string, startDateInput: string, endDateInput: string, source: ReadSource): Promise<string | null> {
    const f = features;
    const groups: string[] = [];

    const feedFilters = ['all', 'bottle-breast-milk', 'bottle-formula', 'bottle-all', 'solids'];
    if (feedFilters.includes(typeFilter) && (anyBottleVisible() || isVisible(f.solids.state))) {
        const showMilk = typeFilter !== 'solids';
        const showSolids = typeFilter === 'all' || typeFilter === 'solids';
        const lines = [`<div class="stat-line">Number of Feeds: ${stats.bottles.sessions + stats.solids.sessions}</div>`];
        if (showMilk) {
            if (showStat(f.breastMilk.state, stats.bottles.breastMilk)) {
                lines.push(`<div class="stat-line">Breast Milk: ${formatBothUnits(stats.bottles.breastMilk, 'oz')}</div>`);
            }
            if (showStat(f.formula.state, stats.bottles.formula)) {
                lines.push(`<div class="stat-line">Formula: ${formatBothUnits(stats.bottles.formula, 'oz')}</div>`);
            }
            if (anyBottleVisible()) {
                lines.push(`<div class="stat-line">Total Milk Volume: ${formatBothUnits(stats.bottles.total, 'oz')}</div>`);
            }
        }
        if (showSolids && showStat(f.solids.state, stats.solids.sessions)) {
            lines.push(`<div class="stat-line">Solid Sessions: ${stats.solids.sessions}</div>`);
        }
        groups.push(`<div class="stat-group"><div class="stat-group-title">Feeds</div>${lines.join('')}</div>`);
    }

    if (['all', 'diaper-all', 'diaper-pee', 'diaper-poo'].includes(typeFilter)) {
        groups.push(`
            <div class="stat-group">
                <div class="stat-group-title">Diapers</div>
                <div class="stat-line">Pee: ${stats.diapers.pee + stats.diapers.mixed}</div>
                <div class="stat-line">Poo: ${stats.diapers.poo + stats.diapers.mixed}</div>
            </div>`);
    }

    if ((typeFilter === 'all' || typeFilter === 'pump') && showStat(f.pumping.state, stats.pumps.sessions)) {
        groups.push(`
            <div class="stat-group">
                <div class="stat-group-title">Pumps</div>
                <div class="stat-line">Total volume: ${formatBothUnits(stats.pumps.total, 'oz')}</div>
                <div class="stat-line">Number of sessions: ${stats.pumps.sessions}</div>
            </div>`);
    }

    if ((typeFilter === 'all' || typeFilter === 'sleep') && showStat(f.sleep.state, stats.sleep.sessions)) {
        const totalMs = startDateInput && endDateInput ? await sleepTotalMs(docs, startDateInput, endDateInput, source) : 0;
        const sleepHrs = Math.floor(totalMs / (1000 * 60 * 60));
        const sleepMins = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
        groups.push(`
            <div class="stat-group">
                <div class="stat-group-title">Sleep</div>
                <div class="stat-line">Total Sleep: ${sleepHrs}h ${sleepMins}m</div>
                <div class="stat-line">Number of Sleeps: ${stats.sleep.sessions}</div>
                <div class="stat-line" style="font-size: 11px; color: #888;">prev day ${nightStartLabel} - next day ${dayStartLabel}</div>
            </div>`);
    }

    if (groups.length === 0) return null;
    return `<div class="summary-header">Summary</div><div class="summary-stats">${groups.join('')}</div>`;
}
