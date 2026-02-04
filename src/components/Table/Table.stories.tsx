import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './Table';
import { Badge } from '../Badge';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the table',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent team members.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Website Redesign</TableCell>
          <TableCell>
            <Badge variant="success">Completed</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="warning">High</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mobile App</TableCell>
          <TableCell>
            <Badge variant="secondary">In Progress</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="error">Urgent</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">API Integration</TableCell>
          <TableCell>
            <Badge variant="outline">Pending</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">Medium</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <span className="sr-only">Select</span>
            <Checkbox aria-label="Select all rows" />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox aria-label="Select John Doe" />
          </TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox aria-label="Select Jane Smith" />
          </TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox aria-label="Select Bob Johnson" />
          </TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline">
                Edit
              </Button>
              <Button size="sm" variant="danger">
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline">
                Edit
              </Button>
              <Button size="sm" variant="danger">
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell className="text-right">2</TableCell>
          <TableCell className="text-right">$50.00</TableCell>
          <TableCell className="text-right">$100.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell className="text-right">1</TableCell>
          <TableCell className="text-right">$75.00</TableCell>
          <TableCell className="text-right">$75.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product C</TableCell>
          <TableCell className="text-right">3</TableCell>
          <TableCell className="text-right">$25.00</TableCell>
          <TableCell className="text-right">$75.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-slate-50 dark:bg-slate-900/50">
          <TableCell>John Doe</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>Design</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow className="bg-slate-50 dark:bg-slate-900/50">
          <TableCell>Bob Johnson</TableCell>
          <TableCell>Marketing</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Alice Williams</TableCell>
          <TableCell>Sales</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Compact: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 px-2">Name</TableHead>
          <TableHead className="h-8 px-2">Email</TableHead>
          <TableHead className="h-8 px-2">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="p-2">John Doe</TableCell>
          <TableCell className="p-2">john@example.com</TableCell>
          <TableCell className="p-2">
            <Badge size="sm" variant="success">
              Active
            </Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="p-2">Jane Smith</TableCell>
          <TableCell className="p-2">jane@example.com</TableCell>
          <TableCell className="p-2">
            <Badge size="sm" variant="success">
              Active
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const LargeData: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }, (_, i) => (
          <TableRow key={i}>
            <TableCell>#{1000 + i}</TableCell>
            <TableCell>User {i + 1}</TableCell>
            <TableCell>user{i + 1}@example.com</TableCell>
            <TableCell>{['Engineering', 'Design', 'Marketing', 'Sales'][i % 4]}</TableCell>
            <TableCell>
              <Badge variant={i % 3 === 0 ? 'success' : 'secondary'}>
                {i % 3 === 0 ? 'Active' : 'Inactive'}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
