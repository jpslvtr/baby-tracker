import { collection, query, where, orderBy, limit, Timestamp } from 'firebase/firestore';
import { db, qDocsCacheFirst, ReadSource } from './firebase';
import { features, isAddable, anyBottleAddable } from './config';
import { nowInTZ, toTZDate, parseTZDateTime, formatDateTime, formatClockTime, formatTimeDifference, formatElapsed, msUntilMidnightTZ } from './time';

// The "time since" values are cached in localStorage so the per-second display
// tick never touches Firestore.

let displayTimerInterval: number | null = null;
let napTimeMidnightTimeout: number | null = null;

// Signatures of the inputs behind each projected-times block, so a block is
// only rebuilt when they change, not on every 1s tick.
const projectionSigs: Record<string, string> = {};

async function storeLatestTime(type: string, storageKey: string, source: ReadSource): Promise<void> {
    const q = query(collection(db, 'entries'), where('type', '==', type), orderBy('startTime', 'desc'), limit(1));
    const snap = await qDocsCacheFirst(q, source);
    if (!snap.empty) {
        localStorage.setItem(storageKey, snap.docs[0].data().startTime.toDate().toISOString());
    } else {
        localStorage.removeItem(storageKey);
    }
}

export async function updateLastBottleTime(source: ReadSource = 'server'): Promise<void> {
    try {
        await storeLatestTime('Feed', 'lastBottleTime', source);
        updateLastBottleDisplay();
    } catch (error) {
        console.error('Error fetching last bottle time:', error);
    }
}

export async function updateLastSolidsTime(source: ReadSource = 'server'): Promise<void> {
    try {
        await storeLatestTime('Solids', 'lastSolidsTime', source);
        updateTextDisplay('last-solids-value', 'lastSolidsTime', 'No solids recorded');
    } catch (error) {
        console.error('Error fetching last solids time:', error);
    }
}

export async function updateLastPumpTime(source: ReadSource = 'server'): Promise<void> {
    try {
        await storeLatestTime('Pump', 'lastPumpTime', source);
        updateLastPumpDisplay();
    } catch (error) {
        console.error('Error fetching last pump time:', error);
    }
}

export async function updateLastDiaperTimes(source: ReadSource = 'server'): Promise<void> {
    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Diaper'),
            orderBy('startTime', 'desc'),
            limit(30)
        );
        const snapshot = await qDocsCacheFirst(q, source);

        let lastPee: Date | undefined = undefined;
        let lastPoo: Date | undefined = undefined;

        snapshot.forEach((docSnapshot: any) => {
            const data = docSnapshot.data();
            const time = data.startTime.toDate() as Date;

            if ((data.diaperType === 'Pee' || data.diaperType === 'Mixed') && lastPee === undefined) {
                lastPee = time;
            }
            if ((data.diaperType === 'Poo' || data.diaperType === 'Mixed') && lastPoo === undefined) {
                lastPoo = time;
            }
        });

        if (lastPee !== undefined) {
            localStorage.setItem('lastPeeTime', (lastPee as Date).toISOString());
        } else {
            localStorage.removeItem('lastPeeTime');
        }

        if (lastPoo !== undefined) {
            localStorage.setItem('lastPooTime', (lastPoo as Date).toISOString());
        } else {
            localStorage.removeItem('lastPooTime');
        }

        updateTextDisplay('last-pee-value', 'lastPeeTime', 'No pee recorded');
        updateTextDisplay('last-poo-value', 'lastPooTime', 'No poo recorded');
    } catch (error) {
        console.error('Error fetching last diaper times:', error);
    }
}

export async function updateLastSleepEndTime(source: ReadSource = 'server'): Promise<void> {
    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            orderBy('startTime', 'desc'),
            limit(1)
        );
        const snapshot = await qDocsCacheFirst(q, source);

        if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            if (data.endTime) {
                localStorage.setItem('lastSleepEndTime', data.endTime.toDate().toISOString());
                localStorage.removeItem('sleepInProgressStart');
            } else {
                localStorage.removeItem('lastSleepEndTime');
                localStorage.setItem('sleepInProgressStart', data.startTime.toDate().toISOString());
            }
        } else {
            localStorage.removeItem('lastSleepEndTime');
            localStorage.removeItem('sleepInProgressStart');
        }

        updateTimeAwakeDisplay();
    } catch (error) {
        console.error('Error fetching last sleep end time:', error);
    }
}

// Sums today's sleep since dayStartHour (daytime naps).
export async function updateNapTime(source: ReadSource = 'server'): Promise<void> {
    try {
        const nowTZ = nowInTZ();
        const dayStartTZ = new Date(nowTZ);
        dayStartTZ.setHours(features.sleep.dayStartHour, 0, 0, 0);
        const dayStart = parseTZDateTime(formatDateTime(dayStartTZ));

        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            where('startTime', '>=', Timestamp.fromDate(dayStart)),
            orderBy('startTime', 'asc')
        );
        // Cache-first callers (e.g. the optimistic add path) read the pending
        // write locally; fall back to the server if the cache has nothing yet.
        const snapshot = await qDocsCacheFirst(q, source);

        let completedMs = 0;
        let inProgressStartTime: string | null = null;

        snapshot.forEach((docSnapshot: any) => {
            const data = docSnapshot.data();
            const startTime: Date = data.startTime.toDate();

            if (startTime >= dayStart && toTZDate(startTime).toDateString() === nowTZ.toDateString()) {
                if (data.endTime) {
                    completedMs += data.endTime.toDate().getTime() - startTime.getTime();
                } else {
                    inProgressStartTime = startTime.toISOString();
                }
            }
        });

        localStorage.setItem('napTimeCompletedMs', String(completedMs));
        if (inProgressStartTime) {
            localStorage.setItem('napTimeInProgressStart', inProgressStartTime);
        } else {
            localStorage.removeItem('napTimeInProgressStart');
        }

        updateNapTimeDisplay();
    } catch (error) {
        console.error('Error fetching nap time:', error);
    }
}

function updateTextDisplay(elementId: string, storageKey: string, emptyText: string): void {
    const displayElement = document.getElementById(elementId);
    if (!displayElement) return;
    displayElement.textContent = formatTimeDifference(localStorage.getItem(storageKey), emptyText);
}

// Elapsed time plus the next few projected times, e.g. "Next feeds:
// + 3 hours: 2:15 pm". Once overdue, projections count from now instead.
function renderElapsedWithProjections(displayElement: HTMLElement, lastTimeStr: string, emptyText: string, label: string, intervalHours: number): void {
    let timeSpan = displayElement.querySelector('.elapsed-time') as HTMLElement | null;
    let nextSpan = displayElement.querySelector('.elapsed-next') as HTMLElement | null;
    if (!timeSpan || !nextSpan) {
        displayElement.textContent = '';
        timeSpan = document.createElement('span');
        timeSpan.className = 'elapsed-time';
        nextSpan = document.createElement('span');
        nextSpan.className = 'elapsed-next';
        nextSpan.style.fontSize = '12px';
        nextSpan.style.color = '#aaa';
        displayElement.append(timeSpan, document.createElement('br'), nextSpan);
        delete projectionSigs[displayElement.id];
    }

    timeSpan.textContent = formatTimeDifference(lastTimeStr, emptyText);

    const lastTime = new Date(lastTimeStr);
    const now = new Date();
    const intervalMs = intervalHours * 60 * 60 * 1000;
    const overdue = now.getTime() - lastTime.getTime() > intervalMs;

    const sig = overdue ? `>|${Math.floor(now.getTime() / 60000)}` : `<=|${lastTimeStr}`;
    if (sig === projectionSigs[displayElement.id]) return;
    projectionSigs[displayElement.id] = sig;

    const projectedTimes: string[] = [];
    if (overdue) {
        projectedTimes.push('in the next minute');
        for (let i = 1; i <= 2; i++) {
            projectedTimes.push(formatClockTime(new Date(now.getTime() + i * intervalMs)));
        }
    } else {
        for (let i = 1; i <= 3; i++) {
            projectedTimes.push(formatClockTime(new Date(lastTime.getTime() + i * intervalMs)));
        }
    }

    const lines = projectedTimes.map((time, index) => `+ ${(index + 1) * intervalHours} hours: ${time}`).join('<br>');
    nextSpan.innerHTML = `${label}:<br>${lines}`;
}

function updateLastBottleDisplay(): void {
    const displayElement = document.getElementById('last-bottle-value');
    if (!displayElement) return;
    const lastBottleTimeStr = localStorage.getItem('lastBottleTime');

    if (!features.nextFeeds.enabled || !lastBottleTimeStr) {
        displayElement.textContent = formatTimeDifference(lastBottleTimeStr, 'No bottles recorded');
        return;
    }
    renderElapsedWithProjections(displayElement, lastBottleTimeStr, 'No bottles recorded', 'Next feeds', features.nextFeeds.intervalHours);
}

function updateLastPumpDisplay(): void {
    const displayElement = document.getElementById('last-pump-value');
    if (!displayElement) return;
    const lastPumpTimeStr = localStorage.getItem('lastPumpTime');

    if (!lastPumpTimeStr) {
        displayElement.textContent = 'No pumps recorded';
        return;
    }
    renderElapsedWithProjections(displayElement, lastPumpTimeStr, 'No pumps recorded', 'Next pumps', features.pumping.intervalHours);
}

function updateTimeAwakeDisplay(): void {
    const displayElement = document.getElementById('time-awake-value');
    const labelElement = document.getElementById('time-awake-label');
    if (!displayElement) return;

    const sleepInProgressStr = localStorage.getItem('sleepInProgressStart');

    if (sleepInProgressStr) {
        if (labelElement) labelElement.textContent = 'Time Asleep';
        displayElement.textContent = formatTimeDifference(sleepInProgressStr, 'No sleep recorded');
        return;
    }

    if (labelElement) labelElement.textContent = 'Time Awake';
    displayElement.textContent = formatTimeDifference(localStorage.getItem('lastSleepEndTime'), 'No sleep recorded');
}

function updateNapTimeDisplay(): void {
    const displayElement = document.getElementById('nap-time-value');
    if (!displayElement) return;

    let totalMs = parseInt(localStorage.getItem('napTimeCompletedMs') || '0', 10);
    const inProgressStartStr = localStorage.getItem('napTimeInProgressStart');
    if (inProgressStartStr) {
        totalMs += Date.now() - new Date(inProgressStartStr).getTime();
    }

    displayElement.textContent = totalMs <= 0 ? '0m' : formatElapsed(totalMs);
}

function updateAllDisplays(): void {
    updateLastBottleDisplay();
    updateTextDisplay('last-solids-value', 'lastSolidsTime', 'No solids recorded');
    updateTextDisplay('last-pee-value', 'lastPeeTime', 'No pee recorded');
    updateTextDisplay('last-poo-value', 'lastPooTime', 'No poo recorded');
    updateLastPumpDisplay();
    updateTimeAwakeDisplay();
    updateNapTimeDisplay();
}

export function startDisplayTimer(): void {
    if (displayTimerInterval) clearInterval(displayTimerInterval);
    updateAllDisplays();
    displayTimerInterval = window.setInterval(updateAllDisplays, 1000);
}

export function stopDisplayTimer(): void {
    if (displayTimerInterval) {
        clearInterval(displayTimerInterval);
        displayTimerInterval = null;
    }
}

// Only features shown on the Add Entry tab are queried.
export async function updateAllEventTimes(): Promise<void> {
    const updates: Promise<void>[] = [updateLastDiaperTimes()];
    if (anyBottleAddable()) updates.push(updateLastBottleTime());
    if (isAddable(features.solids.state)) updates.push(updateLastSolidsTime());
    if (isAddable(features.pumping.state)) updates.push(updateLastPumpTime());
    if (isAddable(features.sleep.state)) updates.push(updateLastSleepEndTime(), updateNapTime());
    await Promise.all(updates);
}

export async function startAllTimers(): Promise<void> {
    await updateAllEventTimes();
    startDisplayTimer();
}

// Daytime sleep resets at midnight in the selected timezone.
export function scheduleNapTimeReset(): void {
    if (!isAddable(features.sleep.state)) return;
    if (napTimeMidnightTimeout) {
        clearTimeout(napTimeMidnightTimeout);
    }
    napTimeMidnightTimeout = window.setTimeout(() => {
        updateNapTime();
        scheduleNapTimeReset();
    }, msUntilMidnightTZ());
}
