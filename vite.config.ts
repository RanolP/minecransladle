import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import ssr from 'vite-plugin-ssr/plugin';
import linariaRollup from '@linaria/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/minecransladle/',
  plugins: [
    preact(),
    linariaRollup({
      include: '**/*.{ts,tsx}',
    }),
    ssr({
      prerender: true,
    }),
  ],
});
