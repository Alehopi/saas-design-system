import * as React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../hooks/useTheme';

export interface ThemeTogglerProps {
  /** Show system option alongside light/dark */
  showSystem?: boolean;
  /** Size of the toggler */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

const sizeMap = {
  sm: { button: 'h-8 w-8', icon: 'h-4 w-4' },
  md: { button: 'h-9 w-9', icon: 'h-5 w-5' },
  lg: { button: 'h-10 w-10', icon: 'h-6 w-6' },
};

export function ThemeToggler({ showSystem = false, size = 'md', className }: ThemeTogglerProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const { button: buttonSize, icon: iconSize } = sizeMap[size];

  if (showSystem) {
    return (
      <div role="radiogroup" aria-label="Theme selector" className={cn('inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800', className)}>
        <button
          type="button"
          role="radio"
          aria-checked={theme === 'light'}
          onClick={() => setTheme('light')}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-1.5 transition-colors',
            theme === 'light'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          )}
          aria-label="Light mode"
        >
          <Sun className={iconSize} aria-hidden="true" />
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={theme === 'dark'}
          onClick={() => setTheme('dark')}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-1.5 transition-colors',
            theme === 'dark'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          )}
          aria-label="Dark mode"
        >
          <Moon className={iconSize} aria-hidden="true" />
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={theme === 'system'}
          onClick={() => setTheme('system')}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-1.5 transition-colors',
            theme === 'system'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100'
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
          )}
          aria-label="System theme"
        >
          <Monitor className={iconSize} aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        buttonSize,
        'inline-flex items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900',
        'dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100',
        className
      )}
      aria-label={resolvedTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {resolvedTheme === 'light' ? (
        <Moon className={iconSize} aria-hidden="true" />
      ) : (
        <Sun className={iconSize} aria-hidden="true" />
      )}
    </button>
  );
}
