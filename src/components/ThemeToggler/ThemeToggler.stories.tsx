import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggler } from './ThemeToggler';
import { ThemeProvider } from '../../hooks/useTheme';

const meta = {
  title: 'Components/ThemeToggler',
  component: ThemeToggler,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-900 rounded-lg transition-colors min-h-[200px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showSystem: {
      control: 'boolean',
      description: 'Show system option alongside light/dark',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggler',
    },
  },
} satisfies Meta<typeof ThemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithSystemOption: Story = {
  args: {
    showSystem: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ThemeToggler size="sm" />
      <ThemeToggler size="md" />
      <ThemeToggler size="lg" />
    </div>
  ),
};

export const WithSystemAllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <ThemeToggler showSystem size="sm" />
      <ThemeToggler showSystem size="md" />
      <ThemeToggler showSystem size="lg" />
    </div>
  ),
};

export const InNavbar: Story = {
  render: () => (
    <div className="flex w-full max-w-2xl items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">My App</span>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600 dark:text-slate-400">Settings</span>
        <ThemeToggler size="sm" />
      </div>
    </div>
  ),
};
