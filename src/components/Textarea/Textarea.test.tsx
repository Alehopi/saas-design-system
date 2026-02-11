import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Textarea } from './Textarea';

describe('Textarea accessibility', () => {
  it('should have no axe violations with label', async () => {
    const { container } = render(<Textarea label="Message" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations with error', async () => {
    const { container } = render(
      <Textarea label="Message" variant="error" errorMessage="Required field" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when disabled', async () => {
    const { container } = render(<Textarea label="Message" disabled />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should associate label with textarea', () => {
    const { getByLabelText } = render(<Textarea label="Message" />);
    expect(getByLabelText('Message')).toBeInTheDocument();
  });

  it('should mark as aria-invalid on error', () => {
    const { getByRole } = render(<Textarea label="Message" variant="error" />);
    expect(getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('should show character count when maxLength is set', () => {
    const { getByText } = render(<Textarea label="Bio" showCount maxLength={100} />);
    expect(getByText('0/100')).toBeInTheDocument();
  });
});
