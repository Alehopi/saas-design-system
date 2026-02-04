import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';
import { Terminal } from 'lucide-react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Visual style indicating alert type and severity',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the variant icon',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Function called when close button is clicked',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info" className="w-[500px]">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message to provide context or guidance.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-[500px]">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-[500px]">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your free trial will expire in 3 days. Please upgrade to continue using the service.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  render: () => (
    <Alert variant="error" className="w-[500px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Failed to save your changes. Please try again or contact support.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="info" showIcon={false} className="w-[500px]">
      <AlertTitle>No Icon Alert</AlertTitle>
      <AlertDescription>This alert doesn't display an icon.</AlertDescription>
    </Alert>
  ),
};

export const Closable: Story = {
  render: () => (
    <Alert variant="info" closable className="w-[500px]">
      <AlertTitle>Closable Alert</AlertTitle>
      <AlertDescription>You can close this alert by clicking the X button.</AlertDescription>
    </Alert>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Alert icon={<Terminal className="h-4 w-4" />} className="w-[500px]">
      <AlertTitle>Custom Icon</AlertTitle>
      <AlertDescription>This alert uses a custom icon instead of the default.</AlertDescription>
    </Alert>
  ),
};

export const OnlyTitle: Story = {
  render: () => (
    <Alert variant="success" className="w-[500px]">
      <AlertTitle>Changes saved successfully</AlertTitle>
    </Alert>
  ),
};

export const OnlyDescription: Story = {
  render: () => (
    <Alert variant="info" className="w-[500px]">
      <AlertDescription>
        This is an alert with only a description and no title.
      </AlertDescription>
    </Alert>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert variant="warning" className="w-[500px]">
      <AlertTitle>Important Update Required</AlertTitle>
      <AlertDescription>
        A critical security update is available for your account. We recommend updating your
        password and enabling two-factor authentication to keep your account secure. This process
        only takes a few minutes and will significantly improve your account's security.
      </AlertDescription>
    </Alert>
  ),
};

export const WithLink: Story = {
  render: () => (
    <Alert variant="info" className="w-[500px]">
      <AlertTitle>New Features Available</AlertTitle>
      <AlertDescription>
        Check out our new dashboard features.{' '}
        <a href="#" className="font-medium underline" aria-label="Learn more about new dashboard features">
          Learn more
        </a>
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <Alert variant="default">
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Default alert message.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Informational message.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Success message.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Warning message.</AlertDescription>
      </Alert>
      <Alert variant="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error message.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const InlineAlert: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <div className="space-y-2">
        <label htmlFor="email-input" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email-input"
          type="email"
          className="w-full rounded-md border border-red-300 px-3 py-2 text-sm"
          placeholder="Enter your email"
          aria-describedby="email-error"
          aria-invalid="true"
        />
        <Alert variant="error" showIcon={false} className="py-2" role="alert">
          <AlertDescription id="email-error" className="text-xs">
            Please enter a valid email address.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

export const ClosableVariants: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <Alert variant="info" closable>
        <AlertTitle>Info (Closable)</AlertTitle>
        <AlertDescription>You can close this alert.</AlertDescription>
      </Alert>
      <Alert variant="success" closable>
        <AlertTitle>Success (Closable)</AlertTitle>
        <AlertDescription>You can close this alert.</AlertDescription>
      </Alert>
      <Alert variant="warning" closable>
        <AlertTitle>Warning (Closable)</AlertTitle>
        <AlertDescription>You can close this alert.</AlertDescription>
      </Alert>
      <Alert variant="error" closable>
        <AlertTitle>Error (Closable)</AlertTitle>
        <AlertDescription>You can close this alert.</AlertDescription>
      </Alert>
    </div>
  ),
};
