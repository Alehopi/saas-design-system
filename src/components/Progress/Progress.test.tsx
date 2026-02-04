import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Progress } from './Progress';

describe('Progress accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Progress value={50} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have correct aria attributes', () => {
    const { getByRole } = render(<Progress value={75} label="Upload" />);
    const progressbar = getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-label', 'Upload');
  });

  it('should have aria-live region', () => {
    const { container } = render(<Progress value={50} />);
    const liveRegion = container.querySelector('[aria-live="polite"]');
    expect(liveRegion).toBeInTheDocument();
  });
});
