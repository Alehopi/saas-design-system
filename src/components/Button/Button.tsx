import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 disabled:text-blue-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:disabled:bg-blue-800 dark:disabled:text-blue-300',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:bg-slate-100 disabled:text-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 dark:disabled:bg-slate-800 dark:disabled:text-slate-500',
        outline: 'border border-slate-300 bg-white hover:bg-slate-100 hover:text-slate-900 disabled:border-slate-200 disabled:text-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:disabled:border-slate-700 dark:disabled:text-slate-500',
        ghost: 'hover:bg-slate-100 hover:text-slate-900 disabled:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:disabled:text-slate-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400 disabled:text-red-100 dark:bg-red-600 dark:hover:bg-red-700 dark:disabled:bg-red-800 dark:disabled:text-red-300',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
        {!isLoading && leftIcon && <span className="mr-2" aria-hidden="true">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2" aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
