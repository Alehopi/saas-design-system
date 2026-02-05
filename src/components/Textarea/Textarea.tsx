import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const textareaVariants = cva(
  'w-full rounded-md border bg-semantic-control-bg transition-colors placeholder:text-semantic-control-placeholder focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-semantic-bg-disabled disabled:text-semantic-fg-disabled',
  {
    variants: {
      variant: {
        default:
          'border-semantic-control-border text-semantic-control-fg focus:ring-semantic-focus focus:border-semantic-border-focus',
        error:
          'border-semantic-control-border-error text-semantic-control-fg focus:ring-semantic-control-border-error focus:border-semantic-control-border-error',
      },
      size: {
        sm: 'min-h-[80px] px-3 py-2 text-sm',
        md: 'min-h-[120px] px-3 py-2 text-base',
        lg: 'min-h-[160px] px-4 py-3 text-lg',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      resize: 'vertical',
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  /** Label text */
  label?: string;
  /** Helper text shown below textarea */
  helperText?: string;
  /** Error message shown when error={true} */
  errorMessage?: string;
  /** Mark as required */
  required?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Error state (shorthand for variant="error") */
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      resize = 'vertical',
      error = false,
      label,
      helperText,
      errorMessage,
      required,
      showCount = false,
      maxLength,
      value,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const helperTextId = `${textareaId}-helper`;
    const errorMessageId = `${textareaId}-error`;

    const currentLength = typeof value === 'string' ? value.length : 0;
    const hasError = error || variant === 'error';
    const resolvedVariant = hasError ? 'error' : 'default';

    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-sm font-medium text-semantic-fg-secondary"
            >
              {label}
              {required && <span className="ml-1 text-semantic-fg-error">*</span>}
            </label>
          )}
          {showCount && maxLength && (
            <span className="text-xs text-semantic-fg-secondary">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>

        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          className={cn(
            textareaVariants({ variant: resolvedVariant, size, resize }),
            className
          )}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={
            hasError && errorMessage
              ? errorMessageId
              : helperText
                ? helperTextId
                : undefined
          }
          aria-required={required}
          {...props}
        />

        {!hasError && helperText && (
          <p id={helperTextId} className="mt-1.5 text-sm text-semantic-fg-secondary">
            {helperText}
          </p>
        )}

        {hasError && errorMessage && (
          <p id={errorMessageId} className="mt-1.5 text-sm text-semantic-fg-error">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
export default Textarea;
