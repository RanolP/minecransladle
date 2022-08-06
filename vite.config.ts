import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import ssr from 'vite-plugin-ssr/plugin';
import linariaRollupRaw from '@linaria/rollup';

const linariaRollup = (linariaRollupRaw as unknown as any)
  .default as typeof linariaRollupRaw;

// https://vitejs.dev/config/
export default defineConfig({
  base: '/minecransladle/',
  plugins: [
    preact(),
    ssr({
      prerender: true,
    }),
    linariaRollup({
      include: '**/*.{ts,tsx}',
    }),
  ],
});
