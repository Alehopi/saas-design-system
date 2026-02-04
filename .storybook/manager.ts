import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// Create APEX light theme
const apexTheme = create({
  base: 'light',

  // Branding
  brandTitle: 'APEX Design System',
  brandUrl: 'https://github.com/Alehopi/saas-design-system',
  brandImage: './apex-logo.svg',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Inter", "system-ui", -apple-system, sans-serif',
  fontCode: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',

  // Colors - Using APEX brand colors (blue-500/blue-600)
  colorPrimary: '#3b82f6',     // Brand blue-500
  colorSecondary: '#2563eb',   // Brand blue-600

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e2e8f0',   // slate-200
  appBorderRadius: 8,

  // Text colors
  textColor: '#0f172a',        // slate-900
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#64748b',     // slate-500
  barSelectedColor: '#3b82f6', // blue-500
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',      // slate-200
  inputTextColor: '#0f172a',   // slate-900
  inputBorderRadius: 6,
});

// Create APEX dark theme
const apexDarkTheme = create({
  base: 'dark',

  // Branding
  brandTitle: 'APEX Design System',
  brandUrl: 'https://github.com/Alehopi/saas-design-system',
  brandImage: './apex-logo-dark.svg',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Inter", "system-ui", -apple-system, sans-serif',
  fontCode: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',

  // Colors - Lighter blues for dark mode
  colorPrimary: '#60a5fa',     // Brand blue-400 (lighter for dark)
  colorSecondary: '#3b82f6',   // Brand blue-500

  // UI
  appBg: '#0f172a',            // slate-900
  appContentBg: '#1e293b',     // slate-800
  appBorderColor: '#334155',   // slate-700
  appBorderRadius: 8,

  // Text colors
  textColor: '#f8fafc',        // slate-50
  textInverseColor: '#0f172a', // slate-900

  // Toolbar colors
  barTextColor: '#cbd5e1',     // slate-300
  barSelectedColor: '#60a5fa', // blue-400
  barBg: '#0f172a',            // slate-900

  // Form colors
  inputBg: '#1e293b',          // slate-800
  inputBorder: '#334155',      // slate-700
  inputTextColor: '#f8fafc',   // slate-50
  inputBorderRadius: 6,
});

// Register themes with Storybook
addons.setConfig({
  theme: apexTheme,

  // Sidebar configuration
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },

  // Toolbar configuration
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },

  // Panel configuration
  showPanel: true,
  panelPosition: 'bottom',
});
