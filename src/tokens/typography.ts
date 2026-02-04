/**
 * Typography Tokens for SaaS Design System
 *
 * Our typography system uses Inter as the primary font family.
 * It's designed for excellent readability in data-heavy SaaS interfaces.
 */

// ===================
// FONT FAMILIES
// ===================

export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
} as const;

// ===================
// FONT SIZES
// ===================

export const fontSize = {
  xs: {
    size: '0.75rem',    // 12px
    lineHeight: '1rem', // 16px
  },
  sm: {
    size: '0.875rem',     // 14px
    lineHeight: '1.25rem', // 20px
  },
  base: {
    size: '1rem',       // 16px
    lineHeight: '1.5rem', // 24px
  },
  lg: {
    size: '1.125rem',     // 18px
    lineHeight: '1.75rem', // 28px
  },
  xl: {
    size: '1.25rem',      // 20px
    lineHeight: '1.75rem', // 28px
  },
  '2xl': {
    size: '1.5rem',     // 24px
    lineHeight: '2rem', // 32px
  },
  '3xl': {
    size: '1.875rem',     // 30px
    lineHeight: '2.25rem', // 36px
  },
  '4xl': {
    size: '2.25rem',    // 36px
    lineHeight: '2.5rem', // 40px
  },
  '5xl': {
    size: '3rem',       // 48px
    lineHeight: '1',
  },
  '6xl': {
    size: '3.75rem',    // 60px
    lineHeight: '1',
  },
} as const;

// ===================
// FONT WEIGHTS
// ===================

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

// ===================
// LINE HEIGHTS
// ===================

export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

// ===================
// LETTER SPACING
// ===================

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ===================
// TYPOGRAPHY PRESETS
// ===================

/**
 * Pre-configured typography styles for common use cases
 */
export const typographyPresets = {
  /** Page titles */
  h1: {
    fontSize: fontSize['4xl'].size,
    lineHeight: fontSize['4xl'].lineHeight,
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.tight,
  },
  /** Section headers */
  h2: {
    fontSize: fontSize['3xl'].size,
    lineHeight: fontSize['3xl'].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.tight,
  },
  /** Subsection headers */
  h3: {
    fontSize: fontSize['2xl'].size,
    lineHeight: fontSize['2xl'].lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.normal,
  },
  /** Card headers */
  h4: {
    fontSize: fontSize.xl.size,
    lineHeight: fontSize.xl.lineHeight,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.normal,
  },
  /** Body text */
  body: {
    fontSize: fontSize.base.size,
    lineHeight: fontSize.base.lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  /** Small body text */
  bodySmall: {
    fontSize: fontSize.sm.size,
    lineHeight: fontSize.sm.lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  /** Caption text */
  caption: {
    fontSize: fontSize.xs.size,
    lineHeight: fontSize.xs.lineHeight,
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  /** Code/Monospace */
  code: {
    fontFamily: fontFamily.mono.join(', '),
    fontSize: fontSize.sm.size,
    lineHeight: fontSize.sm.lineHeight,
    fontWeight: fontWeight.normal,
  },
} as const;

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  presets: typographyPresets,
} as const;

export default typography;
