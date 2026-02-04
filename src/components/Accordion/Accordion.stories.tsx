import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta = {
  title: 'Components/Navigation/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at a time',
      table: {
        defaultValue: { summary: 'single' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether all items can be collapsed (only for type="single")',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the item to expand by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the accordion is disabled',
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Function called when the expanded items change',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses Radix UI primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Multiple accordion allows you to open multiple items at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Try opening both sections simultaneously.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>All sections can remain open at once.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" collapsible className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Open by default</AccordionTrigger>
        <AccordionContent>This item is open by default when the component loads.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>This item starts closed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank
          transfers for enterprise accounts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I cancel my subscription?</AccordionTrigger>
        <AccordionContent>
          Yes, you can cancel your subscription at any time from your account settings. You'll
          continue to have access until the end of your billing period.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact
          us within 30 days of your purchase for a full refund.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How do I upgrade my plan?</AccordionTrigger>
        <AccordionContent>
          You can upgrade your plan at any time from your account dashboard. The change will be
          prorated based on your current billing cycle.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <ul className="ml-4 list-disc space-y-2">
            <li>Unlimited projects</li>
            <li>24/7 customer support</li>
            <li>Advanced analytics</li>
            <li>Custom integrations</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pricing Tiers</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Starter</span>
              <span>$9/month</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Professional</span>
              <span>$29/month</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Enterprise</span>
              <span>Custom</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Contact Information</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-1">
            <p>Email: support@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Main St, San Francisco, CA 94102</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CompactSpacing: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="py-2 text-sm">Compact item 1</AccordionTrigger>
        <AccordionContent className="pb-2 text-xs">
          This accordion has tighter spacing for a more compact layout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-0">
        <AccordionTrigger className="py-2 text-sm">Compact item 2</AccordionTrigger>
        <AccordionContent className="pb-2 text-xs">Useful for sidebars or tight spaces.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="py-2 text-sm">Compact item 3</AccordionTrigger>
        <AccordionContent className="pb-2 text-xs">Less vertical space used overall.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Long content example</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithBorders: Story = {
  render: () => (
    <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">Item 1</AccordionTrigger>
          <AccordionContent className="px-4">Content for item 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4">Item 2</AccordionTrigger>
          <AccordionContent className="px-4">Content for item 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="px-4">Item 3</AccordionTrigger>
          <AccordionContent className="px-4">Content for item 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
