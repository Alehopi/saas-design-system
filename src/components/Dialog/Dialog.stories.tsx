import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './Dialog';
import { Button } from '../Button';
import { Input } from '../Input';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open (controlled)',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the dialog is open by default (uncontrolled)',
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Function called when dialog open state changes',
    },
    modal: {
      control: 'boolean',
      description: 'Whether to render as modal (prevents interaction with rest of page)',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description. It provides additional context about the dialog's purpose.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Dialog content goes here. You can add any components or text.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Input label="Name" defaultValue="John Doe" />
          <Input label="Email" type="email" defaultValue="john@example.com" />
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DeleteConfirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button variant="outline">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open (No Close Button)</Button>
      </DialogTrigger>
      <DialogContent showClose={false}>
        <DialogHeader>
          <DialogTitle>Required Action</DialogTitle>
          <DialogDescription>
            You must complete this action to continue. There is no close button.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Use the buttons below to proceed.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Go Back</Button>
          <Button variant="primary">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Terms & Conditions</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>Please read our terms carefully.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button variant="primary">Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SmallDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Quick Action</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Quick Action</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            This is a smaller dialog for quick actions.
          </p>
        </div>
        <DialogFooter>
          <Button variant="primary" className="w-full">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LargeDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Large Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogDescription>This dialog has more space for complex content.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-4">
            <Input label="First Name" />
            <Input label="Email" type="email" />
          </div>
          <div className="space-y-4">
            <Input label="Last Name" />
            <Input label="Phone" type="tel" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const StackedActions: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Mobile Layout</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose an Action</DialogTitle>
          <DialogDescription>Select one of the options below.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button variant="primary" className="w-full">
            Primary Action
          </Button>
          <Button variant="outline" className="w-full">
            Secondary Action
          </Button>
          <Button variant="ghost" className="w-full">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
