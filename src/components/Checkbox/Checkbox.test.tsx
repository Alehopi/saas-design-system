import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Checkbox } from './Checkbox';

describe('Checkbox accessibility', () => {
  it('should have no axe violations with label', async () => {
    const { container } = render(<Checkbox label="Accept terms" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when disabled', async () => {
    const { container } = render(<Checkbox label="Accept terms" disabled />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations with error', async () => {
    const { container } = render(
      <Checkbox label="Accept terms" error errorMessage="Required" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render label text', () => {
    const { getByText } = render(<Checkbox label="Accept terms" />);
    expect(getByText('Accept terms')).toBeInTheDocument();
  });

  it('should render error message', () => {
    const { getByText } = render(
      <Checkbox label="Accept" error errorMessage="This is required" />
    );
    expect(getByText('This is required')).toBeInTheDocument();
  });
});
