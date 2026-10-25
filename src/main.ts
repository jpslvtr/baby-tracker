import { requireSignIn, signOutAndReload } from './auth';
import { applyConfigToPage } from './features';
import { setSelectedTimezone } from './time';
import { enforceNumericInputs, setupUnitConversion } from './units';
import { attachBrandFields } from './formula';
import { attachTimeValidation, handleEntryTypeChange, handleSubmitEntry, setDefaultTimes, setDefaultUnits } from './entryForm';
import { startAllTimers, startDisplayTimer, stopDisplayTimer, updateAllEventTimes, scheduleNapTimeReset } from './timers';
import { loadTimeline, handleQuickFilter, setDefaultDateFilters } from './timeline';
import { loadWeeklyView, changeWeek, goToCurrentWeek } from './weekly';
import { ensureChartLoaded, setDefaultGraphDates, updateGraph } from './graphs';
import { setupJsonView, refreshJsonIfVisible } from './jsonView';
import { saveEdit, closeEditModal } from './editModal';
import { setupVitaminD, loadVitaminDStatus } from './vitaminD';
import { startSync } from './sync';

function on(id: string, event: string, handler: (e: Event) => void): void {
    document.getElementById(id)?.addEventListener(event, handler);
}

function switchTab(tab: 'entry' | 'timeline' | 'weekly'): void {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll<HTMLElement>('.view').forEach(view => view.style.display = 'none');
    document.getElementById(`${tab}-tab`)?.classList.add('active');
    (document.getElementById(`${tab}-view`) as HTMLElement).style.display = 'block';

    // The per-second displays are only on the entry tab - pause them elsewhere.
    if (tab === 'entry') {
        startDisplayTimer();
        loadVitaminDStatus();
    } else {
        stopDisplayTimer();
    }

    if (tab === 'timeline') {
        loadWeeklyView();
        loadTimeline();
    } else if (tab === 'weekly') {
        ensureChartLoaded();   // preload Chart.js so "Update Graph" is instant
        setupJsonView();
        refreshJsonIfVisible();
    }

    window.scrollTo(0, 0);
}

function setupEventListeners(): void {
    on('entry-type', 'change', handleEntryTypeChange);
    on('submit-entry', 'click', handleSubmitEntry);
    attachBrandFields({ select: 'bottle-type', notes: 'bottle-notes', indicator: 'bottle-type-indicator', typeText: 'bottle-type-text', container: 'bottle-type-container' });
    attachBrandFields({ select: 'edit-bottle-type', notes: 'edit-bottle-notes', indicator: 'edit-bottle-type-indicator', typeText: 'edit-bottle-type-text', container: 'edit-bottle-type-container' });

    on('refresh-button', 'click', () => window.location.reload());
    on('signout-button', 'click', signOutAndReload);

    on('entry-tab', 'click', () => switchTab('entry'));
    on('timeline-tab', 'click', () => switchTab('timeline'));
    on('weekly-tab', 'click', () => switchTab('weekly'));

    on('prev-week', 'click', () => changeWeek(-1));
    on('next-week', 'click', () => changeWeek(1));
    on('current-week', 'click', goToCurrentWeek);

    on('save-edit', 'click', saveEdit);
    on('cancel-edit', 'click', closeEditModal);

    on('start-date-filter', 'change', () => loadTimeline());
    on('end-date-filter', 'change', () => loadTimeline());
    on('type-filter', 'change', () => loadTimeline());

    on('today-button', 'click', () => handleQuickFilter('today'));
    on('yesterday-button', 'click', () => handleQuickFilter('yesterday'));
    on('two-days-ago-button', 'click', () => handleQuickFilter('two-days-ago'));
    on('three-days-ago-button', 'click', () => handleQuickFilter('three-days-ago'));
    on('all-time-button', 'click', () => handleQuickFilter('all-time'));

    ['bottle-time', 'diaper-time', 'pump-start-time', 'solids-start-time', 'sleep-start-time',
        'edit-bottle-time', 'edit-diaper-time', 'edit-pump-start-time', 'edit-sleep-start-time', 'edit-solids-start-time'
    ].forEach(attachTimeValidation);

    on('update-graph-btn', 'click', updateGraph);

    on('timezone-select', 'change', (e) => {
        setSelectedTimezone((e.target as HTMLSelectElement).value);
        setDefaultTimes();
        setDefaultDateFilters();
        loadVitaminDStatus();
        updateAllEventTimes();
        loadTimeline();
        loadWeeklyView();
    });
}

function initializeUI(): void {
    setupEventListeners();
    setDefaultTimes();
    setDefaultUnits();
    setDefaultDateFilters();
    setDefaultGraphDates();
    startAllTimers();
    enforceNumericInputs();
    setupUnitConversion();
    setupVitaminD();
    scheduleNapTimeReset();
    startSync();
    window.scrollTo(0, 0);
}

applyConfigToPage();
requireSignIn(initializeUI);
