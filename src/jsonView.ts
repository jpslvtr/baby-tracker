import { collection, query, orderBy } from 'firebase/firestore';
import { db, qDocs } from './firebase';

type JsonTab = 'feeds' | 'diapers' | 'pumps' | 'sleep';

// The collection is only fetched when the user actually reveals the JSON, not
// on every tab open.
let jsonListenersReady = false;
let jsonCurrentTab: JsonTab = 'feeds';
let jsonCurrentString = '[]';
const jsonData: Record<JsonTab, any[]> = { feeds: [], diapers: [], pumps: [], sleep: [] };

function renderJsonDisplay(): void {
    const jsonContent = document.getElementById('json-content') as HTMLPreElement;
    jsonCurrentString = JSON.stringify(jsonData[jsonCurrentTab], null, 2);
    jsonContent.textContent = jsonCurrentString;
}

// Fetch the full collection and rebuild the per-type JSON arrays. Cache-first
// (instant) then server. Only called when the JSON view is actually visible.
async function fetchJsonData(): Promise<void> {
    const jsonContent = document.getElementById('json-content') as HTMLPreElement;
    const q = query(collection(db, 'entries'), orderBy('startTime', 'desc'));

    const buildFrom = (snapshot: any) => {
        const next: Record<JsonTab, any[]> = { feeds: [], diapers: [], pumps: [], sleep: [] };
        snapshot.docs.forEach((docSnapshot: any) => {
            const data = docSnapshot.data();
            const startTime = data.startTime.toDate().toISOString();
            if (data.type === 'Feed') {
                next.feeds.push({ type: data.type, subType: data.subType, startTime, amount: data.amount, unit: data.unit, notes: data.notes || '' });
            } else if (data.type === 'Solids') {
                next.feeds.push({ type: data.type, startTime, notes: data.notes || '' });
            } else if (data.type === 'Diaper') {
                next.diapers.push({ type: data.type, startTime, diaperType: data.diaperType, notes: data.notes || '' });
            } else if (data.type === 'Pump') {
                next.pumps.push({ type: data.type, startTime, amount: data.amount, unit: data.unit, notes: data.notes || '' });
            } else if (data.type === 'Sleep') {
                next.sleep.push({ type: data.type, startTime, endTime: data.endTime ? data.endTime.toDate().toISOString() : null, notes: data.notes || '' });
            }
        });
        Object.assign(jsonData, next);
        renderJsonDisplay();
    };

    let painted = false;
    try {
        const cached = await qDocs(q, 'cache');
        if (!cached.empty) { buildFrom(cached); painted = true; }
    } catch {
        // cache miss - fall through to server
    }
    try {
        buildFrom(await qDocs(q, 'server'));
    } catch {
        if (!painted) jsonContent.textContent = 'Failed to load data';
    }
}

// Refresh the JSON only if it's currently revealed (keeps it fresh without
// ever fetching while hidden).
export function refreshJsonIfVisible(): void {
    const jsonContent = document.getElementById('json-content') as HTMLPreElement;
    if (jsonContent.style.display !== 'none') {
        fetchJsonData();
    }
}

// Wire up the JSON view's buttons exactly once. No data is fetched here - the
// full-collection read is deferred until the user clicks "Show JSON Data".
export function setupJsonView(): void {
    if (jsonListenersReady) return;
    jsonListenersReady = true;

    const jsonContent = document.getElementById('json-content') as HTMLPreElement;
    const toggleButton = document.getElementById('toggle-json') as HTMLButtonElement;
    const copyButton = document.getElementById('copy-json') as HTMLButtonElement;
    const jsonTabs = document.querySelector('.json-tabs') as HTMLElement;

    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.json-tab-button')).map(btn => ({
        btn,
        key: btn.dataset.tab as JsonTab
    }));

    // Start on the first tab still shown after unused features were removed.
    const selectTab = (key: JsonTab) => {
        jsonCurrentTab = key;
        tabs.forEach(t => t.btn.classList.toggle('active', t.key === key));
    };
    if (tabs.length) selectTab(tabs[0].key);

    toggleButton.addEventListener('click', async () => {
        const isHidden = jsonContent.style.display === 'none';
        jsonContent.style.display = isHidden ? 'block' : 'none';
        copyButton.style.display = isHidden ? 'block' : 'none';
        jsonTabs.style.display = isHidden ? 'flex' : 'none';
        toggleButton.textContent = isHidden ? 'Hide JSON Data' : 'Show JSON Data';
        if (isHidden) {
            jsonContent.textContent = 'Loading...';
            await fetchJsonData();
        }
    });

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(jsonCurrentString);
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        } catch {
            alert('Failed to copy to clipboard');
        }
    });

    tabs.forEach(({ btn, key }) => {
        btn.addEventListener('click', () => {
            selectTab(key);
            renderJsonDisplay();
        });
    });
}
