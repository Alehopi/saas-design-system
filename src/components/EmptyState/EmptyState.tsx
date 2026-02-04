import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const emptyStateVariants = cva(
  'flex flex-col items-center justify-center text-center',
  {
    variants: {
      variant: {
        default: 'py-12 px-6',
        minimal: 'py-8 px-4',
        card: 'py-12 px-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Action element (typically a Button) */
  action?: React.ReactNode;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, variant, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="region"
        aria-label={title}
        className={cn(emptyStateVariants({ variant }), className)}
        {...props}
      >
        {icon && (
          <div
            className={cn(
              'mb-4 flex items-center justify-center text-slate-300 dark:text-slate-600',
              variant === 'minimal' && 'mb-3'
            )}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}

        <h3
          className={cn(
            'font-semibold text-slate-900 dark:text-slate-50',
            variant === 'minimal' ? 'text-base' : 'text-lg'
          )}
        >
          {title}
        </h3>

        {description && (
          <p
            className={cn(
              'mt-2 max-w-sm text-slate-500 dark:text-slate-400',
              variant === 'minimal' ? 'text-xs' : 'text-sm'
            )}
          >
            {description}
          </p>
        )}

        {action && (
          <div className={cn('mt-6', variant === 'minimal' && 'mt-4')}>
            {action}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

export { EmptyState, emptyStateVariants };
