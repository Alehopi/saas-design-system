import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the label relative to the switch',
      table: {
        defaultValue: { summary: 'right' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled)',
    },
    label: {
      control: 'text',
      description: 'Label text for the switch',
    },
    description: {
      control: 'text',
      description: 'Additional description text',
    },
    onCheckedChange: {
      action: 'checkedChange',
      description: 'Function called when switch state changes',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Enable notifications' },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products and features',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
  },
};

export const Small: Story = {
  args: {
    label: 'Small switch',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large switch',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    label: 'Auto-save',
    defaultChecked: true,
  },
};
