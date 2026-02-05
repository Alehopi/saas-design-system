import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlaygroundLayout } from '../../playground/PlaygroundLayout';

const meta = {
  title: 'Playground/Interactive Playground',
  component: PlaygroundLayout,
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
    controls: { disable: true },
    actions: { disable: true },
  },
} satisfies Meta<typeof PlaygroundLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
