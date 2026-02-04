import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider, SimpleTooltip, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { Button } from '../Button';
import { Info, HelpCircle, Settings } from 'lucide-react';

const meta = {
  title: 'Components/Tooltip',
  component: SimpleTooltip,
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display in the tooltip',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The preferred side to show the tooltip',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    delayDuration: {
      control: 'number',
      description: 'Delay in ms before tooltip appears',
      table: {
        defaultValue: { summary: '200' },
      },
    },
    sideOffset: {
      control: 'number',
      description: 'Distance in px from the trigger',
      table: {
        defaultValue: { summary: '4' },
      },
    },
  },
} satisfies Meta<typeof SimpleTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SimpleTooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </SimpleTooltip>
  ),
};

export const Top: Story = {
  render: () => (
    <SimpleTooltip content="Tooltip on top" side="top">
      <Button>Top</Button>
    </SimpleTooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <SimpleTooltip content="Tooltip on right" side="right">
      <Button>Right</Button>
    </SimpleTooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <SimpleTooltip content="Tooltip on bottom" side="bottom">
      <Button>Bottom</Button>
    </SimpleTooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <SimpleTooltip content="Tooltip on left" side="left">
      <Button>Left</Button>
    </SimpleTooltip>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="Top" side="top">
        <Button>Top</Button>
      </SimpleTooltip>
      <SimpleTooltip content="Right" side="right">
        <Button>Right</Button>
      </SimpleTooltip>
      <SimpleTooltip content="Bottom" side="bottom">
        <Button>Bottom</Button>
      </SimpleTooltip>
      <SimpleTooltip content="Left" side="left">
        <Button>Left</Button>
      </SimpleTooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm">Need help?</span>
      <SimpleTooltip content="Click here for assistance">
        <button className="text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200" aria-label="Help">
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
        </button>
      </SimpleTooltip>
    </div>
  ),
};

export const OnIconButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <SimpleTooltip content="Information">
        <button className="rounded-full p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950" aria-label="Information">
          <Info className="h-5 w-5" aria-hidden="true" />
        </button>
      </SimpleTooltip>
      <SimpleTooltip content="Help">
        <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Help">
          <HelpCircle className="h-5 w-5" aria-hidden="true" />
        </button>
      </SimpleTooltip>
      <SimpleTooltip content="Settings">
        <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Settings">
          <Settings className="h-5 w-5" aria-hidden="true" />
        </button>
      </SimpleTooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <SimpleTooltip content="This is a longer tooltip message that provides more detailed information to the user.">
      <Button>Long tooltip</Button>
    </SimpleTooltip>
  ),
};

export const MultilineContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Multiline</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-1">
          <p className="font-medium">Keyboard Shortcuts</p>
          <p className="text-xs">⌘ + S - Save</p>
          <p className="text-xs">⌘ + Z - Undo</p>
          <p className="text-xs">⌘ + Shift + Z - Redo</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const OnDisabledButton: Story = {
  render: () => (
    <SimpleTooltip content="This button is disabled">
      <span>
        <Button disabled>Disabled Button</Button>
      </span>
    </SimpleTooltip>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="Instant tooltip" delayDuration={0}>
        <Button>No delay</Button>
      </SimpleTooltip>
      <SimpleTooltip content="Quick tooltip" delayDuration={100}>
        <Button>100ms delay</Button>
      </SimpleTooltip>
      <SimpleTooltip content="Slow tooltip" delayDuration={1000}>
        <Button>1s delay</Button>
      </SimpleTooltip>
    </div>
  ),
};

export const InForm: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="password-input" className="text-sm font-medium">Password</label>
          <SimpleTooltip content="Must be at least 8 characters with uppercase, lowercase, and numbers">
            <button className="text-slate-600" aria-label="Password requirements">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </SimpleTooltip>
        </div>
        <input
          id="password-input"
          type="password"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          placeholder="Enter password"
        />
      </div>
    </div>
  ),
};

export const InTable: Story = {
  render: () => (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800">
      <table className="w-full">
        <thead className="bg-slate-50 dark:bg-slate-900">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              <div className="flex items-center gap-1">
                Status
                <SimpleTooltip content="Current account status">
                  <button aria-label="Status information">
                    <Info className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </SimpleTooltip>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-slate-200 dark:border-slate-800">
            <td className="px-4 py-2 text-sm">John Doe</td>
            <td className="px-4 py-2 text-sm">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
