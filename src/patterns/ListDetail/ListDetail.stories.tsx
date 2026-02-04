import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search, MoreVertical, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/Avatar/Avatar';
import { Card, CardHeader, CardContent, CardTitle } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import { Divider } from '../../components/Divider/Divider';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../components/DropdownMenu/DropdownMenu';
import { EmptyState } from '../../components/EmptyState/EmptyState';

const meta = {
  title: 'Patterns/ListDetail',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
List + Detail pattern (also known as Master-Detail) displays a list of items with a detail panel showing the selected item.

## Pattern Components Used
- List panel (sidebar with items)
- Detail panel (main content)
- Card (containers)
- Avatar (user images)
- Badge (status indicators)
- Button (actions)
- Input (search)
- DropdownMenu (item actions)
- EmptyState (no selection)

## Features
- Selectable list items
- Search/filter functionality
- Detail view on selection
- Item actions (edit, delete)
- Responsive layout (list collapses on mobile)
- Empty state when nothing selected

## Use Cases
- Email client (inbox + message)
- Contact list (contacts + details)
- Project list (projects + overview)
- User directory (users + profile)
- Document browser (files + preview)

## Layout Structure
\`\`\`
┌────────────┬──────────────────┐
│            │                  │
│  List      │  Detail Panel    │
│  (items)   │  (selected item) │
│            │                  │
└────────────┴──────────────────┘
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  location: string;
  status: 'active' | 'away' | 'offline';
  avatar: string;
  lastContact: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corp',
    role: 'Product Manager',
    location: 'San Francisco, CA',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastContact: '2024-01-15',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    phone: '+1 (555) 234-5678',
    company: 'TechStart Inc',
    role: 'Engineer',
    location: 'Austin, TX',
    status: 'away',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastContact: '2024-01-12',
  },
  {
    id: 3,
    name: 'Carol White',
    email: 'carol@example.com',
    phone: '+1 (555) 345-6789',
    company: 'Design Studio',
    role: 'Designer',
    location: 'New York, NY',
    status: 'offline',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastContact: '2024-01-10',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david@example.com',
    phone: '+1 (555) 456-7890',
    company: 'Marketing Pro',
    role: 'Marketing Director',
    location: 'Seattle, WA',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastContact: '2024-01-14',
  },
];

const statusColors = {
  active: 'bg-green-500',
  away: 'bg-yellow-500',
  offline: 'bg-slate-400',
};

export const Default: Story = {
  render: () => {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
        {/* List Panel */}
        <div className="w-96 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              Contacts
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search contacts..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredContacts.length === 0 ? (
              <div className="p-8">
                <EmptyState
                  variant="minimal"
                  icon={<Search className="w-10 h-10" />}
                  title="No contacts found"
                  description="Try adjusting your search query."
                />
              </div>
            ) : (
              <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredContacts.map((contact) => (
                  <li key={contact.id}>
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className={`w-full p-4 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-left ${
                        selectedContact?.id === contact.id
                          ? 'bg-slate-100 dark:bg-slate-900'
                          : ''
                      }`}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>
                            {contact.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-slate-950 ${
                            statusColors[contact.status]
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-medium text-slate-900 dark:text-slate-50 truncate">
                            {contact.name}
                          </h3>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Share</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                          {contact.role} at {contact.company}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          Last contact: {contact.lastContact}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="flex-1 overflow-y-auto">
          {selectedContact ? (
            <div className="p-8 max-w-3xl mx-auto">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                    <AvatarFallback>
                      {selectedContact.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                      {selectedContact.name}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                      {selectedContact.role} at {selectedContact.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="default" size="sm">
                        {selectedContact.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="primary" size="sm">
                    Message
                  </Button>
                </div>
              </div>

              <Divider className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-slate-500 dark:text-slate-400">Email</p>
                        <a
                          href={`mailto:${selectedContact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {selectedContact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-slate-500 dark:text-slate-400">Phone</p>
                        <a
                          href={`tel:${selectedContact.phone}`}
                          className="text-slate-900 dark:text-slate-50"
                        >
                          {selectedContact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-slate-500 dark:text-slate-400">Location</p>
                        <p className="text-slate-900 dark:text-slate-50">
                          {selectedContact.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-slate-500 dark:text-slate-400">Last Contact</p>
                        <p className="text-slate-900 dark:text-slate-50">
                          {selectedContact.lastContact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    No notes available for this contact.
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-8">
              <EmptyState
                variant="default"
                title="No contact selected"
                description="Select a contact from the list to view their details."
              />
            </div>
          )}
        </div>
      </div>
    );
  },
};
