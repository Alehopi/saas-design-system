import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../Button';

const meta = {
  title: 'Components/Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover effect',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This is the card content area.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" className="w-[350px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>This card has elevated shadow</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Content with more prominent shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" className="w-[350px]">
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>This card has a visible border</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Content with emphasized border.</p>
      </CardContent>
    </Card>
  ),
};

export const WithHover: Story = {
  render: () => (
    <Card hover className="w-[350px]">
      <CardHeader>
        <CardTitle>Hover Effect</CardTitle>
        <CardDescription>Hover over this card</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This card has a hover effect.</p>
      </CardContent>
    </Card>
  ),
};

export const SmallPadding: Story = {
  render: () => (
    <Card padding="sm" className="w-[350px]">
      <CardHeader>
        <CardTitle>Small Padding</CardTitle>
        <CardDescription>Compact card layout</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Less padding for tighter layouts.</p>
      </CardContent>
    </Card>
  ),
};

export const LargePadding: Story = {
  render: () => (
    <Card padding="lg" className="w-[350px]">
      <CardHeader>
        <CardTitle>Large Padding</CardTitle>
        <CardDescription>Spacious card layout</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">More padding for breathing room.</p>
      </CardContent>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card padding="none" className="w-[350px]">
      <div className="p-6">
        <CardTitle>Custom Padding</CardTitle>
        <CardDescription className="mt-2">You control the padding</CardDescription>
        <p className="mt-4 text-sm">When you need full control over spacing.</p>
      </div>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card hover className="w-[300px]">
      <div
        className="h-40 bg-slate-200 dark:bg-slate-800"
        role="img"
        aria-label="Product image placeholder"
      />
      <CardHeader>
        <CardTitle>Premium Product</CardTitle>
        <CardDescription>$99.00</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          High-quality product with amazing features that you'll love.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary" className="flex-1" aria-label="Add Premium Product to cart">
          Add to Cart
        </Button>
        <Button variant="outline" aria-label="View Premium Product details">
          View
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const UserProfileCard: Story = {
  render: () => (
    <Card variant="elevated" className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div
            className="h-12 w-12 rounded-full bg-blue-500"
            role="img"
            aria-label="John Doe avatar"
          />
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Product Designer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Creating delightful user experiences and building design systems.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary" className="flex-1" aria-label="Follow John Doe">
          Follow
        </Button>
        <Button variant="outline" aria-label="Send message to John Doe">
          Message
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <Card className="w-[250px]" role="region" aria-labelledby="revenue-heading">
      <CardHeader>
        <CardDescription id="revenue-heading">Total Revenue</CardDescription>
        <CardTitle className="text-3xl" aria-label="45,231 dollars and 89 cents">
          $45,231.89
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-green-700 dark:text-green-400" aria-label="Increased by 20.1 percent from last month">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>Description 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content 1</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Description 2</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content 2</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>Description 3</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content 3</p>
        </CardContent>
      </Card>
    </div>
  ),
};
