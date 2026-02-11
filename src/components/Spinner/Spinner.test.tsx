import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Spinner, LoadingOverlay } from './Spinner';

describe('Spinner accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Spinner />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="status"', () => {
    const { getByRole } = render(<Spinner />);
    expect(getByRole('status')).toBeInTheDocument();
  });

  it('should have aria-label', () => {
    const { getByRole } = render(<Spinner />);
    expect(getByRole('status')).toHaveAttribute('aria-label');
  });

  it('should use custom label', () => {
    const { getByRole } = render(<Spinner label="Uploading..." />);
    expect(getByRole('status')).toHaveAttribute('aria-label', 'Uploading...');
  });

  it('should have no axe violations for all sizes', async () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    for (const size of sizes) {
      const { container } = render(<Spinner size={size} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });

  it('should render LoadingOverlay when shown', () => {
    const { getByRole } = render(<LoadingOverlay show />);
    expect(getByRole('status')).toBeInTheDocument();
  });
});
