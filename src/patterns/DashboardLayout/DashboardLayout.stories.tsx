import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Home,
  BarChart,
  Users,
  Settings,
  FileText,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/Avatar/Avatar';
import { Card, CardHeader, CardContent, CardTitle } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '../../components/DropdownMenu/DropdownMenu';

const meta = {
  title: 'Patterns/DashboardLayout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Dashboard layout pattern demonstrates a complete SaaS application layout with sidebar navigation, top navbar, and main content area.

## Pattern Components Used
- Sidebar (navigation with mobile drawer)
- Navbar (top bar with search, notifications, user menu)
- Main content area
- Card (content containers)
- Button (actions)
- Avatar (user profile)
- Badge (notifications)
- DropdownMenu (user menu)
- Input (search)

## Features
- **Mobile drawer** sidebar with overlay
- Top navigation bar
- Search functionality
- User profile menu
- Notifications
- Responsive grid layout
- Dark mode support

## Layout Structure
\`\`\`
Desktop:
┌─────────────────────────────────────┐
│ Navbar (search, notifications, user)│
├────────┬────────────────────────────┤
│        │                            │
│ Side   │  Main Content Area         │
│ bar    │  (Cards, Tables, etc.)     │
│        │                            │
└────────┴────────────────────────────┘

Mobile:
┌─────────────────┐
│ [≡] Navbar      │
├─────────────────┤
│                 │
│  Main Content   │
│  (full width)   │
│                 │
└─────────────────┘
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: BarChart, label: 'Analytics', active: false },
  { icon: Users, label: 'Team', active: false, badge: '3' },
  { icon: FileText, label: 'Projects', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

const SidebarContent = ({ onClose }: { onClose?: () => void }) => (
  <div className="flex h-full flex-col bg-slate-900 dark:bg-slate-950 text-white">
    <div className="flex items-center justify-between p-6">
      <h1 className="text-xl font-bold">SaaS App</h1>
      {onClose && (
        <button
          onClick={onClose}
          className="rounded-md p-1 text-slate-400 hover:text-white lg:hidden"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
    <nav className="flex-1 px-3">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                item.active
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {item.badge && (
                <Badge variant="default" size="sm" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="border-t border-slate-800 p-4">
      <div className="flex items-center gap-3 px-3 py-2">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">John Doe</p>
          <p className="truncate text-xs text-slate-400">john@example.com</p>
        </div>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile drawer sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <SidebarContent onClose={() => setSidebarOpen(false)} />
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Navbar */}
          <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 md:px-6">
            <div className="flex flex-1 items-center gap-4 max-w-xl">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="relative hidden flex-1 sm:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input type="search" placeholder="Search..." className="pl-9" />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Button variant="ghost" size="sm" className="relative sm:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">John Doe</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="mx-auto max-w-7xl space-y-6">
              <div>
                <h2 className="heading-2 text-slate-900 dark:text-slate-50">Dashboard</h2>
                <p className="body-base text-slate-600 dark:text-slate-400">
                  Welcome back! Here's what's happening today.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-green-600">+20.1% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Active Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,350</div>
                    <p className="text-xs text-green-600">+12.5% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">+3 new this week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Team Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">3 pending invites</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} alt="User" />
                            <AvatarFallback>U{i}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                              User {i} completed a project
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              2 hours ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Create new project
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        Invite team member
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Manage settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  },
};

export const WithoutSidebar: Story = {
  render: () => (
    <div className="flex h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 md:px-6">
        <div className="flex flex-1 items-center gap-4 max-w-xl">
          <div className="relative hidden flex-1 sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input type="search" placeholder="Search..." className="pl-9" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="heading-2 text-slate-900 dark:text-slate-50 mb-6">
            Simple Layout (No Sidebar)
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Card {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Content for card {i}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  ),
};
