import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Skeleton, SkeletonText, SkeletonCard } from './Skeleton';

describe('Skeleton accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Skeleton className="h-12 w-48" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="status"', () => {
    const { getByRole } = render(<Skeleton className="h-12 w-48" />);
    expect(getByRole('status')).toBeInTheDocument();
  });

  it('should have aria-label', () => {
    const { getByRole } = render(<Skeleton className="h-12 w-48" />);
    expect(getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('should have screen reader text', () => {
    const { getByText } = render(<Skeleton className="h-12 w-48" />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['default', 'circular', 'text'] as const;
    for (const variant of variants) {
      const { container } = render(<Skeleton variant={variant} width={48} height={48} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});

describe('SkeletonText', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<SkeletonText />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correct number of lines', () => {
    const { container } = render(<SkeletonText lines={5} />);
    const lines = container.querySelectorAll('[aria-label="Loading"]');
    expect(lines).toHaveLength(5);
  });
});

describe('SkeletonCard', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<SkeletonCard />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="status"', () => {
    const { getAllByRole } = render(<SkeletonCard />);
    const statuses = getAllByRole('status');
    expect(statuses.length).toBeGreaterThanOrEqual(1);
  });
});
