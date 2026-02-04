import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';

const meta = {
  title: 'Components/Form/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Helper text provides additional context, instructions, or hints about a form field. It appears below the input to guide users.

## Usage Guidelines

### When to Use
- **Instructions**: Explain what format or type of input is expected
- **Examples**: Show example input (e.g., john@example.com)
- **Constraints**: Describe length limits or requirements
- **Context**: Provide additional information about the field
- **Formatting**: Explain special formatting rules

### When NOT to Use
- **Validation errors**: Use ErrorMessage component instead
- **Required indicators**: Use Label with required prop
- **Field labels**: Use Label component
- **Long explanations**: Consider tooltip or help dialog

## Best Practices

### Do
- Keep it concise (one sentence when possible)
- Provide helpful, actionable information
- Use consistent tone and voice
- Show before user interacts (not on error)
- Make it easy to scan and understand

### Don't
- Don't duplicate the label text
- Don't use for error messages (use ErrorMessage)
- Don't write overly technical jargon
- Don't hide critical information in helper text
- Don't make it too long (more than 2 sentences)

## Accessibility
- Uses semantic paragraph element
- Sufficient color contrast
- Can be associated with input via aria-describedby
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Helper text content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'muted'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'default | muted' },
        defaultValue: { summary: 'default' },
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
  },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive controls
export const Playground: Story = {
  args: {
    children: "We'll never share your email with anyone else.",
    variant: 'default',
    size: 'md',
  },
};

// Default
export const Default: Story = {
  args: {
    children: "We'll never share your email with anyone else.",
  },
};

// Muted variant
export const Muted: Story = {
  args: {
    children: 'This field is optional.',
    variant: 'muted',
  },
};

// Small size
export const Small: Story = {
  args: {
    children: 'Must be at least 8 characters.',
    size: 'sm',
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Small (sm)</p>
        <HelperText size="sm">
          This is small helper text for compact spaces.
        </HelperText>
      </div>
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Medium (md) - Default</p>
        <HelperText size="md">
          This is medium helper text, the default size for most use cases.
        </HelperText>
      </div>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Default Variant</p>
        <HelperText variant="default">
          Standard helper text with default styling.
        </HelperText>
      </div>
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Muted Variant</p>
        <HelperText variant="muted">
          Muted helper text for less important information.
        </HelperText>
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
          Variants
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label htmlFor="var1">Email address</Label>
            <Input id="var1" type="email" className="mt-1" />
            <HelperText variant="default">
              Default variant - We'll never share your email.
            </HelperText>
          </div>
          <div>
            <Label htmlFor="var2">Company (optional)</Label>
            <Input id="var2" className="mt-1" />
            <HelperText variant="muted">
              Muted variant - Optional field.
            </HelperText>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Sizes
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label htmlFor="size1">Username</Label>
            <Input id="size1" className="mt-1" />
            <HelperText size="sm">
              Small size - Compact helper text.
            </HelperText>
          </div>
          <div>
            <Label htmlFor="size2">Password</Label>
            <Input id="size2" type="password" className="mt-1" />
            <HelperText size="md">
              Medium size (default) - Must be at least 8 characters.
            </HelperText>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Use Cases
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label htmlFor="example1">Email</Label>
            <Input id="example1" placeholder="example@domain.com" className="mt-1" />
            <HelperText>Example format helper text.</HelperText>
          </div>
          <div>
            <Label htmlFor="example2">Phone</Label>
            <Input id="example2" placeholder="+1 (555) 123-4567" className="mt-1" />
            <HelperText>Include country code.</HelperText>
          </div>
          <div>
            <Label htmlFor="example3">API Key</Label>
            <Input id="example3" className="mt-1" />
            <HelperText size="sm">
              Find your key in Settings - API Access.
            </HelperText>
          </div>
        </div>
      </section>
    </div>
  ),
};

// With input
export const WithInput: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
      <HelperText>We'll never share your email with anyone else.</HelperText>
    </div>
  ),
};

// Real world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="username" required>
          Username
        </Label>
        <Input id="username" placeholder="johndoe" />
        <HelperText>
          3-20 characters. Letters, numbers, and underscores only.
        </HelperText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" required>
          Password
        </Label>
        <Input id="password" type="password" />
        <HelperText>
          Must be at least 8 characters with uppercase, lowercase, and numbers.
        </HelperText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" placeholder="https://example.com" />
        <HelperText variant="muted">
          Optional. Include https:// for external links.
        </HelperText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="apiKey">API Key</Label>
        <Input id="apiKey" type="text" placeholder="sk_live_..." />
        <HelperText size="sm">
          Find your API key in Settings - API Access
        </HelperText>
      </div>
    </div>
  ),
};
