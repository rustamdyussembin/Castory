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

  // Baseline: known violations scheduled for the FSD refactoring. Remove each block once it is fixed.
  {
    // `entities/settings` is the only plural entity name; it will be moved out of entities.
    files: ['./src/entities/**'],
    rules: {
      'fsd/inconsistent-naming': 'warn',
    },
  },
]);
