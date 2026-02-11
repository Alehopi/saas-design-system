import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Avatar, AvatarFallback, AvatarWithLabel } from './Avatar';

describe('Avatar accessibility', () => {
  it('should have no axe violations with fallback', async () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render fallback text', () => {
    const { getByText } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    expect(getByText('AB')).toBeInTheDocument();
  });

  it('should have no axe violations for all sizes', async () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    for (const size of sizes) {
      const { container } = render(
        <Avatar size={size}>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });

  it('should render status indicator with AvatarWithLabel', () => {
    const { getByRole } = render(
      <AvatarWithLabel fallback="AB" label="User" status="online" />
    );
    expect(getByRole('status')).toBeInTheDocument();
  });
});
