import { config, features, isAddable, isVisible, dayStartLabel, nightStartLabel } from './config';
import type { FeatureState } from './config-schema';
import { getSelectedTimezone } from './time';
import { populateBrandSelect } from './formula';
import { labelSleepSeries } from './graphs';

function stateOf(name: string): FeatureState {
    switch (name) {
        case 'breastMilk': return features.breastMilk.state;
        case 'formula': return features.formula.state;
        case 'solids': return features.solids.state;
        case 'sleep': return features.sleep.state;
        case 'pumping': return features.pumping.state;
        case 'vitaminD': return features.vitaminD.state;
        case 'timeZoneSwitcher': return features.timeZoneSwitcher.enabled ? 'on' : 'off';
    }
    throw new Error(`Unknown feature "${name}" in index.html`);
}

// Elements tagged data-feature="a b" stay if any listed feature qualifies.
// data-when="on" means only while it can still be added (Add Entry tab);
// otherwise archived features count too (Data, Graphs, JSON). Elements are
// removed rather than hidden because iOS Safari ignores hidden <option>s.
function removeUnusedFeatureElements(): void {
    document.querySelectorAll<HTMLElement>('[data-feature]').forEach(element => {
        const needsAddable = element.dataset.when === 'on';
        const keep = element.dataset.feature!.split(' ').some(name => {
            const state = stateOf(name);
            return needsAddable ? isAddable(state) : isVisible(state);
        });
        if (!keep) element.remove();
    });
}

function setText(selector: string, text: string): void {
    document.querySelectorAll(selector).forEach(e => e.textContent = text);
}

function populateTimeZones(): void {
    const select = document.getElementById('timezone-select') as HTMLSelectElement | null;
    if (!select) return;
    select.replaceChildren(...features.timeZoneSwitcher.zones.map(z => {
        const option = document.createElement('option');
        option.value = z.zone;
        option.textContent = z.label;
        return option;
    }));
    select.value = getSelectedTimezone();
}

export function applyConfigToPage(): void {
    document.title = config.title;
    setText('.app-title', config.title);
    setText('.footer-text', config.footer);
    setText('.day-start-label', dayStartLabel);
    setText('.night-start-label', nightStartLabel);

    removeUnusedFeatureElements();
    populateTimeZones();
    populateBrandSelect(document.getElementById('bottle-type') as HTMLSelectElement, false);
    populateBrandSelect(document.getElementById('edit-bottle-type') as HTMLSelectElement, true);
    labelSleepSeries();
}
