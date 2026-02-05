/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        semantic: {
          // Backgrounds
          'bg-primary': 'var(--color-bg-primary)',
          'bg-secondary': 'var(--color-bg-secondary)',
          'bg-tertiary': 'var(--color-bg-tertiary)',
          'bg-inverse': 'var(--color-bg-inverse)',
          'bg-elevated': 'var(--color-bg-elevated)',
          'bg-sunken': 'var(--color-bg-sunken)',
          'bg-hover': 'var(--color-bg-hover)',
          'bg-selected': 'var(--color-bg-selected)',
          'bg-disabled': 'var(--color-bg-disabled)',
          'bg-overlay': 'var(--color-bg-overlay)',
          // Foregrounds
          'fg-primary': 'var(--color-fg-primary)',
          'fg-secondary': 'var(--color-fg-secondary)',
          'fg-muted': 'var(--color-fg-muted)',
          'fg-inverse': 'var(--color-fg-inverse)',
          'fg-disabled': 'var(--color-fg-disabled)',
          'fg-error': 'var(--color-fg-error)',
          // Borders
          'border-default': 'var(--color-border-default)',
          'border-strong': 'var(--color-border-strong)',
          'border-focus': 'var(--color-border-focus)',
          'border-error': 'var(--color-border-error)',
          // Actions
          'action-primary': 'var(--color-action-primary)',
          'action-primary-hover': 'var(--color-action-primary-hover)',
          'action-primary-disabled-bg': 'var(--color-action-primary-disabled-bg)',
          'action-primary-disabled-fg': 'var(--color-action-primary-disabled-fg)',
          'action-danger': 'var(--color-action-danger)',
          'action-danger-hover': 'var(--color-action-danger-hover)',
          'action-danger-disabled-bg': 'var(--color-action-danger-disabled-bg)',
          'action-danger-disabled-fg': 'var(--color-action-danger-disabled-fg)',
          // Controls
          'control-bg': 'var(--color-control-bg)',
          'control-bg-checked': 'var(--color-control-bg-checked)',
          'control-border': 'var(--color-control-border)',
          'control-border-hover': 'var(--color-control-border-hover)',
          'control-border-error': 'var(--color-control-border-error)',
          'control-fg': 'var(--color-control-fg)',
          'control-placeholder': 'var(--color-control-placeholder)',
          'control-icon': 'var(--color-control-icon)',
          'control-unchecked': 'var(--color-control-unchecked)',
          'control-thumb': 'var(--color-control-thumb)',
          // Focus
          'ring-focus': 'var(--color-ring-focus)',
          'ring-offset': 'var(--color-ring-offset)',
          // Status: Info
          'status-info-bg': 'var(--color-status-info-bg)',
          'status-info-fg': 'var(--color-status-info-fg)',
          'status-info-border': 'var(--color-status-info-border)',
          'status-info-icon': 'var(--color-status-info-icon)',
          // Status: Success
          'status-success-bg': 'var(--color-status-success-bg)',
          'status-success-fg': 'var(--color-status-success-fg)',
          'status-success-border': 'var(--color-status-success-border)',
          'status-success-icon': 'var(--color-status-success-icon)',
          'status-success-solid': 'var(--color-status-success-solid)',
          // Status: Warning
          'status-warning-bg': 'var(--color-status-warning-bg)',
          'status-warning-fg': 'var(--color-status-warning-fg)',
          'status-warning-border': 'var(--color-status-warning-border)',
          'status-warning-icon': 'var(--color-status-warning-icon)',
          'status-warning-solid': 'var(--color-status-warning-solid)',
          // Status: Error
          'status-error-bg': 'var(--color-status-error-bg)',
          'status-error-fg': 'var(--color-status-error-fg)',
          'status-error-border': 'var(--color-status-error-border)',
          'status-error-icon': 'var(--color-status-error-icon)',
          // Indicators
          'indicator-online': 'var(--color-indicator-online)',
          'indicator-offline': 'var(--color-indicator-offline)',
          'indicator-away': 'var(--color-indicator-away)',
          'indicator-busy': 'var(--color-indicator-busy)',
          'indicator-border': 'var(--color-indicator-border)',
          // Progress
          'progress-track': 'var(--color-progress-track)',
          'progress-fill': 'var(--color-progress-fill)',
          'progress-success-track': 'var(--color-progress-success-track)',
          'progress-success-fill': 'var(--color-progress-success-fill)',
          'progress-warning-track': 'var(--color-progress-warning-track)',
          'progress-warning-fill': 'var(--color-progress-warning-fill)',
          'progress-error-track': 'var(--color-progress-error-track)',
          'progress-error-fill': 'var(--color-progress-error-fill)',
          // Badge
          'badge-default-bg': 'var(--color-badge-default-bg)',
          'badge-default-fg': 'var(--color-badge-default-fg)',
          'badge-secondary-bg': 'var(--color-badge-secondary-bg)',
          'badge-secondary-fg': 'var(--color-badge-secondary-fg)',
          'badge-outline-fg': 'var(--color-badge-outline-fg)',
          'badge-outline-border': 'var(--color-badge-outline-border)',
          // Loading overlay
          'bg-loading-overlay': 'var(--color-bg-loading-overlay)',
          // Segment
          'bg-segment-active': 'var(--color-bg-segment-active)',
          'fg-segment-active': 'var(--color-fg-segment-active)',
        },
      },
      ringColor: {
        'semantic-focus': 'var(--color-ring-focus)',
      },
      ringOffsetColor: {
        'semantic-offset': 'var(--color-ring-offset)',
      },
      boxShadow: {
        'design-sm': 'var(--shadow-sm)',
        'design-md': 'var(--shadow-md)',
        'design-lg': 'var(--shadow-lg)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
