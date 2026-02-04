import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the checkbox',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when error is true',
    },
    onCheckedChange: {
      action: 'checkedChange',
      description: 'Function called when checkbox state changes',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===================
// BASIC EXAMPLES
// ===================

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Enable notifications',
    helperText: 'Receive email notifications about your account activity',
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle option',
  },
};

export const LongLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <Checkbox label="I agree to the Terms of Service and Privacy Policy, and I understand that my data will be processed according to these policies." />
    </div>
  ),
};

// ===================
// SIZES
// ===================

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium checkbox (default)',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
  ),
};

// ===================
// STATES
// ===================

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked checkbox',
    defaultChecked: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    checked: 'indeterminate',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Checkbox with error',
    error: true,
    errorMessage: 'You must accept the terms to continue',
  },
};

// ===================
// INTERACTIVE EXAMPLES
// ===================

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="space-y-4">
        <Checkbox
          label="Toggle me"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
        />
        <p className="text-sm text-slate-600">
          Current state: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
        </p>
      </div>
    );
  },
};

export const SelectAll: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, label: 'Item 1', checked: false },
      { id: 2, label: 'Item 2', checked: false },
      { id: 3, label: 'Item 3', checked: false },
      { id: 4, label: 'Item 4', checked: false },
    ]);

    const allChecked = items.every((item) => item.checked);
    const someChecked = items.some((item) => item.checked) && !allChecked;

    const handleSelectAll = (checked: boolean | 'indeterminate') => {
      setItems(items.map((item) => ({ ...item, checked: checked === true })));
    };

    const handleItemToggle = (id: number) => {
      setItems(
        items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
      );
    };

    return (
      <div className="w-[300px] space-y-3 rounded-lg border border-slate-200 p-4">
        <Checkbox
          label="Select all"
          checked={allChecked ? true : someChecked ? 'indeterminate' : false}
          onCheckedChange={handleSelectAll}
          className="font-semibold"
        />
        <div className="ml-4 space-y-2 border-l-2 border-slate-200 pl-4">
          {items.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              checked={item.checked}
              onCheckedChange={() => handleItemToggle(item.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};

// ===================
// REAL-WORLD EXAMPLES
// ===================

export const TermsAndConditions: Story = {
  render: () => (
    <div className="w-[400px]">
      <Checkbox
        label="I accept the Terms and Conditions"
        helperText="You must accept the terms to create an account"
        required
      />
    </div>
  ),
};

export const NewsletterSubscription: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <h3 className="font-semibold text-slate-900">Newsletter Preferences</h3>
      <div className="space-y-3">
        <Checkbox
          label="Product updates"
          helperText="Get notified about new features and improvements"
          defaultChecked
        />
        <Checkbox
          label="Weekly digest"
          helperText="Receive a weekly summary of activity"
        />
        <Checkbox
          label="Marketing emails"
          helperText="Special offers and promotions"
        />
      </div>
    </div>
  ),
};

export const PermissionsForm: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <h3 className="font-semibold text-slate-900">Privacy Settings</h3>
      <div className="space-y-3">
        <Checkbox
          label="Allow cookies"
          helperText="Essential for the website to function properly"
          defaultChecked
          disabled
        />
        <Checkbox
          label="Analytics"
          helperText="Help us improve by collecting anonymous usage data"
          defaultChecked
        />
        <Checkbox
          label="Marketing"
          helperText="Allow personalized content and recommendations"
        />
      </div>
    </div>
  ),
};

export const TaskList: Story = {
  render: () => {
    const [tasks, setTasks] = useState([
      { id: 1, label: 'Review design mockups', checked: true },
      { id: 2, label: 'Update documentation', checked: true },
      { id: 3, label: 'Test new features', checked: false },
      { id: 4, label: 'Deploy to staging', checked: false },
    ]);

    const handleToggle = (id: number) => {
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task))
      );
    };

    return (
      <div className="w-[350px] rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-4 font-semibold text-slate-900">Today's Tasks</h3>
        <div className="space-y-3">
          {tasks.map((task) => (
            <Checkbox
              key={task.id}
              label={task.label}
              checked={task.checked}
              onCheckedChange={() => handleToggle(task.id)}
              className={task.checked ? 'opacity-60' : ''}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          {tasks.filter((t) => t.checked).length} of {tasks.length} completed
        </p>
      </div>
    );
  },
};

// ===================
// VALIDATION EXAMPLES
// ===================

export const RequiredField: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
      if (!checked) {
        setShowError(true);
      } else {
        setShowError(false);
        alert('Form submitted!');
      }
    };

    return (
      <div className="w-[400px] space-y-4">
        <Checkbox
          label="I agree to the terms"
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(value === true);
            if (value) setShowError(false);
          }}
          error={showError}
          errorMessage="You must accept the terms to continue"
        />
        <button
          onClick={handleSubmit}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    );
  },
};

// ===================
// PLAYGROUND
// ===================

export const Playground: Story = {
  args: {
    label: 'Playground checkbox',
    helperText: 'Try different configurations',
  },
};
