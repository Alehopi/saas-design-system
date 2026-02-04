import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

// ===================
// SELECT ROOT
// ===================

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

// ===================
// SELECT TRIGGER (Button que abre el dropdown)
// ===================

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, size = 'md', error = false, ...props }, ref) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-3 text-base',
    lg: 'h-12 px-4 text-lg',
  };

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between rounded-md border bg-white',
        'transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'placeholder:text-slate-400',
        '[&>span]:line-clamp-1',
        sizeClasses[size],
        error
          ? 'border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500'
          : 'border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500',
        'dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// ===================
// SELECT SCROLL BUTTONS
// ===================

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    aria-hidden="true"
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    aria-hidden="true"
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

// ===================
// SELECT CONTENT (Dropdown panel)
// ===================

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white text-slate-900 shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        'dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

// ===================
// SELECT LABEL (Heading dentro del dropdown)
// ===================

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900 dark:text-slate-100', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// ===================
// SELECT ITEM (Cada opción)
// ===================

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'focus:bg-slate-100 focus:text-slate-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'dark:focus:bg-slate-700 dark:focus:text-slate-100',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" aria-hidden="true">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// ===================
// SELECT SEPARATOR
// ===================

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-200 dark:bg-slate-700', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// ===================
// SELECT WRAPPER (Componente conveniente con label y helper text)
// ===================

export interface SelectWrapperProps {
  /** Label text */
  label?: string;
  /** Helper text shown below select */
  helperText?: string;
  /** Error message shown when error={true} */
  errorMessage?: string;
  /** Error state */
  error?: boolean;
  /** Mark as required */
  required?: boolean;
  /** Select size */
  size?: 'sm' | 'md' | 'lg';
  /** Children (must be Select components) */
  children: React.ReactNode;
  /** Container class name */
  className?: string;
}

const SelectWrapper: React.FC<SelectWrapperProps> = ({
  label,
  helperText,
  errorMessage,
  error = false,
  required = false,
  size = 'md',
  children,
  className,
}) => {
  const selectId = React.useId();
  const helperTextId = `${selectId}-helper`;
  const errorMessageId = `${selectId}-error`;

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {children}

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
};

// ===================
// EXPORTS
// ===================

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectWrapper,
};
