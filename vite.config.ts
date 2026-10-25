import { defineConfig } from 'vite';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseConfig } from './src/config-schema';

const configPath = fileURLToPath(new URL('./tracker.config.json', import.meta.url));

function loadTrackerConfig() {
    if (!existsSync(configPath)) {
        throw new Error('tracker.config.json not found. Run "npm run setup" first.');
    }
    return parseConfig(JSON.parse(readFileSync(configPath, 'utf8')));
}

const trackerConfig = loadTrackerConfig();

export default defineConfig({
    base: trackerConfig.basePath,
    define: {
        __TRACKER_CONFIG__: JSON.stringify(trackerConfig)
    },
    build: {
        outDir: 'dist',
        // The Firebase SDK (Firestore + Auth) is most of the bundle.
        chunkSizeWarningLimit: 700
    }
});
