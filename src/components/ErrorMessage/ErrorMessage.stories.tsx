import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';

const meta = {
  title: 'Components/Form/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Error messages inform users about validation errors or invalid input. They appear below fields when validation fails.

## Usage Guidelines

### When to Use
- **Validation errors**: Field doesn't meet requirements
- **Required fields**: User skipped a required field
- **Format errors**: Invalid email, phone, URL format
- **Server errors**: Backend validation failures
- **Constraint violations**: Value out of range, too long/short

### When NOT to Use
- **General help**: Use HelperText for instructions
- **Success messages**: Use Toast or Alert
- **Loading states**: Use Spinner
- **Warnings**: Use Alert component with warning variant

## Best Practices

### Do
- Be specific about what's wrong ("Email is invalid")
- Provide actionable guidance ("Enter a valid email address")
- Show error immediately on blur or submit
- Use clear, plain language (not technical jargon)
- Include error icon for visual scanning
- Use role="alert" for accessibility

### Don't
- Don't blame the user ("You entered...")
- Don't use ALL CAPS or aggressive tone
- Don't show multiple errors at once per field
- Don't hide errors after showing them too quickly
- Don't use technical error codes without explanation
- Don't show errors before user interacts

## Accessibility
- Uses role="alert" for screen readers
- Red color with sufficient contrast
- Icon provides visual cue (not color alone)
- Text is descriptive and actionable
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Error message content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Text size',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'md' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Show error icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground
export const Playground: Story = {
  args: {
    children: 'This field is required.',
    size: 'md',
    showIcon: true,
  },
};

// Default
export const Default: Story = {
  args: {
    children: 'This field is required.',
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    children: 'This field is required.',
    showIcon: false,
  },
};

// Small size
export const Small: Story = {
  args: {
    children: 'Invalid format.',
    size: 'sm',
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Small (sm)</p>
        <ErrorMessage size="sm">
          Small error message for compact spaces.
        </ErrorMessage>
      </div>
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Medium (md) - Default</p>
        <ErrorMessage size="md">
          Medium error message, the default size for most use cases.
        </ErrorMessage>
      </div>
    </div>
  ),
};

// All states
export const AllStates: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md bg-slate-50 dark:bg-slate-900 rounded-lg">
      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Icon Variants
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label htmlFor="with-icon">Email (with icon)</Label>
            <Input id="with-icon" className="mt-1 border-red-500" />
            <ErrorMessage showIcon>
              Please enter a valid email address.
            </ErrorMessage>
          </div>
          <div>
            <Label htmlFor="without-icon">Password (without icon)</Label>
            <Input id="without-icon" type="password" className="mt-1 border-red-500" />
            <ErrorMessage showIcon={false}>
              Password must be at least 8 characters.
            </ErrorMessage>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Sizes
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label htmlFor="size-sm">Username (small)</Label>
            <Input id="size-sm" className="mt-1 border-red-500" />
            <ErrorMessage size="sm">
              Username is already taken.
            </ErrorMessage>
          </div>
          <div>
            <Label htmlFor="size-md">Phone (medium)</Label>
            <Input id="size-md" className="mt-1 border-red-500" />
            <ErrorMessage size="md">
              Please enter a valid phone number.
            </ErrorMessage>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Common Error Types
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <ErrorMessage>This field is required.</ErrorMessage>
          <ErrorMessage>Email address is invalid.</ErrorMessage>
          <ErrorMessage>Password must contain at least one uppercase letter.</ErrorMessage>
          <ErrorMessage>Username is already taken.</ErrorMessage>
          <ErrorMessage>File size must be less than 5MB.</ErrorMessage>
          <ErrorMessage size="sm">Please enter a valid URL.</ErrorMessage>
        </div>
      </section>
    </div>
  ),
};

// With input
export const WithInput: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="email" required>
        Email address
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        className="border-red-500 focus-visible:ring-red-500"
        defaultValue="invalid"
      />
      <ErrorMessage>Please enter a valid email address.</ErrorMessage>
    </div>
  ),
};

// Validation states
export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email-error" required>
          Email address
        </Label>
        <Input
          id="email-error"
          type="email"
          defaultValue="invalid-email"
          className="border-red-500"
        />
        <ErrorMessage>Please enter a valid email address.</ErrorMessage>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-error" required>
          Password
        </Label>
        <Input
          id="password-error"
          type="password"
          defaultValue="123"
          className="border-red-500"
        />
        <ErrorMessage>
          Password must be at least 8 characters long.
        </ErrorMessage>
      </div>

      <div className="space-y-2">
        <Label htmlFor="username-error" required>
          Username
        </Label>
        <Input
          id="username-error"
          defaultValue="user@123"
          className="border-red-500"
        />
        <ErrorMessage>
          Username can only contain letters, numbers, and underscores.
        </ErrorMessage>
      </div>

      <div className="space-y-2">
        <Label htmlFor="age-error" required>
          Age
        </Label>
        <Input
          id="age-error"
          type="number"
          defaultValue="150"
          className="border-red-500"
        />
        <ErrorMessage size="sm">Please enter a valid age (0-120).</ErrorMessage>
      </div>
    </div>
  ),
};

// Real world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md">
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
          Different Error Types
        </h3>
        <div className="space-y-4">
          <ErrorMessage>This field is required.</ErrorMessage>
          <ErrorMessage>Email address is invalid.</ErrorMessage>
          <ErrorMessage>Password must contain at least one uppercase letter.</ErrorMessage>
          <ErrorMessage>Username is already taken.</ErrorMessage>
          <ErrorMessage>File size must be less than 5MB.</ErrorMessage>
        </div>
      </section>
    </div>
  ),
};
