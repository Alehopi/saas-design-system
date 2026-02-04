import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback, AvatarWithLabel } from './Avatar';

const meta = {
  title: 'Components/Display/Avatar',
  component: AvatarWithLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    src: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
    fallback: {
      control: 'text',
      description: 'Fallback text when image fails to load (usually initials)',
    },
    label: {
      control: 'text',
      description: 'Primary label text (name)',
    },
    description: {
      control: 'text',
      description: 'Secondary description text (email, role, etc.)',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy', undefined],
      description: 'Status indicator',
    },
  },
} satisfies Meta<typeof AvatarWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'User avatar',
    fallback: 'JD',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'invalid-url',
    alt: 'User avatar',
    fallback: 'JD',
  },
};

export const WithLabel: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'John Doe',
    fallback: 'JD',
    label: 'John Doe',
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'John Doe',
    fallback: 'JD',
    label: 'John Doe',
    description: 'john.doe@example.com',
  },
};

export const Small: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'User',
    fallback: 'JD',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'User',
    fallback: 'JD',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'User',
    fallback: 'JD',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'User',
    fallback: 'JD',
    size: 'xl',
  },
};

export const OnlineStatus: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'John Doe',
    fallback: 'JD',
    label: 'John Doe',
    description: 'Online',
    status: 'online',
  },
};

export const OfflineStatus: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'John Doe',
    fallback: 'JD',
    label: 'John Doe',
    description: 'Offline',
    status: 'offline',
  },
};

export const AwayStatus: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'John Doe',
    fallback: 'JD',
    label: 'John Doe',
    description: 'Away',
    status: 'away',
  },
};

export const BusyStatus: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
    alt: 'John Doe',
    fallback: 'JD',
    label: 'John Doe',
    description: 'In a meeting',
    status: 'busy',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <AvatarWithLabel
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar small"
        fallback="JD"
        size="sm"
      />
      <AvatarWithLabel
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar medium"
        fallback="JD"
        size="md"
      />
      <AvatarWithLabel
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar large"
        fallback="JD"
        size="lg"
      />
      <AvatarWithLabel
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="User avatar extra large"
        fallback="JD"
        size="xl"
      />
    </div>
  ),
};

export const UserList: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <AvatarWithLabel
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        alt="John Doe"
        fallback="JD"
        label="John Doe"
        description="john.doe@example.com"
        status="online"
      />
      <AvatarWithLabel
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop"
        alt="Jane Smith"
        fallback="JS"
        label="Jane Smith"
        description="jane.smith@example.com"
        status="away"
      />
      <AvatarWithLabel
        src="invalid-url"
        alt="Michael Johnson"
        fallback="MJ"
        label="Michael Johnson"
        description="michael.j@example.com"
        status="offline"
      />
    </div>
  ),
};

export const CustomAvatar: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop" alt="Custom user avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
