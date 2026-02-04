import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the textarea',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Mark as required',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character counter',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'both'],
      description: 'Resize behavior',
    },
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the textarea',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when error is true',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when value changes',
    },
    onBlur: {
      action: 'blurred',
      description: 'Function called when textarea loses focus',
    },
    onFocus: {
      action: 'focused',
      description: 'Function called when textarea gains focus',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===================
// BASIC EXAMPLES
// ===================

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Write a brief description about yourself',
  },
};

export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    required: true,
    helperText: 'This field is required',
  },
};

// ===================
// SIZES
// ===================

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Textarea',
    placeholder: 'Smaller height...',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Textarea',
    placeholder: 'Default size...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Textarea',
    placeholder: 'Larger height...',
  },
};

// ===================
// STATES
// ===================

export const Error: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter comments...',
    error: true,
    errorMessage: 'This field contains invalid content',
    value: 'Invalid content here',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot edit...',
    disabled: true,
    value: 'This content cannot be edited',
  },
};

// ===================
// CHARACTER COUNT
// ===================

export const WithCharacterCount: Story = {
  args: {
    label: 'Tweet',
    placeholder: 'What\'s happening?',
    showCount: true,
    maxLength: 280,
    helperText: 'Share your thoughts in 280 characters',
    value: 'This is my tweet',
  },
};

export const CharacterCountNearLimit: Story = {
  args: {
    label: 'Short Description',
    placeholder: 'Brief description...',
    showCount: true,
    maxLength: 100,
    value: 'This is a description that is getting close to the maximum character limit allowed for this field',
  },
};

// ===================
// RESIZE OPTIONS
// ===================

export const ResizeNone: Story = {
  args: {
    label: 'Fixed Size',
    placeholder: 'Cannot be resized...',
    resize: 'none',
    helperText: 'This textarea cannot be resized',
  },
};

export const ResizeVertical: Story = {
  args: {
    label: 'Vertical Resize',
    placeholder: 'Can be resized vertically...',
    resize: 'vertical',
    helperText: 'Drag the bottom edge to resize',
  },
};

export const ResizeBoth: Story = {
  args: {
    label: 'Free Resize',
    placeholder: 'Can be resized in any direction...',
    resize: 'both',
    helperText: 'Drag the corner to resize',
  },
};

// ===================
// REAL-WORLD EXAMPLES
// ===================

export const FeedbackForm: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Please share your thoughts...',
    required: true,
    showCount: true,
    maxLength: 500,
    helperText: 'Help us improve by sharing your experience',
    rows: 5,
  },
};

export const CommentBox: Story = {
  args: {
    label: 'Add a comment',
    placeholder: 'Write a comment...',
    resize: 'vertical',
    helperText: 'Be respectful and constructive',
  },
};

export const CodeSnippet: Story = {
  args: {
    label: 'Code',
    placeholder: 'Paste your code here...',
    resize: 'both',
    className: 'font-mono',
    rows: 8,
  },
};

// ===================
// INTERACTIVE PLAYGROUND
// ===================

export const Playground: Story = {
  args: {
    label: 'Playground',
    placeholder: 'Try different configurations...',
    helperText: 'Use the controls below to test',
  },
};
