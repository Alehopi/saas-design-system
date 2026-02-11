import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from './Toast';

describe('Toast accessibility', () => {
  const renderToast = (variant?: 'default' | 'success' | 'error' | 'warning' | 'info') =>
    render(
      <ToastProvider>
        <Toast variant={variant} open>
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>Something happened</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );

  it('should have no axe violations', async () => {
    const { container } = renderToast();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render toast title', () => {
    const { getByText } = renderToast();
    expect(getByText('Notification')).toBeInTheDocument();
  });

  it('should render toast description', () => {
    const { getByText } = renderToast();
    expect(getByText('Something happened')).toBeInTheDocument();
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['default', 'success', 'error', 'warning', 'info'] as const;
    for (const variant of variants) {
      const { container } = renderToast(variant);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
