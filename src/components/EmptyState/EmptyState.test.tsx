import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { EmptyState } from './EmptyState';

describe('EmptyState accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <EmptyState title="No results" description="Try adjusting your search" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="region" with aria-label', () => {
    const { getByRole } = render(<EmptyState title="No data" />);
    const region = getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'No data');
  });

  it('should hide decorative icon from screen readers', () => {
    const { container } = render(
      <EmptyState title="Empty" icon={<svg data-testid="icon" />} />
    );
    const iconWrapper = container.querySelector('[aria-hidden="true"]');
    expect(iconWrapper).toBeInTheDocument();
  });
});
