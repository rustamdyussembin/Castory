import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      // Features and widgets are kept as separate slices even when they are used by a single page.
      'fsd/insignificant-slice': 'off',
    },
  },
]);
