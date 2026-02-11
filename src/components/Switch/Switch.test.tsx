import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Switch } from './Switch';

describe('Switch accessibility', () => {
  it('should have no axe violations with label', async () => {
    const { container } = render(<Switch label="Enable notifications" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations when disabled', async () => {
    const { container } = render(<Switch label="Notifications" disabled />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render switch role', () => {
    const { getByRole } = render(<Switch label="Dark mode" />);
    expect(getByRole('switch')).toBeInTheDocument();
  });

  it('should render label text', () => {
    const { getByText } = render(<Switch label="Dark mode" />);
    expect(getByText('Dark mode')).toBeInTheDocument();
  });

  it('should render description', () => {
    const { getByText } = render(
      <Switch label="Notifications" description="Get email alerts" />
    );
    expect(getByText('Get email alerts')).toBeInTheDocument();
  });
});
