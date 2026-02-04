import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupWrapper } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: RadioGroupWrapper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the radio options',
      table: {
        defaultValue: { summary: 'vertical' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio buttons',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all radio buttons in the group',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    label: {
      control: 'text',
      description: 'Label for the radio group',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when error is true',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value (uncontrolled)',
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Function called when selection changes',
    },
  },
} satisfies Meta<typeof RadioGroupWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Select an option',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Choose an option',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'maybe', label: 'Maybe' },
    ],
  },
};

export const WithDescriptions: Story = {
  args: {
    label: 'Select your plan',
    options: [
      { value: 'free', label: 'Free', description: '$0/month - Basic features' },
      { value: 'pro', label: 'Pro', description: '$10/month - Advanced features' },
      { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing - All features' },
    ],
    defaultValue: 'pro',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Delivery method',
    orientation: 'horizontal',
    options: [
      { value: 'standard', label: 'Standard' },
      { value: 'express', label: 'Express' },
      { value: 'overnight', label: 'Overnight' },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Choose size',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large', disabled: true },
    ],
  },
};

export const Error: Story = {
  args: {
    label: 'Required field',
    error: true,
    errorMessage: 'Please select an option',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
};
