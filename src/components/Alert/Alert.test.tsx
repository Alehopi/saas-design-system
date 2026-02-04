import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Alert, AlertTitle, AlertDescription } from './Alert';

describe('Alert accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <Alert>
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="alert"', () => {
    const { getByRole } = render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
      </Alert>
    );
    expect(getByRole('alert')).toBeInTheDocument();
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['default', 'info', 'success', 'warning', 'error'] as const;
    for (const variant of variants) {
      const { container } = render(
        <Alert variant={variant}>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });

  it('should have accessible close button', () => {
    const { getByText } = render(
      <Alert closable>
        <AlertTitle>Closable</AlertTitle>
      </Alert>
    );
    expect(getByText('Close')).toBeInTheDocument();
  });
});
