/**
 * Color Tokens for SaaS Design System
 *
 * Our color system is organized in three levels:
 * 1. Primitive Colors: Raw color values (brand, neutral, success, warning, error)
 * 2. Semantic Colors: Context-aware colors (foreground, background, border)
 * 3. Component Colors: Specific to UI components
 */

// ===================
// PRIMITIVE COLORS
// ===================

export const brand = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6', // Primary brand color
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
} as const;

export const neutral = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
} as const;

export const success = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
} as const;

export const warning = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
} as const;

export const error = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
} as const;

// ===================
// SEMANTIC COLORS
// These use CSS variables for theme support
// ===================

export const semantic = {
  background: {
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    tertiary: 'var(--color-bg-tertiary)',
    inverse: 'var(--color-bg-inverse)',
  },
  foreground: {
    primary: 'var(--color-fg-primary)',
    secondary: 'var(--color-fg-secondary)',
    tertiary: 'var(--color-fg-tertiary)',
    muted: 'var(--color-fg-muted)',
    inverse: 'var(--color-fg-inverse)',
  },
  border: {
    default: 'var(--color-border-default)',
    strong: 'var(--color-border-strong)',
    focus: 'var(--color-border-focus)',
  },
} as const;

// ===================
// ALL COLORS EXPORT
// ===================

export const colors = {
  brand,
  neutral,
  success,
  warning,
  error,
  semantic,
} as const;

export default colors;
