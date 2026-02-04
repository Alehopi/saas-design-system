import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Label } from '../../components/Label/Label';
import { FieldGroup } from '../../components/FieldGroup/FieldGroup';
import { HelperText } from '../../components/HelperText/HelperText';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../../components/Card/Card';
import { Divider } from '../../components/Divider/Divider';

const meta = {
  title: 'Patterns/LoginForm',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Login form pattern demonstrates a complete authentication form with proper validation, error handling, and user experience best practices.

## Pattern Components Used
- Card (container)
- FieldGroup (field wrapper)
- Label (field labels)
- Input (email, password)
- Button (submit, social login)
- ErrorMessage (validation)
- HelperText (instructions)
- Divider (visual separation)

## Features
- Email and password fields
- Remember me checkbox
- Forgot password link
- Social login options
- Form validation
- Loading states
- Error states
- Responsive design

## Best Practices
- Clear visual hierarchy
- Accessible form structure
- Proper label associations
- Helpful error messages
- Loading state feedback
- Social login alternatives
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      // Simulate validation
      setTimeout(() => {
        setErrors({
          email: 'Invalid email or password.',
        });
        setIsLoading(false);
      }, 1000);
    };

    return (
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FieldGroup
                label={
                  <Label htmlFor="email" required>
                    Email address
                  </Label>
                }
                error={errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                  required
                />
              </FieldGroup>

              <FieldGroup
                label={
                  <Label htmlFor="password" required>
                    Password
                  </Label>
                }
                error={errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className={errors.password ? 'border-red-500' : ''}
                  required
                />
              </FieldGroup>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-slate-700 dark:text-slate-300">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            <Divider className="my-6">Or continue with</Divider>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});

    const validate = (field: 'email' | 'password', value: string) => {
      if (field === 'email') {
        if (!value) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format.';
      }
      if (field === 'password') {
        if (!value) return 'Password is required.';
        if (value.length < 8) return 'Password must be at least 8 characters.';
      }
      return undefined;
    };

    const handleBlur = (field: 'email' | 'password') => {
      setTouched({ ...touched, [field]: true });
      const error = validate(field, formData[field]);
      setErrors({ ...errors, [field]: error });
    };

    const handleChange = (field: 'email' | 'password', value: string) => {
      setFormData({ ...formData, [field]: value });
      if (touched[field]) {
        const error = validate(field, value);
        setErrors({ ...errors, [field]: error });
      }
    };

    return (
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Real-time validation example</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <FieldGroup
                label={
                  <Label htmlFor="email-val" required>
                    Email address
                  </Label>
                }
                error={touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                helperText={!errors.email && <HelperText>We'll never share your email.</HelperText>}
              >
                <Input
                  id="email-val"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={touched.email && errors.email ? 'border-red-500' : ''}
                  placeholder="you@example.com"
                />
              </FieldGroup>

              <FieldGroup
                label={
                  <Label htmlFor="password-val" required>
                    Password
                  </Label>
                }
                error={
                  touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>
                }
                helperText={
                  !errors.password && <HelperText>Must be at least 8 characters.</HelperText>
                }
              >
                <Input
                  id="password-val"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  onBlur={() => handleBlur('password')}
                  className={touched.password && errors.password ? 'border-red-500' : ''}
                  placeholder="••••••••"
                />
              </FieldGroup>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={!!(errors.email || errors.password || !formData.email || !formData.password)}
              >
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const Minimal: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Welcome back</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Sign in to continue
          </p>
        </div>

        <form className="space-y-4">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Button variant="primary" className="w-full">
            Sign in
          </Button>
        </form>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          New user?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
            Create account
          </a>
        </p>
      </div>
    </div>
  ),
};
