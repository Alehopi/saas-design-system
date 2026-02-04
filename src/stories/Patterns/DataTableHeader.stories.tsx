import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../../components/Select';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { Search, Filter, Download, Plus } from 'lucide-react';

const meta = {
  title: 'Patterns/Data Table Header',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the data table section',
      table: {
        defaultValue: { summary: 'Users' },
      },
    },
    description: {
      control: 'text',
      description: 'Description or subtitle text',
      table: {
        defaultValue: { summary: 'Manage your team members' },
      },
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showFilters: {
      control: 'boolean',
      description: 'Show filter controls',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showStats: {
      control: 'boolean',
      description: 'Show statistics cards',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onSearch: {
      action: 'searched',
      description: 'Function called when search is performed',
    },
    onFilter: {
      action: 'filtered',
      description: 'Function called when filters are applied',
    },
    onAdd: {
      action: 'addClicked',
      description: 'Function called when Add button is clicked',
    },
    onExport: {
      action: 'exported',
      description: 'Function called when Export button is clicked',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-6xl bg-white rounded-lg border border-slate-200 p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search users..."
            leftIcon={<Search className="h-4 w-4" />}
            aria-label="Search users"
          />
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[180px]" aria-label="Filter users by status">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All users</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            leftIcon={<Filter className="h-4 w-4" />}
            aria-label="Open filters"
          >
            Filters
          </Button>
          <Button
            variant="primary"
            leftIcon={<Plus className="h-4 w-4" />}
            aria-label="Add new user"
          >
            Add user
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const WithStats: Story = {
  render: () => (
    <div className="w-full max-w-6xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Users</h2>
          <p className="text-sm text-slate-600 mt-1">Manage your team members and their permissions</p>
        </div>
        <Button
          variant="primary"
          leftIcon={<Plus className="h-4 w-4" />}
          aria-label="Add new user"
        >
          Add user
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4" role="region" aria-label="User statistics overview">
        <section className="bg-white rounded-lg border border-slate-200 p-4" aria-labelledby="total-users-heading">
          <h3 id="total-users-heading" className="text-sm text-slate-600">Total Users</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1" aria-label="2,548 total users">2,548</p>
          <p className="text-xs text-green-700 mt-2">
            <span aria-hidden="true">↑ </span>
            <span aria-label="Increased by 12% from last month">12% from last month</span>
          </p>
        </section>
        <section className="bg-white rounded-lg border border-slate-200 p-4" aria-labelledby="active-users-heading">
          <h3 id="active-users-heading" className="text-sm text-slate-600">Active</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1" aria-label="2,234 active users">2,234</p>
          <Badge variant="success" size="sm" className="mt-2" aria-label="87.7 percent of total users">
            87.7%
          </Badge>
        </section>
        <section className="bg-white rounded-lg border border-slate-200 p-4" aria-labelledby="inactive-users-heading">
          <h3 id="inactive-users-heading" className="text-sm text-slate-600">Inactive</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1" aria-label="314 inactive users">314</p>
          <Badge variant="secondary" size="sm" className="mt-2" aria-label="12.3 percent of total users">
            12.3%
          </Badge>
        </section>
        <section className="bg-white rounded-lg border border-slate-200 p-4" aria-labelledby="new-users-heading">
          <h3 id="new-users-heading" className="text-sm text-slate-600">New This Week</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1" aria-label="48 new users this week">48</p>
          <Badge variant="warning" size="sm" className="mt-2" aria-label="Plus 8 compared to last week">
            +8
          </Badge>
        </section>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Search by name or email..."
              leftIcon={<Search className="h-4 w-4" />}
              aria-label="Search by name or email"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-[160px]" aria-label="Filter by status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[160px]" aria-label="Filter by role">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              leftIcon={<Download className="h-4 w-4" />}
              aria-label="Export user data"
            >
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="w-full max-w-6xl bg-white rounded-lg border border-slate-200 p-3">
      <div className="flex items-center gap-3">
        <Input
          placeholder="Search..."
          leftIcon={<Search className="h-4 w-4" />}
          size="sm"
          className="max-w-xs"
          aria-label="Search"
        />
        <Select>
          <SelectTrigger className="w-[140px] h-9" aria-label="Filter results">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex-1" />
        <Button size="sm" variant="outline" aria-label="Export data">
          Export
        </Button>
        <Button size="sm" variant="primary" aria-label="Add new item">
          Add
        </Button>
      </div>
    </div>
  ),
};
