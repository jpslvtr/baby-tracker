import { config, features, hourInput } from './config';

const SELECTED_TZ_KEY = 'selectedTimezone';

export function getSelectedTimezone(): string {
    const switcher = features.timeZoneSwitcher;
    if (!switcher.enabled) return config.timeZone;
    const saved = localStorage.getItem(SELECTED_TZ_KEY);
    return saved && switcher.zones.some(z => z.zone === saved) ? saved : config.timeZone;
}

export function setSelectedTimezone(zone: string): void {
    localStorage.setItem(SELECTED_TZ_KEY, zone);
}

// Memoizes the (expensive) Intl-based conversion below. Keyed by
// `${timezone}|${utcMs}`. We cache the resulting wall-clock epoch and hand back
// a FRESH Date on every call, because callers mutate the result (e.g.
// renderWeekly does `.setHours(0, 0, 0, 0)` on it) - sharing one Date would
// corrupt the cache.
const tzDateCache = new Map<string, number>();

// Converts a UTC Date to a plain Date whose .getFullYear()/.getMonth()/.getDate()/.getHours()
// reflect that UTC moment in the selected timezone.
export function toTZDate(utcDate: Date, tz?: string): Date {
    const timezone = tz || getSelectedTimezone();
    const key = `${timezone}|${utcDate.getTime()}`;
    const cached = tzDateCache.get(key);
    if (cached !== undefined) return new Date(cached);

    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    }).formatToParts(utcDate);
    const get = (type: string) => parseInt(parts.find(p => p.type === type)?.value || '0', 10);
    let h = get('hour');
    if (h === 24) h = 0;
    const result = new Date(get('year'), get('month') - 1, get('day'), h, get('minute'), get('second'));

    // Bound memory (also clears stale entries after a timezone change).
    if (tzDateCache.size > 5000) tzDateCache.clear();
    tzDateCache.set(key, result.getTime());
    return result;
}

// Returns a Date with fields reflecting "now" in the selected timezone.
export function nowInTZ(tz?: string): Date {
    return toTZDate(new Date(), tz);
}

// Parses a datetime-local string as if entered in the selected timezone,
// and returns the true UTC Date.
export function parseTZDateTime(value: string): Date {
    const [datePart, timePart] = value.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    const tz = getSelectedTimezone();
    const candidate = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    const tzParts = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit',
        hour12: false
    }).formatToParts(candidate);
    const getP = (type: string) => parseInt(tzParts.find(p => p.type === type)?.value || '0', 10);
    let tzH = getP('hour');
    if (tzH === 24) tzH = 0;
    const tzAsLocal = new Date(getP('year'), getP('month') - 1, getP('day'), tzH, getP('minute'));
    const desiredLocal = new Date(year, month - 1, day, hours, minutes);
    const offsetMs = tzAsLocal.getTime() - desiredLocal.getTime();
    return new Date(candidate.getTime() - offsetMs);
}

// Given a Date whose fields are in selected TZ (from nowInTZ / arithmetic),
// returns a YYYY-MM-DD string.
export function tzDateToDateStr(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getWeekStart(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function getWeekEnd(weekStart: Date): Date {
    const end = new Date(weekStart);
    end.setDate(end.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return end;
}

// formatDateTime: accepts a TZ-adjusted Date (fields already in selected TZ).
// Used to populate datetime-local inputs.
export function formatDateTime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Accepts a UTC Date from Firestore and displays it in the selected timezone.
export function formatDisplayDateTime(utcDate: Date): string {
    const date = toTZDate(utcDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${month}/${day}/${year} ${displayHours}:${minutes} ${ampm}`;
}

// Accepts a UTC Date and returns the day label in the selected timezone.
export function formatDateOnly(utcDate: Date): string {
    const date = toTZDate(utcDate);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${days[date.getDay()]}, ${month}/${day}/${year}`;
}

// Accepts a UTC Date and returns YYYY-MM-DD in the selected timezone.
export function getDateKey(utcDate: Date): string {
    return tzDateToDateStr(toTZDate(utcDate));
}

// Short clock time in the selected timezone, e.g. "3:05 pm".
export function formatClockTime(utcDate: Date): string {
    const d = toTZDate(utcDate);
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    return `${hours % 12 || 12}:${minutes} ${ampm}`;
}

// Milliseconds until the next midnight in the selected timezone.
export function msUntilMidnightTZ(): number {
    const tomorrowTZ = nowInTZ();
    tomorrowTZ.setDate(tomorrowTZ.getDate() + 1);
    tomorrowTZ.setHours(0, 0, 0, 0);
    return parseTZDateTime(formatDateTime(tomorrowTZ)).getTime() - Date.now();
}

export interface SleepSpan {
    startTime: Date;
    endTime: Date | null;
}

export function computeDaySleepMs(sleepEntries: SleepSpan[], dayStart: Date, dayEnd: Date): number {
    let totalMs = 0;
    for (const entry of sleepEntries) {
        if (!entry.endTime) continue;
        const clampedStart = Math.max(entry.startTime.getTime(), dayStart.getTime());
        const clampedEnd = Math.min(entry.endTime.getTime(), dayEnd.getTime());
        if (clampedEnd > clampedStart) {
            totalMs += (clampedEnd - clampedStart);
        }
    }
    return totalMs;
}

// For a given date (fields in selected TZ), a "sleep day" spans from the
// previous day at nightStartHour to the next day at dayStartHour.
export function getSleepDayBounds(date: Date): { start: Date; end: Date } {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    const prevDay = new Date(d);
    prevDay.setDate(prevDay.getDate() - 1);
    const start = parseTZDateTime(`${tzDateToDateStr(prevDay)}T${hourInput(features.sleep.nightStartHour)}`);

    const nextDay = new Date(d);
    nextDay.setDate(nextDay.getDate() + 1);
    const end = parseTZDateTime(`${tzDateToDateStr(nextDay)}T${hourInput(features.sleep.dayStartHour)}`);

    return { start, end };
}

export function formatSleepDuration(ms: number): string {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

export function formatTimeDifference(timeStr: string | null, defaultMessage: string): string {
    if (!timeStr) {
        return defaultMessage;
    }
    return formatElapsed(Date.now() - new Date(timeStr).getTime());
}

export function formatElapsed(diffMs: number): string {
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
}
