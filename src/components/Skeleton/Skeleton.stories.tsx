import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonText, SkeletonCard } from './Skeleton';

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'circular', 'text'],
      description: 'Shape variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    width: {
      control: 'text',
      description: 'Width (CSS value or number in px)',
    },
    height: {
      control: 'text',
      description: 'Height (CSS value or number in px)',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton className="h-12 w-48" />,
};

export const Circular: Story = {
  render: () => <Skeleton variant="circular" width={48} height={48} />,
};

export const TextLine: Story = {
  render: () => <Skeleton variant="text" className="h-4 w-64" />,
};

export const TextBlock: Story = {
  render: () => <SkeletonText lines={4} className="w-80" />,
};

export const CardPreset: Story = {
  render: () => <SkeletonCard className="w-80" />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 w-80">
      <div>
        <p className="mb-3 text-sm font-medium text-slate-500">Default (rectangle)</p>
        <Skeleton className="h-24 w-full" />
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-slate-500">Circular (avatar)</p>
        <div className="flex gap-3">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={48} height={48} />
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-slate-500">Text lines</p>
        <SkeletonText lines={3} />
      </div>
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center gap-4 w-72">
      <Skeleton variant="circular" width={56} height={56} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" className="h-5 w-3/4" />
        <Skeleton variant="text" className="h-4 w-1/2" />
      </div>
    </div>
  ),
};

export const ListItems: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circular" width={36} height={36} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" className="h-4 w-2/3" />
            <Skeleton variant="text" className="h-3 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const DashboardCards: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-3">
          <Skeleton variant="text" className="h-3 w-1/2" />
          <Skeleton variant="text" className="h-8 w-2/3" />
          <Skeleton className="h-2 w-full" />
        </div>
      ))}
    </div>
  ),
};

export const FullCard: Story = {
  render: () => <SkeletonCard className="w-96" />,
};
