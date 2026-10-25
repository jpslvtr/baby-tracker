import { collection, query, orderBy, where, limit, Timestamp } from 'firebase/firestore';
import { db, qDocs, ReadSource } from './firebase';
import { birthDate, hourInput, features } from './config';
import { nowInTZ, parseTZDateTime, formatDateForInput, formatDisplayDateTime, formatDateOnly } from './time';
import { formatBothUnits } from './units';
import { TimelineDoc, emptyStats, addToStats, buildSummaryHTML } from './timelineSummary';
import { openEditModal, deleteEntry } from './editModal';

let timelineVersion = 0;

export function setDefaultDateFilters(): void {
    const today = formatDateForInput(nowInTZ());
    (document.getElementById('start-date-filter') as HTMLInputElement).value = today;
    (document.getElementById('end-date-filter') as HTMLInputElement).value = today;
}

export function handleQuickFilter(filterType: string): void {
    const startDateInput = document.getElementById('start-date-filter') as HTMLInputElement;
    const endDateInput = document.getElementById('end-date-filter') as HTMLInputElement;
    const today = nowInTZ();
    today.setHours(0, 0, 0, 0);

    const daysAgo: Record<string, number> = { 'today': 0, 'yesterday': 1, 'two-days-ago': 2, 'three-days-ago': 3 };

    if (filterType === 'all-time') {
        startDateInput.value = formatDateForInput(birthDate());
        endDateInput.value = formatDateForInput(today);
    } else if (filterType in daysAgo) {
        const day = new Date(today);
        day.setDate(day.getDate() - daysAgo[filterType]);
        startDateInput.value = formatDateForInput(day);
        endDateInput.value = formatDateForInput(day);
    }

    loadTimeline();
}

// Public entry point: paint instantly from the local cache, then refresh from
// the server in the background. replaceChildren() swaps content atomically so
// the server pass never blanks the screen.
export async function loadTimeline(): Promise<void> {
    try {
        await renderTimeline('cache');
    } catch {
        // Cache miss / unavailable - the server pass below handles it.
    }
    await renderTimeline('server');
}

function matchesFilter(data: any, typeFilter: string): boolean {
    if (typeFilter === 'all') return true;
    if (typeFilter === 'bottle-all') return data.type === 'Feed';
    if (typeFilter === 'bottle-breast-milk') return data.type === 'Feed' && data.subType === 'Breast Milk';
    if (typeFilter === 'bottle-formula') return data.type === 'Feed' && data.subType === 'Formula';
    if (typeFilter === 'diaper-all') return data.type === 'Diaper';
    if (typeFilter === 'diaper-pee') return data.type === 'Diaper' && (data.diaperType === 'Pee' || data.diaperType === 'Mixed');
    if (typeFilter === 'diaper-poo') return data.type === 'Diaper' && (data.diaperType === 'Poo' || data.diaperType === 'Mixed');
    if (typeFilter === 'pump') return data.type === 'Pump';
    if (typeFilter === 'sleep') return data.type === 'Sleep';
    if (typeFilter === 'solids') return data.type === 'Solids';
    return false;
}

function isPoo(data: any): boolean {
    return data.type === 'Diaper' && (data.diaperType === 'Poo' || data.diaperType === 'Mixed');
}

function entryDetails(data: any): { typeDisplay: string; detailsHTML: string; backgroundColor: string } {
    if (data.type === 'Feed') {
        return { typeDisplay: `Bottle - ${data.subType}`, detailsHTML: `<div class="timeline-entry-details">Amount: ${formatBothUnits(data.amount, data.unit)}</div>`, backgroundColor: '#22323f' };
    }
    if (data.type === 'Breast Feed') {
        return { typeDisplay: 'Breast Feed', detailsHTML: '', backgroundColor: '#22323f' };
    }
    if (data.type === 'Diaper') {
        return { typeDisplay: 'Diaper', detailsHTML: `<div class="timeline-entry-details">Type: ${data.diaperType}</div>`, backgroundColor: '#3a2c20' };
    }
    if (data.type === 'Pump') {
        return { typeDisplay: 'Pump', detailsHTML: `<div class="timeline-entry-details">Amount: ${formatBothUnits(data.amount, data.unit)}</div>`, backgroundColor: '#2e2740' };
    }
    if (data.type === 'Solids') {
        return { typeDisplay: 'Solids', detailsHTML: '', backgroundColor: '#38301f' };
    }
    if (data.type === 'Sleep') {
        if (!data.endTime) {
            return { typeDisplay: 'Sleep', detailsHTML: `<div class="timeline-entry-details">In progress</div>`, backgroundColor: '#213425' };
        }
        const sleepStart = data.startTime.toDate();
        const sleepEnd = data.endTime.toDate();
        const durationMs = sleepEnd.getTime() - sleepStart.getTime();
        const durationHrs = Math.floor(durationMs / (1000 * 60 * 60));
        const durationMins = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
        return {
            typeDisplay: 'Sleep',
            detailsHTML: `<div class="timeline-entry-details">Duration: ${durationHrs}h ${durationMins}m</div><div class="timeline-entry-details">End: ${formatDisplayDateTime(sleepEnd)}</div>`,
            backgroundColor: '#213425'
        };
    }
    return { typeDisplay: data.type, detailsHTML: '', backgroundColor: '' };
}

function timeSincePooDiv(hoursSince: number): HTMLDivElement {
    const div = document.createElement('div');
    div.className = 'timeline-entry-details';
    div.style.color = '#aaa';
    div.style.fontStyle = 'italic';
    div.textContent = `${hoursSince.toFixed(1)} hours since previous poo`;
    return div;
}

// Sleep that starts the evening before the first day belongs to that first
// day's sleep, so the list includes it.
async function fetchPriorEveningSleep(startDateInput: string, source: ReadSource): Promise<TimelineDoc[]> {
    const [sY, sM, sD] = startDateInput.split('-').map(Number);
    const priorDay = new Date(sY, sM - 1, sD - 1);
    const priorDayStr = formatDateForInput(priorDay);
    const priorEveningStart = parseTZDateTime(`${priorDayStr}T${hourInput(features.sleep.nightStartHour)}`);
    const priorEveningEnd = parseTZDateTime(`${startDateInput}T00:00`);

    const docs: TimelineDoc[] = [];
    try {
        const snap = await qDocs(query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            where('startTime', '>=', Timestamp.fromDate(priorEveningStart)),
            where('startTime', '<', Timestamp.fromDate(priorEveningEnd)),
            orderBy('startTime', 'desc')
        ), source);
        snap.forEach((d: any) => docs.push({ id: d.id, data: d.data() }));
    } catch (e) {
        console.error('Error fetching prior evening sleep:', e);
    }
    return docs;
}

// The oldest poo in the range has its previous poo outside the range.
async function fillPriorPooTimes(timelineList: HTMLElement, source: ReadSource): Promise<void> {
    const pending = timelineList.querySelectorAll<HTMLElement>('[data-needs-prior-poo="true"]');
    for (const pooEntry of Array.from(pending)) {
        const pooTime = parseInt(pooEntry.dataset.pooTime || '0', 10);
        if (pooTime > 0) {
            try {
                const priorPooSnap = await qDocs(query(
                    collection(db, 'entries'),
                    where('type', '==', 'Diaper'),
                    where('startTime', '<', Timestamp.fromDate(new Date(pooTime))),
                    orderBy('startTime', 'desc'),
                    limit(40)
                ), source);
                let previousPooTime: number | null = null;
                priorPooSnap.forEach((d: any) => {
                    if (previousPooTime !== null) return;
                    const dData = d.data();
                    if (isPoo(dData)) {
                        previousPooTime = dData.startTime.toDate().getTime();
                    }
                });
                if (previousPooTime !== null) {
                    const div = timeSincePooDiv((pooTime - previousPooTime) / (1000 * 60 * 60));
                    pooEntry.insertBefore(div, pooEntry.querySelector('.timeline-entry-actions'));
                }
            } catch (e) {
                console.error('Error fetching prior poo entry:', e);
            }
        }
        pooEntry.removeAttribute('data-needs-prior-poo');
        pooEntry.removeAttribute('data-poo-time');
    }
}

async function renderTimeline(source: ReadSource): Promise<void> {
    const thisVersion = ++timelineVersion;
    const timelineList = document.getElementById('timeline-list') as HTMLDivElement;
    const loadingDiv = document.getElementById('timeline-loading') as HTMLDivElement;
    const startDateInput = (document.getElementById('start-date-filter') as HTMLInputElement).value;
    const endDateInput = (document.getElementById('end-date-filter') as HTMLInputElement).value;
    const typeFilter = (document.getElementById('type-filter') as HTMLSelectElement).value;

    // Only show the loading spinner when there's nothing on screen yet, so the
    // background server refresh doesn't flash "Loading..." over cached content.
    if (timelineList.children.length === 0) {
        loadingDiv.style.display = 'block';
    }

    const removeSummary = () => document.querySelector('.filter-summary')?.remove();

    try {
        let q = query(collection(db, 'entries'), orderBy('startTime', 'desc'));
        if (startDateInput && endDateInput) {
            const startDate = parseTZDateTime(`${startDateInput}T00:00`);
            const endDate = parseTZDateTime(`${endDateInput}T23:59`);
            endDate.setSeconds(59, 999);
            q = query(
                collection(db, 'entries'),
                where('startTime', '>=', Timestamp.fromDate(startDate)),
                where('startTime', '<=', Timestamp.fromDate(endDate)),
                orderBy('startTime', 'desc')
            );
        }

        const snapshot = await qDocs(q, source);
        if (thisVersion !== timelineVersion) return;
        // On the cache pass an empty result usually means "not cached yet" rather
        // than "no entries" - skip rendering and let the server pass decide, so we
        // don't flash a false "No entries found".
        if (source === 'cache' && snapshot.empty) return;

        const priorEveningSleepDocs = startDateInput ? await fetchPriorEveningSleep(startDateInput, source) : [];
        if (thisVersion !== timelineVersion) return;

        const allTimelineDocs: TimelineDoc[] = [];
        const seenIds = new Set<string>();
        snapshot.forEach((d: any) => {
            allTimelineDocs.push({ id: d.id, data: d.data() });
            seenIds.add(d.id);
        });
        priorEveningSleepDocs.forEach(d => {
            if (!seenIds.has(d.id)) {
                allTimelineDocs.push(d);
                seenIds.add(d.id);
            }
        });
        allTimelineDocs.sort((a, b) => b.data.startTime.toDate().getTime() - a.data.startTime.toDate().getTime());

        if (allTimelineDocs.length === 0) {
            removeSummary();
            const emptyMsg = document.createElement('p');
            emptyMsg.textContent = 'No entries found.';
            timelineList.replaceChildren(emptyMsg);
            return;
        }

        // Precompute the descending list of poo/mixed timestamps once.
        const allPooTimes = allTimelineDocs
            .filter(d => isPoo(d.data))
            .map(d => d.data.startTime.toDate().getTime())
            .sort((a, b) => b - a);

        const stats = emptyStats();
        const fragment = document.createDocumentFragment();
        let currentDate = '';
        let hasVisibleEntries = false;

        allTimelineDocs.forEach(({ id: docId, data }) => {
            if (!matchesFilter(data, typeFilter)) return;

            addToStats(stats, data);
            hasVisibleEntries = true;

            const startTime = data.startTime.toDate();
            const dateKey = formatDateOnly(startTime);
            if (dateKey !== currentDate) {
                currentDate = dateKey;
                const dateHeader = document.createElement('div');
                dateHeader.className = 'timeline-date-header';
                dateHeader.textContent = dateKey;
                fragment.appendChild(dateHeader);
            }

            const entry = document.createElement('div');
            entry.className = 'timeline-entry';

            const { typeDisplay, detailsHTML, backgroundColor } = entryDetails(data);
            entry.style.backgroundColor = backgroundColor;

            const notesHTML = data.notes ? `<div class="timeline-entry-notes">${data.notes.replace(/\n/g, '<br>')}</div>` : '';

            entry.innerHTML = `
                <div class="timeline-entry-header">
                    <span class="timeline-entry-type">${typeDisplay}</span>
                    <span class="timeline-entry-time">${formatDisplayDateTime(startTime)}</span>
                </div>
                ${detailsHTML}
                ${notesHTML}
                <div class="timeline-entry-actions">
                    <button class="edit-button" data-id="${docId}">Edit</button>
                    <button class="delete-button" data-id="${docId}">Delete</button>
                </div>
            `;

            if (isPoo(data)) {
                const currentTime = startTime.getTime();
                const currentIndex = allPooTimes.findIndex(t => t === currentTime);
                if (currentIndex >= 0 && currentIndex < allPooTimes.length - 1) {
                    const hoursSince = (currentTime - allPooTimes[currentIndex + 1]) / (1000 * 60 * 60);
                    entry.insertBefore(timeSincePooDiv(hoursSince), entry.querySelector('.timeline-entry-actions'));
                } else if (currentIndex >= 0) {
                    entry.dataset.needsPriorPoo = 'true';
                    entry.dataset.pooTime = String(currentTime);
                }
            }

            (entry.querySelector('.edit-button') as HTMLButtonElement).addEventListener('click', () => openEditModal(docId, data));
            (entry.querySelector('.delete-button') as HTMLButtonElement).addEventListener('click', () => deleteEntry(docId));

            fragment.appendChild(entry);
        });

        // Swap the freshly built entries in atomically. The old summary is
        // left in place until the new one is ready, so it doesn't blink.
        timelineList.replaceChildren(fragment);

        await fillPriorPooTimes(timelineList, source);

        if (!hasVisibleEntries) {
            removeSummary();
            timelineList.innerHTML = '<p>No entries match the selected filters.</p>';
            return;
        }

        const summaryHTML = await buildSummaryHTML(stats, allTimelineDocs, typeFilter, startDateInput, endDateInput, source);
        if (thisVersion !== timelineVersion) return;
        removeSummary();
        if (summaryHTML) {
            const summaryDiv = document.createElement('div');
            summaryDiv.className = 'filter-summary';
            summaryDiv.innerHTML = summaryHTML;
            timelineList.parentNode?.insertBefore(summaryDiv, timelineList);
        }
    } catch (error) {
        // Cache pass failures are silent - the server pass is the fallback.
        // On a server failure, only show the error if there's nothing already
        // on screen (don't wipe content we just painted from cache).
        if (source === 'server' && thisVersion === timelineVersion && timelineList.children.length === 0) {
            timelineList.innerHTML = '<p class="error">Failed to load timeline</p>';
        }
    } finally {
        if (thisVersion === timelineVersion) {
            loadingDiv.style.display = 'none';
        }
    }
}
