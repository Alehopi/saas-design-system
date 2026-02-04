import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Additional CSS classes */
  className?: string;
  /** Textarea size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
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
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'both';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size = 'md',
      error = false,
      label,
      helperText,
      errorMessage,
      required,
      showCount = false,
      resize = 'vertical',
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

    const sizeClasses = {
      sm: 'min-h-[80px] px-3 py-2 text-sm',
      md: 'min-h-[120px] px-3 py-2 text-base',
      lg: 'min-h-[160px] px-4 py-3 text-lg',
    };

    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      both: 'resize',
    };

    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {label}
              {required && <span className="ml-1 text-red-500">*</span>}
            </label>
          )}
          {showCount && maxLength && (
            <span className="text-xs text-slate-600 dark:text-slate-300">
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
            'w-full rounded-md border bg-white transition-colors',
            'placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500',
            sizeClasses[size],
            resizeClasses[resize],
            error
              ? 'border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500'
              : 'border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500',
            'dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error && errorMessage
              ? errorMessageId
              : helperText
                ? helperTextId
                : undefined
          }
          aria-required={required}
          {...props}
        />

        {!error && helperText && (
          <p id={helperTextId} className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
            {helperText}
          </p>
        )}

        {error && errorMessage && (
          <p id={errorMessageId} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;
