import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Input } from './Input';

describe('Input accessibility', () => {
  it('should have no axe violations with label', async () => {
    const { container } = render(<Input label="Email" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations with error state', async () => {
    const { container } = render(
      <Input label="Email" variant="error" errorMessage="Invalid email" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when disabled', async () => {
    const { container } = render(<Input label="Email" disabled />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when required', async () => {
    const { container } = render(<Input label="Email" required />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should associate label with input', () => {
    const { getByLabelText } = render(<Input label="Email" />);
    expect(getByLabelText('Email')).toBeInTheDocument();
  });

  it('should mark input as aria-invalid on error', () => {
    const { getByRole } = render(<Input label="Email" variant="error" />);
    expect(getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
});
