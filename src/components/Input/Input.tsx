import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Visual style variant of the input
   */
  variant?: 'default' | 'error';

  /**
   * Size of the input field
   */
  size?: 'sm' | 'md' | 'lg';

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
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    // Determine if we should show error state
    const hasError = variant === 'error' || !!errorMessage;

    // Base styles for the input container
    const containerStyles = 'flex flex-col gap-1.5';

    // Label styles
    const labelStyles = 'text-sm font-medium text-gray-700';

    // Input wrapper styles (for icon support)
    const wrapperStyles = 'relative flex items-center';

    // Base input styles
    const baseInputStyles = `
      w-full
      rounded-md
      border
      bg-white
      text-gray-900
      placeholder:text-gray-400
      transition-colors
      focus:outline-none
      focus:ring-2
      focus:ring-offset-0
      disabled:cursor-not-allowed
      disabled:bg-gray-50
      disabled:text-gray-600
    `.trim().replace(/\s+/g, ' ');

    // Variant styles
    const variantStyles = {
      default: `
        border-gray-300
        hover:border-gray-400
        focus:border-blue-500
        focus:ring-blue-500/20
      `.trim().replace(/\s+/g, ' '),
      error: `
        border-red-500
        hover:border-red-600
        focus:border-red-500
        focus:ring-red-500/20
      `.trim().replace(/\s+/g, ' '),
    };

    // Size styles
    const sizeStyles = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-3 text-sm',
      lg: 'h-12 px-4 text-base',
    };

    // Adjust padding for icons
    const iconPaddingStyles = {
      left: {
        sm: 'pl-9',
        md: 'pl-10',
        lg: 'pl-12',
      },
      right: {
        sm: 'pr-9',
        md: 'pr-10',
        lg: 'pr-12',
      },
    };

    // Icon container styles
    const iconContainerStyles = {
      base: 'absolute flex items-center justify-center text-gray-600',
      left: {
        sm: 'left-2.5 w-4 h-4',
        md: 'left-3 w-4 h-4',
        lg: 'left-3.5 w-5 h-5',
      },
      right: {
        sm: 'right-2.5 w-4 h-4',
        md: 'right-3 w-4 h-4',
        lg: 'right-3.5 w-5 h-5',
      },
    };

    // Combine all input classes
    const inputClassName = [
      baseInputStyles,
      variantStyles[hasError ? 'error' : 'default'],
      sizeStyles[size],
      leftIcon && iconPaddingStyles.left[size],
      rightIcon && iconPaddingStyles.right[size],
      className,
    ].filter(Boolean).join(' ');

    // Helper/Error text styles
    const messageStyles = hasError
      ? 'text-sm text-red-600'
      : 'text-sm text-gray-600';

    return (
      <div className={containerStyles}>
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input wrapper with icons */}
        <div className={wrapperStyles}>
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
            className={inputClassName}
            disabled={disabled}
            aria-invalid={hasError}
            aria-required={required}
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
        {(errorMessage || helperText) && (
          <p className={messageStyles}>
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export default Input;
