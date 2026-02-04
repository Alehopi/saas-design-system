import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Button } from './Button';

describe('Button accessibility', () => {
  it('should have no axe violations with default props', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when disabled', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when loading', async () => {
    const { container } = render(<Button isLoading>Loading</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should set aria-busy when loading', () => {
    const { getByRole } = render(<Button isLoading>Loading</Button>);
    expect(getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
    for (const variant of variants) {
      const { container } = render(<Button variant={variant}>Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
