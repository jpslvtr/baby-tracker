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

Create an empty public repository on GitHub, for example `baby-tracker`. GitHub Pages is free for public repositories, and your data and settings never go into it.

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
4. Authentication > Settings > Authorized domains > Add domain: `YOUR-USERNAME.github.io`. If your GitHub Pages site uses a custom domain (like `yourname.com`), add that domain too, or sign-in will fail on the published site.
5. Project settings (gear icon) > General > Your apps > Web (`</>`). Register an app and skip Firebase Hosting. Leave this page open: setup asks for the `firebaseConfig` block it shows.

### 3. Run setup

```bash
npm run setup
```

It asks for the `firebaseConfig` block, the Google accounts that can sign in, the birth date, your time zone, oz or ml, and your repository name. Then it walks through the features: accept or change the defaults, choose whether to show next feed times, and pick any optional features.

### 4. Upload the access rules

```bash
npx firebase-tools@15 login
```

```bash
npm run deploy:firestore
```

This uploads rules that let only your listed accounts read or write, plus the indexes the app's queries need. The app can't load data until this is done. On a new project the indexes take a few minutes to build.

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

Run setup again. It opens a menu instead of starting over:

```bash
npm run setup
```

### Turn a feature on or off

You can turn on a feature you skipped during setup, or turn one off, at any time. Your entries are kept either way.

1. Choose `1` (Features). It lists every feature with its current state and a short description.
2. Type the feature's number, then `on`, `archived` or `off` (next feed times and the time zone switcher ask y or n). Features with settings, like sleep hours or the pump interval, ask for them next.
3. Press Enter to go back, then `s` to save.
4. Publish, since features are built into the site:

   ```bash
   npm run deploy
   ```

### Add or remove someone who can sign in

1. Choose `2` and enter the full list of Google accounts, separated by commas. Press Enter through the other questions to keep them.
2. Press `s` to save.
3. Upload the new access rules. No need to republish the site:

   ```bash
   npm run deploy:firestore
   ```

The same menu changes the birth date, time zone, units, title, footer and Firebase project. Run `npm run deploy` after changing any of them, and `npm run deploy:firestore` too if you switched Firebase projects.

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

Your settings live in `tracker.config.json`, `firestore.rules` and `.firebaserc`. All three are gitignored.

The published site is public code, so anyone can read the settings built into it: the Firebase web config (normal for Firebase apps), the birth date, title, footer and feature choices. The list of who can sign in stays out of it. Your entries are only readable by the accounts on that list.

Firebase's free tier covers a family's use.

## Troubleshooting

- **"Sign-in isn't set up for ... yet"**: add the site's domain under Firebase Authentication > Settings > Authorized domains.
- **"... doesn't have access"**: add the account with setup option `2`, then `npm run deploy:firestore`.
- **"Failed to load"**: on a new project, wait a few minutes for the indexes to build. Otherwise check that `npm run deploy:firestore` ran for the right project.

## Getting updates

To pull in improvements from the original repository:

```bash
git pull https://github.com/jpslvtr/baby-tracker.git main
```

```bash
npm install && npm run deploy
```

Your settings are gitignored, so updates never overwrite them.

## Code

TypeScript and Vite, no framework. `src/main.ts` starts the app, `src/config-schema.ts` defines and checks `tracker.config.json`, and `tools/setup.mjs` is the setup script. `npm run build` type-checks and builds.

## License

[MIT](LICENSE)
