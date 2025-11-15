import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, Timestamp, updateDoc, deleteDoc, doc, limit } from 'firebase/firestore';
import { PASSCODE, AUTH_KEY, AUTH_DURATION } from './config/secrets';
import { FIREBASECONFIG } from './config/firebase-config'

const firebaseApp = initializeApp(FIREBASECONFIG);
const db = getFirestore(firebaseApp);

function isAuthenticated(): boolean {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return false;

    try {
        const { timestamp } = JSON.parse(authData);
        const now = Date.now();

        if (now - timestamp < AUTH_DURATION) {
            return true;
        } else {
            localStorage.removeItem(AUTH_KEY);
            return false;
        }
    } catch {
        return false;
    }
}

function setAuthenticated(): void {
    const authData = {
        timestamp: Date.now()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
}

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
let lastPeeTimerInterval: number | null = null;
let lastPooTimerInterval: number | null = null;
let lastMixedTimerInterval: number | null = null;
let lastPumpTimerInterval: number | null = null;

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

function formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
        passcodeInput.blur();
        setAuthenticated();
        passcodeScreen.style.display = 'none';
        appScreen.style.display = 'block';

        setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 0);

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
    setDefaultDateFilters();
    startAllTimers();
    enforceNumericInputs();
    setupUnitConversion();
    window.scrollTo(0, 0);
}

function setDefaultDateFilters(): void {
    const today = new Date();
    const startDateInput = document.getElementById('start-date-filter') as HTMLInputElement;
    const endDateInput = document.getElementById('end-date-filter') as HTMLInputElement;

    if (startDateInput) {
        startDateInput.value = formatDateForInput(today);
    }
    if (endDateInput) {
        endDateInput.value = formatDateForInput(today);
    }
}

function enforceNumericInputs(): void {
    const amountInputs = [
        document.getElementById('bottle-amount') as HTMLInputElement,
        document.getElementById('pump-amount') as HTMLInputElement,
        document.getElementById('edit-bottle-amount') as HTMLInputElement,
        document.getElementById('edit-pump-amount') as HTMLInputElement
    ];

    amountInputs.forEach(input => {
        if (!input) return;

        input.addEventListener('keypress', (e: KeyboardEvent) => {
            const char = e.key;
            const currentValue = input.value;

            if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key === 'Escape' || e.key === 'Enter') {
                return;
            }

            if (e.ctrlKey || e.metaKey) {
                return;
            }

            if (char >= '0' && char <= '9') {
                return;
            }

            if (char === '.' && currentValue.indexOf('.') === -1) {
                return;
            }

            e.preventDefault();
        });

        input.addEventListener('paste', (e: ClipboardEvent) => {
            e.preventDefault();
            const pastedText = e.clipboardData?.getData('text') || '';
            const numericText = pastedText.replace(/[^0-9.]/g, '');

            const parts = numericText.split('.');
            const cleanText = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : numericText;

            document.execCommand('insertText', false, cleanText);
        });
    });
}

function setupUnitConversion(): void {
    const bottleUnit = document.getElementById('bottle-unit') as HTMLSelectElement;
    const bottleAmount = document.getElementById('bottle-amount') as HTMLInputElement;
    const pumpUnit = document.getElementById('pump-unit') as HTMLSelectElement;
    const pumpAmount = document.getElementById('pump-amount') as HTMLInputElement;
    const editBottleUnit = document.getElementById('edit-bottle-unit') as HTMLSelectElement;
    const editBottleAmount = document.getElementById('edit-bottle-amount') as HTMLInputElement;
    const editPumpUnit = document.getElementById('edit-pump-unit') as HTMLSelectElement;
    const editPumpAmount = document.getElementById('edit-pump-amount') as HTMLInputElement;

    if (bottleUnit && bottleAmount) {
        bottleUnit.addEventListener('change', () => {
            convertAmountInInput(bottleAmount, bottleUnit.value);
        });
    }

    if (pumpUnit && pumpAmount) {
        pumpUnit.addEventListener('change', () => {
            convertAmountInInput(pumpAmount, pumpUnit.value);
        });
    }

    if (editBottleUnit && editBottleAmount) {
        editBottleUnit.addEventListener('change', () => {
            convertAmountInInput(editBottleAmount, editBottleUnit.value);
        });
    }

    if (editPumpUnit && editPumpAmount) {
        editPumpUnit.addEventListener('change', () => {
            convertAmountInInput(editPumpAmount, editPumpUnit.value);
        });
    }
}

function convertAmountInInput(amountInput: HTMLInputElement, newUnit: string): void {
    const currentValue = parseFloat(amountInput.value);
    if (isNaN(currentValue) || currentValue <= 0) {
        return;
    }

    const previousUnit = amountInput.dataset.lastUnit || 'oz';

    if (previousUnit === newUnit) {
        return;
    }

    let convertedValue: number;
    if (newUnit === 'ml' && previousUnit === 'oz') {
        convertedValue = currentValue * 29.5735;
    } else if (newUnit === 'oz' && previousUnit === 'ml') {
        convertedValue = currentValue * 0.033814;
    } else {
        return;
    }

    amountInput.value = convertedValue.toFixed(2);
    amountInput.dataset.lastUnit = newUnit;
}

function validateTime(input: HTMLInputElement): boolean {
    if (!input.value) return true;

    const selectedTime = new Date(input.value);
    const now = new Date();

    if (selectedTime > now) {
        alert(`Cannot select future times. Please select a time in the past.`);
        input.value = formatDateTime(now);
        return false;
    }

    return true;
}

function attachTimeValidation(inputId: string): void {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (!input) return;

    if (inputId === 'pump-end-time' || inputId === 'edit-pump-end-time') {
        return;
    }

    input.addEventListener('blur', () => {
        validateTime(input);
    });

    input.addEventListener('change', () => {
        validateTime(input);
    });
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

    const startDateFilter = document.getElementById('start-date-filter') as HTMLInputElement;
    const endDateFilter = document.getElementById('end-date-filter') as HTMLInputElement;
    const typeFilter = document.getElementById('type-filter') as HTMLSelectElement;
    const todayButton = document.getElementById('today-button') as HTMLButtonElement;
    const last48Button = document.getElementById('last-48-button') as HTMLButtonElement;
    const last72Button = document.getElementById('last-72-button') as HTMLButtonElement;
    const lastWeekButton = document.getElementById('last-week-button') as HTMLButtonElement;
    const allTimeButton = document.getElementById('all-time-button') as HTMLButtonElement;

    startDateFilter.addEventListener('change', () => loadTimeline());
    endDateFilter.addEventListener('change', () => loadTimeline());
    typeFilter.addEventListener('change', () => loadTimeline());
    todayButton.addEventListener('click', () => handleQuickFilter('today'));
    last48Button.addEventListener('click', () => handleQuickFilter('last-48'));
    last72Button.addEventListener('click', () => handleQuickFilter('last-72'));
    lastWeekButton.addEventListener('click', () => handleQuickFilter('last-week'));
    allTimeButton.addEventListener('click', () => handleQuickFilter('all-time'));

    attachTimeValidation('bottle-time');
    attachTimeValidation('diaper-time');
    attachTimeValidation('pump-start-time');
    attachTimeValidation('pump-end-time');
    attachTimeValidation('edit-bottle-time');
    attachTimeValidation('edit-diaper-time');
    attachTimeValidation('edit-pump-start-time');
    attachTimeValidation('edit-pump-end-time');
}

function setDefaultTimes(): void {
    const now = new Date();
    const formatted = formatDateTime(now);

    const bottleTime = document.getElementById('bottle-time') as HTMLInputElement | null;
    const diaperTime = document.getElementById('diaper-time') as HTMLInputElement | null;
    const pumpStartTime = document.getElementById('pump-start-time') as HTMLInputElement | null;
    const pumpEndTime = document.getElementById('pump-end-time') as HTMLInputElement | null;

    if (bottleTime) {
        bottleTime.value = formatted;
    }
    if (diaperTime) {
        diaperTime.value = formatted;
    }
    if (pumpStartTime) {
        pumpStartTime.value = formatted;
    }
    if (pumpEndTime) {
        pumpEndTime.value = formatted;
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
        const bottleUnit = document.getElementById('bottle-unit') as HTMLSelectElement;
        const bottleAmount = document.getElementById('bottle-amount') as HTMLInputElement;
        bottleAmount.dataset.lastUnit = bottleUnit.value;
    } else if (value === 'diaper') {
        diaperFields.style.display = 'block';
        submitButton.style.display = 'block';
    } else if (value === 'pump') {
        pumpFields.style.display = 'block';
        submitButton.style.display = 'block';
        const pumpUnit = document.getElementById('pump-unit') as HTMLSelectElement;
        const pumpAmount = document.getElementById('pump-amount') as HTMLInputElement;
        pumpAmount.dataset.lastUnit = pumpUnit.value;
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
        const now = new Date();

        if (entryType === 'bottle-breast-milk' || entryType === 'bottle-formula') {
            const timeInput = document.getElementById('bottle-time') as HTMLInputElement;
            const time = timeInput.value;
            const amount = parseFloat((document.getElementById('bottle-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('bottle-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('bottle-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }

            const selectedTime = new Date(timeInput.value);
            if (selectedTime > now) {
                throw new Error('Cannot add entries in the future');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            entry = {
                type: 'Feed',
                subType: entryType === 'bottle-breast-milk' ? 'Breast Milk' : 'Formula',
                startTime: selectedTime,
                amount: amount,
                unit: unit,
                notes: notes
            };
        } else if (entryType === 'diaper') {
            const timeInput = document.getElementById('diaper-time') as HTMLInputElement;
            const time = timeInput.value;
            const diaperType = (document.getElementById('diaper-type') as HTMLSelectElement).value;
            const notes = (document.getElementById('diaper-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }

            const selectedTime = new Date(timeInput.value);
            if (selectedTime > now) {
                throw new Error('Cannot add entries in the future');
            }
            if (!diaperType) {
                throw new Error('Diaper type is required');
            }

            entry = {
                type: 'Diaper',
                diaperType: diaperType,
                startTime: selectedTime,
                notes: notes
            };
        } else if (entryType === 'pump') {
            const startTimeInput = document.getElementById('pump-start-time') as HTMLInputElement;
            const endTimeInput = document.getElementById('pump-end-time') as HTMLInputElement;
            const startTime = startTimeInput.value;
            const endTime = endTimeInput.value;
            const amount = parseFloat((document.getElementById('pump-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('pump-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('pump-notes') as HTMLTextAreaElement).value;

            if (!startTime) {
                throw new Error('Start time is required');
            }
            if (!endTime) {
                throw new Error('End time is required');
            }

            const selectedStartTime = new Date(startTimeInput.value);
            const selectedEndTime = new Date(endTimeInput.value);
            if (selectedStartTime > now) {
                throw new Error('Cannot add entries in the future');
            }
            if (selectedEndTime < selectedStartTime) {
                throw new Error('End time must be after start time');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            entry = {
                type: 'Pump',
                startTime: selectedStartTime,
                endTime: selectedEndTime,
                amount: amount,
                unit: unit,
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
                await updateLastBottleTime();
            } else if (entry.type === 'Diaper') {
                await updateLastDiaperTimes();
            } else if (entry.type === 'Pump') {
                await updateLastPumpTime();
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

    window.scrollTo(0, 0);
}

function handleQuickFilter(filterType: string): void {
    const startDateInput = document.getElementById('start-date-filter') as HTMLInputElement;
    const endDateInput = document.getElementById('end-date-filter') as HTMLInputElement;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (filterType === 'all-time') {
        startDateInput.value = '';
        endDateInput.value = '';
    } else if (filterType === 'today') {
        startDateInput.value = formatDateForInput(today);
        endDateInput.value = formatDateForInput(today);
    } else if (filterType === 'last-48') {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        startDateInput.value = formatDateForInput(yesterday);
        endDateInput.value = formatDateForInput(today);
    } else if (filterType === 'last-72') {
        const twoDaysAgo = new Date(today);
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        startDateInput.value = formatDateForInput(twoDaysAgo);
        endDateInput.value = formatDateForInput(today);
    } else if (filterType === 'last-week') {
        const sixDaysAgo = new Date(today);
        sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
        startDateInput.value = formatDateForInput(sixDaysAgo);
        endDateInput.value = formatDateForInput(today);
    }

    loadTimeline();
}

async function loadTimeline(): Promise<void> {
    const timelineList = document.getElementById('timeline-list') as HTMLDivElement;
    const loadingDiv = document.getElementById('timeline-loading') as HTMLDivElement;
    const startDateInput = (document.getElementById('start-date-filter') as HTMLInputElement).value;
    const endDateInput = (document.getElementById('end-date-filter') as HTMLInputElement).value;
    const typeFilter = (document.getElementById('type-filter') as HTMLSelectElement).value;

    loadingDiv.style.display = 'block';
    timelineList.innerHTML = '';

    const existingSummary = document.querySelector('.filter-summary');
    if (existingSummary) {
        existingSummary.remove();
    }

    try {
        let q = query(collection(db, 'entries'), orderBy('startTime', 'desc'));

        if (startDateInput && endDateInput) {
            const [startYear, startMonth, startDay] = startDateInput.split('-').map(Number);
            const startDate = new Date(startYear, startMonth - 1, startDay, 0, 0, 0, 0);

            const [endYear, endMonth, endDay] = endDateInput.split('-').map(Number);
            const endDate = new Date(endYear, endMonth - 1, endDay, 23, 59, 59, 999);

            q = query(
                collection(db, 'entries'),
                where('startTime', '>=', Timestamp.fromDate(startDate)),
                where('startTime', '<=', Timestamp.fromDate(endDate)),
                orderBy('startTime', 'desc')
            );
        }

        const snapshot = await getDocs(q);

        const summaryStats = {
            bottles: { total: 0, breastMilk: 0, formula: 0, sessions: 0 },
            diapers: { total: 0, pee: 0, poo: 0, mixed: 0 },
            pumps: { total: 0, sessions: 0 }
        };

        if (snapshot.empty) {
            timelineList.innerHTML = '<p>No entries found.</p>';
        } else {
            let currentDate = '';
            let hasVisibleEntries = false;

            snapshot.forEach(docSnapshot => {
                const data = docSnapshot.data();
                const docId = docSnapshot.id;

                if (typeFilter !== 'all') {
                    let entryType = '';
                    if (data.type === 'Feed' && data.subType === 'Breast Milk') {
                        entryType = 'bottle-breast-milk';
                    } else if (data.type === 'Feed' && data.subType === 'Formula') {
                        entryType = 'bottle-formula';
                    } else if (data.type === 'Diaper') {
                        entryType = 'diaper';
                    } else if (data.type === 'Pump') {
                        entryType = 'pump';
                    }

                    if (entryType !== typeFilter) {
                        return;
                    }
                }

                if (data.type === 'Feed') {
                    const amount = convertToOz(data.amount, data.unit);
                    summaryStats.bottles.total += amount;
                    summaryStats.bottles.sessions++;
                    if (data.subType === 'Breast Milk') {
                        summaryStats.bottles.breastMilk += amount;
                    } else if (data.subType === 'Formula') {
                        summaryStats.bottles.formula += amount;
                    }
                } else if (data.type === 'Diaper') {
                    summaryStats.diapers.total++;
                    if (data.diaperType === 'Pee') {
                        summaryStats.diapers.pee++;
                    } else if (data.diaperType === 'Poo') {
                        summaryStats.diapers.poo++;
                    } else if (data.diaperType === 'Mixed') {
                        summaryStats.diapers.mixed++;
                    }
                } else if (data.type === 'Pump') {
                    const amount = convertToOz(data.amount, data.unit);
                    summaryStats.pumps.total += amount;
                    summaryStats.pumps.sessions++;
                }

                hasVisibleEntries = true;
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
                let backgroundColor = '';

                if (data.type === 'Feed') {
                    typeDisplay = `Bottle - ${data.subType}`;
                    detailsHTML = `<div class="timeline-entry-details">Amount: ${formatBothUnits(data.amount, data.unit)}</div>`;
                    backgroundColor = '#d9ebf2';
                } else if (data.type === 'Breast Feed') {
                    typeDisplay = 'Breast Feed';
                    detailsHTML = '';
                    backgroundColor = '#d9ebf2';
                } else if (data.type === 'Diaper') {
                    detailsHTML = `<div class="timeline-entry-details">Type: ${data.diaperType}</div>`;
                    backgroundColor = '#fce2d4';
                } else if (data.type === 'Pump') {
                    const endTime = data.endTime ? data.endTime.toDate() : null;
                    const duration = endTime ? Math.round((endTime.getTime() - startTime.getTime()) / 60000) : 0;
                    detailsHTML = `<div class="timeline-entry-details">Amount: ${formatBothUnits(data.amount, data.unit)}<br>Duration: ${duration} minutes</div>`;
                    backgroundColor = '#e2daf2';
                }

                entry.style.backgroundColor = backgroundColor;

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

            if (!hasVisibleEntries) {
                timelineList.innerHTML = '<p>No entries match the selected filters.</p>';
            } else {
                const summaryDiv = document.createElement('div');
                summaryDiv.className = 'filter-summary';

                let summaryHTML = '<div class="summary-header">Summary</div><div class="summary-stats">';

                if (typeFilter === 'all' || typeFilter === 'bottle-breast-milk' || typeFilter === 'bottle-formula') {
                    summaryHTML += `
                        <div class="stat-group">
                            <div class="stat-group-title">Bottles</div>
                            <div class="stat-line">Number of feeds: ${summaryStats.bottles.sessions}</div>
                            <div class="stat-line">Breast Milk: ${formatBothUnits(summaryStats.bottles.breastMilk, 'oz')}</div>
                            <div class="stat-line">Formula: ${formatBothUnits(summaryStats.bottles.formula, 'oz')}</div>
                            <div class="stat-line">Total volume: ${formatBothUnits(summaryStats.bottles.total, 'oz')}</div>
                        </div>
                    `;
                }

                if (typeFilter === 'all' || typeFilter === 'diaper') {
                    summaryHTML += `
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${summaryStats.diapers.pee}</div>
                            <div class="stat-line">Poo: ${summaryStats.diapers.poo}</div>
                            <div class="stat-line">Mixed: ${summaryStats.diapers.mixed}</div>
                            <div class="stat-line">Total diapers: ${summaryStats.diapers.total}</div>
                        </div>
                    `;
                }

                if (typeFilter === 'all' || typeFilter === 'pump') {
                    summaryHTML += `
                        <div class="stat-group">
                            <div class="stat-group-title">Pumps</div>
                            <div class="stat-line">Total volume: ${formatBothUnits(summaryStats.pumps.total, 'oz')}</div>
                            <div class="stat-line">Number of sessions: ${summaryStats.pumps.sessions}</div>
                        </div>
                    `;
                }

                summaryHTML += '</div>';
                summaryDiv.innerHTML = summaryHTML;

                const filterSection = document.querySelector('.filter-section');
                if (filterSection && filterSection.parentNode) {
                    filterSection.parentNode.insertBefore(summaryDiv, timelineList);
                }
            }
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
    const prevWeekBtn = document.getElementById('prev-week') as HTMLButtonElement;
    const nextWeekBtn = document.getElementById('next-week') as HTMLButtonElement;
    const currentWeekBtn = document.getElementById('current-week') as HTMLButtonElement | null;

    const BIRTH_DATE = new Date('2025-11-05');
    const birthWeekStart = getWeekStart(BIRTH_DATE);
    birthWeekStart.setHours(0, 0, 0, 0);

    const today = new Date();
    const currentWeekStartDate = getWeekStart(today);
    currentWeekStartDate.setHours(0, 0, 0, 0);

    const normalizedCurrentWeekStart = new Date(currentWeekStart);
    normalizedCurrentWeekStart.setHours(0, 0, 0, 0);

    if (normalizedCurrentWeekStart < birthWeekStart) {
        currentWeekStart = new Date(birthWeekStart);
    }

    if (normalizedCurrentWeekStart.getTime() <= birthWeekStart.getTime()) {
        prevWeekBtn.disabled = true;
    } else {
        prevWeekBtn.disabled = false;
    }

    if (normalizedCurrentWeekStart.getTime() >= currentWeekStartDate.getTime()) {
        nextWeekBtn.disabled = true;
    } else {
        nextWeekBtn.disabled = false;
    }

    if (currentWeekBtn) {
        if (normalizedCurrentWeekStart.getTime() === currentWeekStartDate.getTime()) {
            currentWeekBtn.disabled = true;
            currentWeekBtn.style.backgroundColor = '#999';
            currentWeekBtn.style.color = '#ccc';
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
                } else if (data.type === 'Breast Feed') {
                    dayStats[dateKey].bottles.sessions++;
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

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let currentDayIndex = -1;

        daysArray.forEach((stats, index) => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day-stats';

            const statsDate = new Date(stats.date);
            statsDate.setHours(0, 0, 0, 0);

            if (today.getTime() === statsDate.getTime()) {
                dayDiv.classList.add('current-day');
                currentDayIndex = index;
            }

            const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][stats.date.getDay()];
            const dateStr = `${stats.date.getMonth() + 1}/${stats.date.getDate()}`;

            dayDiv.innerHTML = `
                <div class="day-stats-header">${dayName}<br>${dateStr}</div>
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${stats.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${formatBothUnits(stats.bottles.breastMilk, 'oz')}</div>
                    <div class="stat-line">Formula: ${formatBothUnits(stats.bottles.formula, 'oz')}</div>
                    <div class="stat-line">Total volume: ${formatBothUnits(stats.bottles.total, 'oz')}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${stats.diapers.pee}</div>
                    <div class="stat-line">Poo: ${stats.diapers.poo}</div>
                    <div class="stat-line">Mixed: ${stats.diapers.mixed}</div>
                    <div class="stat-line">Total diapers: ${stats.diapers.total}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${formatBothUnits(stats.pumps.total, 'oz')}</div>
                    <div class="stat-line">Number of sessions: ${stats.pumps.sessions}</div>
                </div>
            `;

            weeklyContainer.appendChild(dayDiv);
        });

        weeklyStats.appendChild(weeklyContainer);

        if (currentDayIndex !== -1) {
            setTimeout(() => {
                const currentDayElement = weeklyContainer.children[currentDayIndex] as HTMLElement;
                if (currentDayElement) {
                    const containerWidth = weeklyContainer.offsetWidth;
                    const cardWidth = currentDayElement.offsetWidth;
                    const scrollPosition = currentDayElement.offsetLeft - (containerWidth / 2) + (cardWidth / 2);

                    weeklyContainer.scrollTo({
                        left: Math.max(0, scrollPosition),
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
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

function convertToMl(amount: number, unit: string | undefined): number {
    if (unit === 'oz') {
        return amount * 29.5735;
    }
    return amount;
}

function formatBothUnits(amount: number, unit: string | undefined): string {
    const oz = convertToOz(amount, unit);
    const ml = convertToMl(amount, unit);
    return `${oz.toFixed(1)} oz / ${ml.toFixed(0)} ml`;
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
        const editBottleUnit = document.getElementById('edit-bottle-unit') as HTMLSelectElement;
        const editBottleAmount = document.getElementById('edit-bottle-amount') as HTMLInputElement;
        (document.getElementById('edit-bottle-time') as HTMLInputElement).value = formatDateTime(startTime);
        editBottleAmount.value = data.amount.toFixed(2);
        editBottleUnit.value = data.unit || 'oz';
        editBottleAmount.dataset.lastUnit = data.unit || 'oz';
        (document.getElementById('edit-bottle-notes') as HTMLTextAreaElement).value = data.notes || '';
    } else if (data.type === 'Diaper') {
        editDiaperFields.style.display = 'block';
        (document.getElementById('edit-diaper-time') as HTMLInputElement).value = formatDateTime(startTime);
        (document.getElementById('edit-diaper-type') as HTMLSelectElement).value = data.diaperType;
        (document.getElementById('edit-diaper-notes') as HTMLTextAreaElement).value = data.notes || '';
    } else if (data.type === 'Pump') {
        editPumpFields.style.display = 'block';
        const editPumpUnit = document.getElementById('edit-pump-unit') as HTMLSelectElement;
        const editPumpAmount = document.getElementById('edit-pump-amount') as HTMLInputElement;
        const endTime = data.endTime ? data.endTime.toDate() : startTime;
        (document.getElementById('edit-pump-start-time') as HTMLInputElement).value = formatDateTime(startTime);
        (document.getElementById('edit-pump-end-time') as HTMLInputElement).value = formatDateTime(endTime);
        editPumpAmount.value = data.amount.toFixed(2);
        editPumpUnit.value = data.unit || 'oz';
        editPumpAmount.dataset.lastUnit = data.unit || 'oz';
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
        const now = new Date();

        if (editBottleFields.style.display === 'block') {
            const timeInput = document.getElementById('edit-bottle-time') as HTMLInputElement;
            const time = timeInput.value;
            const amount = parseFloat((document.getElementById('edit-bottle-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('edit-bottle-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('edit-bottle-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }

            const selectedTime = new Date(timeInput.value);
            if (selectedTime > now) {
                throw new Error('Cannot set time in the future');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            updateData = {
                startTime: Timestamp.fromDate(selectedTime),
                amount: amount,
                unit: unit,
                notes: notes
            };
        } else if (editDiaperFields.style.display === 'block') {
            const timeInput = document.getElementById('edit-diaper-time') as HTMLInputElement;
            const time = timeInput.value;
            const diaperType = (document.getElementById('edit-diaper-type') as HTMLSelectElement).value;
            const notes = (document.getElementById('edit-diaper-notes') as HTMLTextAreaElement).value;

            if (!time) {
                throw new Error('Start time is required');
            }

            const selectedTime = new Date(timeInput.value);
            if (selectedTime > now) {
                throw new Error('Cannot set time in the future');
            }
            if (!diaperType) {
                throw new Error('Diaper type is required');
            }

            updateData = {
                startTime: Timestamp.fromDate(selectedTime),
                diaperType: diaperType,
                notes: notes
            };
        } else if (editPumpFields.style.display === 'block') {
            const startTimeInput = document.getElementById('edit-pump-start-time') as HTMLInputElement;
            const endTimeInput = document.getElementById('edit-pump-end-time') as HTMLInputElement;
            const startTime = startTimeInput.value;
            const endTime = endTimeInput.value;
            const amount = parseFloat((document.getElementById('edit-pump-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('edit-pump-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('edit-pump-notes') as HTMLTextAreaElement).value;

            if (!startTime) {
                throw new Error('Start time is required');
            }
            if (!endTime) {
                throw new Error('End time is required');
            }

            const selectedStartTime = new Date(startTimeInput.value);
            const selectedEndTime = new Date(endTimeInput.value);
            if (selectedStartTime > now) {
                throw new Error('Cannot set time in the future');
            }
            if (selectedEndTime < selectedStartTime) {
                throw new Error('End time must be after start time');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            updateData = {
                startTime: Timestamp.fromDate(selectedStartTime),
                endTime: Timestamp.fromDate(selectedEndTime),
                amount: amount,
                unit: unit,
                notes: notes
            };
        }

        await updateDoc(doc(db, 'entries', currentEditingEntryId), updateData);

        statusDiv.className = 'success';
        statusDiv.textContent = 'Entry updated successfully!';
        statusDiv.style.display = 'block';

        setTimeout(async () => {
            closeEditModal();
            loadTimeline();
            await updateAllEventTimes();
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
        await updateAllEventTimes();
    } catch (error) {
        alert('Failed to delete entry');
    }
}

async function startAllTimers(): Promise<void> {
    await updateAllEventTimes();

    if (lastBottleTimerInterval) clearInterval(lastBottleTimerInterval);
    if (lastPeeTimerInterval) clearInterval(lastPeeTimerInterval);
    if (lastPooTimerInterval) clearInterval(lastPooTimerInterval);
    if (lastMixedTimerInterval) clearInterval(lastMixedTimerInterval);
    if (lastPumpTimerInterval) clearInterval(lastPumpTimerInterval);

    lastBottleTimerInterval = window.setInterval(() => updateLastBottleDisplay(), 1000);
    lastPeeTimerInterval = window.setInterval(() => updateLastPeeDisplay(), 1000);
    lastPooTimerInterval = window.setInterval(() => updateLastPooDisplay(), 1000);
    lastMixedTimerInterval = window.setInterval(() => updateLastMixedDisplay(), 1000);
    lastPumpTimerInterval = window.setInterval(() => updateLastPumpDisplay(), 1000);
}

async function updateAllEventTimes(): Promise<void> {
    await Promise.all([
        updateLastBottleTime(),
        updateLastDiaperTimes(),
        updateLastPumpTime()
    ]);
}

async function updateLastBottleTime(): Promise<void> {
    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Feed'),
            orderBy('startTime', 'desc'),
            limit(1)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            const lastBottleData = snapshot.docs[0].data();
            const lastBottleTime = lastBottleData.startTime.toDate();
            localStorage.setItem('lastBottleTime', lastBottleTime.toISOString());
        } else {
            localStorage.removeItem('lastBottleTime');
        }

        updateLastBottleDisplay();
    } catch (error) {
        console.error('Error fetching last bottle time:', error);
    }
}

async function updateLastDiaperTimes(): Promise<void> {
    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Diaper'),
            orderBy('startTime', 'desc')
        );
        const snapshot = await getDocs(q);

        let lastPee: Date | undefined = undefined;
        let lastPoo: Date | undefined = undefined;
        let lastMixed: Date | undefined = undefined;

        snapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            const time = data.startTime.toDate() as Date;

            if (data.diaperType === 'Pee' && lastPee === undefined) {
                lastPee = time;
            } else if (data.diaperType === 'Poo' && lastPoo === undefined) {
                lastPoo = time;
            } else if (data.diaperType === 'Mixed' && lastMixed === undefined) {
                lastMixed = time;
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

        if (lastMixed !== undefined) {
            localStorage.setItem('lastMixedTime', (lastMixed as Date).toISOString());
        } else {
            localStorage.removeItem('lastMixedTime');
        }

        updateLastPeeDisplay();
        updateLastPooDisplay();
        updateLastMixedDisplay();
    } catch (error) {
        console.error('Error fetching last diaper times:', error);
    }
}

async function updateLastPumpTime(): Promise<void> {
    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Pump'),
            orderBy('startTime', 'desc'),
            limit(1)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            const lastPumpData = snapshot.docs[0].data();
            const lastPumpTime = lastPumpData.startTime.toDate();
            localStorage.setItem('lastPumpTime', lastPumpTime.toISOString());
        } else {
            localStorage.removeItem('lastPumpTime');
        }

        updateLastPumpDisplay();
    } catch (error) {
        console.error('Error fetching last pump time:', error);
    }
}

function formatTimeDifference(timeStr: string | null, defaultMessage: string): string {
    if (!timeStr) {
        return defaultMessage;
    }

    const eventTime = new Date(timeStr);
    const now = new Date();
    const diffMs = now.getTime() - eventTime.getTime();

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    } else {
        return `${seconds}s`;
    }
}

function updateLastBottleDisplay(): void {
    const displayElement = document.querySelector('.last-bottle-value') as HTMLElement;
    if (!displayElement) return;

    const lastBottleTimeStr = localStorage.getItem('lastBottleTime');
    displayElement.textContent = formatTimeDifference(lastBottleTimeStr, 'No bottles recorded');
}

function updateLastPeeDisplay(): void {
    const displayElement = document.getElementById('last-pee-value') as HTMLElement;
    if (!displayElement) return;

    const lastPeeTimeStr = localStorage.getItem('lastPeeTime');
    displayElement.textContent = formatTimeDifference(lastPeeTimeStr, 'No pee recorded');
}

function updateLastPooDisplay(): void {
    const displayElement = document.getElementById('last-poo-value') as HTMLElement;
    if (!displayElement) return;

    const lastPooTimeStr = localStorage.getItem('lastPooTime');
    displayElement.textContent = formatTimeDifference(lastPooTimeStr, 'No poo recorded');
}

function updateLastMixedDisplay(): void {
    const displayElement = document.getElementById('last-mixed-value') as HTMLElement;
    if (!displayElement) return;

    const lastMixedTimeStr = localStorage.getItem('lastMixedTime');
    displayElement.textContent = formatTimeDifference(lastMixedTimeStr, 'No mixed recorded');
}

function updateLastPumpDisplay(): void {
    const displayElement = document.getElementById('last-pump-value') as HTMLElement;
    if (!displayElement) return;

    const lastPumpTimeStr = localStorage.getItem('lastPumpTime');
    displayElement.textContent = formatTimeDifference(lastPumpTimeStr, 'No pumps recorded');
}

document.getElementById('passcode-submit')?.addEventListener('click', checkPasscode);
document.getElementById('passcode-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPasscode();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (isAuthenticated()) {
        const passcodeScreen = document.getElementById('passcode-screen') as HTMLDivElement;
        const appScreen = document.getElementById('app') as HTMLDivElement;

        passcodeScreen.style.display = 'none';
        appScreen.style.display = 'block';

        setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 0);

        initializeUI();
    }
});