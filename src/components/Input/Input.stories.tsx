import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// Simple icon components for demos
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Text input fields allow users to enter and edit text. They support various types (text, email, password, number, etc.), validation states, and can include helper text, icons, and labels.

## Usage Guidelines

### When to Use
- **Single-line text entry**: Names, emails, search queries, short answers
- **Structured data**: Phone numbers, dates, numbers with specific formats
- **Credentials**: Passwords, API keys, tokens
- **Search**: Quick filtering and finding content

### When NOT to Use
- **Long-form text**: Use Textarea for multi-line content (descriptions, comments, messages)
- **Predefined options**: Use Select, Radio, or Checkbox for choosing from a list
- **Yes/No choices**: Use Switch or Checkbox for binary selections
- **Rich text**: Use a rich text editor component for formatted content

## Best Practices

### ✓ Do
- Always provide a visible label (not just placeholder)
- Use appropriate input types (email, tel, number) for better mobile keyboards
- Include helper text to explain format or requirements before errors occur
- Show clear error messages that explain what's wrong and how to fix it
- Mark required fields with asterisk (*) or "required" text
- Use appropriate size for context (sm for compact forms, lg for hero sections)
- Disable autocomplete when entering sensitive data
- Include icons to clarify purpose (search, lock for password)
- Validate on blur, not on every keystroke (unless real-time feedback is needed)

### ✗ Don't
- Use placeholder as the only label (disappears when typing)
- Show error messages before user has finished typing
- Use vague error messages like "Invalid input"
- Make inputs too narrow for expected content
- Forget to associate labels with inputs (use htmlFor/id)
- Disable paste functionality (frustrates users with password managers)
- Use input fields for actions (use buttons)
- Rely on color alone to show validation state (include icons/text)

## Accessibility
- Labels are properly associated with inputs using htmlFor/id
- Supports all native input attributes (required, disabled, readonly, etc.)
- Error messages linked via aria-describedby for screen readers
- Visible focus indicators meet WCAG 2.1 AA standards
- Helper text provides context before validation errors
- Keyboard accessible (Tab, Shift+Tab for navigation)
- Proper input types trigger appropriate mobile keyboards

## Common Mistakes
1. **Placeholder instead of label**: Placeholders disappear and don't work with screen readers as labels
2. **Validating too early**: Show errors after blur/submit, not on every keystroke
3. **Generic error messages**: "Invalid" doesn't help users fix the problem
4. **Missing helper text**: Users shouldn't have to guess format requirements
5. **Wrong input type**: type="text" for email loses mobile keyboard optimization
6. **No loading state**: Show loading for async validation (username availability)

## Input Types
- **text**: Default for general text entry
- **email**: Email addresses (shows @ on mobile keyboard)
- **password**: Masked password entry
- **number**: Numeric values with increment/decrement
- **tel**: Phone numbers (numeric keyboard on mobile)
- **search**: Search queries (shows X to clear)
- **url**: Web addresses (shows .com on mobile keyboard)
- **date/time**: Date/time pickers (native browser UI)

## Size Guide
- **sm** (small): Compact forms, table filters, tight spaces
- **md** (medium): Default for most forms and use cases
- **lg** (large): Hero sections, primary search, prominent inputs

## Validation Guidelines
- Show success state only when necessary (password strength, username availability)
- Error state should appear after blur or form submission
- Include specific, actionable error messages
- Don't validate empty required fields until blur/submit
- For complex formats, provide examples in helper text
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'Visual style variant for validation states',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - prevents interaction',
    },
    required: {
      control: 'boolean',
      description: 'Marks field as required with asterisk',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'search', 'url'],
      description: 'HTML input type for appropriate keyboard and validation',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when input is empty',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when variant is "error"',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when value changes',
    },
    onBlur: {
      action: 'blurred',
      description: 'Function called when input loses focus',
    },
    onFocus: {
      action: 'focused',
      description: 'Function called when input gains focus',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===================
// BASIC EXAMPLES
// ===================

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username for your account',
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    placeholder: 'John Doe',
    required: true,
    helperText: 'This field is required',
  },
};

// ===================
// STATES
// ===================

export const Error: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
    variant: 'error',
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    disabled: true,
    helperText: 'This field is disabled',
  },
};

// ===================
// SIZES
// ===================

export const Small: Story = {
  args: {
    label: 'Small input',
    placeholder: 'Small size',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium input',
    placeholder: 'Medium size (default)',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large input',
    placeholder: 'Large size',
    size: 'lg',
  },
};

// ===================
// WITH ICONS
// ===================

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <SearchIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    rightIcon: <MailIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    leftIcon: <LockIcon />,
    rightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="cursor-pointer hover:text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
};

// ===================
// DIFFERENT TYPES
// ===================

export const EmailInput: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    helperText: "We'll never share your email",
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    leftIcon: <LockIcon />,
    helperText: 'Must be at least 8 characters',
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
    helperText: 'Enter your age',
  },
};

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    leftIcon: <SearchIcon />,
    size: 'lg',
  },
};

// ===================
// PLAYGROUND
// ===================

export const Playground: Story = {
  args: {
    label: 'Custom Input',
    placeholder: 'Play around with the controls...',
    helperText: 'Use the controls panel to customize this input',
  },
};

// ===================
// REAL-WORLD EXAMPLES
// ===================

export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Sign In</h3>
      <Input
        label="Email"
        type="email"
        placeholder="you@company.com"
        leftIcon={<MailIcon />}
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        leftIcon={<LockIcon />}
        helperText="Must be at least 8 characters"
        required
      />
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mt-4">
        Sign In
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A typical login form with email and password inputs, including appropriate icons and helper text.',
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Default State</h4>
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          helperText="We'll never share your email with anyone"
        />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Error State</h4>
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          variant="error"
          errorMessage="Please enter a valid email address (e.g., user@domain.com)"
        />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Disabled State</h4>
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          disabled
          helperText="This field cannot be edited"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different validation and interaction states of the input component.',
      },
    },
  },
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Create Account</h3>
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
        helperText="Enter your first and last name"
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@company.com"
        leftIcon={<MailIcon />}
        required
        helperText="Use your work email address"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Create a strong password"
        leftIcon={<LockIcon />}
        required
        helperText="Minimum 8 characters, include numbers and symbols"
      />
      <Input
        label="Company Website"
        type="url"
        placeholder="https://company.com"
        helperText="Optional - your company's website"
      />
      <div className="flex gap-3 pt-4">
        <button className="flex-1 bg-slate-200 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-300">
          Cancel
        </button>
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Create Account
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete signup form showing required fields, helper text, and various input types.',
      },
    },
  },
};

export const SearchInterface: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Input
        type="search"
        placeholder="Search users, projects, or documents..."
        leftIcon={<SearchIcon />}
        size="lg"
      />
      <p className="text-sm text-slate-600 mt-2">
        Try searching for "design", "React", or "API documentation"
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large search input for prominent search interfaces.',
      },
    },
  },
};

export const CompactTableFilter: Story = {
  render: () => (
    <div className="space-y-3 w-80">
      <h4 className="text-sm font-semibold text-slate-900">Filter Users</h4>
      <Input
        size="sm"
        placeholder="Search by name..."
        leftIcon={<SearchIcon />}
      />
      <Input
        size="sm"
        label="Email contains"
        placeholder="example.com"
      />
      <Input
        size="sm"
        label="Min age"
        type="number"
        placeholder="18"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small inputs for compact UIs like table filters and sidebars.',
      },
    },
  },
};
