import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, Timestamp, updateDoc, deleteDoc, doc, limit, setDoc, getDoc } from 'firebase/firestore';
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
let lastPumpTimerInterval: number | null = null;
let timeAwakeTimerInterval: number | null = null;
let napTimeTimerInterval: number | null = null;
let vitaminDDateCheckInterval: number | null = null;
let dataChart: any = null;
let weeklyViewVersion = 0;

function getWeekStart(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
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

function getDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

async function loadVitaminDStatus(): Promise<void> {
    const checkbox = document.getElementById('vitamin-d-checkbox') as HTMLInputElement;
    const statusDiv = document.getElementById('vitamin-d-status') as HTMLDivElement;
    const labelText = document.getElementById('vitamin-d-label-text') as HTMLSpanElement;

    if (!checkbox || !statusDiv || !labelText) return;

    const today = new Date();
    const dateKey = getDateKey(today);

    try {
        const vitaminDDoc = await getDoc(doc(db, 'vitaminD', dateKey));

        if (vitaminDDoc.exists()) {
            const data = vitaminDDoc.data();
            checkbox.checked = data.given === true;
        } else {
            checkbox.checked = false;
        }

        labelText.textContent = checkbox.checked ? 'Vitamin D drop given' : 'Record Vitamin D drop';
        statusDiv.textContent = '';
        statusDiv.style.display = 'none';
    } catch (error) {
        console.error('Error loading vitamin D status:', error);
        statusDiv.className = 'error';
        statusDiv.textContent = 'Failed to load vitamin D status';
        statusDiv.style.display = 'block';
    }
}

function scheduleNextMidnightCheck(): void {
    if (vitaminDDateCheckInterval) {
        clearTimeout(vitaminDDateCheckInterval);
    }

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    vitaminDDateCheckInterval = window.setTimeout(() => {
        loadVitaminDStatus();
        scheduleNextMidnightCheck();
    }, msUntilMidnight);
}

async function handleVitaminDChange(event: Event): Promise<void> {
    const checkbox = event.target as HTMLInputElement;
    const statusDiv = document.getElementById('vitamin-d-status') as HTMLDivElement;
    const labelText = document.getElementById('vitamin-d-label-text') as HTMLSpanElement;

    if (!statusDiv || !labelText) return;

    const today = new Date();
    const dateKey = getDateKey(today);

    try {
        await setDoc(doc(db, 'vitaminD', dateKey), {
            given: checkbox.checked,
            date: Timestamp.fromDate(today)
        });

        labelText.textContent = checkbox.checked ? 'Vitamin D drop given' : 'Record Vitamin D drop';

        statusDiv.style.display = 'none';
    } catch (error) {
        console.error('Error saving vitamin D status:', error);
        statusDiv.className = 'error';
        statusDiv.textContent = 'Failed to save vitamin D status';
        statusDiv.style.display = 'block';

        checkbox.checked = !checkbox.checked;
        labelText.textContent = checkbox.checked ? 'Vitamin D drop given' : 'Record Vitamin D drop';
    }
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
    loadVitaminDStatus();
    scheduleNextMidnightCheck();
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

    input.addEventListener('blur', () => {
        validateTime(input);
    });

    input.addEventListener('change', () => {
        validateTime(input);
    });
}

function switchTab(tab: string): void {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.view').forEach(view => (view as HTMLElement).style.display = 'none');

    if (tab === 'entry') {
        document.getElementById('entry-tab')?.classList.add('active');
        (document.getElementById('entry-view') as HTMLElement).style.display = 'block';
        loadVitaminDStatus();
    } else if (tab === 'timeline') {
        document.getElementById('timeline-tab')?.classList.add('active');
        (document.getElementById('timeline-view') as HTMLElement).style.display = 'block';
        loadWeeklyView();
        loadTimeline();
    } else if (tab === 'weekly') {
        document.getElementById('weekly-tab')?.classList.add('active');
        (document.getElementById('weekly-view') as HTMLElement).style.display = 'block';
        loadWeeklyView();
    }

    window.scrollTo(0, 0);
}

function setupEventListeners(): void {
    const entryTypeSelect = document.getElementById('entry-type') as HTMLSelectElement;
    const submitButton = document.getElementById('submit-entry') as HTMLButtonElement;

    entryTypeSelect.addEventListener('change', handleEntryTypeChange);

    const bottleTypeSelect = document.getElementById('bottle-type') as HTMLSelectElement;
    if (bottleTypeSelect) {
        bottleTypeSelect.addEventListener('change', handleBottleTypeChange);
    }

    protectBottleNotesFirstLine();

    const editBottleTypeSelect = document.getElementById('edit-bottle-type') as HTMLSelectElement;
    if (editBottleTypeSelect) {
        editBottleTypeSelect.addEventListener('change', handleEditBottleTypeChange);
    }

    protectEditBottleNotesFirstLine();

    submitButton.addEventListener('click', handleSubmitEntry);

    const vitaminDCheckbox = document.getElementById('vitamin-d-checkbox') as HTMLInputElement;
    if (vitaminDCheckbox) {
        vitaminDCheckbox.addEventListener('change', handleVitaminDChange);
    }

    const refreshButton = document.getElementById('refresh-button') as HTMLButtonElement;
    if (refreshButton) {
        refreshButton.addEventListener('click', () => {
            window.location.reload();
        });
    }

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
    const yesterdayButton = document.getElementById('yesterday-button') as HTMLButtonElement;
    const twoDaysAgoButton = document.getElementById('two-days-ago-button') as HTMLButtonElement;
    const threeDaysAgoButton = document.getElementById('three-days-ago-button') as HTMLButtonElement;
    const allTimeButton = document.getElementById('all-time-button') as HTMLButtonElement;

    startDateFilter.addEventListener('change', () => loadTimeline());
    endDateFilter.addEventListener('change', () => loadTimeline());
    typeFilter.addEventListener('change', () => loadTimeline());

    todayButton.addEventListener('click', () => handleQuickFilter('today'));
    yesterdayButton.addEventListener('click', () => handleQuickFilter('yesterday'));
    twoDaysAgoButton.addEventListener('click', () => handleQuickFilter('two-days-ago'));
    threeDaysAgoButton.addEventListener('click', () => handleQuickFilter('three-days-ago'));
    allTimeButton.addEventListener('click', () => handleQuickFilter('all-time'));

    attachTimeValidation('bottle-time');
    attachTimeValidation('diaper-time');
    attachTimeValidation('pump-start-time');
    attachTimeValidation('sleep-start-time');
    attachTimeValidation('edit-bottle-time');
    attachTimeValidation('edit-diaper-time');
    attachTimeValidation('edit-pump-start-time');
    attachTimeValidation('edit-sleep-start-time');

    const graphStartDate = document.getElementById('graph-start-date') as HTMLInputElement;
    const graphEndDate = document.getElementById('graph-end-date') as HTMLInputElement;
    if (graphStartDate && graphEndDate) {
        const BIRTH_DATE = new Date(2025, 10, 5);
        graphStartDate.value = formatDateForInput(BIRTH_DATE);
        graphEndDate.value = formatDateForInput(new Date());
    }

    const updateGraphBtn = document.getElementById('update-graph-btn');
    if (updateGraphBtn) {
        updateGraphBtn.addEventListener('click', updateGraph);
    }
}

function setDefaultTimes(): void {
    const now = new Date();
    const formatted = formatDateTime(now);

    const bottleTime = document.getElementById('bottle-time') as HTMLInputElement | null;
    const diaperTime = document.getElementById('diaper-time') as HTMLInputElement | null;
    const pumpStartTime = document.getElementById('pump-start-time') as HTMLInputElement | null;
    const sleepStartTime = document.getElementById('sleep-start-time') as HTMLInputElement | null;

    if (bottleTime) {
        bottleTime.value = formatted;
    }
    if (diaperTime) {
        diaperTime.value = formatted;
    }
    if (pumpStartTime) {
        pumpStartTime.value = formatted;
    }
    if (sleepStartTime) {
        sleepStartTime.value = formatted;
    }
}

function handleEntryTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const value = select.value;

    const bottleFields = document.getElementById('bottle-fields') as HTMLElement;
    const diaperFields = document.getElementById('diaper-fields') as HTMLElement;
    const pumpFields = document.getElementById('pump-fields') as HTMLElement;
    const sleepFields = document.getElementById('sleep-fields') as HTMLElement;
    const submitButton = document.getElementById('submit-entry') as HTMLButtonElement;
    const bottleTypeContainer = document.getElementById('bottle-type-container') as HTMLElement;

    bottleFields.style.display = 'none';
    diaperFields.style.display = 'none';
    pumpFields.style.display = 'none';
    sleepFields.style.display = 'none';
    bottleTypeContainer.style.display = 'none';

    if (value === 'bottle-breast-milk' || value === 'bottle-formula') {
        bottleFields.style.display = 'block';
        submitButton.style.display = 'block';
        const bottleUnit = document.getElementById('bottle-unit') as HTMLSelectElement;
        const bottleAmount = document.getElementById('bottle-amount') as HTMLInputElement;
        bottleAmount.dataset.lastUnit = bottleUnit.value;

        if (value === 'bottle-formula') {
            bottleTypeContainer.style.display = 'block';
        }
    } else if (value === 'diaper') {
        diaperFields.style.display = 'block';
        submitButton.style.display = 'block';
    } else if (value === 'pump') {
        pumpFields.style.display = 'block';
        submitButton.style.display = 'block';
        const pumpUnit = document.getElementById('pump-unit') as HTMLSelectElement;
        const pumpAmount = document.getElementById('pump-amount') as HTMLInputElement;
        pumpAmount.dataset.lastUnit = pumpUnit.value;
    } else if (value === 'sleep') {
        sleepFields.style.display = 'block';
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }

    setDefaultTimes();

    const sleepEndTime = document.getElementById('sleep-end-time') as HTMLInputElement | null;
    if (sleepEndTime) {
        sleepEndTime.value = formatDateTime(new Date());
    }
}

function handleBottleTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedType = select.value;
    const notesTextarea = document.getElementById('bottle-notes') as HTMLTextAreaElement;
    const indicator = document.getElementById('bottle-type-indicator') as HTMLDivElement;
    const typeText = document.getElementById('bottle-type-text') as HTMLSpanElement;

    if (!notesTextarea) return;

    const currentNotes = notesTextarea.value;
    const lines = currentNotes.split('\n');

    const firstLineIsType = lines.length > 0 && (lines[0] === 'Bobbie' || lines[0] === 'Enfamil');

    if (selectedType) {
        if (firstLineIsType) {
            lines[0] = selectedType;
            notesTextarea.value = lines.join('\n');
        } else {
            if (currentNotes.trim()) {
                notesTextarea.value = `${selectedType}\n${currentNotes}`;
            } else {
                notesTextarea.value = selectedType + '\n';
            }
        }

        if (indicator && typeText) {
            typeText.textContent = selectedType;
            indicator.style.display = 'block';
        }
    } else {
        if (indicator) {
            indicator.style.display = 'none';
        }
    }
}

function handleEditBottleTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedType = select.value;
    const notesTextarea = document.getElementById('edit-bottle-notes') as HTMLTextAreaElement;

    const indicator = document.getElementById('edit-bottle-type-indicator') as HTMLDivElement;
    const typeText = document.getElementById('edit-bottle-type-text') as HTMLSpanElement;

    if (!notesTextarea) return;

    const currentNotes = notesTextarea.value;
    const lines = currentNotes.split('\n');

    const firstLineIsType = lines.length > 0 && (lines[0] === 'Bobbie' || lines[0] === 'Enfamil');

    if (selectedType) {
        if (firstLineIsType) {
            lines[0] = selectedType;
            notesTextarea.value = lines.join('\n');
        } else {
            if (currentNotes.trim()) {
                notesTextarea.value = `${selectedType}\n${currentNotes}`;
            } else {
                notesTextarea.value = selectedType + '\n';
            }
        }

        if (indicator && typeText) {
            typeText.textContent = selectedType;
            indicator.style.display = 'block';
        }
    } else {
        if (indicator) {
            indicator.style.display = 'none';
        }
    }
}

function protectBottleNotesFirstLine(): void {
    const notesTextarea = document.getElementById('bottle-notes') as HTMLTextAreaElement;
    const bottleTypeSelect = document.getElementById('bottle-type') as HTMLSelectElement;

    if (!notesTextarea || !bottleTypeSelect) return;

    notesTextarea.addEventListener('input', () => {
        const selectedType = bottleTypeSelect.value;
        if (!selectedType) return;

        const currentValue = notesTextarea.value;
        const lines = currentValue.split('\n');

        // If first line has been modified or removed, restore it
        if (lines.length === 0 || (lines[0] !== selectedType && lines[0] !== '')) {
            // User tried to modify the first line, restore it
            if (lines.length === 0) {
                notesTextarea.value = selectedType + '\n';
            } else if (lines[0] !== selectedType) {
                lines[0] = selectedType;
                notesTextarea.value = lines.join('\n');
            }
        }

        // Ensure there's always at least a newline after the type
        if (currentValue === selectedType) {
            notesTextarea.value = selectedType + '\n';
        }
    });

    notesTextarea.addEventListener('keydown', (e: KeyboardEvent) => {
        const selectedType = bottleTypeSelect.value;
        if (!selectedType) return;

        const textarea = e.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const firstLineLength = selectedType.length;

        // Prevent any editing in the first line (including the newline after it)
        if (cursorPos <= firstLineLength) {
            // Allow navigation keys
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
                return;
            }

            // Allow selecting text (but not modifying)
            if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
                return;
            }

            // Prevent backspace/delete in the first line
            if (e.key === 'Backspace' || e.key === 'Delete') {
                e.preventDefault();
                return;
            }

            // For any character input, move cursor to after the newline
            if (e.key.length === 1 || e.key === 'Enter') {
                e.preventDefault();
                textarea.selectionStart = firstLineLength + 1;
                textarea.selectionEnd = firstLineLength + 1;

                if (e.key === 'Enter') {
                    // Insert newline at new cursor position
                    const before = textarea.value.substring(0, firstLineLength + 1);
                    const after = textarea.value.substring(firstLineLength + 1);
                    textarea.value = before + '\n' + after;
                    textarea.selectionStart = firstLineLength + 2;
                    textarea.selectionEnd = firstLineLength + 2;
                } else if (e.key.length === 1) {
                    // Insert the character at new cursor position
                    const before = textarea.value.substring(0, firstLineLength + 1);
                    const after = textarea.value.substring(firstLineLength + 1);
                    textarea.value = before + e.key + after;
                    textarea.selectionStart = firstLineLength + 2;
                    textarea.selectionEnd = firstLineLength + 2;
                }
                return;
            }
        }
    });

    notesTextarea.addEventListener('paste', (e: ClipboardEvent) => {
        const selectedType = bottleTypeSelect.value;
        if (!selectedType) return;

        const textarea = e.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const firstLineLength = selectedType.length;

        // If pasting in the first line, prevent it
        if (cursorPos <= firstLineLength) {
            e.preventDefault();
            return;
        }
    });
}

function protectEditBottleNotesFirstLine(): void {
    const notesTextarea = document.getElementById('edit-bottle-notes') as HTMLTextAreaElement;
    const bottleTypeSelect = document.getElementById('edit-bottle-type') as HTMLSelectElement;

    if (!notesTextarea || !bottleTypeSelect) return;

    notesTextarea.addEventListener('input', () => {
        const selectedType = bottleTypeSelect.value;
        if (!selectedType) return;

        const currentValue = notesTextarea.value;
        const lines = currentValue.split('\n');

        // If first line has been modified or removed, restore it
        if (lines.length === 0 || (lines[0] !== selectedType && lines[0] !== '')) {
            // User tried to modify the first line, restore it
            if (lines.length === 0) {
                notesTextarea.value = selectedType + '\n';
            } else if (lines[0] !== selectedType) {
                lines[0] = selectedType;
                notesTextarea.value = lines.join('\n');
            }
        }

        // Ensure there's always at least a newline after the type
        if (currentValue === selectedType) {
            notesTextarea.value = selectedType + '\n';
        }
    });

    notesTextarea.addEventListener('keydown', (e: KeyboardEvent) => {
        const selectedType = bottleTypeSelect.value;
        if (!selectedType) return;

        const textarea = e.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const firstLineLength = selectedType.length;

        // Prevent any editing in the first line (including the newline after it)
        if (cursorPos <= firstLineLength) {
            // Allow navigation keys
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
                return;
            }

            // Allow selecting text (but not modifying)
            if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
                return;
            }

            // Prevent backspace/delete in the first line
            if (e.key === 'Backspace' || e.key === 'Delete') {
                e.preventDefault();
                return;
            }

            // For any character input, move cursor to after the newline
            if (e.key.length === 1 || e.key === 'Enter') {
                e.preventDefault();
                textarea.selectionStart = firstLineLength + 1;
                textarea.selectionEnd = firstLineLength + 1;

                if (e.key === 'Enter') {
                    // Insert newline at new cursor position
                    const before = textarea.value.substring(0, firstLineLength + 1);
                    const after = textarea.value.substring(firstLineLength + 1);
                    textarea.value = before + '\n' + after;
                    textarea.selectionStart = firstLineLength + 2;
                    textarea.selectionEnd = firstLineLength + 2;
                } else if (e.key.length === 1) {
                    // Insert the character at new cursor position
                    const before = textarea.value.substring(0, firstLineLength + 1);
                    const after = textarea.value.substring(firstLineLength + 1);
                    textarea.value = before + e.key + after;
                    textarea.selectionStart = firstLineLength + 2;
                    textarea.selectionEnd = firstLineLength + 2;
                }
                return;
            }
        }
    });

    notesTextarea.addEventListener('paste', (e: ClipboardEvent) => {
        const selectedType = bottleTypeSelect.value;
        if (!selectedType) return;

        const textarea = e.target as HTMLTextAreaElement;
        const cursorPos = textarea.selectionStart;
        const firstLineLength = selectedType.length;

        // If pasting in the first line, prevent it
        if (cursorPos <= firstLineLength) {
            e.preventDefault();
            return;
        }
    });
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

            if (entryType === 'bottle-formula') {
                const bottleType = (document.getElementById('bottle-type') as HTMLSelectElement).value;
                if (!bottleType) {
                    throw new Error('Formula type is required');
                }
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
            const startTime = startTimeInput.value;
            const amount = parseFloat((document.getElementById('pump-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('pump-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('pump-notes') as HTMLTextAreaElement).value;

            if (!startTime) {
                throw new Error('Start time is required');
            }

            const selectedStartTime = new Date(startTimeInput.value);
            if (selectedStartTime > now) {
                throw new Error('Cannot add entries in the future');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            entry = {
                type: 'Pump',
                startTime: selectedStartTime,
                amount: amount,
                unit: unit,
                notes: notes
            };
        } else if (entryType === 'sleep') {
            const startTimeInput = document.getElementById('sleep-start-time') as HTMLInputElement;
            const endTimeInput = document.getElementById('sleep-end-time') as HTMLInputElement;
            const notes = (document.getElementById('sleep-notes') as HTMLTextAreaElement).value;

            if (!startTimeInput.value) {
                throw new Error('Start time is required');
            }

            const selectedStartTime = new Date(startTimeInput.value);
            if (selectedStartTime > now) {
                throw new Error('Cannot add entries in the future');
            }

            let selectedEndTime: Date | undefined = undefined;
            if (endTimeInput.value) {
                selectedEndTime = new Date(endTimeInput.value);
                if (selectedEndTime > now) {
                    throw new Error('End time cannot be in the future');
                }
                if (selectedEndTime <= selectedStartTime) {
                    throw new Error('End time must be after start time');
                }
            }

            entry = {
                type: 'Sleep',
                startTime: selectedStartTime,
                endTime: selectedEndTime,
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
            } else if (entry.type === 'Sleep') {
                await updateLastSleepEndTime();
                await updateNapTime();
            }

            loadWeeklyView();

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
    (document.getElementById('bottle-type') as HTMLSelectElement).value = '';
    (document.getElementById('bottle-notes') as HTMLTextAreaElement).value = '';
    (document.getElementById('diaper-notes') as HTMLTextAreaElement).value = '';
    (document.getElementById('pump-amount') as HTMLInputElement).value = '';
    (document.getElementById('pump-notes') as HTMLTextAreaElement).value = '';
    (document.getElementById('sleep-end-time') as HTMLInputElement).value = '';
    (document.getElementById('sleep-notes') as HTMLTextAreaElement).value = '';

    (document.getElementById('bottle-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('bottle-type-container') as HTMLElement).style.display = 'none';
    (document.getElementById('diaper-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('pump-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('sleep-fields') as HTMLElement).style.display = 'none';
    (document.getElementById('submit-entry') as HTMLButtonElement).style.display = 'none';

    setDefaultTimes();
}

function handleQuickFilter(filterType: string): void {
    const startDateInput = document.getElementById('start-date-filter') as HTMLInputElement;
    const endDateInput = document.getElementById('end-date-filter') as HTMLInputElement;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (filterType === 'all-time') {
        const BIRTH_DATE = new Date(2025, 10, 5);
        startDateInput.value = formatDateForInput(BIRTH_DATE);
        endDateInput.value = formatDateForInput(today);
    } else if (filterType === 'today') {
        startDateInput.value = formatDateForInput(today);
        endDateInput.value = formatDateForInput(today);
    } else if (filterType === 'yesterday') {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        startDateInput.value = formatDateForInput(yesterday);
        endDateInput.value = formatDateForInput(yesterday);
    } else if (filterType === 'two-days-ago') {
        const twoDaysAgo = new Date(today);
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        startDateInput.value = formatDateForInput(twoDaysAgo);
        endDateInput.value = formatDateForInput(twoDaysAgo);
    } else if (filterType === 'three-days-ago') {
        const threeDaysAgo = new Date(today);
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        startDateInput.value = formatDateForInput(threeDaysAgo);
        endDateInput.value = formatDateForInput(threeDaysAgo);
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

        // Fetch prior-evening sleep entries (from 7pm the day before start date)
        // so the timeline list shows overnight sleep that belongs to the sleep day
        let priorEveningSleepDocs: { id: string; data: any }[] = [];
        if (startDateInput) {
            const [sY, sM, sD] = startDateInput.split('-').map(Number);
            const priorEveningStart = new Date(sY, sM - 1, sD - 1, 19, 0, 0, 0); // prev day 7pm
            const priorEveningEnd = new Date(sY, sM - 1, sD, 0, 0, 0, 0); // midnight

            const priorEveningQ = query(
                collection(db, 'entries'),
                where('type', '==', 'Sleep'),
                where('startTime', '>=', Timestamp.fromDate(priorEveningStart)),
                where('startTime', '<', Timestamp.fromDate(priorEveningEnd)),
                orderBy('startTime', 'desc')
            );
            try {
                const priorEveningSnap = await getDocs(priorEveningQ);
                priorEveningSnap.forEach(d => {
                    priorEveningSleepDocs.push({ id: d.id, data: d.data() });
                });
            } catch (e) {
                console.error('Error fetching prior evening sleep:', e);
            }
        }

        // Merge prior evening sleep docs into a combined list for rendering
        // Build a map of all docs: prior evening sleep first, then main snapshot
        const allTimelineDocs: { id: string; data: any }[] = [];
        const seenIds = new Set<string>();

        // Add main snapshot docs
        snapshot.forEach(docSnapshot => {
            allTimelineDocs.push({ id: docSnapshot.id, data: docSnapshot.data() });
            seenIds.add(docSnapshot.id);
        });

        // Add prior evening sleep docs (avoid duplicates)
        priorEveningSleepDocs.forEach(d => {
            if (!seenIds.has(d.id)) {
                allTimelineDocs.push(d);
                seenIds.add(d.id);
            }
        });

        // Sort all docs by startTime descending
        allTimelineDocs.sort((a, b) => b.data.startTime.toDate().getTime() - a.data.startTime.toDate().getTime());

        const summaryStats = {
            bottles: { total: 0, breastMilk: 0, formula: 0, sessions: 0 },
            diapers: { total: 0, pee: 0, poo: 0, mixed: 0 },
            pumps: { total: 0, sessions: 0 },
            sleep: { totalMs: 0, sessions: 0 }
        };

        if (allTimelineDocs.length === 0) {
            timelineList.innerHTML = '<p>No entries found.</p>';
        } else {
            let currentDate = '';
            let hasVisibleEntries = false;

            allTimelineDocs.forEach(({ id: docId, data }) => {

                if (typeFilter !== 'all') {
                    let entryType = '';
                    if (data.type === 'Feed' && data.subType === 'Breast Milk') {
                        entryType = 'bottle-breast-milk';
                    } else if (data.type === 'Feed' && data.subType === 'Formula') {
                        entryType = 'bottle-formula';
                    } else if (data.type === 'Diaper') {
                        entryType = 'diaper-all';
                    } else if (data.type === 'Pump') {
                        entryType = 'pump';
                    } else if (data.type === 'Sleep') {
                        entryType = 'sleep';
                    }

                    if (typeFilter === 'bottle-all') {
                        if (data.type !== 'Feed') {
                            return;
                        }
                    } else if (typeFilter === 'diaper-all') {
                        if (data.type !== 'Diaper') {
                            return;
                        }
                    } else if (typeFilter === 'diaper-pee') {
                        if (data.type !== 'Diaper' || (data.diaperType !== 'Pee' && data.diaperType !== 'Mixed')) {
                            return;
                        }
                    } else if (typeFilter === 'diaper-poo') {
                        if (data.type !== 'Diaper' || (data.diaperType !== 'Poo' && data.diaperType !== 'Mixed')) {
                            return;
                        }
                    } else if (entryType !== typeFilter) {
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
                } else if (data.type === 'Sleep') {
                    summaryStats.sleep.sessions++;
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
                    detailsHTML = `<div class="timeline-entry-details">Amount: ${formatBothUnits(data.amount, data.unit)}</div>`;
                    backgroundColor = '#e2daf2';
                } else if (data.type === 'Sleep') {
                    typeDisplay = 'Sleep';
                    backgroundColor = '#d4e8d4';
                    if (data.endTime) {
                        const sleepStart = data.startTime.toDate();
                        const sleepEnd = data.endTime.toDate();
                        const durationMs = sleepEnd.getTime() - sleepStart.getTime();
                        const durationHrs = Math.floor(durationMs / (1000 * 60 * 60));
                        const durationMins = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
                        detailsHTML = `<div class="timeline-entry-details">Duration: ${durationHrs}h ${durationMins}m</div>`;
                        detailsHTML += `<div class="timeline-entry-details">End: ${formatDisplayDateTime(sleepEnd)}</div>`;
                    } else {
                        detailsHTML = `<div class="timeline-entry-details">In progress</div>`;
                    }
                }

                entry.style.backgroundColor = backgroundColor;

                const notesHTML = data.notes ? `<div class="timeline-entry-notes">${data.notes.replace(/\n/g, '<br>')}</div>` : '';

                // Calculate time since previous poo for all Poo and Mixed diapers
                let timeSincePooHTML = '';
                if (data.type === 'Diaper' && (data.diaperType === 'Poo' || data.diaperType === 'Mixed')) {
                    const currentTime = startTime.getTime();
                    const allPooEntries: { time: number }[] = [];

                    allTimelineDocs.forEach(d => {
                        const entryData = d.data;
                        if (entryData.type === 'Diaper' && (entryData.diaperType === 'Poo' || entryData.diaperType === 'Mixed')) {
                            allPooEntries.push({ time: entryData.startTime.toDate().getTime() });
                        }
                    });

                    allPooEntries.sort((a, b) => b.time - a.time); // Newest first

                    const currentIndex = allPooEntries.findIndex(e => e.time === currentTime);
                    if (currentIndex < allPooEntries.length - 1) { // Check if there's an older entry
                        const previousPooTime = allPooEntries[currentIndex + 1].time; // Next in array = older in time
                        const hoursSince = (currentTime - previousPooTime) / (1000 * 60 * 60);
                        timeSincePooHTML = `<div class="timeline-entry-details" style="color: #666; font-style: italic;">${hoursSince.toFixed(1)} hours since previous poo</div>`;
                    }
                }

                entry.innerHTML = `
                    <div class="timeline-entry-header">
                        <span class="timeline-entry-type">${typeDisplay}</span>
                        <span class="timeline-entry-time">${formatDisplayDateTime(startTime)}</span>
                    </div>
                    ${detailsHTML}
                    ${notesHTML}
                    ${timeSincePooHTML}
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

                if (typeFilter === 'all' || typeFilter === 'bottle-breast-milk' || typeFilter === 'bottle-formula' || typeFilter === 'bottle-all') {
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

                if (typeFilter === 'all' || typeFilter === 'diaper-all' || typeFilter === 'diaper-pee' || typeFilter === 'diaper-poo') {
                    const totalPee = summaryStats.diapers.pee + summaryStats.diapers.mixed;
                    const totalPoo = summaryStats.diapers.poo + summaryStats.diapers.mixed;

                    summaryHTML += `
                        <div class="stat-group">
                            <div class="stat-group-title">Diapers</div>
                            <div class="stat-line">Pee: ${totalPee}</div>
                            <div class="stat-line">Poo: ${totalPoo}</div>
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

                if (typeFilter === 'all' || typeFilter === 'sleep') {
                    // Compute sleep using sleep day bounds (prev day 7pm - next day 7am)
                    let sleepDayTotalMs = 0;
                    if (startDateInput && endDateInput) {
                        const sleepEntries: { startTime: Date; endTime: Date | null }[] = [];
                        allTimelineDocs.forEach(d => {
                            const sData = d.data;
                            if (sData.type === 'Sleep') {
                                sleepEntries.push({
                                    startTime: sData.startTime.toDate(),
                                    endTime: sData.endTime ? sData.endTime.toDate() : null
                                });
                            }
                        });

                        // Fetch prior-night sleep entries for first day's bounds
                        const [sY, sM, sD] = startDateInput.split('-').map(Number);
                        const priorDay = new Date(sY, sM - 1, sD);
                        priorDay.setDate(priorDay.getDate() - 1);
                        const priorStart = new Date(priorDay);
                        priorStart.setHours(0, 0, 0, 0);
                        const priorEnd = new Date(priorDay);
                        priorEnd.setHours(23, 59, 59, 999);

                        try {
                            const priorQ = query(
                                collection(db, 'entries'),
                                where('type', '==', 'Sleep'),
                                where('startTime', '>=', Timestamp.fromDate(priorStart)),
                                where('startTime', '<=', Timestamp.fromDate(priorEnd)),
                                orderBy('startTime', 'asc')
                            );
                            const priorSnap = await getDocs(priorQ);
                            priorSnap.forEach(d => {
                                const sData = d.data();
                                sleepEntries.push({
                                    startTime: sData.startTime.toDate(),
                                    endTime: sData.endTime ? sData.endTime.toDate() : null
                                });
                            });
                        } catch (e) {
                            console.error('Error fetching prior sleep entries:', e);
                        }

                        // Fetch post-day sleep entries for last day's bounds
                        const [eY, eM, eD] = endDateInput.split('-').map(Number);
                        const postDay = new Date(eY, eM - 1, eD);
                        postDay.setDate(postDay.getDate() + 1);
                        const postStart = new Date(postDay);
                        postStart.setHours(0, 0, 0, 0);
                        const postEnd = new Date(postDay);
                        postEnd.setHours(23, 59, 59, 999);

                        try {
                            const postQ = query(
                                collection(db, 'entries'),
                                where('type', '==', 'Sleep'),
                                where('startTime', '>=', Timestamp.fromDate(postStart)),
                                where('startTime', '<=', Timestamp.fromDate(postEnd)),
                                orderBy('startTime', 'asc')
                            );
                            const postSnap = await getDocs(postQ);
                            postSnap.forEach(d => {
                                const sData = d.data();
                                sleepEntries.push({
                                    startTime: sData.startTime.toDate(),
                                    endTime: sData.endTime ? sData.endTime.toDate() : null
                                });
                            });
                        } catch (e) {
                            console.error('Error fetching post sleep entries:', e);
                        }

                        const filterStart = new Date(sY, sM - 1, sD);
                        const filterEnd = new Date(eY, eM - 1, eD);
                        const currentDay = new Date(filterStart);
                        while (currentDay <= filterEnd) {
                            const bounds = getSleepDayBounds(currentDay);
                            sleepDayTotalMs += computeDaySleepMs(sleepEntries, bounds.start, bounds.end);
                            currentDay.setDate(currentDay.getDate() + 1);
                        }
                    }

                    const sleepHrs = Math.floor(sleepDayTotalMs / (1000 * 60 * 60));
                    const sleepMins = Math.floor((sleepDayTotalMs % (1000 * 60 * 60)) / (1000 * 60));
                    summaryHTML += `
                        <div class="stat-group">
                            <div class="stat-group-title">Sleep</div>
                            <div class="stat-line">Total sleep: ${sleepHrs}h ${sleepMins}m</div>
                            <div class="stat-line">Number of sleeps: ${summaryStats.sleep.sessions}</div>
                            <div class="stat-line" style="font-size: 11px; color: #888;">prev day 7pm - next day 7am</div>
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

function computeDaySleepMs(sleepEntries: { startTime: Date; endTime: Date | null }[], dayStart: Date, dayEnd: Date): number {
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

// For a given date, a "sleep day" spans from the previous day at 7pm
// to the next day at 7am. Sleep sessions are clamped to this window.
// Example: Saturday's sleep day = Friday 7pm → Sunday 7am.
function getSleepDayBounds(date: Date): { start: Date; end: Date } {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    const start = new Date(d);
    start.setDate(start.getDate() - 1);
    start.setHours(19, 0, 0, 0); // previous day 7pm

    const end = new Date(d);
    end.setDate(end.getDate() + 1);
    end.setHours(7, 0, 0, 0); // next day 7am

    return { start, end };
}

function formatSleepDuration(ms: number): string {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

async function loadWeeklyView(): Promise<void> {
    const thisVersion = ++weeklyViewVersion;
    const weeklyStats = document.getElementById('weekly-stats') as HTMLDivElement;
    const loadingDiv = document.getElementById('weekly-loading') as HTMLDivElement;
    const weekRange = document.getElementById('week-range') as HTMLSpanElement;
    const prevWeekBtn = document.getElementById('prev-week') as HTMLButtonElement;
    const nextWeekBtn = document.getElementById('next-week') as HTMLButtonElement;
    const currentWeekBtn = document.getElementById('current-week') as HTMLButtonElement | null;

    const BIRTH_DATE = new Date(2025, 10, 5);
    const birthWeekStart = getWeekStart(BIRTH_DATE);

    const today = new Date();
    const currentWeekStartDate = getWeekStart(today);

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

        // If a newer loadWeeklyView call started, abandon this one
        if (thisVersion !== weeklyViewVersion) return;

        const vitaminDStartDate = new Date('2025-11-11');
        vitaminDStartDate.setHours(0, 0, 0, 0);

        const vitaminDMap: { [key: string]: boolean } = {};
        const dateKeysToCheck: string[] = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(date.getDate() + i);
            date.setHours(0, 0, 0, 0);

            if (date >= vitaminDStartDate) {
                const dateKey = getDateKey(date);
                dateKeysToCheck.push(dateKey);
            }
        }

        if (dateKeysToCheck.length > 0) {
            const vitaminDDocs = await Promise.all(
                dateKeysToCheck.map(dateKey => getDoc(doc(db, 'vitaminD', dateKey)))
            );

            dateKeysToCheck.forEach((dateKey, index) => {
                const vitaminDDoc = vitaminDDocs[index];
                vitaminDMap[dateKey] = vitaminDDoc.exists() && vitaminDDoc.data()?.given === true;
            });
        }

        // If a newer loadWeeklyView call started, abandon this one
        if (thisVersion !== weeklyViewVersion) return;

        // Collect all sleep entries for sleep day calculation
        const allSleepEntries: { startTime: Date; endTime: Date | null }[] = [];
        snapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            if (data.type === 'Sleep') {
                allSleepEntries.push({
                    startTime: data.startTime.toDate(),
                    endTime: data.endTime ? data.endTime.toDate() : null
                });
            }
        });

        // Fetch sleep entries from the day before the week (prev night for first day's sleep day)
        const priorSleepStart = new Date(currentWeekStart);
        priorSleepStart.setDate(priorSleepStart.getDate() - 1);
        priorSleepStart.setHours(0, 0, 0, 0);
        const priorSleepEnd = new Date(currentWeekStart);
        priorSleepEnd.setHours(0, 0, 0, 0);

        const priorSleepQuery = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            where('startTime', '>=', Timestamp.fromDate(priorSleepStart)),
            where('startTime', '<', Timestamp.fromDate(priorSleepEnd)),
            orderBy('startTime', 'asc')
        );
        const priorSleepSnapshot = await getDocs(priorSleepQuery);
        if (thisVersion !== weeklyViewVersion) return;

        priorSleepSnapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            allSleepEntries.push({
                startTime: data.startTime.toDate(),
                endTime: data.endTime ? data.endTime.toDate() : null
            });
        });

        // Fetch sleep entries from the day after the week (for last day's sleep day bounds)
        const postSleepStart = new Date(weekEnd);
        postSleepStart.setDate(postSleepStart.getDate() + 1);
        postSleepStart.setHours(0, 0, 0, 0);
        const postSleepEnd = new Date(postSleepStart);
        postSleepEnd.setDate(postSleepEnd.getDate() + 1);
        postSleepEnd.setHours(0, 0, 0, 0);

        const postSleepQuery = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            where('startTime', '>=', Timestamp.fromDate(postSleepStart)),
            where('startTime', '<', Timestamp.fromDate(postSleepEnd)),
            orderBy('startTime', 'asc')
        );
        const postSleepSnapshot = await getDocs(postSleepQuery);
        if (thisVersion !== weeklyViewVersion) return;

        postSleepSnapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            allSleepEntries.push({
                startTime: data.startTime.toDate(),
                endTime: data.endTime ? data.endTime.toDate() : null
            });
        });

        const dayStats: { [key: string]: any } = {};

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentWeekStart);
            date.setDate(date.getDate() + i);
            date.setHours(0, 0, 0, 0);
            const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const dateKeyFormatted = getDateKey(date);

            const sleepBounds = getSleepDayBounds(date);

            dayStats[dateKey] = {
                date: new Date(date),
                vitaminD: date >= vitaminDStartDate ? (vitaminDMap[dateKeyFormatted] === true) : null,
                bottles: { total: 0, breastMilk: 0, formula: 0, sessions: 0 },
                diapers: { total: 0, pee: 0, poo: 0, mixed: 0 },
                pumps: { total: 0, sessions: 0 },
                sleepMs: computeDaySleepMs(allSleepEntries, sleepBounds.start, sleepBounds.end)
            };
        }

        snapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            const entryDate = data.startTime.toDate();
            const normalizedDate = new Date(entryDate);
            normalizedDate.setHours(0, 0, 0, 0);
            const dateKey = `${normalizedDate.getFullYear()}-${normalizedDate.getMonth()}-${normalizedDate.getDate()}`;

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
                // Sleep is already computed via computeDaySleepMs above
            }
        });

        const daysArray = Object.keys(dayStats).map(key => dayStats[key]).sort((a, b) => a.date.getTime() - b.date.getTime());

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

            const totalPee = stats.diapers.pee + stats.diapers.mixed;
            const totalPoo = stats.diapers.poo + stats.diapers.mixed;

            let vitaminDHTML = '';
            if (stats.vitaminD !== null) {
                const vitaminDStatus = stats.vitaminD ? 'Yes' : 'No';
                const vitaminDColor = stats.vitaminD ? '#4caf50' : '#f44336';
                vitaminDHTML = `
                    <div class="stat-group">
                        <div class="stat-group-title">Vitamin D</div>
                        <div class="stat-line" style="color: ${vitaminDColor}; font-weight: bold;">${vitaminDStatus}</div>
                    </div>
                `;
            }

            dayDiv.innerHTML = `
                <div class="day-stats-header">${dayName}<br>${dateStr}</div>
                ${vitaminDHTML}
                <div class="stat-group">
                    <div class="stat-group-title">Bottles</div>
                    <div class="stat-line">Number of feeds: ${stats.bottles.sessions}</div>
                    <div class="stat-line">Breast Milk: ${formatBothUnits(stats.bottles.breastMilk, 'oz')}</div>
                    <div class="stat-line">Formula: ${formatBothUnits(stats.bottles.formula, 'oz')}</div>
                    <div class="stat-line">Total volume: ${formatBothUnits(stats.bottles.total, 'oz')}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Diapers</div>
                    <div class="stat-line">Pee: ${totalPee}</div>
                    <div class="stat-line">Poo: ${totalPoo}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Pumps</div>
                    <div class="stat-line">Total volume: ${formatBothUnits(stats.pumps.total, 'oz')}</div>
                    <div class="stat-line">Number of sessions: ${stats.pumps.sessions}</div>
                </div>
                <div class="stat-group">
                    <div class="stat-group-title">Sleep</div>
                    <div class="stat-line">Total: ${formatSleepDuration(stats.sleepMs)}</div>
                    <div class="stat-line" style="font-size: 11px; color: #888;">${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(stats.date.getDay() + 6) % 7]} 7pm - ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(stats.date.getDay() + 1) % 7]} 7am</div>
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
        if (thisVersion === weeklyViewVersion) {
            weeklyStats.innerHTML = '<p class="error">Failed to load weekly view</p>';
        }
    } finally {
        if (thisVersion === weeklyViewVersion) {
            loadingDiv.style.display = 'none';
            await loadJsonData();
        }
    }
}

async function loadJsonData(): Promise<void> {
    const jsonContent = document.getElementById('json-content') as HTMLPreElement;
    const toggleButton = document.getElementById('toggle-json') as HTMLButtonElement;
    const copyButton = document.getElementById('copy-json') as HTMLButtonElement;
    const jsonTabs = document.querySelector('.json-tabs') as HTMLElement;
    const feedsTab = document.getElementById('feeds-json-tab') as HTMLButtonElement;
    const diapersTab = document.getElementById('diapers-json-tab') as HTMLButtonElement;
    const pumpsTab = document.getElementById('pumps-json-tab') as HTMLButtonElement;
    const sleepTab = document.getElementById('sleep-json-tab') as HTMLButtonElement;

    if (!jsonContent || !toggleButton || !copyButton) return;

    let currentTab: 'feeds' | 'diapers' | 'pumps' | 'sleep' = 'feeds';
    let feedsData: any[] = [];
    let diapersData: any[] = [];
    let pumpsData: any[] = [];
    let sleepData: any[] = [];

    try {
        const q = query(collection(db, 'entries'), orderBy('startTime', 'desc'));
        const snapshot = await getDocs(q);

        snapshot.docs.forEach(docSnapshot => {
            const data = docSnapshot.data();

            if (data.type === 'Feed') {
                feedsData.push({
                    type: data.type,
                    subType: data.subType,
                    startTime: data.startTime.toDate().toISOString(),
                    amount: data.amount,
                    unit: data.unit,
                    notes: data.notes || ''
                });
            } else if (data.type === 'Diaper') {
                diapersData.push({
                    type: data.type,
                    startTime: data.startTime.toDate().toISOString(),
                    diaperType: data.diaperType,
                    notes: data.notes || ''
                });
            } else if (data.type === 'Pump') {
                pumpsData.push({
                    type: data.type,
                    startTime: data.startTime.toDate().toISOString(),
                    amount: data.amount,
                    unit: data.unit,
                    notes: data.notes || ''
                });
            } else if (data.type === 'Sleep') {
                sleepData.push({
                    type: data.type,
                    startTime: data.startTime.toDate().toISOString(),
                    endTime: data.endTime ? data.endTime.toDate().toISOString() : null,
                    notes: data.notes || ''
                });
            }
        });

        const updateDisplay = () => {
            let dataToShow;
            if (currentTab === 'feeds') {
                dataToShow = feedsData;
            } else if (currentTab === 'diapers') {
                dataToShow = diapersData;
            } else if (currentTab === 'sleep') {
                dataToShow = sleepData;
            } else {
                dataToShow = pumpsData;
            }
            const jsonString = JSON.stringify(dataToShow, null, 2);
            jsonContent.textContent = jsonString;
            return jsonString;
        };

        let currentJsonString = updateDisplay();

        const newToggleButton = toggleButton.cloneNode(true) as HTMLButtonElement;
        const newCopyButton = copyButton.cloneNode(true) as HTMLButtonElement;
        const newFeedsTab = feedsTab?.cloneNode(true) as HTMLButtonElement;
        const newDiapersTab = diapersTab?.cloneNode(true) as HTMLButtonElement;
        const newPumpsTab = pumpsTab?.cloneNode(true) as HTMLButtonElement;
        const newSleepTab = sleepTab?.cloneNode(true) as HTMLButtonElement;

        toggleButton.parentNode?.replaceChild(newToggleButton, toggleButton);
        copyButton.parentNode?.replaceChild(newCopyButton, copyButton);
        if (feedsTab && newFeedsTab) feedsTab.parentNode?.replaceChild(newFeedsTab, feedsTab);
        if (diapersTab && newDiapersTab) diapersTab.parentNode?.replaceChild(newDiapersTab, diapersTab);
        if (pumpsTab && newPumpsTab) pumpsTab.parentNode?.replaceChild(newPumpsTab, pumpsTab);
        if (sleepTab && newSleepTab) sleepTab.parentNode?.replaceChild(newSleepTab, sleepTab);

        newToggleButton.addEventListener('click', () => {
            const isHidden = jsonContent.style.display === 'none';
            jsonContent.style.display = isHidden ? 'block' : 'none';
            newCopyButton.style.display = isHidden ? 'block' : 'none';
            if (jsonTabs) jsonTabs.style.display = isHidden ? 'flex' : 'none';
            newToggleButton.textContent = isHidden ? 'Hide JSON Data' : 'Show JSON Data';
        });

        newCopyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(currentJsonString);
                const originalText = newCopyButton.textContent;
                newCopyButton.textContent = '✓';
                setTimeout(() => {
                    newCopyButton.textContent = originalText;
                }, 2000);
            } catch (error) {
                alert('Failed to copy to clipboard');
            }
        });

        if (newFeedsTab) {
            newFeedsTab.addEventListener('click', () => {
                currentTab = 'feeds';
                newFeedsTab.classList.add('active');
                newDiapersTab.classList.remove('active');
                newPumpsTab.classList.remove('active');
                newSleepTab.classList.remove('active');
                currentJsonString = updateDisplay();
            });
        }

        if (newDiapersTab) {
            newDiapersTab.addEventListener('click', () => {
                currentTab = 'diapers';
                newDiapersTab.classList.add('active');
                newFeedsTab.classList.remove('active');
                newPumpsTab.classList.remove('active');
                newSleepTab.classList.remove('active');
                currentJsonString = updateDisplay();
            });
        }

        if (newPumpsTab) {
            newPumpsTab.addEventListener('click', () => {
                currentTab = 'pumps';
                newPumpsTab.classList.add('active');
                newFeedsTab.classList.remove('active');
                newDiapersTab.classList.remove('active');
                newSleepTab.classList.remove('active');
                currentJsonString = updateDisplay();
            });
        }

        if (newSleepTab) {
            newSleepTab.addEventListener('click', () => {
                currentTab = 'sleep';
                newSleepTab.classList.add('active');
                newFeedsTab.classList.remove('active');
                newDiapersTab.classList.remove('active');
                newPumpsTab.classList.remove('active');
                currentJsonString = updateDisplay();
            });
        }
    } catch (error) {
        jsonContent.textContent = 'Failed to load data';
    }
}

async function updateGraph(): Promise<void> {
    const startDateInput = (document.getElementById('graph-start-date') as HTMLInputElement).value;
    const endDateInput = (document.getElementById('graph-end-date') as HTMLInputElement).value;

    if (!startDateInput || !endDateInput) {
        alert('Please select both start and end dates');
        return;
    }

    const selectedSeries: string[] = [];
    document.querySelectorAll('.graph-checkbox:checked').forEach(checkbox => {
        selectedSeries.push((checkbox as HTMLInputElement).dataset.series!);
    });

    if (selectedSeries.length === 0) {
        alert('Please select at least one data series to plot');
        return;
    }

    const startDate = new Date(startDateInput);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(endDateInput);
    endDate.setHours(23, 59, 59, 999);

    const q = query(
        collection(db, 'entries'),
        where('startTime', '>=', Timestamp.fromDate(startDate)),
        where('startTime', '<=', Timestamp.fromDate(endDate)),
        orderBy('startTime', 'asc')
    );

    const snapshot = await getDocs(q);

    // Fetch sleep from day before start date (for first day's sleep day bounds)
    const graphPriorStart = new Date(startDate);
    graphPriorStart.setDate(graphPriorStart.getDate() - 1);
    graphPriorStart.setHours(0, 0, 0, 0);
    const graphPriorEnd = new Date(startDate);
    graphPriorEnd.setHours(0, 0, 0, 0);

    const graphPriorSleepQ = query(
        collection(db, 'entries'),
        where('type', '==', 'Sleep'),
        where('startTime', '>=', Timestamp.fromDate(graphPriorStart)),
        where('startTime', '<', Timestamp.fromDate(graphPriorEnd)),
        orderBy('startTime', 'asc')
    );
    const graphPriorSleepSnap = await getDocs(graphPriorSleepQ);

    // Fetch sleep from day after end date (for last day's sleep day bounds)
    const graphPostStart = new Date(endDate);
    graphPostStart.setDate(graphPostStart.getDate() + 1);
    graphPostStart.setHours(0, 0, 0, 0);
    const graphPostEnd = new Date(graphPostStart);
    graphPostEnd.setDate(graphPostEnd.getDate() + 1);
    graphPostEnd.setHours(0, 0, 0, 0);

    const graphPostSleepQ = query(
        collection(db, 'entries'),
        where('type', '==', 'Sleep'),
        where('startTime', '>=', Timestamp.fromDate(graphPostStart)),
        where('startTime', '<', Timestamp.fromDate(graphPostEnd)),
        orderBy('startTime', 'asc')
    );
    const graphPostSleepSnap = await getDocs(graphPostSleepQ);

    const dateMap: { [key: string]: { [key: string]: number } } = {};

    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const dateKey = formatDateForInput(currentDate);
        dateMap[dateKey] = {
            'bottle-breast-milk': 0,
            'bottle-formula': 0,
            'bottle-all': 0,
            'diaper-pee': 0,
            'diaper-poo': 0,
            'diaper-mixed': 0,
            'diaper-all': 0,
            'pump': 0,
            'sleep': 0
        };
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Collect sleep entries for cross-day calculation
    const allSleepEntries: { startTime: Date; endTime: Date | null }[] = [];

    snapshot.forEach(docRef => {
        const data = docRef.data();
        const date = data.startTime.toDate();
        const dateKey = formatDateForInput(date);

        if (dateMap[dateKey]) {
            if (data.type === 'Feed' && data.subType === 'Breast Milk') {
                const amountOz = convertToOz(data.amount, data.unit);
                dateMap[dateKey]['bottle-breast-milk'] += amountOz;
                dateMap[dateKey]['bottle-all'] += amountOz;
            } else if (data.type === 'Feed' && data.subType === 'Formula') {
                const amountOz = convertToOz(data.amount, data.unit);
                dateMap[dateKey]['bottle-formula'] += amountOz;
                dateMap[dateKey]['bottle-all'] += amountOz;
            } else if (data.type === 'Diaper') {
                if (data.diaperType === 'Pee' || data.diaperType === 'Mixed') {
                    dateMap[dateKey]['diaper-pee']++;
                }
                if (data.diaperType === 'Poo' || data.diaperType === 'Mixed') {
                    dateMap[dateKey]['diaper-poo']++;
                }
                if (data.diaperType === 'Mixed') {
                    dateMap[dateKey]['diaper-mixed']++;
                }
                dateMap[dateKey]['diaper-all']++;
            } else if (data.type === 'Pump') {
                const amountOz = convertToOz(data.amount, data.unit);
                dateMap[dateKey]['pump'] += amountOz;
            }
        }

        if (data.type === 'Sleep') {
            allSleepEntries.push({
                startTime: data.startTime.toDate(),
                endTime: data.endTime ? data.endTime.toDate() : null
            });
        }
    });

    // Add prior-day and post-day sleep entries for boundary accuracy
    graphPriorSleepSnap.forEach(d => {
        const data = d.data();
        allSleepEntries.push({
            startTime: data.startTime.toDate(),
            endTime: data.endTime ? data.endTime.toDate() : null
        });
    });
    graphPostSleepSnap.forEach(d => {
        const data = d.data();
        allSleepEntries.push({
            startTime: data.startTime.toDate(),
            endTime: data.endTime ? data.endTime.toDate() : null
        });
    });

    // Compute sleep hours per day using sleep day bounds (prev day 7pm - next day 7am)
    if (selectedSeries.includes('sleep')) {
        for (const dateKey of Object.keys(dateMap)) {
            const [y, m, d] = dateKey.split('-').map(Number);
            const dayDate = new Date(y, m - 1, d);
            const bounds = getSleepDayBounds(dayDate);
            const ms = computeDaySleepMs(allSleepEntries, bounds.start, bounds.end);
            dateMap[dateKey]['sleep'] = parseFloat((ms / (1000 * 60 * 60)).toFixed(1));
        }
    }

    const labels = Object.keys(dateMap).sort();
    const datasets: any[] = [];

    const colorMap: { [key: string]: string } = {
        'bottle-breast-milk': '#4CAF50',
        'bottle-formula': '#2196F3',
        'bottle-all': '#9C27B0',
        'diaper-pee': '#FFEB3B',
        'diaper-poo': '#795548',
        'diaper-mixed': '#FF9800',
        'diaper-all': '#607D8B',
        'pump': '#E91E63',
        'sleep': '#00897B'
    };

    const labelMap: { [key: string]: string } = {
        'bottle-breast-milk': 'Bottle - Breast Milk',
        'bottle-formula': 'Bottle - Formula',
        'bottle-all': 'Bottle - All',
        'diaper-pee': 'Diaper - Pee',
        'diaper-poo': 'Diaper - Poo',
        'diaper-mixed': 'Diaper - Mixed',
        'diaper-all': 'Diaper - All',
        'pump': 'Pump',
        'sleep': 'Sleep (hrs, 7pm-7am)'
    };

    selectedSeries.forEach(series => {
        datasets.push({
            label: labelMap[series],
            data: labels.map(date => dateMap[date][series]),
            borderColor: colorMap[series],
            backgroundColor: colorMap[series] + '33',
            tension: 0.1,
            fill: false
        });
    });

    const canvas = document.getElementById('data-chart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    if (dataChart) {
        dataChart.destroy();
    }

    dataChart = new (window as any).Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.map(date => {
                const [, month, day] = date.split('-');
                return `${month}/${day}`;
            }),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Baby Tracker Data'
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (context: any) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = context.parsed.y;
                            const seriesName = context.dataset.label.toLowerCase();

                            // Check if it's a diaper series
                            if (seriesName.includes('diaper')) {
                                label += Math.round(value);
                            } else if (seriesName.includes('sleep')) {
                                label += value.toFixed(1) + ' hrs';
                            } else {
                                // For bottles/pumps, round to nearest tenth and add oz
                                label += value.toFixed(1) + ' oz';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value: any) {
                            // Check if any selected series is a diaper type
                            const isDiaperOnly = selectedSeries.every(s => s.startsWith('diaper-'));
                            if (isDiaperOnly) {
                                return Math.round(value);
                            }
                            // For bottles/pumps, show whole numbers without .0
                            return value % 1 === 0 ? value : value.toFixed(1) + ' oz';
                        }
                    },
                    title: {
                        display: true,
                        text: 'Amount (oz) / Count / Hours'
                    }
                }
            }
        }
    });
    const chartContainer = document.querySelector('.chart-container') as HTMLElement;
    if (chartContainer) {
        chartContainer.classList.add('active');
    }
}

function changeWeek(direction: number): void {
    const BIRTH_DATE = new Date(2025, 10, 5);
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
    const editSleepFields = document.getElementById('edit-sleep-fields') as HTMLElement;

    editBottleFields.style.display = 'none';
    editDiaperFields.style.display = 'none';
    editPumpFields.style.display = 'none';
    editSleepFields.style.display = 'none';

    const startTime = data.startTime.toDate();

    if (data.type === 'Feed') {
        editBottleFields.style.display = 'block';
        const editBottleUnit = document.getElementById('edit-bottle-unit') as HTMLSelectElement;
        const editBottleAmount = document.getElementById('edit-bottle-amount') as HTMLInputElement;
        const editBottleTypeContainer = document.getElementById('edit-bottle-type-container') as HTMLElement;
        const editBottleTypeSelect = document.getElementById('edit-bottle-type') as HTMLSelectElement;

        (document.getElementById('edit-bottle-time') as HTMLInputElement).value = formatDateTime(startTime);
        editBottleAmount.value = data.amount.toFixed(2);
        editBottleUnit.value = data.unit || 'oz';
        editBottleAmount.dataset.lastUnit = data.unit || 'oz';
        (document.getElementById('edit-bottle-notes') as HTMLTextAreaElement).value = data.notes || '';

        // Show type selector only for Formula
        const indicator = document.getElementById('edit-bottle-type-indicator') as HTMLDivElement;
        const typeText = document.getElementById('edit-bottle-type-text') as HTMLSpanElement;

        if (data.subType === 'Formula') {
            editBottleTypeContainer.style.display = 'block';

            // Detect which formula type from notes
            const notes = data.notes || '';
            const firstLine = notes.split('\n')[0];
            if (firstLine === 'Bobbie' || firstLine === 'Enfamil') {
                editBottleTypeSelect.value = firstLine;
                if (indicator && typeText) {
                    typeText.textContent = firstLine;
                    indicator.style.display = 'block';
                }
            } else {
                editBottleTypeSelect.value = '';
                if (indicator) {
                    indicator.style.display = 'none';
                }
            }
        } else {
            editBottleTypeContainer.style.display = 'none';
            editBottleTypeSelect.value = '';
            if (indicator) {
                indicator.style.display = 'none';
            }
        }
    } else if (data.type === 'Diaper') {
        editDiaperFields.style.display = 'block';
        (document.getElementById('edit-diaper-time') as HTMLInputElement).value = formatDateTime(startTime);
        (document.getElementById('edit-diaper-type') as HTMLSelectElement).value = data.diaperType;
        (document.getElementById('edit-diaper-notes') as HTMLTextAreaElement).value = data.notes || '';
    } else if (data.type === 'Pump') {
        editPumpFields.style.display = 'block';
        const editPumpUnit = document.getElementById('edit-pump-unit') as HTMLSelectElement;
        const editPumpAmount = document.getElementById('edit-pump-amount') as HTMLInputElement;
        (document.getElementById('edit-pump-start-time') as HTMLInputElement).value = formatDateTime(startTime);
        editPumpAmount.value = data.amount.toFixed(2);
        editPumpUnit.value = data.unit || 'oz';
        editPumpAmount.dataset.lastUnit = data.unit || 'oz';
        (document.getElementById('edit-pump-notes') as HTMLTextAreaElement).value = data.notes || '';
    } else if (data.type === 'Sleep') {
        editSleepFields.style.display = 'block';
        (document.getElementById('edit-sleep-start-time') as HTMLInputElement).value = formatDateTime(startTime);
        if (data.endTime) {
            (document.getElementById('edit-sleep-end-time') as HTMLInputElement).value = formatDateTime(data.endTime.toDate());
        } else {
            (document.getElementById('edit-sleep-end-time') as HTMLInputElement).value = formatDateTime(new Date());
        }
        (document.getElementById('edit-sleep-notes') as HTMLTextAreaElement).value = data.notes || '';
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
        const editSleepFields = document.getElementById('edit-sleep-fields') as HTMLElement;

        let updateData: any = {};
        const now = new Date();

        if (editBottleFields.style.display === 'block') {
            const timeInput = document.getElementById('edit-bottle-time') as HTMLInputElement;
            const time = timeInput.value;
            const amount = parseFloat((document.getElementById('edit-bottle-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('edit-bottle-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('edit-bottle-notes') as HTMLTextAreaElement).value;
            const editBottleTypeContainer = document.getElementById('edit-bottle-type-container') as HTMLElement;
            const editBottleType = (document.getElementById('edit-bottle-type') as HTMLSelectElement).value;

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

            // Validate formula type if it's a formula bottle
            if (editBottleTypeContainer.style.display !== 'none' && !editBottleType) {
                throw new Error('Formula type is required');
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
            const startTime = startTimeInput.value;
            const amount = parseFloat((document.getElementById('edit-pump-amount') as HTMLInputElement).value);
            const unit = (document.getElementById('edit-pump-unit') as HTMLSelectElement).value;
            const notes = (document.getElementById('edit-pump-notes') as HTMLTextAreaElement).value;

            if (!startTime) {
                throw new Error('Start time is required');
            }

            const selectedStartTime = new Date(startTimeInput.value);
            if (selectedStartTime > now) {
                throw new Error('Cannot set time in the future');
            }
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Amount must be greater than 0');
            }

            updateData = {
                startTime: Timestamp.fromDate(selectedStartTime),
                amount: amount,
                unit: unit,
                notes: notes
            };
        } else if (editSleepFields.style.display === 'block') {
            const startInput = document.getElementById('edit-sleep-start-time') as HTMLInputElement;
            const endInput = document.getElementById('edit-sleep-end-time') as HTMLInputElement;
            const notes = (document.getElementById('edit-sleep-notes') as HTMLTextAreaElement).value;

            if (!startInput.value) {
                throw new Error('Start time is required');
            }

            const selectedStartTime = new Date(startInput.value);
            if (selectedStartTime > now) {
                throw new Error('Cannot set time in the future');
            }

            updateData = {
                startTime: Timestamp.fromDate(selectedStartTime),
                notes: notes
            };

            if (endInput.value) {
                const selectedEndTime = new Date(endInput.value);
                if (selectedEndTime > now) {
                    throw new Error('End time cannot be in the future');
                }
                if (selectedEndTime <= selectedStartTime) {
                    throw new Error('End time must be after start time');
                }
                updateData.endTime = Timestamp.fromDate(selectedEndTime);
            } else {
                updateData.endTime = null;
            }
        }

        await updateDoc(doc(db, 'entries', currentEditingEntryId), updateData);

        statusDiv.className = 'success';
        statusDiv.textContent = 'Entry updated successfully!';
        statusDiv.style.display = 'block';

        setTimeout(async () => {
            closeEditModal();
            loadTimeline();
            loadWeeklyView();
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
        loadWeeklyView();
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
    if (lastPumpTimerInterval) clearInterval(lastPumpTimerInterval);
    if (timeAwakeTimerInterval) clearInterval(timeAwakeTimerInterval);
    if (napTimeTimerInterval) clearInterval(napTimeTimerInterval);

    lastBottleTimerInterval = window.setInterval(() => updateLastBottleDisplay(), 1000);
    lastPeeTimerInterval = window.setInterval(() => updateLastPeeDisplay(), 1000);
    lastPooTimerInterval = window.setInterval(() => updateLastPooDisplay(), 1000);
    lastPumpTimerInterval = window.setInterval(() => updateLastPumpDisplay(), 1000);
    timeAwakeTimerInterval = window.setInterval(() => updateTimeAwakeDisplay(), 1000);
    napTimeTimerInterval = window.setInterval(() => updateNapTimeDisplay(), 1000);
}

async function updateAllEventTimes(): Promise<void> {
    await Promise.all([
        updateLastBottleTime(),
        updateLastDiaperTimes(),
        updateLastPumpTime(),
        updateLastSleepEndTime(),
        updateNapTime()
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

        snapshot.forEach(docSnapshot => {
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

        updateLastPeeDisplay();
        updateLastPooDisplay();
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
    const displayElement = document.getElementById('last-bottle-value') as HTMLElement;
    if (!displayElement) return;

    const lastBottleTimeStr = localStorage.getItem('lastBottleTime');

    if (!lastBottleTimeStr) {
        displayElement.innerHTML = 'No bottles recorded';
        return;
    }

    const timeDiff = formatTimeDifference(lastBottleTimeStr, 'No bottles recorded');

    const lastBottleTime = new Date(lastBottleTimeStr);
    const now = new Date();
    const msSinceLastBottle = now.getTime() - lastBottleTime.getTime();
    const hoursSinceLastBottle = msSinceLastBottle / (1000 * 60 * 60);

    const projectedTimes: string[] = [];

    if (hoursSinceLastBottle > 3) {
        projectedTimes.push('in the next minute');

        for (let i = 1; i <= 2; i++) {
            const targetTime = new Date(now.getTime() + (i * 3 * 60 * 60 * 1000));
            const hours = targetTime.getHours();
            const minutes = String(targetTime.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'pm' : 'am';
            const displayHours = hours % 12 || 12;
            projectedTimes.push(`${displayHours}:${minutes} ${ampm}`);
        }
    } else {
        for (let i = 1; i <= 3; i++) {
            const targetTime = new Date(lastBottleTime.getTime() + (i * 3 * 60 * 60 * 1000));
            const hours = targetTime.getHours();
            const minutes = String(targetTime.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'pm' : 'am';
            const displayHours = hours % 12 || 12;
            projectedTimes.push(`${displayHours}:${minutes} ${ampm}`);
        }
    }

    const nextFeedsText = projectedTimes.map((time, index) => {
        const hoursLabel = (index + 1) * 3;
        return `+ ${hoursLabel} hours: ${time}`;
    }).join('<br>');

    displayElement.innerHTML = `${timeDiff}<br><span style="font-size: 12px; color: #666;">Next feeds:<br>${nextFeedsText}</span>`;
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

function updateLastPumpDisplay(): void {
    const displayElement = document.getElementById('last-pump-value') as HTMLElement;
    if (!displayElement) return;

    const lastPumpTimeStr = localStorage.getItem('lastPumpTime');

    if (!lastPumpTimeStr) {
        displayElement.innerHTML = 'No pumps recorded';
        return;
    }

    const timeDiff = formatTimeDifference(lastPumpTimeStr, 'No pumps recorded');

    const lastPumpTime = new Date(lastPumpTimeStr);
    const now = new Date();
    const msSinceLastPump = now.getTime() - lastPumpTime.getTime();
    const hoursSinceLastPump = msSinceLastPump / (1000 * 60 * 60);

    const projectedTimes: string[] = [];

    if (hoursSinceLastPump > 4) {
        projectedTimes.push('in the next minute');

        for (let i = 1; i <= 2; i++) {
            const targetTime = new Date(now.getTime() + (i * 4 * 60 * 60 * 1000));
            const hours = targetTime.getHours();
            const minutes = String(targetTime.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'pm' : 'am';
            const displayHours = hours % 12 || 12;
            projectedTimes.push(`${displayHours}:${minutes} ${ampm}`);
        }
    } else {
        for (let i = 1; i <= 3; i++) {
            const targetTime = new Date(lastPumpTime.getTime() + (i * 4 * 60 * 60 * 1000));
            const hours = targetTime.getHours();
            const minutes = String(targetTime.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'pm' : 'am';
            const displayHours = hours % 12 || 12;
            projectedTimes.push(`${displayHours}:${minutes} ${ampm}`);
        }
    }

    const nextPumpsText = projectedTimes.map((time, index) => {
        const hoursLabel = (index + 1) * 4;
        return `+ ${hoursLabel} hours: ${time}`;
    }).join('<br>');

    displayElement.innerHTML = `${timeDiff}<br><span style="font-size: 12px; color: #666;">Next pumps:<br>${nextPumpsText}</span>`;
}

async function updateLastSleepEndTime(): Promise<void> {
    try {
        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            orderBy('startTime', 'desc'),
            limit(1)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            if (data.endTime) {
                localStorage.setItem('lastSleepEndTime', data.endTime.toDate().toISOString());
                localStorage.removeItem('sleepInProgressStart');
            } else {
                // Sleep is in progress - store the start time
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

function updateTimeAwakeDisplay(): void {
    const displayElement = document.getElementById('time-awake-value') as HTMLElement;
    const labelElement = document.getElementById('time-awake-label') as HTMLElement;
    if (!displayElement) return;

    const sleepInProgressStr = localStorage.getItem('sleepInProgressStart');

    if (sleepInProgressStr) {
        // Sleep is in progress - show "Time Asleep" with running counter
        if (labelElement) labelElement.textContent = 'Time Asleep';
        displayElement.textContent = formatTimeDifference(sleepInProgressStr, 'No sleep recorded');
        return;
    }

    // Not sleeping - show "Time Awake"
    if (labelElement) labelElement.textContent = 'Time Awake';
    const lastSleepEndStr = localStorage.getItem('lastSleepEndTime');
    displayElement.textContent = formatTimeDifference(lastSleepEndStr, 'No sleep recorded');
}

async function updateNapTime(): Promise<void> {
    try {
        const now = new Date();
        const today7am = new Date(now);
        today7am.setHours(7, 0, 0, 0);

        const q = query(
            collection(db, 'entries'),
            where('type', '==', 'Sleep'),
            where('startTime', '>=', Timestamp.fromDate(today7am)),
            orderBy('startTime', 'asc')
        );
        const snapshot = await getDocs(q);

        let completedMs = 0;
        let inProgressStartTime: string | null = null;

        snapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            const startTime: Date = data.startTime.toDate();

            // Only count entries that started today after 8am
            if (startTime >= today7am && startTime.toDateString() === now.toDateString()) {
                if (data.endTime) {
                    const endTime: Date = data.endTime.toDate();
                    completedMs += endTime.getTime() - startTime.getTime();
                } else {
                    // Nap in progress
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

function updateNapTimeDisplay(): void {
    const displayElement = document.getElementById('nap-time-value') as HTMLElement;
    if (!displayElement) return;

    const completedMs = parseInt(localStorage.getItem('napTimeCompletedMs') || '0', 10);
    const inProgressStartStr = localStorage.getItem('napTimeInProgressStart');

    let totalMs = completedMs;

    if (inProgressStartStr) {
        const inProgressStart = new Date(inProgressStartStr);
        const now = new Date();
        totalMs += now.getTime() - inProgressStart.getTime();
    }

    if (totalMs <= 0) {
        displayElement.textContent = '0m';
        return;
    }

    const hours = Math.floor(totalMs / (1000 * 60 * 60));
    const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMs % (1000 * 60)) / 1000);

    if (hours > 0) {
        displayElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        displayElement.textContent = `${minutes}m ${seconds}s`;
    } else {
        displayElement.textContent = `${seconds}s`;
    }
}

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
    } else {
        // Set up passcode event listeners
        document.getElementById('passcode-submit')?.addEventListener('click', checkPasscode);
        document.getElementById('passcode-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPasscode();
            }
        });
    }
});