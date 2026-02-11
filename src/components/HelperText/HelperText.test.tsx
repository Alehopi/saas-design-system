import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { HelperText } from './HelperText';

describe('HelperText accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<HelperText>This is a hint</HelperText>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['default', 'muted'] as const;
    for (const variant of variants) {
      const { container } = render(<HelperText variant={variant}>Hint</HelperText>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });

  it('should render text content', () => {
    const { getByText } = render(<HelperText>Enter your email</HelperText>);
    expect(getByText('Enter your email')).toBeInTheDocument();
  });
});
