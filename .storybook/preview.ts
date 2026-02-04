import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
    layout: 'padded',
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['Components', ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch', '*']],
      },
    },
  },
};

export default preview;
