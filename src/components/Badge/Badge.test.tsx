import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Badge } from './Badge';

describe('Badge accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Badge>Active</Badge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render as a span element', () => {
    const { container } = render(<Badge>Status</Badge>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['default', 'secondary', 'success', 'warning', 'error', 'outline'] as const;
    for (const variant of variants) {
      const { container } = render(<Badge variant={variant}>Badge</Badge>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
