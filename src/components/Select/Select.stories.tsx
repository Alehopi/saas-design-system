import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectWrapper,
} from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value (uncontrolled)',
    },
    value: {
      control: 'text',
      description: 'Selected value (controlled)',
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Function called when selection changes',
    },
    open: {
      control: 'boolean',
      description: 'Whether the dropdown is open (controlled)',
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Function called when dropdown opens/closes',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===================
// BASIC EXAMPLES
// ===================

export const Default: Story = {
  render: () => (
    <div className="w-[280px]">
      <Select>
        <SelectTrigger aria-label="Select an option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Favorite Fruit">
        <Select>
          <SelectTrigger aria-label="Favorite Fruit">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Country" helperText="Select your country of residence">
        <Select>
          <SelectTrigger aria-label="Country">
            <SelectValue placeholder="Choose country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="es">Spain</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Language" required helperText="This field is required">
        <Select>
          <SelectTrigger aria-label="Language, required">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

// ===================
// SIZES
// ===================

export const Small: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Small Select">
        <Select>
          <SelectTrigger size="sm" aria-label="Small Select">
            <SelectValue placeholder="Small size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

export const Medium: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Medium Select">
        <Select>
          <SelectTrigger size="md" aria-label="Medium Select">
            <SelectValue placeholder="Medium size (default)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Large Select">
        <Select>
          <SelectTrigger size="lg" aria-label="Large Select">
            <SelectValue placeholder="Large size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

// ===================
// STATES
// ===================

export const Error: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Select with Error" error errorMessage="This field is required">
        <Select>
          <SelectTrigger error aria-label="Select with Error">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Disabled Select">
        <Select disabled>
          <SelectTrigger disabled aria-label="Disabled Select">
            <SelectValue placeholder="Cannot interact" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

// ===================
// WITH GROUPS
// ===================

export const WithGroups: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Select Team Member">
        <Select>
          <SelectTrigger aria-label="Select Team Member">
            <SelectValue placeholder="Choose a team member" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Design Team</SelectLabel>
              <SelectItem value="alice">Alice Johnson</SelectItem>
              <SelectItem value="bob">Bob Smith</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Engineering Team</SelectLabel>
              <SelectItem value="charlie">Charlie Brown</SelectItem>
              <SelectItem value="diana">Diana Prince</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Marketing Team</SelectLabel>
              <SelectItem value="eve">Eve Anderson</SelectItem>
              <SelectItem value="frank">Frank Wilson</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

// ===================
// LONG LISTS (con scroll)
// ===================

export const LongList: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Select Country" helperText="Scroll to see more options">
        <Select>
          <SelectTrigger aria-label="Select Country">
            <SelectValue placeholder="Choose a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="af">Afghanistan</SelectItem>
            <SelectItem value="al">Albania</SelectItem>
            <SelectItem value="dz">Algeria</SelectItem>
            <SelectItem value="ar">Argentina</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="at">Austria</SelectItem>
            <SelectItem value="bd">Bangladesh</SelectItem>
            <SelectItem value="be">Belgium</SelectItem>
            <SelectItem value="br">Brazil</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="cl">Chile</SelectItem>
            <SelectItem value="cn">China</SelectItem>
            <SelectItem value="co">Colombia</SelectItem>
            <SelectItem value="dk">Denmark</SelectItem>
            <SelectItem value="eg">Egypt</SelectItem>
            <SelectItem value="fi">Finland</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="gr">Greece</SelectItem>
            <SelectItem value="in">India</SelectItem>
            <SelectItem value="id">Indonesia</SelectItem>
            <SelectItem value="ie">Ireland</SelectItem>
            <SelectItem value="il">Israel</SelectItem>
            <SelectItem value="it">Italy</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="mx">Mexico</SelectItem>
            <SelectItem value="nl">Netherlands</SelectItem>
            <SelectItem value="nz">New Zealand</SelectItem>
            <SelectItem value="no">Norway</SelectItem>
            <SelectItem value="pk">Pakistan</SelectItem>
            <SelectItem value="pl">Poland</SelectItem>
            <SelectItem value="pt">Portugal</SelectItem>
            <SelectItem value="ru">Russia</SelectItem>
            <SelectItem value="sa">Saudi Arabia</SelectItem>
            <SelectItem value="sg">Singapore</SelectItem>
            <SelectItem value="za">South Africa</SelectItem>
            <SelectItem value="kr">South Korea</SelectItem>
            <SelectItem value="es">Spain</SelectItem>
            <SelectItem value="se">Sweden</SelectItem>
            <SelectItem value="ch">Switzerland</SelectItem>
            <SelectItem value="th">Thailand</SelectItem>
            <SelectItem value="tr">Turkey</SelectItem>
            <SelectItem value="ua">Ukraine</SelectItem>
            <SelectItem value="ae">United Arab Emirates</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="vn">Vietnam</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

// ===================
// DISABLED OPTIONS
// ===================

export const WithDisabledOptions: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Select Plan">
        <Select>
          <SelectTrigger aria-label="Select Plan">
            <SelectValue placeholder="Choose a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free Plan</SelectItem>
            <SelectItem value="basic">Basic Plan</SelectItem>
            <SelectItem value="pro">Pro Plan</SelectItem>
            <SelectItem value="enterprise" disabled>
              Enterprise Plan (Coming Soon)
            </SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

// ===================
// REAL-WORLD EXAMPLES
// ===================

export const TimeZoneSelector: Story = {
  render: () => (
    <div className="w-[320px]">
      <SelectWrapper label="Time Zone" helperText="Select your preferred time zone">
        <Select defaultValue="est">
          <SelectTrigger aria-label="Time Zone">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="pst">Pacific Time (PST)</SelectItem>
              <SelectItem value="mst">Mountain Time (MST)</SelectItem>
              <SelectItem value="cst">Central Time (CST)</SelectItem>
              <SelectItem value="est">Eastern Time (EST)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gmt">GMT (London)</SelectItem>
              <SelectItem value="cet">CET (Paris, Berlin)</SelectItem>
              <SelectItem value="eet">EET (Athens, Istanbul)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="ist">IST (India)</SelectItem>
              <SelectItem value="jst">JST (Japan)</SelectItem>
              <SelectItem value="aest">AEST (Australia)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};

export const PrioritySelector: Story = {
  render: () => (
    <div className="w-[280px]">
      <SelectWrapper label="Priority" required>
        <Select defaultValue="medium">
          <SelectTrigger aria-label="Priority">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">🟢 Low Priority</SelectItem>
            <SelectItem value="medium">🟡 Medium Priority</SelectItem>
            <SelectItem value="high">🟠 High Priority</SelectItem>
            <SelectItem value="urgent">🔴 Urgent</SelectItem>
          </SelectContent>
        </Select>
      </SelectWrapper>
    </div>
  ),
};
