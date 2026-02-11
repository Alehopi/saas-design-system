import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';

// Mock useTheme hook
vi.mock('../../hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'light',
    resolvedTheme: 'light',
    setTheme: vi.fn(),
    toggleTheme: vi.fn(),
  }),
}));

import { ThemeToggler } from './ThemeToggler';

describe('ThemeToggler accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<ThemeToggler />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render single toggle button by default', () => {
    const { getByRole } = render(<ThemeToggler />);
    expect(getByRole('button')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('should render radiogroup with showSystem', () => {
    const { getByRole } = render(<ThemeToggler showSystem />);
    expect(getByRole('radiogroup')).toBeInTheDocument();
  });

  it('should render 3 radio buttons with showSystem', () => {
    const { getAllByRole } = render(<ThemeToggler showSystem />);
    expect(getAllByRole('radio')).toHaveLength(3);
  });

  it('should have aria-labels on radio buttons', () => {
    const { getAllByRole } = render(<ThemeToggler showSystem />);
    const radios = getAllByRole('radio');
    expect(radios[0]).toHaveAttribute('aria-label', 'Light mode');
    expect(radios[1]).toHaveAttribute('aria-label', 'Dark mode');
    expect(radios[2]).toHaveAttribute('aria-label', 'System theme');
  });
});
