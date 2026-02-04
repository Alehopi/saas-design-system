import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, LoadingOverlay } from './Spinner';
import { Button } from '../Button';
import { useState } from 'react';

const meta = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'light'],
      description: 'Color variant of the spinner',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional loading label text',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
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

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Loading...',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Loading...',
  },
};

export const Light: Story = {
  render: () => (
    <div className="flex h-32 w-64 items-center justify-center rounded-lg bg-slate-900">
      <Spinner variant="light" label="Loading..." />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Spinner variant="default" label="Default" />
      <Spinner variant="primary" label="Primary" />
      <Spinner variant="secondary" label="Secondary" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>
        <Spinner size="sm" variant="light" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Spinner size="sm" variant="primary" />
        Processing...
      </Button>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Loading Data</h3>
          <p className="mt-1 text-sm text-slate-600">Please wait while we fetch your data</p>
        </div>
        <Spinner variant="primary" />
      </div>
    </div>
  ),
};

export const Centered: Story = {
  render: () => (
    <div className="flex h-64 w-[400px] items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Spinner size="lg" variant="primary" label="Loading content..." />
    </div>
  ),
};

export const OverlayExample: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    return (
      <div className="relative">
        <div className="w-[400px] space-y-4 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-lg font-semibold">Content Area</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Click the button below to show a loading overlay.
          </p>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? 'Hide Loading' : 'Show Loading'}
          </Button>
        </div>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
            <Spinner size="lg" variant="primary" label="Loading..." />
          </div>
        )}
      </div>
    );
  },
};

export const FullPageOverlay: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    return (
      <>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Full Page Loading</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Click to show a full-page loading overlay.
          </p>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? 'Hide Overlay' : 'Show Overlay'}
          </Button>
        </div>
        <LoadingOverlay show={loading} size="xl" variant="primary" />
      </>
    );
  },
};

export const TransparentOverlay: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    return (
      <>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Transparent Overlay</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Overlay without background blur.
          </p>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? 'Hide Overlay' : 'Show Overlay'}
          </Button>
        </div>
        <LoadingOverlay show={loading} transparent size="xl" variant="primary" />
      </>
    );
  },
};
