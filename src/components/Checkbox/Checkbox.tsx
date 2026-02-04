import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

// ===================
// CHECKBOX PRIMITIVE
// ===================

const CheckboxRoot = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    error?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }
>(({ className, error = false, size = 'md', ...props }, ref) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer shrink-0 rounded border-2 ring-offset-white transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-blue-600 data-[state=checked]:text-white data-[state=checked]:border-blue-600',
        'data-[state=indeterminate]:bg-blue-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-blue-600',
        error
          ? 'border-red-500 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600'
          : 'border-slate-300 hover:border-slate-400',
        'dark:border-slate-600 dark:ring-offset-slate-800',
        'dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {props.checked === 'indeterminate' ? (
          <Minus size={iconSizes[size]} strokeWidth={3} />
        ) : (
          <Check size={iconSizes[size]} strokeWidth={3} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
CheckboxRoot.displayName = CheckboxPrimitive.Root.displayName;

// ===================
// CHECKBOX WITH LABEL (Componente completo)
// ===================

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'type'> {
  /** Label text */
  label?: string;
  /** Helper text shown below checkbox */
  helperText?: string;
  /** Error message shown when error={true} */
  errorMessage?: string;
  /** Error state */
  error?: boolean;
  /** Checkbox size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes for the container */
  containerClassName?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      error = false,
      size = 'md',
      id,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || React.useId();
    const helperTextId = `${checkboxId}-helper`;
    const errorMessageId = `${checkboxId}-error`;

    return (
      <div className={cn('flex flex-col', containerClassName)}>
        <div className="flex items-start gap-2">
          <CheckboxRoot
            ref={ref}
            id={checkboxId}
            error={error}
            size={size}
            className={className}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error && errorMessage
                ? errorMessageId
                : helperText
                  ? helperTextId
                  : undefined
            }
            {...props}
          />

          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                'cursor-pointer select-none font-medium leading-none',
                'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base',
                error ? 'text-red-900 dark:text-red-400' : 'text-slate-900 dark:text-slate-100'
              )}
            >
              {label}
            </label>
          )}
        </div>

        {!error && helperText && (
          <p
            id={helperTextId}
            className={cn(
              'text-sm text-slate-600 dark:text-slate-300',
              size === 'sm' ? 'ml-6' : size === 'lg' ? 'ml-8' : 'ml-7',
              'mt-1.5'
            )}
          >
            {helperText}
          </p>
        )}

        {error && errorMessage && (
          <p
            id={errorMessageId}
            className={cn(
              'text-sm text-red-600 dark:text-red-400',
              size === 'sm' ? 'ml-6' : size === 'lg' ? 'ml-8' : 'ml-7',
              'mt-1.5'
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

// ===================
// EXPORTS
// ===================

export { Checkbox, CheckboxRoot };
