import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Label } from './Label';

describe('Label accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Label htmlFor="email">Email</Label>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when required', async () => {
    const { container } = render(<Label htmlFor="email" required>Email</Label>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render label text', () => {
    const { getByText } = render(<Label>Username</Label>);
    expect(getByText('Username')).toBeInTheDocument();
  });

  it('should show required indicator', () => {
    const { container } = render(<Label required>Email</Label>);
    expect(container.querySelector('[aria-label="required"]')).toBeInTheDocument();
  });

  it('should have no axe violations for all sizes', async () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const size of sizes) {
      const { container } = render(<Label size={size}>Label</Label>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
