import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progress value (0-100)',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Color variant indicating status',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show the percentage label',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Custom label text (shows instead of percentage if provided)',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={60} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={75} showLabel />
    </div>
  ),
};

export const WithCustomLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={45} label="Uploading file..." showLabel />
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={100} variant="success" label="Complete" showLabel />
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={80} variant="warning" label="Storage usage" showLabel />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="w-[400px]">
      <Progress value={95} variant="error" label="Critical" showLabel />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Progress value={40} variant="default" label="Default" showLabel />
      <Progress value={70} variant="success" label="Success" showLabel />
      <Progress value={85} variant="warning" label="Warning" showLabel />
      <Progress value={95} variant="error" label="Error" showLabel />
    </div>
  ),
};

export const DifferentValues: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Progress value={0} showLabel />
      <Progress value={25} showLabel />
      <Progress value={50} showLabel />
      <Progress value={75} showLabel />
      <Progress value={100} showLabel />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-[400px]">
        <Progress value={progress} label="Loading..." showLabel />
      </div>
    );
  },
};

export const SteppedAnimation: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-[400px]">
        <Progress value={progress} label="Processing steps..." showLabel />
      </div>
    );
  },
};

export const MultipleProgress: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <Progress value={45} label="Project Alpha" showLabel variant="default" />
      <Progress value={78} label="Project Beta" showLabel variant="success" />
      <Progress value={92} label="Project Gamma" showLabel variant="warning" />
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <h3 className="mb-2 text-lg font-semibold">Profile Completion</h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
        Complete your profile to unlock all features
      </p>
      <div className="space-y-4">
        <Progress value={30} label="Basic Information" showLabel />
        <Progress value={60} label="Work Experience" showLabel />
        <Progress value={100} label="Education" showLabel variant="success" />
        <Progress value={0} label="Skills" showLabel />
      </div>
    </div>
  ),
};

export const FileUpload: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const startUpload = () => {
      setIsUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsUploading(false), 1000);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    };

    return (
      <div className="w-[400px] space-y-4">
        <button
          onClick={startUpload}
          disabled={isUploading}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isUploading ? 'Uploading...' : 'Start Upload'}
        </button>
        {isUploading && (
          <Progress
            value={uploadProgress}
            label="document.pdf"
            showLabel
            variant={uploadProgress === 100 ? 'success' : 'default'}
          />
        )}
      </div>
    );
  },
};

export const Small: Story = {
  render: () => (
    <div className="w-[300px]">
      <Progress value={65} showLabel className="h-2" />
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <div className="w-[500px]">
      <Progress value={65} showLabel className="h-6" />
    </div>
  ),
};
