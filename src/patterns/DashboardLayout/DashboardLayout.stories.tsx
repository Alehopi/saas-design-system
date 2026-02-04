import type { Meta, StoryObj } from '@storybook/react';
import {
  Home,
  BarChart,
  Users,
  Settings,
  FileText,
  Bell,
  Search,
  Menu,
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
- Sidebar (navigation)
- Navbar (top bar with search, notifications, user menu)
- Main content area
- Card (content containers)
- Button (actions)
- Avatar (user profile)
- Badge (notifications)
- DropdownMenu (user menu)
- Input (search)

## Features
- Collapsible sidebar
- Top navigation bar
- Search functionality
- User profile menu
- Notifications
- Breadcrumbs
- Responsive design
- Dark mode support

## Layout Structure
\`\`\`
┌─────────────────────────────────────┐
│ Navbar (search, notifications, user)│
├────────┬────────────────────────────┤
│        │                            │
│ Side   │  Main Content Area         │
│ bar    │  (Cards, Tables, etc.)     │
│        │                            │
└────────┴────────────────────────────┘
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Sidebar = () => (
  <aside className="w-64 bg-slate-900 dark:bg-slate-950 text-white flex flex-col">
    <div className="p-6">
      <h1 className="text-xl font-bold">SaaS App</h1>
    </div>
    <nav className="flex-1 px-3">
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800 text-white"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <BarChart className="w-5 h-5" />
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Team</span>
            <Badge variant="default" size="sm" className="ml-auto">
              3
            </Badge>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
    <div className="p-4 border-t border-slate-800">
      <div className="flex items-center gap-3 px-3 py-2">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">John Doe</p>
          <p className="text-xs text-slate-400 truncate">john@example.com</p>
        </div>
      </div>
    </div>
  </aside>
);

const Navbar = () => (
  <header className="h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6">
    <div className="flex items-center gap-4 flex-1 max-w-xl">
      <Button variant="ghost" size="sm" className="lg:hidden">
        <Menu className="w-5 h-5" />
      </Button>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-9"
        />
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="sm" className="relative">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="hidden md:inline">John Doe</span>
            <ChevronDown className="w-4 h-4" />
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
);

export const Default: Story = {
  render: () => (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Dashboard</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Welcome back! Here's what's happening today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                        <div className="flex-1 min-w-0">
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
                      <FileText className="w-4 h-4 mr-2" />
                      Create new project
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Invite team member
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
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
  ),
};

export const WithoutSidebar: Story = {
  render: () => (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Simple Layout (No Sidebar)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
