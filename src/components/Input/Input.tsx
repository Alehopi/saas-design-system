import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const inputVariants = cva(
  'w-full rounded-md border bg-semantic-control-bg text-semantic-control-fg placeholder:text-semantic-control-placeholder transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled',
  {
    variants: {
      variant: {
        default:
          'border-semantic-control-border hover:border-semantic-control-border-hover focus:border-semantic-border-focus focus:ring-semantic-focus',
        error:
          'border-semantic-control-border-error hover:border-semantic-control-border-error focus:border-semantic-control-border-error focus:ring-semantic-control-border-error',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Label text displayed above the input
   */
  label?: string;

  /**
   * Helper text displayed below the input
   */
  helperText?: string;

  /**
   * Error message displayed below the input
   */
  errorMessage?: string;

  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode;

  /**
   * Whether the field is required
   */
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      required,
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const helperTextId = `${inputId}-helper`;
    const errorMessageId = `${inputId}-error`;
    // Determine if we should show error state
    const hasError = variant === 'error' || !!errorMessage;
    const resolvedVariant = hasError ? 'error' : 'default';

    // Adjust padding for icons (doesn't fit CVA since it depends on icon presence)
    const iconPaddingStyles = {
      left: { sm: 'pl-9', md: 'pl-10', lg: 'pl-12' },
      right: { sm: 'pr-9', md: 'pr-10', lg: 'pr-12' },
    };

    const iconContainerStyles = {
      base: 'absolute flex items-center justify-center text-semantic-control-icon',
      left: { sm: 'left-2.5 w-4 h-4', md: 'left-3 w-4 h-4', lg: 'left-3.5 w-5 h-5' },
      right: { sm: 'right-2.5 w-4 h-4', md: 'right-3 w-4 h-4', lg: 'right-3.5 w-5 h-5' },
    };

    return (
      <div className="flex flex-col gap-1.5">
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-semantic-fg-secondary">
            {label}
            {required && <span className="text-semantic-fg-error ml-1">*</span>}
          </label>
        )}

        {/* Input wrapper with icons */}
        <div className="relative flex items-center">
          {/* Left icon */}
          {leftIcon && (
            <div
              className={`${iconContainerStyles.base} ${iconContainerStyles.left[size]}`}
              aria-hidden="true"
            >
              {leftIcon}
            </div>
          )}

          {/* Input field */}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ variant: resolvedVariant, size }),
              leftIcon && iconPaddingStyles.left[size],
              rightIcon && iconPaddingStyles.right[size],
              className
            )}
            disabled={disabled}
            aria-invalid={hasError}
            aria-required={required}
            aria-describedby={
              hasError && errorMessage
                ? errorMessageId
                : helperText
                  ? helperTextId
                  : undefined
            }
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div
              className={`${iconContainerStyles.base} ${iconContainerStyles.right[size]}`}
              aria-hidden="true"
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper text or error message */}
        {!hasError && helperText && (
          <p id={helperTextId} className="text-sm text-semantic-fg-secondary">
            {helperText}
          </p>
        )}
        {hasError && errorMessage && (
          <p id={errorMessageId} className="text-sm text-semantic-fg-error">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
export default Input;
