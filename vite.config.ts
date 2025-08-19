import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [react(), tailwindcss(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MyLib',
            fileName: (format) => `my-lib.${format}.js`,
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
            output: {
                globals: {
                    react: 'React',
                    'react/jsx-runtime': 'jsxRuntime',
                    'react-dom': 'ReactDOM',
                    'react-dom/client': 'ReactDOMClient',
                },
            },
        }
    },
})