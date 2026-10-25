import { collection, doc, getDocs, getDocsFromCache, query, orderBy, where, limit, Timestamp, writeBatch } from 'firebase/firestore';
import { db, markChanged } from './firebase';
import { config } from './config';
import { nowInTZ, parseTZDateTime, formatDateTime, formatDisplayDateTime } from './time';
import { defaultBrand, stripBrandLine } from './formula';
import { updateLastBottleTime, updateLastSolidsTime, updateLastDiaperTimes, updateLastPumpTime, updateLastSleepEndTime, updateNapTime } from './timers';
import { loadWeeklyView } from './weekly';

interface Entry {
    type: string;
    subType?: string;
    startTime: Date;
    endTime?: Date;
    amount?: number;
    unit?: string;
    diaperType?: string;
    formulaType?: string | null;
    notes: string;
}

let isSubmitting = false;

const FIELD_BLOCKS = ['bottle-fields', 'diaper-fields', 'pump-fields', 'sleep-fields', 'solids-fields'];

function el<T extends HTMLElement>(id: string): T {
    return document.getElementById(id) as T;
}

function validateTime(input: HTMLInputElement): boolean {
    if (!input.value) return true;

    if (parseTZDateTime(input.value) > new Date()) {
        alert(`Cannot select future times. Please select a time in the past.`);
        input.value = formatDateTime(nowInTZ());
        return false;
    }

    return true;
}

export function attachTimeValidation(inputId: string): void {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    if (!input) return;
    input.addEventListener('blur', () => validateTime(input));
    input.addEventListener('change', () => validateTime(input));
}

export function setDefaultTimes(): void {
    const formatted = formatDateTime(nowInTZ());
    ['bottle-time', 'diaper-time', 'pump-start-time', 'solids-start-time'].forEach(id => {
        el<HTMLInputElement>(id).value = formatted;
    });
    el<HTMLInputElement>('sleep-start-time').value = '';
}

export function setDefaultUnits(): void {
    el<HTMLSelectElement>('bottle-unit').value = config.defaultUnit;
    el<HTMLSelectElement>('pump-unit').value = config.defaultUnit;
}

async function checkOngoingSleep(): Promise<void> {
    const submitButton = el<HTMLButtonElement>('submit-entry');
    const statusDiv = el<HTMLDivElement>('submit-status');

    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            orderBy('startTime', 'desc'),
            limit(1)
        );
        const snapshot = await getDocs(q);
        // A fast submit can finish before this read; by then the form was
        // cleared and the warning no longer applies.
        if (el<HTMLSelectElement>('entry-type').value !== 'sleep') return;

        if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            if (!data.endTime) {
                const startTime = data.startTime.toDate();
                submitButton.style.display = 'none';
                statusDiv.className = 'error';
                statusDiv.textContent = `Sleep entry ongoing since ${formatDisplayDateTime(startTime)}. End that entry before adding a new one.`;
                statusDiv.style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Error checking ongoing sleep:', error);
    }
}

// Re-checks the ongoing-sleep guard after a change from another device.
export function refreshOngoingSleepGuard(): void {
    if (el<HTMLSelectElement>('entry-type').value !== 'sleep') return;
    el<HTMLButtonElement>('submit-entry').style.display = 'block';
    el<HTMLDivElement>('submit-status').style.display = 'none';
    checkOngoingSleep();
}

export function handleEntryTypeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const submitButton = el<HTMLButtonElement>('submit-entry');
    const bottleTypeContainer = el<HTMLElement>('bottle-type-container');

    FIELD_BLOCKS.forEach(id => el<HTMLElement>(id).style.display = 'none');
    bottleTypeContainer.style.display = 'none';
    el<HTMLDivElement>('submit-status').style.display = 'none';
    submitButton.style.display = 'block';

    if (value === 'bottle-formula' || value === 'bottle-breast-milk') {
        el<HTMLElement>('bottle-fields').style.display = 'block';
        el<HTMLInputElement>('bottle-amount').dataset.lastUnit = el<HTMLSelectElement>('bottle-unit').value;

        if (value === 'bottle-formula') {
            bottleTypeContainer.style.display = 'block';
            // Dispatching change runs the brand handler so the notes get the
            // same brand prefix as when the brand is picked by hand.
            const bottleTypeSelect = el<HTMLSelectElement>('bottle-type');
            bottleTypeSelect.value = defaultBrand;
            bottleTypeSelect.dispatchEvent(new Event('change'));
        } else {
            stripBrandLine(el<HTMLTextAreaElement>('bottle-notes'));
            el<HTMLDivElement>('bottle-type-indicator').style.display = 'none';
        }
    } else if (value === 'diaper') {
        el<HTMLElement>('diaper-fields').style.display = 'block';
    } else if (value === 'pump') {
        el<HTMLElement>('pump-fields').style.display = 'block';
        el<HTMLInputElement>('pump-amount').dataset.lastUnit = el<HTMLSelectElement>('pump-unit').value;
    } else if (value === 'sleep') {
        el<HTMLElement>('sleep-fields').style.display = 'block';
        checkOngoingSleep();
    } else if (value === 'solids') {
        el<HTMLElement>('solids-fields').style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }

    setDefaultTimes();
}

function requiredPastTime(inputId: string, now: Date): Date {
    const input = el<HTMLInputElement>(inputId);
    if (!input.value) {
        throw new Error('Start time is required');
    }
    const selected = parseTZDateTime(input.value);
    if (selected > now) {
        throw new Error('Cannot add entries in the future');
    }
    return selected;
}

function positiveAmount(inputId: string): number {
    const amount = parseFloat(el<HTMLInputElement>(inputId).value);
    if (isNaN(amount) || amount <= 0) {
        throw new Error('Amount must be greater than 0');
    }
    return amount;
}

async function buildEntry(entryType: string, now: Date): Promise<Entry | null> {
    if (entryType === 'bottle-formula' || entryType === 'bottle-breast-milk') {
        const startTime = requiredPastTime('bottle-time', now);
        const amount = positiveAmount('bottle-amount');
        const isFormula = entryType === 'bottle-formula';
        const formulaType = isFormula ? el<HTMLSelectElement>('bottle-type').value : null;
        if (isFormula && !formulaType) {
            throw new Error('Formula type is required');
        }
        return {
            type: 'Feed',
            subType: isFormula ? 'Formula' : 'Breast Milk',
            startTime,
            amount,
            unit: el<HTMLSelectElement>('bottle-unit').value,
            formulaType,
            notes: el<HTMLTextAreaElement>('bottle-notes').value
        };
    }

    if (entryType === 'diaper') {
        const startTime = requiredPastTime('diaper-time', now);
        const diaperType = el<HTMLSelectElement>('diaper-type').value;
        if (!diaperType) {
            throw new Error('Diaper type is required');
        }
        return { type: 'Diaper', diaperType, startTime, notes: el<HTMLTextAreaElement>('diaper-notes').value };
    }

    if (entryType === 'pump') {
        const startTime = requiredPastTime('pump-start-time', now);
        const amount = positiveAmount('pump-amount');
        return {
            type: 'Pump',
            startTime,
            amount,
            unit: el<HTMLSelectElement>('pump-unit').value,
            notes: el<HTMLTextAreaElement>('pump-notes').value
        };
    }

    if (entryType === 'solids') {
        const startTime = requiredPastTime('solids-start-time', now);
        return { type: 'Solids', startTime, notes: el<HTMLTextAreaElement>('solids-notes').value };
    }

    if (entryType === 'sleep') {
        const startTime = requiredPastTime('sleep-start-time', now);

        const ongoingQ = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            orderBy('startTime', 'desc'),
            limit(1)
        );
        // Cache-first so a Sleep add isn't blocked on a server round-trip
        // before the optimistic UI; fall back to the server only if the cache
        // has nothing for this query yet.
        const ongoingSnapshot = await getDocsFromCache(ongoingQ).catch(() => getDocs(ongoingQ));
        if (!ongoingSnapshot.empty && !ongoingSnapshot.docs[0].data().endTime) {
            throw new Error('A sleep entry is already ongoing. End that entry before adding a new one.');
        }

        const endTimeInput = el<HTMLInputElement>('sleep-end-time');
        let endTime: Date | undefined = undefined;
        if (endTimeInput.value) {
            endTime = parseTZDateTime(endTimeInput.value);
            if (endTime > now) {
                throw new Error('End time cannot be in the future');
            }
            if (endTime <= startTime) {
                throw new Error('End time must be after start time');
            }
        }

        return { type: 'Sleep', startTime, endTime, notes: el<HTMLTextAreaElement>('sleep-notes').value };
    }

    return null;
}

export async function handleSubmitEntry(): Promise<void> {
    // Guard against double submission: if a write is already in flight, ignore
    // further taps. Without this, a slow network write leaves the button active
    // and the user taps again, creating a duplicate entry.
    if (isSubmitting) return;

    const entryType = el<HTMLSelectElement>('entry-type').value;
    const statusDiv = el<HTMLDivElement>('submit-status');
    const submitButton = el<HTMLButtonElement>('submit-entry');

    isSubmitting = true;
    submitButton.disabled = true;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Adding...';

    try {
        const entry = await buildEntry(entryType, new Date());
        if (!entry) return;

        // Optimistic write: persistentLocalCache applies the write to the
        // local cache synchronously, so we update the UI right away and let
        // the server round-trip resolve in the background.
        const batch = writeBatch(db);
        batch.set(doc(collection(db, 'entries')), {
            ...entry,
            startTime: Timestamp.fromDate(entry.startTime),
            endTime: entry.endTime ? Timestamp.fromDate(entry.endTime) : null
        });
        markChanged(batch);
        batch.commit().catch(error => {
            // Offline writes stay queued and do NOT reject, so this only
            // fires on a genuine failure (e.g. permissions/invalid data).
            console.error('Error saving entry:', error);
            statusDiv.className = 'error';
            statusDiv.textContent = 'Failed to save entry. Please try again.';
            statusDiv.style.display = 'block';
        });

        statusDiv.className = 'success';
        statusDiv.textContent = 'Entry added successfully!';
        statusDiv.style.display = 'block';

        clearForm();

        // Refresh the "last X" displays cache-first. The pending write is
        // already in the local cache, so these resolve instantly while keeping
        // the correct "most recent of type" logic for backdated entries.
        if (entry.type === 'Feed') {
            updateLastBottleTime('cache');
        } else if (entry.type === 'Solids') {
            updateLastSolidsTime('cache');
        } else if (entry.type === 'Diaper') {
            updateLastDiaperTimes('cache');
        } else if (entry.type === 'Pump') {
            updateLastPumpTime('cache');
        } else if (entry.type === 'Sleep') {
            updateLastSleepEndTime('cache');
            updateNapTime('cache');
        }

        loadWeeklyView();

        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 3000);
    } catch (error) {
        statusDiv.className = 'error';
        statusDiv.textContent = error instanceof Error ? error.message : 'Failed to add entry';
        statusDiv.style.display = 'block';
    } finally {
        isSubmitting = false;
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

function clearForm(): void {
    el<HTMLSelectElement>('entry-type').value = '';
    el<HTMLInputElement>('bottle-amount').value = '';
    el<HTMLSelectElement>('bottle-type').value = defaultBrand;
    el<HTMLInputElement>('pump-amount').value = '';
    ['bottle-notes', 'diaper-notes', 'pump-notes', 'solids-notes', 'sleep-notes'].forEach(id => {
        el<HTMLTextAreaElement>(id).value = '';
    });
    el<HTMLInputElement>('sleep-end-time').value = '';

    FIELD_BLOCKS.forEach(id => el<HTMLElement>(id).style.display = 'none');
    el<HTMLElement>('bottle-type-container').style.display = 'none';
    el<HTMLButtonElement>('submit-entry').style.display = 'none';

    setDefaultTimes();
}
