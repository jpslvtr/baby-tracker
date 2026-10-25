import { doc, writeBatch, Timestamp } from 'firebase/firestore';
import { db, markChanged } from './firebase';
import { toTZDate, nowInTZ, parseTZDateTime, formatDateTime } from './time';
import { detectBrand, setPastBrandOption } from './formula';
import { loadTimeline } from './timeline';
import { loadWeeklyView } from './weekly';
import { updateAllEventTimes } from './timers';

let currentEditingEntryId: string | null = null;

const EDIT_BLOCKS = ['edit-bottle-fields', 'edit-diaper-fields', 'edit-pump-fields', 'edit-sleep-fields', 'edit-solids-fields'];

function el<T extends HTMLElement>(id: string): T {
    return document.getElementById(id) as T;
}

function isShown(id: string): boolean {
    return el<HTMLElement>(id).style.display === 'block';
}

export function openEditModal(docId: string, data: any): void {
    currentEditingEntryId = docId;
    EDIT_BLOCKS.forEach(id => el<HTMLElement>(id).style.display = 'none');

    const startTimeValue = formatDateTime(toTZDate(data.startTime.toDate()));

    if (data.type === 'Feed') {
        el<HTMLElement>('edit-bottle-fields').style.display = 'block';
        const editBottleUnit = el<HTMLSelectElement>('edit-bottle-unit');
        const editBottleAmount = el<HTMLInputElement>('edit-bottle-amount');
        const editBottleTypeContainer = el<HTMLElement>('edit-bottle-type-container');
        const editBottleTypeSelect = el<HTMLSelectElement>('edit-bottle-type');
        const indicator = el<HTMLDivElement>('edit-bottle-type-indicator');
        const typeText = el<HTMLSpanElement>('edit-bottle-type-text');

        el<HTMLInputElement>('edit-bottle-time').value = startTimeValue;
        editBottleAmount.value = data.amount.toFixed(2);
        editBottleUnit.value = data.unit || 'oz';
        editBottleAmount.dataset.lastUnit = data.unit || 'oz';
        el<HTMLTextAreaElement>('edit-bottle-notes').value = data.notes || '';

        if (data.subType === 'Formula') {
            editBottleTypeContainer.style.display = 'block';
            const detectedType = detectBrand(data);
            setPastBrandOption(editBottleTypeSelect, detectedType);
            editBottleTypeSelect.value = detectedType;
            if (detectedType) {
                typeText.textContent = detectedType;
                indicator.style.display = 'block';
            } else {
                indicator.style.display = 'none';
            }
        } else {
            editBottleTypeContainer.style.display = 'none';
            setPastBrandOption(editBottleTypeSelect, '');
            editBottleTypeSelect.value = '';
            indicator.style.display = 'none';
        }
    } else if (data.type === 'Diaper') {
        el<HTMLElement>('edit-diaper-fields').style.display = 'block';
        el<HTMLInputElement>('edit-diaper-time').value = startTimeValue;
        el<HTMLSelectElement>('edit-diaper-type').value = data.diaperType;
        el<HTMLTextAreaElement>('edit-diaper-notes').value = data.notes || '';
    } else if (data.type === 'Pump') {
        el<HTMLElement>('edit-pump-fields').style.display = 'block';
        const editPumpAmount = el<HTMLInputElement>('edit-pump-amount');
        el<HTMLInputElement>('edit-pump-start-time').value = startTimeValue;
        editPumpAmount.value = data.amount.toFixed(2);
        el<HTMLSelectElement>('edit-pump-unit').value = data.unit || 'oz';
        editPumpAmount.dataset.lastUnit = data.unit || 'oz';
        el<HTMLTextAreaElement>('edit-pump-notes').value = data.notes || '';
    } else if (data.type === 'Sleep') {
        el<HTMLElement>('edit-sleep-fields').style.display = 'block';
        el<HTMLInputElement>('edit-sleep-start-time').value = startTimeValue;
        el<HTMLInputElement>('edit-sleep-end-time').value = formatDateTime(data.endTime ? toTZDate(data.endTime.toDate()) : nowInTZ());
        el<HTMLTextAreaElement>('edit-sleep-notes').value = data.notes || '';
    } else if (data.type === 'Solids') {
        el<HTMLElement>('edit-solids-fields').style.display = 'block';
        el<HTMLInputElement>('edit-solids-start-time').value = startTimeValue;
        el<HTMLTextAreaElement>('edit-solids-notes').value = data.notes || '';
    }

    el<HTMLElement>('edit-modal').style.display = 'block';
}

export function closeEditModal(): void {
    el<HTMLElement>('edit-modal').style.display = 'none';
    currentEditingEntryId = null;
    el<HTMLDivElement>('edit-status').style.display = 'none';
}

function requiredPastTime(inputId: string, now: Date): Date {
    const input = el<HTMLInputElement>(inputId);
    if (!input.value) {
        throw new Error('Start time is required');
    }
    const selected = parseTZDateTime(input.value);
    if (selected > now) {
        throw new Error('Cannot set time in the future');
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

function buildUpdate(now: Date): Record<string, unknown> {
    if (isShown('edit-bottle-fields')) {
        const startTime = requiredPastTime('edit-bottle-time', now);
        const amount = positiveAmount('edit-bottle-amount');
        const editBottleType = el<HTMLSelectElement>('edit-bottle-type').value;
        if (el<HTMLElement>('edit-bottle-type-container').style.display !== 'none' && !editBottleType) {
            throw new Error('Formula type is required');
        }
        return {
            startTime: Timestamp.fromDate(startTime),
            amount,
            unit: el<HTMLSelectElement>('edit-bottle-unit').value,
            notes: el<HTMLTextAreaElement>('edit-bottle-notes').value,
            formulaType: editBottleType || null
        };
    }

    if (isShown('edit-diaper-fields')) {
        const startTime = requiredPastTime('edit-diaper-time', now);
        const diaperType = el<HTMLSelectElement>('edit-diaper-type').value;
        if (!diaperType) {
            throw new Error('Diaper type is required');
        }
        return { startTime: Timestamp.fromDate(startTime), diaperType, notes: el<HTMLTextAreaElement>('edit-diaper-notes').value };
    }

    if (isShown('edit-pump-fields')) {
        const startTime = requiredPastTime('edit-pump-start-time', now);
        const amount = positiveAmount('edit-pump-amount');
        return {
            startTime: Timestamp.fromDate(startTime),
            amount,
            unit: el<HTMLSelectElement>('edit-pump-unit').value,
            notes: el<HTMLTextAreaElement>('edit-pump-notes').value
        };
    }

    if (isShown('edit-sleep-fields')) {
        const startTime = requiredPastTime('edit-sleep-start-time', now);
        const update: Record<string, unknown> = {
            startTime: Timestamp.fromDate(startTime),
            notes: el<HTMLTextAreaElement>('edit-sleep-notes').value,
            endTime: null
        };
        const endInput = el<HTMLInputElement>('edit-sleep-end-time');
        if (endInput.value) {
            const endTime = parseTZDateTime(endInput.value);
            if (endTime > now) {
                throw new Error('End time cannot be in the future');
            }
            if (endTime <= startTime) {
                throw new Error('End time must be after start time');
            }
            update.endTime = Timestamp.fromDate(endTime);
        }
        return update;
    }

    if (isShown('edit-solids-fields')) {
        const startTime = requiredPastTime('edit-solids-start-time', now);
        return { startTime: Timestamp.fromDate(startTime), notes: el<HTMLTextAreaElement>('edit-solids-notes').value };
    }

    return {};
}

function refreshAfterWrite(): void {
    loadTimeline();
    loadWeeklyView();
    updateAllEventTimes();
}

export async function saveEdit(): Promise<void> {
    if (!currentEditingEntryId) return;
    const statusDiv = el<HTMLDivElement>('edit-status');

    try {
        const batch = writeBatch(db);
        batch.update(doc(db, 'entries', currentEditingEntryId), buildUpdate(new Date()));
        markChanged(batch);
        await batch.commit();

        statusDiv.className = 'success';
        statusDiv.textContent = 'Entry updated successfully!';
        statusDiv.style.display = 'block';

        setTimeout(() => {
            closeEditModal();
            refreshAfterWrite();
        }, 1000);
    } catch (error) {
        statusDiv.className = 'error';
        statusDiv.textContent = error instanceof Error ? error.message : 'Failed to update entry';
        statusDiv.style.display = 'block';
    }
}

export async function deleteEntry(docId: string): Promise<void> {
    if (!confirm('Are you sure you want to delete this entry?')) {
        return;
    }

    try {
        const batch = writeBatch(db);
        batch.delete(doc(db, 'entries', docId));
        markChanged(batch);
        await batch.commit();
        refreshAfterWrite();
    } catch {
        alert('Failed to delete entry');
    }
}
