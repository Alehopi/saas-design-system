import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Divider } from '../../components/Divider';

const meta = {
  title: 'Patterns/Login Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showRememberMe: {
      control: 'boolean',
      description: 'Show "Remember me" checkbox',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showSocialLogin: {
      control: 'boolean',
      description: 'Show social login options (Google)',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state for form submission',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onSubmit: {
      action: 'submitted',
      description: 'Function called when form is submitted',
    },
    onForgotPassword: {
      action: 'forgotPassword',
      description: 'Function called when "Forgot password?" is clicked',
    },
    onSocialLogin: {
      action: 'socialLogin',
      description: 'Function called when social login button is clicked',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
        <p className="text-sm text-slate-600 mt-1">Enter your credentials to sign in</p>
      </div>

      <form className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          required
        />

        <div className="flex items-center justify-between">
          <Checkbox label="Remember me" size="sm" />
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-700"
            aria-label="Reset your password"
          >
            Forgot password?
          </a>
        </div>

        <Button variant="primary" className="w-full">
          Sign in
        </Button>

        <Divider label="OR" />

        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Don't have an account?{' '}
        <a
          href="#"
          className="font-medium text-blue-600 hover:text-blue-700"
          aria-label="Create a new account"
        >
          Sign up
        </a>
      </p>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
        <p className="text-sm text-slate-600 mt-1">Enter your credentials to sign in</p>
      </div>

      <form className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          variant="error"
          errorMessage="Invalid email address"
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          required
        />

        <Button variant="primary" className="w-full">
          Sign in
        </Button>
      </form>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
        <p className="text-sm text-slate-600 mt-1">Enter your credentials to sign in</p>
      </div>

      <form className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          defaultValue="user@example.com"
          disabled
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          defaultValue="password123"
          disabled
        />

        <Button variant="primary" className="w-full" isLoading>
          Sign in
        </Button>
      </form>
    </div>
  ),
};
