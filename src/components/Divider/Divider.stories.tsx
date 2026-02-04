import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Utility/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional text label in the middle of the divider',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Position of the label',
      table: {
        defaultValue: { summary: 'center' },
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <p className="text-sm">Content above</p>
      <Divider className="my-4" />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <p className="text-sm">Content above</p>
      <Divider label="OR" className="my-4" />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const LabelLeft: Story = {
  render: () => (
    <div className="w-[400px]">
      <p className="text-sm">Content above</p>
      <Divider label="Section 1" labelPosition="left" className="my-4" />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const LabelRight: Story = {
  render: () => (
    <div className="w-[400px]">
      <p className="text-sm">Content above</p>
      <Divider label="End" labelPosition="right" className="my-4" />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[100px] items-center gap-4">
      <div className="text-sm">Left content</div>
      <Divider orientation="vertical" />
      <div className="text-sm">Right content</div>
    </div>
  ),
};

export const InForm: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          placeholder="Enter your email"
        />
      </div>
      <Divider label="OR" />
      <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
        Continue with Google
      </button>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <h3 className="text-lg font-semibold">Profile Settings</h3>
      <p className="mt-1 text-sm text-slate-600">Manage your account settings</p>
      <Divider className="my-4" />
      <div className="space-y-2">
        <p className="text-sm">Name: John Doe</p>
        <p className="text-sm">Email: john@example.com</p>
      </div>
      <Divider className="my-4" />
      <button className="text-sm text-red-600 hover:text-red-500">Delete Account</button>
    </div>
  ),
};

export const MultipleSections: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Introduction</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Welcome to our design system documentation.
        </p>
      </div>
      <Divider label="Features" labelPosition="left" />
      <div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Explore the various components and features available.
        </p>
      </div>
      <Divider label="Getting Started" labelPosition="left" />
      <div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Learn how to integrate our system into your project.
        </p>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="w-[400px] space-y-8">
      <div>
        <p className="text-xs text-slate-600">No margin (default)</p>
        <Divider />
      </div>
      <div>
        <p className="text-xs text-slate-600 mb-2">With my-2</p>
        <Divider className="my-2" />
        <p className="text-xs text-slate-600 mt-2">Content below</p>
      </div>
      <div>
        <p className="text-xs text-slate-600 mb-4">With my-4</p>
        <Divider className="my-4" />
        <p className="text-xs text-slate-600 mt-4">Content below</p>
      </div>
      <div>
        <p className="text-xs text-slate-600 mb-8">With my-8</p>
        <Divider className="my-8" />
        <p className="text-xs text-slate-600 mt-8">Content below</p>
      </div>
    </div>
  ),
};
