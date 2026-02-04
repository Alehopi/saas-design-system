import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastContent,
} from './Toast';
import { Button } from '../Button';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Visual variant indicating toast type',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    open: {
      control: 'boolean',
      description: 'Whether the toast is visible',
    },
    duration: {
      control: 'number',
      description: 'Time in ms before toast auto-dismisses (Infinity to disable)',
      table: {
        defaultValue: { summary: '5000' },
      },
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Function called when toast visibility changes',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <ToastContent title="Toast Title" description="This is a default toast message." />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const Success: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Success</Button>
        <Toast open={open} onOpenChange={setOpen} variant="success">
          <ToastContent
            variant="success"
            title="Success"
            description="Your changes have been saved successfully."
          />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Error</Button>
        <Toast open={open} onOpenChange={setOpen} variant="error">
          <ToastContent
            variant="error"
            title="Error"
            description="Failed to save your changes. Please try again."
          />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Warning</Button>
        <Toast open={open} onOpenChange={setOpen} variant="warning">
          <ToastContent
            variant="warning"
            title="Warning"
            description="Your free trial will expire in 3 days."
          />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const Info: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Info</Button>
        <Toast open={open} onOpenChange={setOpen} variant="info">
          <ToastContent
            variant="info"
            title="Information"
            description="New features are now available in your dashboard."
          />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show with Action</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div className="flex gap-3">
            <ToastContent title="Update Available" description="A new version is ready to install." />
            <ToastAction altText="Update now" onClick={() => alert('Updating...')}>
              Update
            </ToastAction>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const TitleOnly: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Title Only</Button>
        <Toast open={open} onOpenChange={setOpen} variant="success">
          <ToastContent variant="success" title="Changes saved!" />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const WithoutIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show Without Icon</Button>
        <Toast open={open} onOpenChange={setOpen} variant="info">
          <ToastContent
            variant="info"
            showIcon={false}
            title="No Icon"
            description="This toast doesn't show an icon."
          />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const AutoDismiss: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider duration={3000}>
        <Button onClick={() => setOpen(true)}>Auto Dismiss (3s)</Button>
        <Toast open={open} onOpenChange={setOpen} variant="success">
          <ToastContent
            variant="success"
            title="Auto Dismiss"
            description="This toast will close automatically after 3 seconds."
          />
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<{ id: number; variant: 'success' | 'error' | 'warning' | 'info' }[]>([]);
    let idCounter = 0;

    const addToast = (variant: 'success' | 'error' | 'warning' | 'info') => {
      const id = idCounter++;
      setToasts((prev) => [...prev, { id, variant }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };

    return (
      <ToastProvider>
        <div className="flex gap-2">
          <Button onClick={() => addToast('success')}>Success</Button>
          <Button onClick={() => addToast('error')}>Error</Button>
          <Button onClick={() => addToast('warning')}>Warning</Button>
          <Button onClick={() => addToast('info')}>Info</Button>
        </div>
        {toasts.map((toast) => (
          <Toast key={toast.id} open={true} variant={toast.variant}>
            <ToastContent
              variant={toast.variant}
              title={toast.variant.charAt(0).toUpperCase() + toast.variant.slice(1)}
              description={`This is a ${toast.variant} message.`}
            />
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [openDefault, setOpenDefault] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [openError, setOpenError] = useState(false);

    return (
      <ToastProvider>
        <div className="flex flex-col gap-2">
          <Button onClick={() => setOpenDefault(true)}>Default</Button>
          <Button onClick={() => setOpenInfo(true)}>Info</Button>
          <Button onClick={() => setOpenSuccess(true)}>Success</Button>
          <Button onClick={() => setOpenWarning(true)}>Warning</Button>
          <Button onClick={() => setOpenError(true)}>Error</Button>
        </div>

        <Toast open={openDefault} onOpenChange={setOpenDefault} variant="default">
          <ToastContent variant="default" title="Default" description="Default message." />
          <ToastClose />
        </Toast>

        <Toast open={openInfo} onOpenChange={setOpenInfo} variant="info">
          <ToastContent variant="info" title="Info" description="Info message." />
          <ToastClose />
        </Toast>

        <Toast open={openSuccess} onOpenChange={setOpenSuccess} variant="success">
          <ToastContent variant="success" title="Success" description="Success message." />
          <ToastClose />
        </Toast>

        <Toast open={openWarning} onOpenChange={setOpenWarning} variant="warning">
          <ToastContent variant="warning" title="Warning" description="Warning message." />
          <ToastClose />
        </Toast>

        <Toast open={openError} onOpenChange={setOpenError} variant="error">
          <ToastContent variant="error" title="Error" description="Error message." />
          <ToastClose />
        </Toast>

        <ToastViewport />
      </ToastProvider>
    );
  },
};
