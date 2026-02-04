import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';
import type { AxeResults } from 'axe-core';

// Extend expect with vitest-axe matchers
expect.extend(matchers);

// Add TypeScript declarations for vitest-axe matchers
declare module 'vitest' {
  interface Assertion<T = any> {
    toHaveNoViolations(): T;
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): any;
  }
}
