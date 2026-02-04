import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    docs: {
      toc: true,
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
          type: 'desktop',
        },
        desktopLarge: {
          name: 'Desktop Large',
          styles: {
            width: '1920px',
            height: '1080px',
          },
          type: 'desktop',
        },
      },
      defaultViewport: 'desktop',
    },
    options: {
      storySort: {
        order: [
          'Guidelines',
          ['Introduction', 'Theming Guide', 'Accessibility', 'Design Principles', 'Grid System', 'Elevation', 'Motion', '*'],
          'Design Tokens',
          ['Colors', 'Typography', 'Spacing', '*'],
          'Components',
          [
            'Inputs',
            ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch', '*'],
            'Display',
            ['Badge', 'Avatar', 'Card', 'Tooltip', '*'],
            'Feedback',
            ['Alert', 'Toast', 'Progress', 'Spinner', '*'],
            'Overlay',
            ['Dialog', 'DropdownMenu', 'Command', '*'],
            'Navigation',
            ['Breadcrumb', 'Tabs', 'Accordion', '*'],
            'Data Display',
            ['Table', 'EmptyState', '*'],
            'Utility',
            ['Label', 'HelperText', 'ErrorMessage', 'FieldGroup', 'Divider', 'ThemeToggler', '*'],
            '*'
          ],
          'Patterns',
          '*'
        ],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
