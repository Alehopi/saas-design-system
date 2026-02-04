import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:[&>svg]:text-slate-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-slate-950 border-slate-200 dark:bg-slate-950 dark:text-slate-50 dark:border-slate-800',
        info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-100 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
        success: 'border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-100 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
        warning: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900/50 dark:bg-yellow-950/30 dark:text-yellow-100 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400',
        error: 'border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-100 [&>svg]:text-red-600 dark:[&>svg]:text-red-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, showIcon = true, closable, onClose, children, ...props }, ref) => {
    const [visible, setVisible] = React.useState(true);

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    if (!visible) return null;

    const defaultIcons = {
      default: <Info className="h-4 w-4" />,
      info: <Info className="h-4 w-4" />,
      success: <CheckCircle2 className="h-4 w-4" />,
      warning: <AlertCircle className="h-4 w-4" />,
      error: <XCircle className="h-4 w-4" />,
    };

    const iconToRender = icon || defaultIcons[variant || 'default'];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {showIcon && iconToRender}
        <div className={cn(showIcon && 'pl-7', closable && 'pr-8')}>{children}</div>
        {closable && (
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:ring-offset-slate-950 dark:focus:ring-slate-300"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };
