import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const progressVariants = cva('relative h-4 w-full overflow-hidden rounded-full', {
  variants: {
    variant: {
      default: 'bg-slate-100 dark:bg-slate-800',
      success: 'bg-green-100 dark:bg-green-950/30',
      warning: 'bg-yellow-100 dark:bg-yellow-950/30',
      error: 'bg-red-100 dark:bg-red-950/30',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const progressIndicatorVariants = cva(
  'h-full w-full flex-1 transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 dark:bg-slate-50',
        success: 'bg-green-600 dark:bg-green-500',
        warning: 'bg-yellow-600 dark:bg-yellow-500',
        error: 'bg-red-600 dark:bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  showLabel?: boolean;
  label?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, variant, showLabel, label, ...props }, ref) => {
  const progressValue = Math.min(Math.max(value || 0, 0), 100);

  return (
    <div className="w-full space-y-2" aria-live="polite">
      {(showLabel || label) && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-700 dark:text-slate-300">
            {label || 'Progress'}
          </span>
          {showLabel && (
            <span className="font-medium text-slate-900 dark:text-slate-50">
              {progressValue}%
            </span>
          )}
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ variant }), className)}
        value={progressValue}
        aria-label={label || 'Progress'}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressValue}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(progressIndicatorVariants({ variant }))}
          style={{ transform: `translateX(-${100 - progressValue}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants };
