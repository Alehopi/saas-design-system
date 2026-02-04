import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';

const meta = {
  title: 'Patterns/User Card',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: 'text',
      description: 'User\'s display name',
      table: {
        defaultValue: { summary: 'John Doe' },
      },
    },
    userRole: {
      control: 'text',
      description: 'User\'s role or job title',
      table: {
        defaultValue: { summary: 'Product Designer' },
      },
    },
    userBio: {
      control: 'text',
      description: 'User\'s bio or description',
    },
    showStats: {
      control: 'boolean',
      description: 'Show user statistics (projects, followers, following)',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons (Follow, Message)',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    onFollow: {
      action: 'followed',
      description: 'Function called when Follow button is clicked',
    },
    onMessage: {
      action: 'messaged',
      description: 'Function called when Message button is clicked',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar size="lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="John Doe profile picture"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-slate-900">John Doe</h3>
              <Badge variant="success" size="sm">Active</Badge>
            </div>
            <p className="text-sm text-slate-600">Product Designer</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">
          Creating beautiful and functional user experiences. 5 years of experience in SaaS products.
        </p>
        <div className="flex gap-4 mt-4 text-sm" role="list" aria-label="User statistics">
          <div role="listitem">
            <p className="font-semibold text-slate-900" aria-label="248 projects">248</p>
            <p className="text-slate-600" aria-hidden="true">Projects</p>
          </div>
          <div role="listitem">
            <p className="font-semibold text-slate-900" aria-label="1.2 thousand followers">1.2k</p>
            <p className="text-slate-600" aria-hidden="true">Followers</p>
          </div>
          <div role="listitem">
            <p className="font-semibold text-slate-900" aria-label="342 following">342</p>
            <p className="text-slate-600" aria-hidden="true">Following</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary" className="flex-1">Follow</Button>
        <Button variant="outline" className="flex-1">Message</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar size="lg">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Sarah Anderson profile picture"
              />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <span
              className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white"
              role="status"
              aria-label="Online"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-slate-900">Sarah Anderson</h3>
              <Badge variant="secondary" size="sm">Pro</Badge>
            </div>
            <p className="text-sm text-slate-600">Senior Developer</p>
            <p className="text-xs text-green-700 mt-1">
              <span aria-hidden="true">● </span>Online now
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">
          Full-stack developer specializing in React and Node.js. Available for freelance projects.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary" className="flex-1">Hire me</Button>
        <Button variant="outline" className="flex-1">Portfolio</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card className="w-[300px]" padding="sm">
      <div className="flex items-center gap-3">
        <Avatar size="md">
          <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Michael Johnson profile picture"
          />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-slate-900 truncate">Michael Johnson</p>
          <p className="text-xs text-slate-600 truncate">UX Researcher</p>
        </div>
        <Badge variant="outline" size="sm">Team</Badge>
      </div>
    </Card>
  ),
};

export const TeamList: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <h3 className="font-semibold text-slate-900">Team Members</h3>
        <p className="text-sm text-slate-600">4 active members</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          { name: 'John Doe', role: 'Product Designer', status: 'success', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
          { name: 'Sarah Anderson', role: 'Developer', status: 'success', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
          { name: 'Michael Johnson', role: 'UX Researcher', status: 'warning', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
          { name: 'Emma Wilson', role: 'Product Manager', status: 'secondary', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
        ].map((member) => (
          <div key={member.name} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
            <Avatar size="sm">
              <AvatarImage src={member.avatar} alt={`${member.name} profile picture`} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-slate-900">{member.name}</p>
              <p className="text-xs text-slate-600">{member.role}</p>
            </div>
            <Badge variant={member.status as any} size="sm">
              {member.status === 'success' ? 'Active' : member.status === 'warning' ? 'Away' : 'Offline'}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
};
