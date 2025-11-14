import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, Timestamp, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",
    authDomain: "baby-tracker-b0936.firebaseapp.com",
    projectId: "baby-tracker-b0936",
    storageBucket: "baby-tracker-b0936.firebasestorage.app",
    messagingSenderId: "931756532206",
    appId: "1:931756532206:web:bf90d10dc3e3837383eeff"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const PASSCODE = "1234";

interface Entry {
    type: string;
    subType?: string;
    startTime: Date;
    endTime?: Date;
    amount?: number;
    unit?: string;
    diaperType?: string;
    notes: string;
}

let currentWeekStart: Date = getWeekStart(new Date());
let currentEditingEntryId: string | null = null;
let lastBottleTimerInterval: number | null = null;

function getWeekStart(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    return new Date(d.setDate(diff));
}

function getWeekEnd(weekStart: Date): Date {
    const end = new Date(weekStart);
    end.setDate(end.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return end;
}

function formatDateTime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatDisplayDateTime(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${month}/${day}/${year} ${displayHours}:${minutes} ${ampm}`;
}

function formatDateOnly(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${days[date.getDay()]}, ${month}/${day}/${year}`;
}

function checkPasscode(): void {
    const passcodeInput = document.getElementById('passcode-input') as HTMLInputElement;
    const passcodeError = document.getElementById('passcode-error') as HTMLDivElement;
    const passcodeScreen = document.getElementById('passcode-screen') as HTMLDivElement;
    const appScreen = document.getElementById('app') as HTMLDivElement;

    if (passcodeInput.value === PASSCODE) {
        passcodeScreen.style.display = 'none';
        appScreen.style.display = 'block';
        initializeUI();
    } else {
        passcodeError.textContent = 'Incorrect passcode';
        passcodeError.style.display = 'block';
        passcodeInput.value = '';
    }
}

function initializeUI(): void {
    setupEventListeners();
    setDefaultTimes();
    startLastBottleTimer();
}

function setupEventListeners(): void {
    const entryTypeSelect = document.getElementById('entry-type') as HTMLSelectElement;
    const submitButton = document.getElementById('submit-entry') as HTMLButtonElement;

    entryTypeSelect.addEventListener('change', handleEntryTypeChange);
    submitButton.addEventListener('click', handleSubmitEntry);

    const entryTab = document.getElementById('entry-tab') as HTMLButtonElement;
    const timelineTab = document.getElementById('timeline-tab') as HTMLButtonElement;
    const weeklyTab = document.getElementById('weekly-tab') as HTMLButtonElement;

    entryTab.addEventListener('click', () => switchTab('entry'));
    timelineTab.addEventListener('click', () => switchTab('timeline'));
    weeklyTab.addEventListener('click', () => switchTab('weekly'));

    const prevWeekBtn = document.getElementById('prev-week') as HTMLButtonElement;
    const nextWeekBtn = document.getElementById('next-week') as HTMLButtonElement;
    const currentWeekBtn = document.getElementById('current-week') as HTMLButtonElement | null;

    prevWeekBtn.addEventListener('click', () => changeWeek(-1));
    nextWeekBtn.addEventListener('click', () => changeWeek(1));
    if (currentWeekBtn) {
        currentWeekBtn.addEventListener('click', goToCurrentWeek);
    }

    const saveEditBtn = document.getElementById('save-edit') as HTMLButtonElement;
    const cancelEditBtn = document.getElementById('cancel-edit') as HTMLButtonElement;

    saveEditBtn.addEventListener('click', saveEdit);
    cancelEditBtn.addEventListener('click', closeEditModal);
}

function roundToNearest5Minutes(date: Date): Date {
    const rounded = new Date(date);
    const minutes = rounded.getMinutes();
    const roundedMinutes = Math.round(minutes / 5) * 5;
    rounded.setMinutes(roundedMinutes);
    rounded.setSeconds(0);
    rounded.setMilliseconds(0);
    return rounded;
}

function setDefaultTimes(): void {
    const now = new Date();
    const rounded = roundToNearest5Minutes(now);
    const formatted = formatDateTime(rounded);
    const maxFormatted = formatDateTime(now);

    const bottleTime = document.getElementById('bottle-time') as HTMLInputElement | null;
    const diaperTime = document.getElementById('diaper-time') as HTMLInputElement | null;
    const pumpStartTime = document.getElementById('pump-start-time') as HTMLInputElement | null;
    const pumpEndTime = document.getElementById('pump-end-time') as HTMLInputElement | null;

    if (bottleTime) {
        bottleTime.value = formatted;
        bottleTime.max = maxFormatted;
        bottleTime.step = "300";
    }
    if (diaperTime) {
        diaperTime.value = formatted;
        diaperTime.max = maxFormatted;
        diaperTime.step = "300";
    }
    if (pumpStartTime) {
        pumpStartTime.value = formatted;
        pumpStartTime.max = maxFormatted;
        pumpStartTime.step = "300";
    }
    if (pumpEndTime) {
        pumpEndTime.value = formatted;
        pumpEndTime.max = maxFormatted;
        pumpEndTime.step = "300";
    }
}

function handleEntryTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const value = select.value;

    const bottleFields = document.getElementById('bottle-fields') as HTMLElement;
    const diaperFields = document.getElementById('diaper-fields') as HTMLElement;
    const pumpFields = document.getElementById('pump-fields') as HTMLElement;
    const submitButton = document.getElementById('submit-entry') as HTMLButtonElement;

    bottleFields.style.display = 'none';
    diaperFields.style.display = 'none';
    pumpFields.style.display = 'none';

    if (value === 'bottle-breast-milk' || value === 'bottle-formula') {
        bottleFields.style.display = 'block';
        submitButton.style.display = 'block';
    } else if (value === 'diaper') {
        diaperFields.style.display = 'block';
        submitButton.style.display = 'block';
    } else if (value === 'pump') {
        pumpFields.style.display = 'block';
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }

    setDefaultTimes();
}

async function handleSubmitEntry(): Promise<void> {
    const entryType = (document.getElementById('entry-type') as HTMLSelectElement).value;
    const statusDiv = document.getElementById('submit-status') as HTMLDivElement;

    try {
        let entry: Entry | null = null;

        if (entryType === 'bottle-breast-milk' || entryType === 'bottle-formula') {
            const time = (document.getElementById('bottle-time') as HTMLInputElement).value;
            const amount = parseFloat((document.getElementById('bottle-amount') as HTMLInputElement).value);
            const notes = (document.getElementById('bottle-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            entry = {
                type: 'Feed',
                subType: entryType === 'bottle-breast-milk' ? 'Breast Milk' : 'Formula',
                startTime: new Date(time),
                amount: amount,
                unit: 'oz',
                notes: notes
            };
        } else if (entryType === 'diaper') {
            const time = (document.getElementById('diaper-time') as HTMLInputElement).value;
            const diaperType = (document.getElementById('diaper-type') as HTMLSelectElement).value;
            const notes = (document.getElementById('diaper-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }
            if (!diaperType) {
                throw new Error('Diaper type is required');
            }

            entry = {
                type: 'Diaper',
                diaperType: diaperType,
                startTime: new Date(time),
                notes: notes
            };
        } else if (entryType === 'pump') {
            const startTime = (document.getElementById('pump-start-time') as HTMLInputElement).value;
            const endTime = (document.getElementById('pump-end-time') as HTMLInputElement).value;
            const amount = parseFloat((document.getElementById('pump-amount') as HTMLInputElement).value);
            const notes = (document.getElementById('pump-notes') as HTMLTextAreaElement).value;

            if (!startTime) {
                throw new Error('Start time is required');
            }
            if (!endTime) {
                throw new Error('End time is required');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            entry = {
                type: 'Pump',
                startTime: new Date(startTime),
                endTime: new Date(endTime),
                amount: amount,
                unit: 'oz',
                notes: notes
            };
        }

        if (entry) {
            await addDoc(collection(db, 'entries'), {
                ...entry,
                startTime: Timestamp.fromDate(entry.startTime),
                endTime: entry.endTime ? Timestamp.fromDate(entry.endTime) : null
            });

            statusDiv.className = 'success';
            statusDiv.textContent = 'Entry added successfully!';
            statusDiv.style.display = 'block';

            clearForm();

            if (entry.type === 'Feed') {
                updateLastBottleTime();
            }

            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 3000);
        }
    } catch (error) {
        statusDiv.className = 'error';
        statusDiv.textContent = error instanceof Error ? error.message : 'Failed to add entry';
        statusDiv.style.display = 'block';
    }
}

function clearForm(): void {
    (document.getElementById('entry-type') as HTMLSelectElement).value = '';
    (document.getElementById('bottle-amount') as HTMLInputElement).value = '';
    (document.getElementById('bottle-notes') as HTMLTextAreaElement).value = '';
    (document.getElementById('diaper-notes') as HTMLTextAreaElement).value = '';
    (document.getElementById('pump-amount') as HTMLInputElement).value = '';
    (document.getElementById('pump-notes') as HTMLTextAreaElement).value = '';

    (document.getElementById('bottle-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('diaper-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('pump-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('submit-entry') as HTMLButtonElement).style.display = 'none';

    setDefaultTimes();
}

function switchTab(tab: string): void {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.view').forEach(view => (view as HTMLElement).style.display = 'none');

    if (tab === 'entry') {
        document.getElementById('entry-tab')?.classList.add('active');
        (document.getElementById('entry-view') as HTMLElement).style.display = 'block';
    } else if (tab === 'timeline') {
        document.getElementById('timeline-tab')?.classList.add('active');
        (document.getElementById('timeline-view') as HTMLElement).style.display = 'block';
        loadTimeline();
    } else if (tab === 'weekly') {
        document.getElementById('weekly-tab')?.classList.add('active');
        (document.getElementById('weekly-view') as HTMLElement).style.display = 'block';
        loadWeeklyView();
    }
}

async function loadTimeline(): Promise<void> {
    const timelineList = document.getElementById('timeline-list') as HTMLDivElement;
    const loadingDiv = document.getElementById('timeline-loading') as HTMLDivElement;

    loadingDiv.style.display = 'block';
    timelineList.innerHTML = '';

    try {
        const q = query(collection(db, 'entries'), orderBy('startTime', 'desc'));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            timelineList.innerHTML = '<p>No entries found.</p>';
        } else {
            let currentDate = '';

            snapshot.forEach(docSnapshot => {
                const data = docSnapshot.data();
                const docId = docSnapshot.id;
                const startTime = data.startTime.toDate();
                const dateKey = formatDateOnly(startTime);

                if (dateKey !== currentDate) {
                    currentDate = dateKey;
                    const dateHeader = document.createElement('div');
                    dateHeader.className = 'timeline-date-header';
                    dateHeader.textContent = dateKey;
                    timelineList.appendChild(dateHeader);
                }

                const entry = document.createElement('div');
                entry.className = 'timeline-entry';

                let typeDisplay = data.type;
                let detailsHTML = '';

                if (data.type === 'Feed') {
                    typeDisplay = `Bottle - ${data.subType}`;
                    const amount = convertToOz(data.amount, data.unit);
                    detailsHTML = `<div class="timeline-entry-details">Amount: ${amount.toFixed(2)} oz</div>`;
                } else if (data.type === 'Breast Feed') {
                    typeDisplay = 'Breast Feed';
                    detailsHTML = '';
                } else if (data.type === 'Diaper') {
                    detailsHTML = `<div class="timeline-entry-details">Type: ${data.diaperType}</div>`;
                } else if (data.type === 'Pump') {
                    const amount = convertToOz(data.amount, data.unit);
                    const endTime = data.endTime ? data.endTime.toDate() : null;
                    const duration = endTime ? Math.round((endTime.getTime() - startTime.getTime()) / 60000) : 0;
                    detailsHTML = `<div class="timeline-entry-details">Amount: ${amount.toFixed(2)} oz<br>Duration: ${duration} minutes</div>`;
                }

                const notesHTML = data.notes ? `<div class="timeline-entry-notes">${data.notes}</div>` : '';

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

                const editBtn = entry.querySelector('.edit-button') as HTMLButtonElement;
                const deleteBtn = entry.querySelector('.delete-button') as HTMLButtonElement;

                editBtn.addEventListener('click', () => openEditModal(docId, data));
                deleteBtn.addEventListener('click', () => deleteEntry(docId));

                timelineList.appendChild(entry);
            });
        }
    } catch (error) {
        timelineList.innerHTML = '<p class="error">Failed to load timeline</p>';
    } finally {
        loadingDiv.style.display = 'none';
    }
}

async function loadWeeklyView(): Promise<void> {
    const weeklyStats = document.getElementById('weekly-stats') as HTMLDivElement;
    const loadingDiv = document.getElementById('weekly-loading') as HTMLDivElement;
    const weekRange = document.getElementById('week-range') as HTMLSpanElement;
    const nextWeekBtn = document.getElementById('next-week') as HTMLButtonElement;
    const currentWeekBtn = document.getElementById('current-week') as HTMLButtonElement | null;

    const BIRTH_DATE = new Date('2025-11-05');
    const birthWeekStart = getWeekStart(BIRTH_DATE);
    const today = new Date();
    const currentWeekStartDate = getWeekStart(today);

    if (currentWeekStart < birthWeekStart) {
        currentWeekStart = new Date(birthWeekStart);
    }

    if (currentWeekStart >= currentWeekStartDate) {
        nextWeekBtn.disabled = true;
    } else {
        nextWeekBtn.disabled = false;
    }

    if (currentWeekBtn) {
        if (currentWeekStart.getTime() === currentWeekStartDate.getTime()) {
            currentWeekBtn.style.display = 'none';
        } else {
            currentWeekBtn.style.display = 'block';
        }
    }

    const weekEnd = getWeekEnd(currentWeekStart);
    weekRange.textContent = `${formatDateOnly(currentWeekStart).split(',')[1].trim()} - ${formatDateOnly(weekEnd).split(',')[1].trim()}`;

    loadingDiv.style.display = 'block';
    weeklyStats.innerHTML = '';

    try {
        const q = query(
            collection(db, 'entries'),
            where('startTime', '>=', Timestamp.fromDate(currentWeekStart)),
            where('startTime', '<=', Timestamp.fromDate(weekEnd)),
            orderBy('startTime', 'asc')
        );
        const snapshot = await getDocs(q);

        const dayStats: { [key: string]: any } = {};

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(date.getDate() + i);
            const dateKey = date.toDateString();

            dayStats[dateKey] = {
                date: date,
                bottles: { total: 0, breastMilk: 0, formula: 0, sessions: 0 },
                diapers: { total: 0, pee: 0, poo: 0, mixed: 0 },
                pumps: { total: 0, sessions: 0 }
            };
        }

        snapshot.forEach(doc => {
            const data = doc.data();
            const date = data.startTime.toDate();
            const dateKey = date.toDateString();

            if (dayStats[dateKey]) {
                if (data.type === 'Feed') {
                    const amount = convertToOz(data.amount, data.unit);
                    dayStats[dateKey].bottles.total += amount;
                    dayStats[dateKey].bottles.sessions++;
                    if (data.subType === 'Breast Milk') {
                        dayStats[dateKey].bottles.breastMilk += amount;
                    } else if (data.subType === 'Formula') {
                        dayStats[dateKey].bottles.formula += amount;
                    }
                } else if (data.type === 'Diaper') {
                    dayStats[dateKey].diapers.total++;
                    if (data.diaperType === 'Pee') {
                        dayStats[dateKey].diapers.pee++;
                    } else if (data.diaperType === 'Poo') {
                        dayStats[dateKey].diapers.poo++;
                    } else if (data.diaperType === 'Mixed') {
                        dayStats[dateKey].diapers.mixed++;
                    }
                } else if (data.type === 'Pump') {
                    const amount = convertToOz(data.amount, data.unit);
                    dayStats[dateKey].pumps.total += amount;
                    dayStats[dateKey].pumps.sessions++;
                }
            }
        });

        const daysArray = Object.keys(dayStats).map(key => dayStats[key]);

        const weeklyContainer = document.createElement('div');
        weeklyContainer.className = 'weekly-scroll-container';

        daysArray.forEach(stats => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day-stats';

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const statsDate = new Date(stats.date);
            statsDate.setHours(0, 0, 0, 0);

            if (today.getTime() === statsDate.getTime()) {
                dayDiv.classList.add('current-day');
            }

            const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][stats.date.getDay()];
            const dateStr = `${stats.date.getMonth() + 1}/${stats.date.getDate()}`;

            dayDiv.innerHTML = `
                <div class="day-stats-header">${dayName}<br>${dateStr}</div>
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">${stats.bottles.total.toFixed(1)} oz</div>
                    <div class="stat-line">${stats.bottles.sessions} feeds</div>
                    <div class="stat-line-small">Breast Milk: ${stats.bottles.breastMilk.toFixed(1)}</div>
                    <div class="stat-line-small">Formula: ${stats.bottles.formula.toFixed(1)}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">${stats.diapers.total} total</div>
                    <div class="stat-line-small">Pee: ${stats.diapers.pee}</div>
                    <div class="stat-line-small">Poo: ${stats.diapers.poo}</div>
                    <div class="stat-line-small">Mixed: ${stats.diapers.mixed}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">${stats.pumps.total.toFixed(1)} oz</div>
                    <div class="stat-line">${stats.pumps.sessions} sessions</div>
                </div>
            `;

            weeklyContainer.appendChild(dayDiv);
        });

        weeklyStats.appendChild(weeklyContainer);
    } catch (error) {
        weeklyStats.innerHTML = '<p class="error">Failed to load weekly view</p>';
    } finally {
        loadingDiv.style.display = 'none';
    }
}

function changeWeek(direction: number): void {
    const BIRTH_DATE = new Date('2025-11-05');
    const birthWeekStart = getWeekStart(BIRTH_DATE);
    const today = new Date();
    const currentWeekStartDate = getWeekStart(today);

    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() + (direction * 7));
    newWeekStart.setHours(0, 0, 0, 0);

    const birthWeekStartTime = new Date(birthWeekStart);
    birthWeekStartTime.setHours(0, 0, 0, 0);

    const currentWeekStartTime = new Date(currentWeekStartDate);
    currentWeekStartTime.setHours(0, 0, 0, 0);

    if (newWeekStart.getTime() < birthWeekStartTime.getTime()) {
        return;
    }

    if (newWeekStart.getTime() > currentWeekStartTime.getTime()) {
        return;
    }

    currentWeekStart = newWeekStart;
    loadWeeklyView();
}

function goToCurrentWeek(): void {
    currentWeekStart = getWeekStart(new Date());
    loadWeeklyView();
}

function convertToOz(amount: number, unit: string | undefined): number {
    if (unit === 'ml') {
        return amount * 0.033814;
    }
    return amount;
}

function openEditModal(docId: string, data: any): void {
    currentEditingEntryId = docId;
    const modal = document.getElementById('edit-modal') as HTMLElement;

    const editBottleFields = document.getElementById('edit-bottle-fields') as HTMLElement;
    const editDiaperFields = document.getElementById('edit-diaper-fields') as HTMLElement;
    const editPumpFields = document.getElementById('edit-pump-fields') as HTMLElement;

    editBottleFields.style.display = 'none';
    editDiaperFields.style.display = 'none';
    editPumpFields.style.display = 'none';

    const startTime = data.startTime.toDate();

    if (data.type === 'Feed') {
        editBottleFields.style.display = 'block';
        (document.getElementById('edit-bottle-time') as HTMLInputElement).value = formatDateTime(startTime);
        (document.getElementById('edit-bottle-amount') as HTMLInputElement).value = convertToOz(data.amount, data.unit).toFixed(2);
        (document.getElementById('edit-bottle-notes') as HTMLTextAreaElement).value = data.notes || '';
    } else if (data.type === 'Diaper') {
        editDiaperFields.style.display = 'block';
        (document.getElementById('edit-diaper-time') as HTMLInputElement).value = formatDateTime(startTime);
        (document.getElementById('edit-diaper-type') as HTMLSelectElement).value = data.diaperType;
        (document.getElementById('edit-diaper-notes') as HTMLTextAreaElement).value = data.notes || '';
    } else if (data.type === 'Pump') {
        editPumpFields.style.display = 'block';
        const endTime = data.endTime ? data.endTime.toDate() : startTime;
        (document.getElementById('edit-pump-start-time') as HTMLInputElement).value = formatDateTime(startTime);
        (document.getElementById('edit-pump-end-time') as HTMLInputElement).value = formatDateTime(endTime);
        (document.getElementById('edit-pump-amount') as HTMLInputElement).value = convertToOz(data.amount, data.unit).toFixed(2);
        (document.getElementById('edit-pump-notes') as HTMLTextAreaElement).value = data.notes || '';
    }

    modal.style.display = 'block';
}

function closeEditModal(): void {
    const modal = document.getElementById('edit-modal') as HTMLElement;
    modal.style.display = 'none';
    currentEditingEntryId = null;

    const statusDiv = document.getElementById('edit-status') as HTMLDivElement;
    statusDiv.style.display = 'none';
}

async function saveEdit(): Promise<void> {
    if (!currentEditingEntryId) return;

    const statusDiv = document.getElementById('edit-status') as HTMLDivElement;

    try {
        const editBottleFields = document.getElementById('edit-bottle-fields') as HTMLElement;
        const editDiaperFields = document.getElementById('edit-diaper-fields') as HTMLElement;
        const editPumpFields = document.getElementById('edit-pump-fields') as HTMLElement;

        let updateData: any = {};

        if (editBottleFields.style.display === 'block') {
            const time = (document.getElementById('edit-bottle-time') as HTMLInputElement).value;
            const amount = parseFloat((document.getElementById('edit-bottle-amount') as HTMLInputElement).value);
            const notes = (document.getElementById('edit-bottle-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            updateData = {
                startTime: Timestamp.fromDate(new Date(time)),
                amount: amount,
                unit: 'oz',
                notes: notes
            };
        } else if (editDiaperFields.style.display === 'block') {
            const time = (document.getElementById('edit-diaper-time') as HTMLInputElement).value;
            const diaperType = (document.getElementById('edit-diaper-type') as HTMLSelectElement).value;
            const notes = (document.getElementById('edit-diaper-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }
            if (!diaperType) {
                throw new Error('Diaper type is required');
            }

            updateData = {
                startTime: Timestamp.fromDate(new Date(time)),
                diaperType: diaperType,
                notes: notes
            };
        } else if (editPumpFields.style.display === 'block') {
            const startTime = (document.getElementById('edit-pump-start-time') as HTMLInputElement).value;
            const endTime = (document.getElementById('edit-pump-end-time') as HTMLInputElement).value;
            const amount = parseFloat((document.getElementById('edit-pump-amount') as HTMLInputElement).value);
            const notes = (document.getElementById('edit-pump-notes') as HTMLTextAreaElement).value;

            if (!startTime) {
                throw new Error('Start time is required');
            }
            if (!endTime) {
                throw new Error('End time is required');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            updateData = {
                startTime: Timestamp.fromDate(new Date(startTime)),
                endTime: Timestamp.fromDate(new Date(endTime)),
                amount: amount,
                unit: 'oz',
                notes: notes
            };
        }

        await updateDoc(doc(db, 'entries', currentEditingEntryId), updateData);

        statusDiv.className = 'success';
        statusDiv.textContent = 'Entry updated successfully!';
        statusDiv.style.display = 'block';

        setTimeout(() => {
            closeEditModal();
            loadTimeline();
        }, 1000);
    } catch (error) {
        statusDiv.className = 'error';
        statusDiv.textContent = error instanceof Error ? error.message : 'Failed to update entry';
        statusDiv.style.display = 'block';
    }
}

async function deleteEntry(docId: string): Promise<void> {
    if (!confirm('Are you sure you want to delete this entry?')) {
        return;
    }

    try {
        await deleteDoc(doc(db, 'entries', docId));
        loadTimeline();
        updateLastBottleTime();
    } catch (error) {
        alert('Failed to delete entry');
    }
}

async function startLastBottleTimer(): Promise<void> {
    console.log('Starting last bottle timer...');
    await updateLastBottleTime();

    if (lastBottleTimerInterval) {
        clearInterval(lastBottleTimerInterval);
    }

    lastBottleTimerInterval = window.setInterval(() => {
        updateLastBottleDisplay();
    }, 1000);

    console.log('Timer started, interval ID:', lastBottleTimerInterval);
}

async function updateLastBottleTime(): Promise<void> {
    console.log('Fetching last bottle time...');
    try {
        const q = query(
            collection(db, 'entries'),
            orderBy('startTime', 'desc')
        );
        const snapshot = await getDocs(q);

        console.log('Total entries found:', snapshot.docs.length);

        const lastBottle = snapshot.docs.find(doc => doc.data().type === 'Feed');

        if (lastBottle) {
            const lastBottleData = lastBottle.data();
            const lastBottleTime = lastBottleData.startTime.toDate();
            localStorage.setItem('lastBottleTime', lastBottleTime.toISOString());
            console.log('Last bottle time set:', lastBottleTime);
        } else {
            localStorage.removeItem('lastBottleTime');
            console.log('No bottle entries found');
        }

        updateLastBottleDisplay();
    } catch (error) {
        console.error('Error fetching last bottle time:', error);
        const displayElement = document.querySelector('.last-bottle-value') as HTMLElement;
        if (displayElement) {
            displayElement.textContent = 'Error loading';
        }
    }
}

function updateLastBottleDisplay(): void {
    const displayElement = document.querySelector('.last-bottle-value') as HTMLElement;
    if (!displayElement) {
        console.log('Display element not found');
        return;
    }

    const lastBottleTimeStr = localStorage.getItem('lastBottleTime');
    console.log('Updating display, last bottle time from storage:', lastBottleTimeStr);

    if (!lastBottleTimeStr) {
        displayElement.textContent = 'No bottles recorded';
        return;
    }

    const lastBottleTime = new Date(lastBottleTimeStr);
    const now = new Date();
    const diffMs = now.getTime() - lastBottleTime.getTime();

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    if (hours > 0) {
        displayElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        displayElement.textContent = `${minutes}m ${seconds}s`;
    } else {
        displayElement.textContent = `${seconds}s`;
    }
}

document.getElementById('passcode-submit')?.addEventListener('click', checkPasscode);
document.getElementById('passcode-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPasscode();
    }
});