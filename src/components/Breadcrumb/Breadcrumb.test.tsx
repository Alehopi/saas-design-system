import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from './Breadcrumb';

describe('Breadcrumb accessibility', () => {
  const renderBreadcrumb = () =>
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

  it('should have no axe violations', async () => {
    const { container } = renderBreadcrumb();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have navigation with aria-label', () => {
    const { getByRole } = renderBreadcrumb();
    expect(getByRole('navigation')).toHaveAttribute('aria-label', 'breadcrumb');
  });

  it('should mark current page with aria-current', () => {
    const { getByText } = renderBreadcrumb();
    expect(getByText('Current')).toHaveAttribute('aria-current', 'page');
  });

  it('should render separators with aria-hidden', () => {
    const { container } = renderBreadcrumb();
    const separators = container.querySelectorAll('[aria-hidden="true"]');
    expect(separators.length).toBeGreaterThanOrEqual(2);
  });
});
