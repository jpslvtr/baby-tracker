# Baby Tracker

A small web app for logging a baby's diapers, bottles, sleep and more. Each family runs its own copy on a free Firebase project and GitHub Pages, so your data stays in your own account.

## What it tracks

Always on:
- Diapers: time, pee, poo or mixed, optional notes
- Data tab: weekly cards, a daily list with filters and summaries, hours since the previous poo
- Graphs and a JSON export
- Edit and delete any entry, amounts in oz or ml

On by default (you can turn them off):
- Breast milk bottles
- Formula bottles, with a brand dropdown. The brand is saved and written as the first line of the notes.

Optional:
- Sleep, with time awake and daytime sleep totals
- Solids
- Pumping, with projected next pump times
- Next feed times, projected from the last bottle
- Vitamin D, one checkbox per day
- Time zone switcher, for travel

Entries show up on every signed-in phone without refreshing. Only the Google accounts you list can sign in.

## Setup

You need Node.js 20 or newer, a Google account and a GitHub account.

### 1. Get the code

Create an empty repository on GitHub (for example `baby-tracker`), then:

```bash
git clone https://github.com/jpslvtr/baby-tracker.git
```

```bash
cd baby-tracker && npm install
```

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/baby-tracker.git
```

```bash
git push -u origin main
```

### 2. Create a Firebase project

In the [Firebase console](https://console.firebase.google.com):

1. Add a project. Google Analytics is not used, so you can turn it off.
2. Build > Firestore Database > Create database. Choose production mode and a location near you.
3. Build > Authentication > Get started > Sign-in method > Google > Enable.
4. Authentication > Settings > Authorized domains > Add domain: `YOUR-USERNAME.github.io`.
5. Project settings (gear icon) > General > Your apps > Web (`</>`). Register an app and skip Firebase Hosting. Leave this page open: setup asks for the `firebaseConfig` block it shows.

### 3. Run setup

```bash
npm run setup
```

It asks for the `firebaseConfig` block, the Google accounts that can sign in, the birth date, your time zone, oz or ml, and your repository name. Then it shows the default features to accept or change, asks whether to show next feed times and how many hours apart, and lists the optional features.

### 4. Upload the access rules

```bash
npx firebase-tools login
```

```bash
npm run deploy:firestore
```

This uploads rules that let only your listed accounts read or write, plus the indexes the app's queries need. The app can't load data until this is done. On a new project the indexes take a few minutes to build; until then some views show "Failed to load".

### 5. Try it

```bash
npm run dev
```

Open `http://localhost:5173/baby-tracker/` (use your repository name) and sign in.

### 6. Publish

```bash
npm run deploy
```

The first time, go to your repository's Settings > Pages and set the source to the `gh-pages` branch, root folder. The site will be at `https://YOUR-USERNAME.github.io/baby-tracker/`. On a phone, open it and use Add to Home Screen.

## Changing settings later

You can turn on a feature you skipped during setup, or turn one off, at any time. Your entries are kept either way.

1. Run setup again. It opens a menu instead of starting over:

   ```bash
   npm run setup
   ```

2. Choose `1` (Features). It lists every feature with its current state and a short description.
3. Type the feature's number, then `on`, `archived` or `off` (next feed times and the time zone switcher just ask y or n). Features with settings, like sleep hours or the pump interval, ask for them next.
4. Press Enter to go back, then `s` to save.
5. Publish, since settings are built into the site:

   ```bash
   npm run deploy
   ```

The same menu changes who can sign in, the birth date, time zone, units and title. If you changed who can sign in or the Firebase project, also run `npm run deploy:firestore`.

### Feature states

Bottle, sleep, solids, pumping and Vitamin D features each have three states:

| State | Add Entry | Data, Graphs, JSON |
|---|---|---|
| on | shown | shown |
| archived | hidden | shown, with stats only for periods that have entries |
| off | hidden | hidden |

Use archived when you stop tracking something but want its history. For example, when you stop pumping. Turning a feature off never deletes entries.

### Sleep hours

Sleep uses two hours of the day, set in setup (defaults 7am and 7pm):

- Sleep Time on Add Entry adds up today's sleep since the day start hour.
- Daily totals in Data and Graphs run from the night start hour the evening before to the day start hour the morning after. A day's total includes the night before and the night after it.

### Formula brands

Removing a brand from the list keeps it on old entries, so editing an old bottle won't change its brand. "Other" is always available and adds no line to the notes.

### Next feed and pump times

These show three projected times after the last bottle or pump, using the interval from setup. Once a feed or pump is overdue, the projections count from now.

## Your data

The data lives in your Firestore database:
- `entries`: one document per diaper, bottle, pump, solids or sleep entry
- `vitaminD`: one document per day
- `meta/lastChange`: updated on every change so other phones know to refresh

Your settings live in `tracker.config.json`, `firestore.rules` and `.firebaserc`. All three are gitignored. The Firebase web config ends up in the published site, which is normal for Firebase apps. The access rules are what keep the data private.

Firebase's free tier covers a family's use.

## Code

TypeScript and Vite, no framework. `src/main.ts` starts the app, `src/config-schema.ts` defines and checks `tracker.config.json`, and `tools/setup.mjs` is the setup script. `npm run build` type-checks and builds.

## License

[MIT](LICENSE)
