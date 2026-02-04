/**
 * Design Tokens for SaaS Design System
 *
 * This file exports all design tokens used throughout the system.
 * Tokens provide a single source of truth for visual design decisions.
 *
 * @example
 * import { colors, spacing, typography } from '@/tokens';
 *
 * // Use in components
 * const primaryColor = colors.brand[500];
 * const padding = spacing[4];
 */

export * from './colors';
export * from './spacing';
export * from './typography';
export * from './shadows';

// Re-export defaults for convenience
export { default as colors } from './colors';
export { default as spacing } from './spacing';
export { default as typography } from './typography';
export { default as shadows } from './shadows';

// ===================
// BORDER RADIUS TOKENS
// ===================

export const borderRadius = {
  none: '0px',
  sm: '0.25rem',      // 4px
  DEFAULT: '0.375rem', // 6px
  md: '0.5rem',       // 8px
  lg: '0.75rem',      // 12px
  xl: '1rem',         // 16px
  '2xl': '1.5rem',    // 24px
  full: '9999px',
} as const;

// ===================
// Z-INDEX TOKENS
// ===================

export const zIndex = {
  /** Base layer */
  base: 0,

  /** Slightly elevated (sticky headers) */
  sticky: 1020,

  /** Fixed elements */
  fixed: 1030,

  /** Dropdown menus */
  dropdown: 1000,

  /** Modal backdrop */
  modalBackdrop: 1040,

  /** Modal content */
  modal: 1050,

  /** Popovers */
  popover: 1060,

  /** Tooltips */
  tooltip: 1070,

  /** Toast notifications (highest) */
  toast: 1080,
} as const;

// ===================
// ANIMATION TOKENS
// ===================

export const animation = {
  duration: {
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ===================
// BREAKPOINTS
// ===================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ===================
// COMBINED TOKENS EXPORT
// ===================

export const tokens = {
  borderRadius,
  zIndex,
  animation,
  breakpoints,
} as const;
