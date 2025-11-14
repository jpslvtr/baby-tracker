import { defineConfig } from 'vite';

export default defineConfig({
    base: '/baby-tracker/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html'
            }
        }
    }
});