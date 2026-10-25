// Interactive setup: writes tracker.config.json, firestore.rules and
// .firebaserc. Run with `npm run setup`. Running it again edits the settings.

import { createInterface } from 'node:readline';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG_PATH = join(root, 'tracker.config.json');
const FIREBASE_KEYS = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const DATA_FEATURES = {
    breastMilk: 'Bottle - Breast Milk',
    formula: 'Bottle - Formula',
    sleep: 'Sleep',
    solids: 'Solids',
    pumping: 'Pumping',
    vitaminD: 'Vitamin D'
};
const OPTIONAL = ['sleep', 'solids', 'pumping', 'vitaminD', 'timeZoneSwitcher'];
const LABELS = { ...DATA_FEATURES, nextFeeds: 'Next feed times', timeZoneSwitcher: 'Time zone switcher' };
const DESCRIPTIONS = {
    breastMilk: 'log bottles of breast milk with amount and notes',
    formula: 'log formula bottles with amount, brand and notes',
    nextFeeds: 'show when the next few bottles are due, counted from the last one',
    sleep: 'log sleep, see time awake, today\'s nap total and daily sleep totals',
    solids: 'log solid food sessions with notes',
    pumping: 'log pumped milk and see when the next pump is due',
    vitaminD: 'tick a box each day the drop is given',
    timeZoneSwitcher: 'switch the times shown between time zones, for travel'
};
const describe = name => `${LABELS[name]}: ${DESCRIPTIONS[name]}`;

// One line queue for everything, so pasted multi-line text is read in order
// and leftovers from a paste can be dropped.
const rl = createInterface({ input: process.stdin });
const queue = [];
let waiter = null;
let closed = false;
rl.on('line', line => {
    if (waiter) {
        const resolve = waiter;
        waiter = null;
        resolve(line);
    } else {
        queue.push(line);
    }
});
rl.on('close', () => {
    closed = true;
    if (waiter) waiter(null);
});

function nextLine() {
    if (queue.length) return Promise.resolve(queue.shift());
    if (closed) return Promise.resolve(null);
    return new Promise(resolve => waiter = resolve);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function readLine() {
    const line = await nextLine();
    if (line === null) {
        console.log('\nInput closed. Nothing was saved.');
        process.exit(1);
    }
    return line;
}

async function ask(prompt, fallback = '') {
    process.stdout.write(fallback ? `${prompt} [${fallback}]: ` : `${prompt}: `);
    return (await readLine()).trim() || fallback;
}

async function askUntil(prompt, fallback, check) {
    for (;;) {
        const answer = await ask(prompt, fallback);
        const problem = check(answer);
        if (!problem) return answer;
        console.log(`  ${problem}`);
    }
}

async function askYesNo(prompt, fallback) {
    const answer = await askUntil(`${prompt} (y/n)`, fallback ? 'y' : 'n', a => /^(y|yes|n|no)$/i.test(a) ? null : 'Answer y or n.');
    return /^y/i.test(answer);
}

function today() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function dateProblem(value) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    const d = m && new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return d && d.getDate() === Number(m[3]) && d.getMonth() === Number(m[2]) - 1 ? null : 'Use YYYY-MM-DD, for example 2026-03-14.';
}

function timeZoneProblem(value) {
    try {
        new Intl.DateTimeFormat('en-US', { timeZone: value });
        return null;
    } catch {
        return `"${value}" is not a time zone name. Use one like America/New_York or Europe/London.`;
    }
}

const hourProblem = v => /^\d+$/.test(v) && Number(v) <= 23 ? null : 'Use a whole hour from 0 to 23 (19 is 7pm).';
const intervalProblem = v => Number(v) > 0 && Number(v) <= 24 ? null : 'Use a number of hours above 0 and at most 24.';
const emailListProblem = v => splitList(v).length && splitList(v).every(e => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) ? null : 'Enter one or more emails, separated by commas.';

function splitList(value) {
    return value.split(',').map(s => s.trim()).filter(Boolean);
}

function brandListProblem(value) {
    return splitList(value).some(b => b.toLowerCase() === 'other') ? 'Leave out "Other". It is always available.' : null;
}

function parseZones(value) {
    return splitList(value).map(pair => {
        const [label, zone] = pair.split('=').map(s => s.trim());
        return { label, zone };
    });
}

function zonesProblem(value, defaultZone) {
    const zones = parseZones(value);
    if (!zones.length || zones.some(z => !z.label || !z.zone)) return 'Use LABEL=Zone pairs, for example EST=America/New_York, PST=America/Los_Angeles.';
    const bad = zones.find(z => timeZoneProblem(z.zone));
    if (bad) return timeZoneProblem(bad.zone);
    return zones.some(z => z.zone === defaultZone) ? null : `Include your main time zone, ${defaultZone}.`;
}

function hourLabel(hour) {
    return `${hour % 12 || 12}${hour >= 12 ? 'pm' : 'am'}`;
}

async function askFirebaseConfig() {
    console.log('Paste the firebaseConfig block from the Firebase console');
    console.log('(Project settings > General > Your apps), then press Enter.');
    const found = {};
    while (!FIREBASE_KEYS.every(k => found[k])) {
        const line = await readLine();
        for (const m of line.matchAll(/(\w+)\s*:\s*["']([^"']*)["']/g)) found[m[1]] = m[2];
        if (line.trim() === '' && queue.length === 0) {
            await sleep(200);
            if (queue.length === 0 && !FIREBASE_KEYS.every(k => found[k])) {
                const missing = FIREBASE_KEYS.filter(k => !found[k]).join(', ');
                console.log(`  Still missing: ${missing}. Paste the whole block.`);
            }
        }
    }
    // Drop the rest of the pasted snippet so it isn't read as later answers.
    await sleep(300);
    queue.length = 0;
    const firebase = Object.fromEntries(FIREBASE_KEYS.map(k => [k, found[k]]));
    console.log(`  Using Firebase project ${firebase.projectId}.`);
    return firebase;
}

async function askSleepHours(sleep) {
    console.log('  Sleep is split at two hours of the day:');
    console.log('  - "Sleep Time" on Add Entry adds up naps from the day start hour.');
    console.log('  - Daily totals run from the night start hour the evening before to the day start hour the morning after,');
    console.log('    so a day\'s total includes the night before and the night after it.');
    sleep.dayStartHour = Number(await askUntil('  Day starts at hour (0-23)', String(sleep.dayStartHour), hourProblem));
    sleep.nightStartHour = Number(await askUntil('  Night starts at hour (0-23)', String(sleep.nightStartHour), v =>
        hourProblem(v) || (Number(v) > sleep.dayStartHour ? null : 'Night must start later than the day.')));
}

async function askBrands(formula) {
    const answer = await askUntil('  Formula brands, separated by commas (blank for none)', formula.brands.join(', '), brandListProblem);
    const next = splitList(answer);
    // Brands dropped from the list stay known, so old bottles keep their brand.
    const dropped = formula.brands.filter(b => !next.includes(b));
    formula.pastBrands = [...new Set([...formula.pastBrands, ...dropped])].filter(b => !next.includes(b));
    formula.brands = next;
}

async function askFeatureSettings(config, name) {
    const f = config.features;
    if (name === 'formula') await askBrands(f.formula);
    if (name === 'sleep') await askSleepHours(f.sleep);
    if (name === 'pumping') f.pumping.intervalHours = Number(await askUntil('  Hours between pumps', String(f.pumping.intervalHours), intervalProblem));
    if (name === 'nextFeeds') f.nextFeeds.intervalHours = Number(await askUntil('  Hours between feeds', String(f.nextFeeds.intervalHours), intervalProblem));
    if (name === 'timeZoneSwitcher') {
        const current = f.timeZoneSwitcher.zones.map(z => `${z.label}=${z.zone}`).join(', ') || `MAIN=${config.timeZone}`;
        f.timeZoneSwitcher.zones = parseZones(await askUntil('  Time zones as LABEL=Zone, separated by commas', current, v => zonesProblem(v, config.timeZone)));
    }
}

function newConfig() {
    return {
        title: 'Baby Tracker',
        footer: '',
        basePath: `/${basename(root)}/`,
        firebase: {},
        allowedEmails: [],
        birthDate: today(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        defaultUnit: 'oz',
        features: {
            breastMilk: { state: 'on' },
            formula: { state: 'on', brands: [], pastBrands: [] },
            solids: { state: 'off' },
            sleep: { state: 'off', dayStartHour: 7, nightStartHour: 19 },
            pumping: { state: 'off', intervalHours: 4 },
            vitaminD: { state: 'off', startDate: today() },
            nextFeeds: { enabled: false, intervalHours: 3 },
            timeZoneSwitcher: { enabled: false, zones: [] }
        }
    };
}

function isOn(config, name) {
    const f = config.features[name];
    return 'enabled' in f ? f.enabled : f.state === 'on';
}

function setOn(config, name, on) {
    const f = config.features[name];
    if ('enabled' in f) f.enabled = on;
    else f.state = on ? 'on' : 'off';
}

async function askBasics(config) {
    config.allowedEmails = splitList(await askUntil('Google accounts that can sign in, separated by commas', config.allowedEmails.join(', '), emailListProblem)).map(e => e.toLowerCase());
    config.birthDate = await askUntil('Birth date (YYYY-MM-DD)', config.birthDate, dateProblem);
    config.timeZone = await askUntil('Time zone', config.timeZone, timeZoneProblem);
    config.defaultUnit = await askUntil('Bottle units (oz or ml)', config.defaultUnit, v => v === 'oz' || v === 'ml' ? null : 'Enter oz or ml.');
}

async function firstRun() {
    const config = newConfig();
    console.log('\nBaby Tracker setup\n');
    config.firebase = await askFirebaseConfig();
    console.log('');
    await askBasics(config);
    const repo = await ask('GitHub repository name (the site will live at /<name>/)', basename(root));
    config.basePath = `/${repo.replace(/^\/+|\/+$/g, '')}/`;
    config.title = await ask('Title', config.title);

    console.log('\nDefault features:');
    console.log('  - Diapers: always on (time, pee, poo or mixed, notes)');
    console.log(`  - ${describe('breastMilk')}`);
    console.log(`  - ${describe('formula')}`);
    if (!await askYesNo('Use these?', true)) {
        setOn(config, 'breastMilk', await askYesNo('  Track breast milk bottles?', true));
        setOn(config, 'formula', await askYesNo('  Track formula bottles?', true));
    }
    if (isOn(config, 'formula')) await askBrands(config.features.formula);
    if (isOn(config, 'breastMilk') || isOn(config, 'formula')) {
        console.log(`\n${describe('nextFeeds')}.`);
        if (await askYesNo('Show next feed times?', true)) {
            setOn(config, 'nextFeeds', true);
            await askFeatureSettings(config, 'nextFeeds');
        }
    }

    console.log('\nOptional features. Skip any you don\'t need now; you can turn them on later with npm run setup.');
    OPTIONAL.forEach((name, i) => console.log(`  ${i + 1}. ${describe(name)}`));
    const picks = await askUntil('Numbers separated by spaces, or Enter for none', '', v =>
        v.split(/\s+/).filter(Boolean).every(n => Number(n) >= 1 && Number(n) <= OPTIONAL.length) ? null : `Use numbers from 1 to ${OPTIONAL.length}.`);
    for (const n of new Set(picks.split(/\s+/).filter(Boolean).map(Number))) {
        const name = OPTIONAL[n - 1];
        console.log(`\n${LABELS[name]}`);
        setOn(config, name, true);
        await askFeatureSettings(config, name);
    }
    return config;
}

function describeFeature(config, name) {
    const f = config.features[name];
    const status = 'enabled' in f ? (f.enabled ? 'on' : 'off') : f.state;
    const extras = [];
    if (name === 'formula') extras.push(`brands: ${f.brands.join(', ') || 'none'}`);
    if (name === 'sleep') extras.push(`day ${hourLabel(f.dayStartHour)}, night ${hourLabel(f.nightStartHour)}`);
    if (name === 'pumping' || name === 'nextFeeds') extras.push(`every ${f.intervalHours}h`);
    if (name === 'timeZoneSwitcher') extras.push(f.zones.map(z => z.label).join(', ') || 'no zones');
    return `${LABELS[name]}: ${status}${extras.length ? ` (${extras.join('; ')})` : ''}`;
}

async function editFeatures(config) {
    const names = ['breastMilk', 'formula', 'nextFeeds', ...OPTIONAL];
    for (;;) {
        console.log('\nFeatures (Diapers are always on):');
        names.forEach((name, i) => console.log(`  ${i + 1}. ${describeFeature(config, name)}\n       ${DESCRIPTIONS[name]}`));
        const pick = await ask('Number to change, or Enter to go back');
        if (!pick) return;
        const name = names[Number(pick) - 1];
        if (!name) continue;
        const f = config.features[name];

        if ('enabled' in f) {
            f.enabled = await askYesNo(`  Turn ${LABELS[name]} on?`, f.enabled);
        } else {
            console.log('  on: add entries and see them everywhere');
            console.log('  archived: stop adding, but keep past entries in Data and Graphs');
            console.log('  off: hide everywhere (entries stay in the database)');
            const previous = f.state;
            f.state = await askUntil('  State (on, archived, off)', f.state, v => ['on', 'archived', 'off'].includes(v) ? null : 'Enter on, archived or off.');
            // Vitamin D shows Yes/No per day from the day it was turned on.
            if (name === 'vitaminD' && f.state === 'on' && previous === 'off') f.startDate = today();
        }
        if (isOn(config, name) || name === 'formula') await askFeatureSettings(config, name);
    }
}

async function menu(config) {
    for (;;) {
        console.log(`\nBaby Tracker settings (${config.firebase.projectId})`);
        console.log(`  Sign-in: ${config.allowedEmails.join(', ')}`);
        console.log(`  Birth date: ${config.birthDate}   Time zone: ${config.timeZone}   Units: ${config.defaultUnit}`);
        console.log('\n  1. Features');
        console.log('  2. Who can sign in, birth date, time zone, units');
        console.log('  3. Title, footer, site path');
        console.log('  4. Firebase project');
        console.log('  s. Save and quit');
        console.log('  q. Quit without saving');
        const pick = (await ask('Choose')).toLowerCase();
        if (pick === '1') await editFeatures(config);
        if (pick === '2') await askBasics(config);
        if (pick === '3') {
            config.title = await ask('Title', config.title);
            config.footer = await ask('Footer text (Enter keeps it, "-" clears it)', config.footer);
            if (config.footer === '-') config.footer = '';
            const repo = await ask('GitHub repository name', config.basePath.replace(/\//g, ''));
            config.basePath = `/${repo.replace(/^\/+|\/+$/g, '')}/`;
        }
        if (pick === '4') config.firebase = await askFirebaseConfig();
        if (pick === 's') return true;
        if (pick === 'q') return false;
    }
}

function firestoreRules(emails) {
    const list = emails.map(e => `'${e}'`).join(', ');
    return `rules_version = '2';

// Generated by npm run setup. Only these Google accounts can read or write.
service cloud.firestore {
  match /databases/{database}/documents {
    function isAllowed() {
      return request.auth != null
        && request.auth.token.email_verified == true
        && request.auth.token.email.lower() in [${list}];
    }

    match /{document=**} {
      allow read, write: if isAllowed();
    }
  }
}
`;
}

function save(config, previous) {
    writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n');
    writeFileSync(join(root, 'firestore.rules'), firestoreRules(config.allowedEmails));
    writeFileSync(join(root, '.firebaserc'), JSON.stringify({ projects: { default: config.firebase.projectId } }, null, 2) + '\n');
    console.log('\nSaved tracker.config.json, firestore.rules and .firebaserc.');

    const rulesChanged = !previous
        || previous.firebase.projectId !== config.firebase.projectId
        || previous.allowedEmails.join() !== config.allowedEmails.join();

    console.log('\nNext:');
    if (rulesChanged) console.log('  npm run deploy:firestore   (upload the access rules and indexes)');
    console.log('  npm run dev                (try it at http://localhost:5173' + config.basePath + ')');
    console.log('  npm run deploy             (publish to GitHub Pages)');
    console.log('\nTo turn features on or off later: npm run setup, choose 1 (Features), then npm run deploy.');
}

async function main() {
    const existing = existsSync(CONFIG_PATH) ? JSON.parse(readFileSync(CONFIG_PATH, 'utf8')) : null;
    if (existing) {
        const config = structuredClone(existing);
        if (await menu(config)) save(config, existing);
        else console.log('Nothing was saved.');
    } else {
        save(await firstRun(), null);
    }
    rl.close();
}

main();
