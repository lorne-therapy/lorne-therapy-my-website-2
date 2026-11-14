import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// Every public page has its own HTML template. Keep in sync with src/routes.ts.
const pageInputs = {
  main: 'index.html',
  couplesTherapy: 'couples-therapy/index.html',
  traumaEmdrTherapy: 'trauma-emdr-therapy/index.html',
  contact: 'contact/index.html',
  goodFaithEstimate: 'good-faith-estimate/index.html',
  privacy: 'privacy/index.html',
  notFound: '404.html',
};

export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: isSsrBuild
      ? { copyPublicDir: false }
      : {
          rollupOptions: {
            input: Object.fromEntries(
              Object.entries(pageInputs).map(([name, file]) => [name, path.resolve(__dirname, file)]),
            ),
          },
        },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
