import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80',
        secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80',
        success: 'border-transparent bg-green-700 text-white hover:bg-green-800',
        warning: 'border-transparent bg-amber-800 text-white hover:bg-amber-900',
        error: 'border-transparent bg-red-600 text-white hover:bg-red-700',
        outline: 'text-slate-900 border-slate-200 hover:bg-slate-100',
      },
      size: {
        sm: 'px-2 py-0 text-xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
