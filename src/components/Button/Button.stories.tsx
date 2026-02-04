import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Buttons are interactive elements that trigger actions when clicked. They come in multiple variants and sizes to establish visual hierarchy and indicate the importance of different actions.

## Usage Guidelines

### When to Use
- **Primary actions**: Submit forms, confirm dialogs, complete workflows
- **Triggering operations**: Save, delete, send, create actions
- **Navigation**: Moving to next steps in multi-step processes
- **Call-to-action**: Encouraging users to take important actions

### When NOT to Use
- **Page navigation**: Use Link component for navigation between pages
- **Toggling state**: Use Switch or Toggle component instead
- **Multiple selections**: Use Checkbox or multi-select dropdown
- **Simple text links**: Use anchor tags for inline links in paragraphs

## Best Practices

### ✓ Do
- Use action-oriented labels that describe what will happen ("Save changes", "Delete user", "Send email")
- Limit to one primary button per screen or section for the main action
- Match button size to surrounding elements and importance
- Include loading states for asynchronous actions
- Provide feedback when action completes (toast, redirect, etc.)
- Use danger variant for destructive actions with confirmation dialogs
- Keep labels concise (1-3 words when possible)

### ✗ Don't
- Use generic labels like "Click here", "Submit", or "OK" without context
- Place multiple primary buttons competing for attention
- Use buttons for navigation to different pages (use Link)
- Rely on color alone to convey meaning (include icons or text)
- Make buttons too small (minimum 44x44px for touch targets)
- Use danger variant without confirmation for destructive actions
- Nest buttons inside other clickable elements

## Accessibility
- Includes proper focus visible states (ring on keyboard focus)
- Supports keyboard activation (Enter and Space keys)
- ARIA labels can be provided via \`aria-label\` prop for icon-only buttons
- Loading state includes appropriate ARIA attributes
- Disabled buttons communicate state to screen readers
- Meets WCAG 2.1 AA contrast requirements

## Common Mistakes
1. **Using buttons for navigation**: Buttons are for actions. For routing/navigation, use the Link component
2. **Missing loading states**: Async actions should show loading state to prevent double-clicks
3. **No confirmation on destructive actions**: Always confirm before delete/remove operations
4. **Icon-only without labels**: Always provide \`aria-label\` for icon-only buttons
5. **Too many variants on one screen**: Stick to 2-3 button variants per view for clarity

## Variant Guide
- **Primary**: Main call-to-action, most important action on the page (blue, solid)
- **Secondary**: Alternative actions, less important than primary (gray, solid)
- **Outline**: Tertiary actions, lightweight alternative (border only)
- **Ghost**: Minimal emphasis, least important actions (no background)
- **Danger**: Destructive or risky actions requiring confirmation (red)

## Size Guide
- **sm** (small): Tight spaces, table actions, compact forms
- **md** (medium): Default size for most use cases
- **lg** (large): Primary CTAs, marketing pages, prominent actions
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style that indicates button importance and meaning',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size for different contexts',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows loading spinner for async operations',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button interaction',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-2xl">
      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Form Actions</h3>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-slate-300 rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-slate-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" size="md">
              Cancel
            </Button>
            <Button variant="primary" size="md">
              Save Changes
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Destructive Action</h3>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-700 mb-4">
            Are you sure you want to delete this user? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="md">
              Cancel
            </Button>
            <Button variant="danger" size="md">
              Delete User
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Button Hierarchy</h3>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="md">
              Primary Action
            </Button>
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="outline" size="md">
              Tertiary
            </Button>
            <Button variant="ghost" size="md">
              Ghost
            </Button>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            One primary, one secondary, multiple outline/ghost for clear hierarchy
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Loading States</h3>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="md" isLoading>
              Saving...
            </Button>
            <Button variant="secondary" size="md" isLoading>
              Processing...
            </Button>
            <Button variant="danger" size="md" isLoading>
              Deleting...
            </Button>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Always show loading state for async actions to prevent double-clicks
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Size Variations</h3>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <span className="text-sm text-slate-600">Compact UI, table actions</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="primary" size="md">
                Medium
              </Button>
              <span className="text-sm text-slate-600">Default for most use cases</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="primary" size="lg">
                Large
              </Button>
              <span className="text-sm text-slate-600">Hero CTAs, marketing</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};
