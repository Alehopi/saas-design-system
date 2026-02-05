/**
 * Shadow Tokens for SaaS Design System
 *
 * Our shadow system provides depth and elevation to UI components.
 * Shadows are designed to be subtle and professional for B2B applications.
 */

export const shadows = {
  /** Minimal shadow for subtle elevation */
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',

  /** Light shadow for cards and buttons */
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  /** Default shadow for elevated cards */
  DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

  /** Medium shadow (same as default) */
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

  /** Large shadow for dropdowns and popovers */
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

  /** Extra large shadow for modals */
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

  /** XXL shadow for important modals */
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  /** Inner shadow for pressed states */
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',

  /** No shadow */
  none: 'none',
} as const;

/**
 * Focus ring shadows for accessibility
 */
export const focusRings = {
  /** Standard focus ring */
  default: '0 0 0 2px var(--color-border-focus)',

  /** Focus ring with offset (for buttons) */
  offset: '0 0 0 2px var(--color-ring-offset), 0 0 0 4px var(--color-border-focus)',

  /** Error focus ring */
  error: '0 0 0 2px var(--color-ring-offset), 0 0 0 4px var(--color-border-error)',

  /** Success focus ring */
  success: '0 0 0 2px var(--color-ring-offset), 0 0 0 4px var(--color-indicator-online)',
} as const;

/**
 * Shadow aliases for semantic usage
 */
export const shadowAliases = {
  /** For cards at rest */
  card: shadows.sm,

  /** For cards on hover */
  cardHover: shadows.md,

  /** For buttons */
  button: shadows.xs,

  /** For dropdown menus */
  dropdown: shadows.lg,

  /** For modal dialogs */
  modal: shadows.xl,

  /** For toast notifications */
  toast: shadows.lg,
} as const;

export default shadows;
