import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<ErrorMessage>This field is required</ErrorMessage>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="alert"', () => {
    const { getByRole } = render(<ErrorMessage>Error</ErrorMessage>);
    expect(getByRole('alert')).toBeInTheDocument();
  });

  it('should have aria-live="assertive"', () => {
    const { getByRole } = render(<ErrorMessage>Error</ErrorMessage>);
    expect(getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
  });

  it('should hide icon from screen readers', () => {
    const { container } = render(<ErrorMessage>Error</ErrorMessage>);
    const icon = container.querySelector('[aria-hidden="true"]');
    expect(icon).toBeInTheDocument();
  });
});
