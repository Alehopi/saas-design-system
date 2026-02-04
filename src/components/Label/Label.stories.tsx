import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input/Input';

const meta = {
  title: 'Components/Form/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Labels identify form fields and provide context about what input is expected. They are essential for accessibility and usability.

## Usage Guidelines

### When to Use
- **All form fields**: Every input, select, textarea needs a label
- **Accessibility**: Screen readers rely on labels to describe fields
- **Required fields**: Show asterisk for required fields
- **Field groups**: Label groups of related fields

### When NOT to Use
- **Placeholder-only fields**: Never replace labels with placeholders
- **Icon-only buttons**: Use aria-label instead

## Best Practices

### Do
- Always associate label with input via htmlFor/id
- Mark required fields with asterisk (*)
- Keep labels concise (1-3 words when possible)
- Use sentence case (not Title Case)
- Position labels above fields (not beside)
- Make labels descriptive and clear

### Don't
- Don't use placeholders instead of labels
- Don't hide labels visually (unless using aria-label)
- Don't use all caps or excessive styling
- Don't use vague labels ("Enter text")
- Don't forget htmlFor attribute
- Don't use colons after labels (outdated pattern)

## Accessibility
- Uses semantic <label> element
- Associates with input via htmlFor
- Required indicator has aria-label
- Works with screen readers
- Sufficient color contrast
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Label text content',
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
      options: ['sm', 'md', 'lg'],
      description: 'Label size',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Show required asterisk',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state styling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    htmlFor: {
      control: 'text',
      description: 'ID of associated input element',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground - Interactive controls
export const Playground: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
    variant: 'default',
    size: 'md',
    required: false,
    disabled: false,
  },
};

// Default variant
export const Default: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
};

// Required field
export const Required: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
    required: true,
  },
};

// Muted variant
export const Muted: Story = {
  args: {
    children: 'Optional field',
    htmlFor: 'optional',
    variant: 'muted',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    children: 'Disabled field',
    htmlFor: 'disabled',
    disabled: true,
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label size="sm" htmlFor="small">
          Small Label (sm)
        </Label>
      </div>
      <div>
        <Label size="md" htmlFor="medium">
          Medium Label (md) - Default
        </Label>
      </div>
      <div>
        <Label size="lg" htmlFor="large">
          Large Label (lg)
        </Label>
      </div>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label variant="default" htmlFor="var1">
          Default Variant
        </Label>
      </div>
      <div>
        <Label variant="muted" htmlFor="var2">
          Muted Variant
        </Label>
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
          Standard States
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label htmlFor="normal">Normal label</Label>
          </div>
          <div>
            <Label htmlFor="required" required>
              Required label
            </Label>
          </div>
          <div>
            <Label htmlFor="disabled" disabled>
              Disabled label
            </Label>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Variants
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label variant="default" htmlFor="def">
              Default variant
            </Label>
          </div>
          <div>
            <Label variant="muted" htmlFor="mut">
              Muted variant
            </Label>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Sizes
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label size="sm" htmlFor="sm">
              Small size
            </Label>
          </div>
          <div>
            <Label size="md" htmlFor="md">
              Medium size (default)
            </Label>
          </div>
          <div>
            <Label size="lg" htmlFor="lg">
              Large size
            </Label>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Combinations
        </h3>
        <div className="space-y-3 bg-white dark:bg-slate-950 p-4 rounded-lg">
          <div>
            <Label size="lg" required htmlFor="comb1">
              Large + Required
            </Label>
          </div>
          <div>
            <Label variant="muted" size="sm" htmlFor="comb2">
              Muted + Small
            </Label>
          </div>
          <div>
            <Label variant="muted" required htmlFor="comb3">
              Muted + Required
            </Label>
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
      <Label htmlFor="email" required>
        Email address
      </Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

// Real world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="name" required>
          Full name
        </Label>
        <Input id="name" placeholder="John Doe" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">
          Company name
        </Label>
        <Input id="company" placeholder="Acme Inc." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" variant="muted">
          Bio (optional)
        </Label>
        <Input id="bio" placeholder="Tell us about yourself..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled" disabled>
          Disabled field
        </Label>
        <Input id="disabled" disabled placeholder="Cannot edit" />
      </div>
    </div>
  ),
};
