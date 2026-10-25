import type { FeatureState, TrackerConfig } from './config-schema';

// Validated by vite.config.ts at build time and inlined here.
export const config: TrackerConfig = __TRACKER_CONFIG__;

export const features = config.features;

export function isVisible(state: FeatureState): boolean {
    return state !== 'off';
}

export function isAddable(state: FeatureState): boolean {
    return state === 'on';
}

// Archived features only show stats for periods that have entries, so retired
// features don't leave rows of zeros behind.
export function showStat(state: FeatureState, value: number): boolean {
    return state === 'on' || (state === 'archived' && value > 0);
}

export function anyBottleAddable(): boolean {
    return isAddable(features.breastMilk.state) || isAddable(features.formula.state);
}

export function anyBottleVisible(): boolean {
    return isVisible(features.breastMilk.state) || isVisible(features.formula.state);
}

function parseLocalDate(isoDate: string): Date {
    const [y, m, d] = isoDate.split('-').map(Number);
    return new Date(y, m - 1, d);
}

export function birthDate(): Date {
    return parseLocalDate(config.birthDate);
}

export function vitaminDStartDate(): Date {
    return parseLocalDate(features.vitaminD.startDate);
}

export function hourLabel(hour: number): string {
    const suffix = hour >= 12 ? 'pm' : 'am';
    return `${hour % 12 || 12}${suffix}`;
}

export function hourInput(hour: number): string {
    return `${String(hour).padStart(2, '0')}:00`;
}

export const dayStartLabel = hourLabel(features.sleep.dayStartHour);
export const nightStartLabel = hourLabel(features.sleep.nightStartHour);
