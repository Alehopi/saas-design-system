import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Divider } from './Divider';

describe('Divider accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Divider />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations with label', async () => {
    const { container } = render(<Divider label="Or" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render separator', () => {
    const { getByRole } = render(<Divider decorative={false} />);
    expect(getByRole('separator')).toBeInTheDocument();
  });

  it('should render label text', () => {
    const { getByText } = render(<Divider label="Or continue with" />);
    expect(getByText('Or continue with')).toBeInTheDocument();
  });

  it('should support vertical orientation', () => {
    const { container } = render(<Divider orientation="vertical" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
