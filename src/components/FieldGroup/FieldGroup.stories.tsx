import type { Meta, StoryObj } from '@storybook/react';
import { FieldGroup } from './FieldGroup';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';
import { HelperText } from '../HelperText/HelperText';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Form/FieldGroup',
  component: FieldGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
FieldGroup is a wrapper component that combines Label, Input/Field, HelperText, and ErrorMessage into a consistent, accessible form field structure.

## Usage Guidelines

### When to Use
- **All form fields**: Wrap every input with FieldGroup for consistency
- **Complex forms**: Maintain consistent spacing and structure
- **Validation states**: Automatically show errors or helper text
- **Accessibility**: Proper associations between label, input, and messages

### When NOT to Use
- **Custom layouts**: When you need complete control over structure
- **Non-form elements**: Only for actual form fields
- **Simple inline inputs**: Like search bars without labels

## Best Practices

### Do
- Use for all standard form fields
- Show either error OR helper text (not both)
- Provide descriptive labels
- Use consistent spacing across forms
- Include helper text for complex fields
- Mark required fields clearly

### Don't
- Don't show both error and helper text simultaneously
- Don't omit labels (except in special cases)
- Don't nest FieldGroups
- Don't use for non-form content
- Don't forget to associate elements properly

## Accessibility
- Label properly associated with input
- Error messages use role="alert"
- Helper text linked via aria-describedby
- Semantic HTML structure
- Keyboard navigation support
        `,
      },
    },
  },
  argTypes: {
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing between elements',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: false,
      description: 'Label element',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    helperText: {
      control: false,
      description: 'Helper text element',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    error: {
      control: false,
      description: 'Error message element',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    children: {
      control: false,
      description: 'Input/field element',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof FieldGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground
export const Playground: Story = {
  render: (args) => (
    <div className="w-80">
      <FieldGroup
        {...args}
        label={<Label htmlFor="playground">Email address</Label>}
        helperText={<HelperText>We'll never share your email.</HelperText>}
      >
        <Input id="playground" type="email" placeholder="you@example.com" />
      </FieldGroup>
    </div>
  ),
  args: {
    spacing: 'md',
  },
};

// Default
export const Default: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup
        label={<Label htmlFor="email">Email address</Label>}
        helperText={<HelperText>We'll never share your email.</HelperText>}
      >
        <Input id="email" type="email" placeholder="you@example.com" />
      </FieldGroup>
    </div>
  ),
};

// Required field
export const Required: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup
        label={
          <Label htmlFor="name" required>
            Full name
          </Label>
        }
        helperText={<HelperText>Enter your first and last name.</HelperText>}
      >
        <Input id="name" placeholder="John Doe" />
      </FieldGroup>
    </div>
  ),
};

// With error
export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup
        label={
          <Label htmlFor="email-error" required>
            Email address
          </Label>
        }
        error={<ErrorMessage>Please enter a valid email address.</ErrorMessage>}
      >
        <Input
          id="email-error"
          type="email"
          defaultValue="invalid"
          className="border-red-500"
        />
      </FieldGroup>
    </div>
  ),
};

// Compact spacing
export const CompactSpacing: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup
        spacing="sm"
        label={<Label htmlFor="compact">Compact field</Label>}
        helperText={<HelperText size="sm">Smaller spacing between elements.</HelperText>}
      >
        <Input id="compact" />
      </FieldGroup>
    </div>
  ),
};

// Large spacing
export const LargeSpacing: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup
        spacing="lg"
        label={<Label htmlFor="large" size="lg">Large field</Label>}
        helperText={<HelperText>Larger spacing between elements.</HelperText>}
      >
        <Input id="large" />
      </FieldGroup>
    </div>
  ),
};

// All spacing options
export const AllSpacing: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">Small Spacing (sm)</p>
        <FieldGroup
          spacing="sm"
          label={<Label htmlFor="sp-sm">Field label</Label>}
          helperText={<HelperText size="sm">Compact spacing.</HelperText>}
        >
          <Input id="sp-sm" />
        </FieldGroup>
      </div>
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">Medium Spacing (md) - Default</p>
        <FieldGroup
          spacing="md"
          label={<Label htmlFor="sp-md">Field label</Label>}
          helperText={<HelperText>Standard spacing.</HelperText>}
        >
          <Input id="sp-md" />
        </FieldGroup>
      </div>
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">Large Spacing (lg)</p>
        <FieldGroup
          spacing="lg"
          label={<Label htmlFor="sp-lg">Field label</Label>}
          helperText={<HelperText>Generous spacing.</HelperText>}
        >
          <Input id="sp-lg" />
        </FieldGroup>
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
          Valid State
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <FieldGroup
            label={
              <Label htmlFor="valid-email" required>
                Email address
              </Label>
            }
            helperText={<HelperText>We'll never share your email.</HelperText>}
          >
            <Input id="valid-email" type="email" defaultValue="user@example.com" />
          </FieldGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Error State
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <FieldGroup
            label={
              <Label htmlFor="error-email" required>
                Email address
              </Label>
            }
            error={<ErrorMessage>Please enter a valid email address.</ErrorMessage>}
          >
            <Input
              id="error-email"
              type="email"
              defaultValue="invalid"
              className="border-red-500"
            />
          </FieldGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Disabled State
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <FieldGroup
            label={
              <Label htmlFor="disabled-field" disabled>
                Disabled field
              </Label>
            }
            helperText={<HelperText variant="muted">This field cannot be edited.</HelperText>}
          >
            <Input id="disabled-field" disabled defaultValue="Cannot edit" />
          </FieldGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Optional Field
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <FieldGroup
            label={<Label htmlFor="optional-field">Company name</Label>}
            helperText={<HelperText variant="muted">Optional field.</HelperText>}
          >
            <Input id="optional-field" placeholder="Acme Inc." />
          </FieldGroup>
        </div>
      </section>
    </div>
  ),
};

// Real world example
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md">
      <form className="space-y-6">
        <FieldGroup
          label={
            <Label htmlFor="username" required>
              Username
            </Label>
          }
          helperText={<HelperText>3-20 characters. Letters, numbers, and underscores only.</HelperText>}
        >
          <Input id="username" placeholder="johndoe" />
        </FieldGroup>

        <FieldGroup
          label={
            <Label htmlFor="email-form" required>
              Email address
            </Label>
          }
          helperText={<HelperText>We'll never share your email with anyone else.</HelperText>}
        >
          <Input id="email-form" type="email" placeholder="you@example.com" />
        </FieldGroup>

        <FieldGroup
          label={
            <Label htmlFor="password-form" required>
              Password
            </Label>
          }
          helperText={
            <HelperText>
              Must be at least 8 characters with uppercase, lowercase, and numbers.
            </HelperText>
          }
        >
          <Input id="password-form" type="password" />
        </FieldGroup>

        <FieldGroup
          label={<Label htmlFor="company">Company name</Label>}
          helperText={<HelperText variant="muted">Optional field.</HelperText>}
        >
          <Input id="company" placeholder="Acme Inc." />
        </FieldGroup>

        <Button variant="primary" className="w-full">
          Create Account
        </Button>
      </form>
    </div>
  ),
};

// Validation states
export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md">
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Valid Field</h3>
        <FieldGroup
          label={
            <Label htmlFor="valid-email" required>
              Email address
            </Label>
          }
          helperText={<HelperText>We'll never share your email.</HelperText>}
        >
          <Input id="valid-email" type="email" defaultValue="user@example.com" />
        </FieldGroup>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Error State</h3>
        <FieldGroup
          label={
            <Label htmlFor="error-email" required>
              Email address
            </Label>
          }
          error={<ErrorMessage>Please enter a valid email address.</ErrorMessage>}
        >
          <Input
            id="error-email"
            type="email"
            defaultValue="invalid"
            className="border-red-500"
          />
        </FieldGroup>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Disabled Field</h3>
        <FieldGroup
          label={
            <Label htmlFor="disabled-field" disabled>
              Disabled field
            </Label>
          }
          helperText={<HelperText variant="muted">This field cannot be edited.</HelperText>}
        >
          <Input id="disabled-field" disabled defaultValue="Cannot edit" />
        </FieldGroup>
      </section>
    </div>
  ),
};
