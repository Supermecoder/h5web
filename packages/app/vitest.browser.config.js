import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig({
  ...viteConfig,
  test: {
    name: '@h5web/app (browser)',
    include: ['src/__tests__/**/*.test.tsx'],
    setupFiles: 'src/setupTests.ts',
    restoreMocks: true,
    pool: 'threads',

    browser: {
      provider: playwright(),
      enabled: true,
      instances: [{ browser: 'firefox' }],
      viewport: { width: 1920, height: 1080 },
    },
  },
});
