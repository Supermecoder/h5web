import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig({
  ...viteConfig,
  test: {
    name: '@h5web/app (unit)',
    include: ['src/**/*.test.ts', '!src/__tests__/**'],
    restoreMocks: true,
    pool: 'threads',
  },
});
