import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  FileText,
  Search,
  Home,
  BarChart,
  Users,
} from 'lucide-react';
import { Button } from '../Button/Button';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './Command';

const meta = {
  title: 'Components/Navigation/Command',
  component: Command,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Command palette for quick access to actions and navigation. Accessible via keyboard shortcut (⌘K / Ctrl+K) with fuzzy search and keyboard navigation.

## Usage Guidelines

### When to Use
- **Quick actions**: Fast access to frequently used features
- **Global search**: Search across app content and navigation
- **Power user features**: Keyboard shortcuts for advanced users
- **Large applications**: Many features that benefit from search
- **Multi-step workflows**: Quick navigation between different sections

### When NOT to Use
- **Simple applications**: Few features don't need command palette
- **Form inputs**: Use regular search inputs or selects
- **Always visible search**: Use search bar in header/sidebar
- **Mobile-first apps**: Touch interfaces don't benefit as much
- **Primary navigation**: Don't hide critical navigation behind ⌘K

## Best Practices

### ✓ Do
- Trigger with ⌘K (Mac) / Ctrl+K (Windows/Linux)
- Group related commands with labels
- Show keyboard shortcuts for discoverable actions
- Include icons for visual scanning
- Fuzzy search for typo tolerance
- Show recent/popular commands first
- Clear search on close/execute
- Close on Escape key

### ✗ Don't
- Don't make it the only way to access features
- Don't show too many results at once (paginate or limit)
- Don't nest multiple levels deep
- Don't forget loading states for async searches
- Don't use for simple navigation (use nav links)
- Don't hide critical actions only in command palette
- Don't ignore keyboard accessibility

## Accessibility
- Full keyboard navigation (Arrow keys, Enter, Escape)
- Search input auto-focused on open
- Esc closes dialog
- Enter executes selected command
- Screen reader support for search and results
- Focus trapped within dialog
- ARIA labels for commands and groups

## Common Patterns
- **Global actions**: New item, search, settings, help
- **Navigation**: Quick jump to different pages/sections
- **Recent items**: Show recently accessed pages/files
- **File search**: Search documents and resources
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state (for CommandDialog)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Callback when open state changes',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    shouldFilter: {
      control: 'boolean',
      description: 'Whether to filter items based on search',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground
export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen} {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
  args: {
    shouldFilter: true,
  },
};

// Default
export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-slate-500">
            Press{' '}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600">
              <span className="text-xs">⌘</span>K
            </kbd>{' '}
            or click the button
          </p>
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open Command Palette
          </Button>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

export const WithCategories: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open with Categories
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search actions..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
                <CommandShortcut>⌘H</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <BarChart className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                <span className="mr-2">➕</span>
                <span>Create Project</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Invite Member</span>
              </CommandItem>
              <CommandItem>
                <span className="mr-2">📤</span>
                <span>Export Data</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Preferences</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

export const InlineSearch: Story = {
  render: () => (
    <Command className="rounded-lg border border-slate-200 shadow-md max-w-md">
      <CommandInput placeholder="Filter options..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Fruits">
          <CommandItem>🍎 Apple</CommandItem>
          <CommandItem>🍌 Banana</CommandItem>
          <CommandItem>🍊 Orange</CommandItem>
          <CommandItem>🍇 Grape</CommandItem>
          <CommandItem>🍓 Strawberry</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Vegetables">
          <CommandItem>🥕 Carrot</CommandItem>
          <CommandItem>🥦 Broccoli</CommandItem>
          <CommandItem>🌽 Corn</CommandItem>
          <CommandItem>🥬 Lettuce</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// All states
export const AllStates: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-4xl bg-slate-50 dark:bg-slate-900 rounded-lg">
      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Command Dialog (Modal)
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <Button
            variant="outline"
            onClick={() => {}}
            className="gap-2"
          >
            <Search className="h-4 w-4" />
            <span>Open Command Palette</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <p className="text-xs text-slate-500 mt-2">
            Press ⌘K to open the command palette dialog
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Inline Command (Static)
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <Command className="rounded-lg border border-slate-200 max-w-md">
            <CommandInput placeholder="Search commands..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          With Multiple Groups
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <Command className="rounded-lg border border-slate-200 max-w-md">
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <BarChart className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          With Keyboard Shortcuts
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <Command className="rounded-lg border border-slate-200 max-w-md">
            <CommandInput placeholder="Type a command..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Quick Actions">
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>New Document</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Invite Team</span>
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Empty State
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <Command className="rounded-lg border border-slate-200 max-w-md">
            <CommandInput placeholder="Search for something..." value="xyz123notfound" readOnly />
            <CommandList>
              <CommandEmpty>
                <div className="text-center py-6">
                  <p className="text-sm text-slate-500">No results found.</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Try searching for something else
                  </p>
                </div>
              </CommandEmpty>
            </CommandList>
          </Command>
        </div>
      </section>
    </div>
  ),
};

// Real world examples
export const RealWorldExamples: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-8 p-6 max-w-2xl">
        <section>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">App Header with Command Palette</h3>
          <div className="bg-white rounded-lg border border-slate-200">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold text-slate-900">My SaaS App</h1>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(true)}
                className="gap-2"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600">
                  ⌘K
                </kbd>
              </Button>
            </div>
            <div className="p-6">
              <p className="text-slate-600">
                Click the search button or press ⌘K to open the command palette
              </p>
            </div>
          </div>
        </section>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search commands and pages..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem>
                <span className="mr-2">➕</span>
                <span>New Project</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Invite Team Member</span>
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigation">
              <CommandItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </CommandItem>
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>All Projects</span>
              </CommandItem>
              <CommandItem>
                <BarChart className="mr-2 h-4 w-4" />
                <span>Analytics</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>App Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};
