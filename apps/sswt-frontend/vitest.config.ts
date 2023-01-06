import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ['vitest-setup.ts'],
        globals: true,
        environment: 'jsdom',
    },
    root: '.',
    // @ts-ignore
    plugins: [vue(), tsconfigPaths()],
})