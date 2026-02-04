import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../Card';

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab to select by default',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the selected tab',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'Whether tabs activate on focus or on click',
      table: {
        defaultValue: { summary: 'automatic' },
      },
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Function called when the selected tab changes',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-slate-600 dark:text-slate-300">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-slate-600 dark:text-slate-300">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-slate-600 dark:text-slate-300">Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your account settings here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="account-name" className="text-sm font-medium">Name</label>
              <input
                id="account-name"
                type="text"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                defaultValue="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="account-email" className="text-sm font-medium">Email</label>
              <input
                id="account-email"
                type="email"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                defaultValue="john@example.com"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current-password" className="text-sm font-medium">Current password</label>
              <input
                id="current-password"
                type="password"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="new-password" className="text-sm font-medium">New password</label>
              <input
                id="new-password"
                type="password"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Your dashboard overview</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Overview content goes here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Analytics content goes here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generate and view reports</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Reports content goes here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Notifications content goes here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Configure your settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Settings content goes here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">All items</p>
      </TabsContent>
      <TabsContent value="active" className="mt-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">Active items</p>
      </TabsContent>
      <TabsContent value="completed" className="mt-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">Completed items</p>
      </TabsContent>
      <TabsContent value="archived" className="mt-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">Archived items</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="flex w-[600px] gap-4" orientation="vertical">
      <TabsList className="flex h-auto flex-col">
        <TabsTrigger value="profile" className="w-full">
          Profile
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full">
          Security
        </TabsTrigger>
        <TabsTrigger value="billing" className="w-full">
          Billing
        </TabsTrigger>
        <TabsTrigger value="team" className="w-full">
          Team
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Profile content</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your security preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Security content</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Manage your billing and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Billing content</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Settings</CardTitle>
              <CardDescription>Manage your team members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Team content</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Available</TabsTrigger>
        <TabsTrigger value="tab2">Also Available</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-slate-600 dark:text-slate-300">Content for available tab</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-slate-600 dark:text-slate-300">Content for second tab</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-slate-600 dark:text-slate-300">This tab is disabled</p>
      </TabsContent>
    </Tabs>
  ),
};
