import { doc, getDoc, getDocFromCache, writeBatch, Timestamp } from 'firebase/firestore';
import { db, markChanged, ReadSource } from './firebase';
import { features, isAddable } from './config';
import { getDateKey, msUntilMidnightTZ } from './time';

// One document per day in the vitaminD collection, keyed YYYY-MM-DD in the
// selected time zone: { given: boolean, date: Timestamp }.

let midnightTimeout: number | null = null;

function labelFor(given: boolean): string {
    return given ? 'Vitamin D drop given' : 'Record Vitamin D drop';
}

export async function loadVitaminDStatus(): Promise<void> {
    if (!isAddable(features.vitaminD.state)) return;
    const checkbox = document.getElementById('vitamin-d-checkbox') as HTMLInputElement;
    const statusDiv = document.getElementById('vitamin-d-status') as HTMLDivElement;
    const labelText = document.getElementById('vitamin-d-label-text') as HTMLSpanElement;

    try {
        const vitaminDDoc = await getDoc(doc(db, 'vitaminD', getDateKey(new Date())));
        checkbox.checked = vitaminDDoc.exists() && vitaminDDoc.data().given === true;
        labelText.textContent = labelFor(checkbox.checked);
        statusDiv.textContent = '';
        statusDiv.style.display = 'none';
    } catch (error) {
        console.error('Error loading vitamin D status:', error);
        statusDiv.className = 'error';
        statusDiv.textContent = 'Failed to load vitamin D status';
        statusDiv.style.display = 'block';
    }
}

async function handleVitaminDChange(event: Event): Promise<void> {
    const checkbox = event.target as HTMLInputElement;
    const statusDiv = document.getElementById('vitamin-d-status') as HTMLDivElement;
    const labelText = document.getElementById('vitamin-d-label-text') as HTMLSpanElement;
    const today = new Date();

    try {
        const batch = writeBatch(db);
        batch.set(doc(db, 'vitaminD', getDateKey(today)), {
            given: checkbox.checked,
            date: Timestamp.fromDate(today)
        });
        markChanged(batch);
        await batch.commit();

        labelText.textContent = labelFor(checkbox.checked);
        statusDiv.style.display = 'none';
    } catch (error) {
        console.error('Error saving vitamin D status:', error);
        statusDiv.className = 'error';
        statusDiv.textContent = 'Failed to save vitamin D status';
        statusDiv.style.display = 'block';

        checkbox.checked = !checkbox.checked;
        labelText.textContent = labelFor(checkbox.checked);
    }
}

function scheduleNextMidnightCheck(): void {
    if (midnightTimeout) clearTimeout(midnightTimeout);
    midnightTimeout = window.setTimeout(() => {
        loadVitaminDStatus();
        scheduleNextMidnightCheck();
    }, msUntilMidnightTZ());
}

export function setupVitaminD(): void {
    if (!isAddable(features.vitaminD.state)) return;
    document.getElementById('vitamin-d-checkbox')?.addEventListener('change', handleVitaminDChange);
    loadVitaminDStatus();
    scheduleNextMidnightCheck();
}

// getDoc that honors the read source. On a cache miss we resolve to a
// synthetic "does not exist" snapshot so a single missing doc (a day that was
// never recorded) doesn't fail the whole cache pass.
function qDoc(ref: any, source: ReadSource): Promise<any> {
    if (source === 'server') return getDoc(ref);
    return getDocFromCache(ref).catch(() => ({ exists: () => false, data: () => undefined }));
}

// Given status for each YYYY-MM-DD key.
export async function fetchVitaminDDays(dateKeys: string[], source: ReadSource): Promise<Record<string, boolean>> {
    const docs = await Promise.all(dateKeys.map(key => qDoc(doc(db, 'vitaminD', key), source)));
    const result: Record<string, boolean> = {};
    dateKeys.forEach((key, i) => {
        result[key] = docs[i].exists() && docs[i].data()?.given === true;
    });
    return result;
}
