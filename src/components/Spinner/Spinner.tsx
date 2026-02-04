import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
    variant: {
      default: 'text-slate-900 dark:text-slate-50',
      primary: 'text-blue-600 dark:text-blue-500',
      secondary: 'text-slate-600 dark:text-slate-300',
      light: 'text-white',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface SpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, label, ...props }, ref) => {
    const labelColorClass = variant === 'light'
      ? 'text-white'
      : 'text-slate-700 dark:text-slate-300';

    return (
      <div
        ref={ref}
        role="status"
        aria-label={label || 'Loading'}
        className={cn('inline-flex items-center gap-2', className)}
        {...props}
      >
        <Loader2 className={cn(spinnerVariants({ size, variant }))} />
        {label && (
          <span className={cn('text-sm', labelColorClass)}>{label}</span>
        )}
        <span className="sr-only">{label || 'Loading'}</span>
      </div>
    );
  }
);
Spinner.displayName = 'Spinner';

export interface LoadingOverlayProps extends SpinnerProps {
  show?: boolean;
  transparent?: boolean;
}

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ show = true, transparent = false, label = 'Loading...', ...spinnerProps }, ref) => {
    if (!show) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center',
          transparent
            ? 'bg-transparent'
            : 'bg-white/80 backdrop-blur-sm dark:bg-slate-950/80'
        )}
      >
        <Spinner label={label} {...spinnerProps} />
      </div>
    );
  }
);
LoadingOverlay.displayName = 'LoadingOverlay';

export { Spinner, LoadingOverlay, spinnerVariants };
