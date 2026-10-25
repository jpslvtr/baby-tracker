// Shape and validation of tracker.config.json. Imported by vite.config.ts so a
// bad config fails the build instead of the app at runtime.

// on: can be added and shows everywhere.
// archived: can no longer be added, but past entries still show in Data,
// Graphs, Edit and JSON (stats only where that period has entries).
// off: hidden everywhere.
export type FeatureState = 'on' | 'archived' | 'off';

export interface TimeZoneOption {
    label: string;
    zone: string;
}

export interface FirebaseWebConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export interface TrackerConfig {
    title: string;
    footer: string;
    basePath: string;
    firebase: FirebaseWebConfig;
    allowedEmails: string[];
    birthDate: string;
    timeZone: string;
    defaultUnit: 'oz' | 'ml';
    features: {
        breastMilk: { state: FeatureState };
        formula: { state: FeatureState; brands: string[]; pastBrands: string[] };
        solids: { state: FeatureState };
        sleep: { state: FeatureState; dayStartHour: number; nightStartHour: number };
        pumping: { state: FeatureState; intervalHours: number };
        vitaminD: { state: FeatureState; startDate: string };
        nextFeeds: { enabled: boolean; intervalHours: number };
        timeZoneSwitcher: { enabled: boolean; zones: TimeZoneOption[] };
    };
}

class ConfigError extends Error {
    constructor(path: string, problem: string) {
        super(`tracker.config.json: ${path} ${problem}. Run "npm run setup" to fix it.`);
    }
}

type Obj = Record<string, unknown>;

function obj(value: unknown, path: string): Obj {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw new ConfigError(path, 'must be an object');
    }
    return value as Obj;
}

function str(o: Obj, key: string, path: string, allowEmpty = false): string {
    const value = o[key];
    if (typeof value !== 'string' || (!allowEmpty && value.trim() === '')) {
        throw new ConfigError(`${path}.${key}`, 'must be a non-empty string');
    }
    return value;
}

function strList(o: Obj, key: string, path: string): string[] {
    const value = o[key];
    if (!Array.isArray(value) || value.some(v => typeof v !== 'string' || v.trim() === '')) {
        throw new ConfigError(`${path}.${key}`, 'must be a list of non-empty strings');
    }
    return value as string[];
}

function bool(o: Obj, key: string, path: string): boolean {
    const value = o[key];
    if (typeof value !== 'boolean') throw new ConfigError(`${path}.${key}`, 'must be true or false');
    return value;
}

function hour(o: Obj, key: string, path: string): number {
    const value = o[key];
    if (!Number.isInteger(value) || (value as number) < 0 || (value as number) > 23) {
        throw new ConfigError(`${path}.${key}`, 'must be a whole number from 0 to 23');
    }
    return value as number;
}

function hours(o: Obj, key: string, path: string): number {
    const value = o[key];
    if (typeof value !== 'number' || !(value > 0) || value > 24) {
        throw new ConfigError(`${path}.${key}`, 'must be a number of hours above 0 and at most 24');
    }
    return value;
}

function state(o: Obj, path: string): FeatureState {
    const value = o.state;
    if (value !== 'on' && value !== 'archived' && value !== 'off') {
        throw new ConfigError(`${path}.state`, 'must be "on", "archived" or "off"');
    }
    return value;
}

function isoDate(o: Obj, key: string, path: string): string {
    const value = str(o, key, path);
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    const date = match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : null;
    if (!match || !date || date.getMonth() !== Number(match[2]) - 1 || date.getDate() !== Number(match[3])) {
        throw new ConfigError(`${path}.${key}`, 'must be a real date written as YYYY-MM-DD');
    }
    return value;
}

function timeZoneName(value: string, path: string): string {
    try {
        new Intl.DateTimeFormat('en-US', { timeZone: value });
    } catch {
        throw new ConfigError(path, `"${value}" is not a known time zone (use a name like America/New_York)`);
    }
    return value;
}

export function parseConfig(raw: unknown): TrackerConfig {
    const root = obj(raw, 'config');

    const fb = obj(root.firebase, 'firebase');
    const firebase: FirebaseWebConfig = {
        apiKey: str(fb, 'apiKey', 'firebase'),
        authDomain: str(fb, 'authDomain', 'firebase'),
        projectId: str(fb, 'projectId', 'firebase'),
        storageBucket: str(fb, 'storageBucket', 'firebase'),
        messagingSenderId: str(fb, 'messagingSenderId', 'firebase'),
        appId: str(fb, 'appId', 'firebase')
    };

    const allowedEmails = strList(root, 'allowedEmails', 'config').map(e => e.trim().toLowerCase());
    if (allowedEmails.length === 0) throw new ConfigError('allowedEmails', 'must have at least one email');

    const basePath = str(root, 'basePath', 'config');
    if (!basePath.startsWith('/') || !basePath.endsWith('/')) {
        throw new ConfigError('basePath', 'must start and end with "/" (for example "/baby-tracker/")');
    }

    const defaultUnit = root.defaultUnit;
    if (defaultUnit !== 'oz' && defaultUnit !== 'ml') throw new ConfigError('defaultUnit', 'must be "oz" or "ml"');

    const f = obj(root.features, 'features');

    const breastMilk = obj(f.breastMilk, 'features.breastMilk');
    const formula = obj(f.formula, 'features.formula');
    const solids = obj(f.solids, 'features.solids');
    const sleep = obj(f.sleep, 'features.sleep');
    const pumping = obj(f.pumping, 'features.pumping');
    const vitaminD = obj(f.vitaminD, 'features.vitaminD');
    const nextFeeds = obj(f.nextFeeds, 'features.nextFeeds');
    const switcher = obj(f.timeZoneSwitcher, 'features.timeZoneSwitcher');

    const brands = strList(formula, 'brands', 'features.formula');
    const pastBrands = strList(formula, 'pastBrands', 'features.formula');
    if ([...brands, ...pastBrands].some(b => b === 'Other')) {
        throw new ConfigError('features.formula', 'must not list "Other" as a brand (it is always available)');
    }

    const dayStartHour = hour(sleep, 'dayStartHour', 'features.sleep');
    const nightStartHour = hour(sleep, 'nightStartHour', 'features.sleep');
    if (dayStartHour >= nightStartHour) {
        throw new ConfigError('features.sleep', 'dayStartHour must be earlier than nightStartHour');
    }

    const zonesRaw = switcher.zones;
    if (!Array.isArray(zonesRaw)) throw new ConfigError('features.timeZoneSwitcher.zones', 'must be a list');
    const zones = zonesRaw.map((z, i) => {
        const zo = obj(z, `features.timeZoneSwitcher.zones[${i}]`);
        const p = `features.timeZoneSwitcher.zones[${i}]`;
        return { label: str(zo, 'label', p), zone: timeZoneName(str(zo, 'zone', p), `${p}.zone`) };
    });
    const switcherEnabled = bool(switcher, 'enabled', 'features.timeZoneSwitcher');
    const timeZone = timeZoneName(str(root, 'timeZone', 'config'), 'timeZone');
    if (switcherEnabled && !zones.some(z => z.zone === timeZone)) {
        throw new ConfigError('features.timeZoneSwitcher.zones', `must include the default time zone ${timeZone}`);
    }

    return {
        title: str(root, 'title', 'config'),
        footer: str(root, 'footer', 'config', true),
        basePath,
        firebase,
        allowedEmails,
        birthDate: isoDate(root, 'birthDate', 'config'),
        timeZone,
        defaultUnit,
        features: {
            breastMilk: { state: state(breastMilk, 'features.breastMilk') },
            formula: { state: state(formula, 'features.formula'), brands, pastBrands },
            solids: { state: state(solids, 'features.solids') },
            sleep: { state: state(sleep, 'features.sleep'), dayStartHour, nightStartHour },
            pumping: { state: state(pumping, 'features.pumping'), intervalHours: hours(pumping, 'intervalHours', 'features.pumping') },
            vitaminD: { state: state(vitaminD, 'features.vitaminD'), startDate: isoDate(vitaminD, 'startDate', 'features.vitaminD') },
            nextFeeds: { enabled: bool(nextFeeds, 'enabled', 'features.nextFeeds'), intervalHours: hours(nextFeeds, 'intervalHours', 'features.nextFeeds') },
            timeZoneSwitcher: { enabled: switcherEnabled, zones }
        }
    };
}
