import type { Meta, StoryObj } from '@storybook/react';
import { Inbox, SearchX, Database, Plus, FileText, Users, FolderOpen } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Empty states provide feedback when there's no content to display. They help users understand why content is missing and guide them toward productive actions.

## Usage Guidelines

### When to Use
- **No content yet**: User hasn't created any items
- **No search results**: Search query returned nothing
- **No data available**: Filters excluded all results
- **Empty collections**: Lists, tables, or grids with no items
- **Onboarding**: First-time user experience
- **Error states**: When data failed to load (with error variant)

### When NOT to Use
- **Loading states**: Use Spinner/Skeleton for loading
- **Errors**: Use Alert component for error messages
- **Temporary states**: Brief moments between actions
- **Non-empty lists**: Don't show when items exist

## Best Practices

### ✓ Do
- Use clear, friendly language that explains the situation
- Provide actionable next steps (CTA button)
- Include relevant icons for visual context
- Match tone to user's expected emotional state
- Keep descriptions concise (1-2 sentences)
- Use card variant for prominent placement
- Consider user's intent and provide helpful guidance

### ✗ Don't
- Don't blame the user ("You haven't...")
- Don't use technical jargon or error codes
- Don't show empty state while still loading
- Don't make it too minimal (use appropriate variant)
- Don't forget the call-to-action when applicable
- Don't overdesign with complex illustrations
- Don't use identical copy for different contexts

## Accessibility
- Icon uses aria-hidden (decorative)
- Semantic heading structure (h3 for title)
- Sufficient color contrast for text
- Action button has clear label
- Screen readers get full context

## Variant Guide
- **default**: Standard empty state for general use
- **minimal**: Compact version for small spaces
- **card**: Prominent card with border and shadow for main content areas

## Common Patterns
- **No projects**: "Create your first project to get started"
- **No search results**: "Try different keywords or filters"
- **No team members**: "Invite team members to collaborate"
- **No data**: "No data available for selected period"
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'card'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'default | minimal | card' },
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: 'text',
      description: 'Main heading text',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Descriptive text explaining the empty state',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: false,
      description: 'Icon element to display',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    action: {
      control: false,
      description: 'Action button or element',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground
export const Playground: Story = {
  args: {
    icon: <Inbox className="w-12 h-12" />,
    title: 'No items yet',
    description: "You haven't created any items yet. Get started by creating your first one.",
    variant: 'default',
  },
};

// Default
export const Default: Story = {
  args: {
    icon: <Inbox className="w-12 h-12" />,
    title: 'No items yet',
    description: "You haven't created any items yet. Get started by creating your first one.",
    variant: 'default',
  },
};

export const NoSearchResults: Story = {
  args: {
    icon: <SearchX className="w-12 h-12" />,
    title: 'No results found',
    description: 'We couldn\'t find any results matching your search. Try adjusting your filters or search terms.',
    variant: 'card',
  },
};

export const NoData: Story = {
  args: {
    icon: <Database className="w-10 h-10" />,
    title: 'No data available',
    description: 'There is no data to display at this time.',
    variant: 'minimal',
  },
};

export const WithAction: Story = {
  args: {
    icon: <Inbox className="w-12 h-12" />,
    title: 'No projects yet',
    description: 'Create your first project to start collaborating with your team.',
    variant: 'card',
    action: (
      <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
        Create Project
      </Button>
    ),
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12 p-6 max-w-4xl">
      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-4">Default Variant</p>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
          <EmptyState
            variant="default"
            icon={<Inbox className="w-12 h-12" />}
            title="No items yet"
            description="You haven't created any items yet. Get started by creating your first one."
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-4">Minimal Variant</p>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
          <EmptyState
            variant="minimal"
            icon={<Database className="w-10 h-10" />}
            title="No data available"
            description="There is no data to display at this time."
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-4">Card Variant</p>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
          <EmptyState
            variant="card"
            icon={<SearchX className="w-12 h-12" />}
            title="No results found"
            description="We couldn't find any results matching your search. Try adjusting your filters or search terms."
          />
        </div>
      </div>
    </div>
  ),
};

// All states
export const AllStates: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-4xl bg-slate-50 dark:bg-slate-900 rounded-lg">
      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Empty List (Default)
        </h3>
        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <h4 className="font-medium text-slate-900 dark:text-slate-50">Projects</h4>
          </div>
          <EmptyState
            variant="default"
            icon={<FolderOpen className="w-12 h-12" />}
            title="No projects yet"
            description="Get started by creating your first project."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Empty Search Results
        </h3>
        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <EmptyState
            variant="default"
            icon={<SearchX className="w-14 h-14" />}
            title="No results found"
            description="We couldn't find any results. Try different keywords or adjust your filters."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          With Action Button (Card Variant)
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <EmptyState
            variant="card"
            icon={<Users className="w-14 h-14" />}
            title="No team members yet"
            description="Invite team members to start collaborating on projects together."
            action={
              <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
                Invite Team Members
              </Button>
            }
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Minimal Variant (Sidebar)
        </h3>
        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <div className="w-64">
            <EmptyState
              variant="minimal"
              icon={<FileText className="w-8 h-8" />}
              title="No recent files"
              description="Files you work on will appear here."
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Table Empty State
        </h3>
        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <EmptyState
                    variant="default"
                    icon={<Inbox className="w-12 h-12" />}
                    title="No records found"
                    description="There are no records to display."
                    action={
                      <Button variant="primary" size="sm">
                        Add Record
                      </Button>
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Multiple Actions
        </h3>
        <div className="bg-white dark:bg-slate-950 p-4 rounded-lg">
          <EmptyState
            variant="card"
            icon={<Database className="w-14 h-14" />}
            title="No data sources connected"
            description="Connect your first data source to start analyzing your data."
            action={
              <div className="flex gap-3">
                <Button variant="primary">Connect Data Source</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            }
          />
        </div>
      </section>
    </div>
  ),
};

// Real world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6 max-w-4xl">
      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Empty Project List</h3>
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h4 className="font-medium text-slate-900">Projects</h4>
            <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
              New Project
            </Button>
          </div>
          <EmptyState
            variant="default"
            icon={<FolderOpen className="w-16 h-16" />}
            title="No projects yet"
            description="Get started by creating your first project. Projects help you organize your work and collaborate with your team."
            action={
              <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
                Create Your First Project
              </Button>
            }
          />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Empty Search Results</h3>
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200">
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full px-3 py-2 border border-slate-300 rounded-md"
              value="nonexistent query"
              readOnly
            />
          </div>
          <EmptyState
            variant="default"
            icon={<SearchX className="w-16 h-16" />}
            title="No results found"
            description="We couldn't find any documents matching 'nonexistent query'. Try different keywords or check your spelling."
          />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Empty Team Members</h3>
        <EmptyState
          variant="card"
          icon={<Users className="w-16 h-16" />}
          title="No team members yet"
          description="Collaborate better by inviting team members to your workspace. Share projects and work together in real-time."
          action={
            <div className="flex gap-3">
              <Button variant="primary">Invite Team Members</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          }
        />
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Minimal Variant (Sidebar)</h3>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex gap-4">
            <div className="w-48 border-r border-slate-200 pr-4">
              <h4 className="text-sm font-medium text-slate-900 mb-2">Recent Files</h4>
              <EmptyState
                variant="minimal"
                icon={<FileText className="w-8 h-8" />}
                title="No recent files"
                description="Files you work on will appear here."
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600">
                This minimal variant works well in sidebars and compact spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Table Empty State</h3>
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3}>
                  <EmptyState
                    variant="default"
                    icon={<Inbox className="w-12 h-12" />}
                    title="No records found"
                    description="There are no records to display. Create a new record to get started."
                    action={
                      <Button variant="primary" size="sm">
                        Add Record
                      </Button>
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};
