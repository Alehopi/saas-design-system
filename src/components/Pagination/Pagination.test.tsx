import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Pagination } from './Pagination';

describe('Pagination accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have navigation role with aria-label', () => {
    const { getByRole } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );
    expect(getByRole('navigation')).toHaveAttribute('aria-label', 'Pagination');
  });

  it('should mark current page with aria-current', () => {
    const { getByLabelText } = render(
      <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />
    );
    expect(getByLabelText('Go to page 3')).toHaveAttribute('aria-current', 'page');
  });

  it('should disable previous button on first page', () => {
    const { getByLabelText } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );
    expect(getByLabelText('Go to previous page')).toBeDisabled();
  });

  it('should disable next button on last page', () => {
    const { getByLabelText } = render(
      <Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />
    );
    expect(getByLabelText('Go to next page')).toBeDisabled();
  });

  it('should call onPageChange when clicking a page', async () => {
    const onPageChange = vi.fn();
    const { getByLabelText } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    );
    await userEvent.click(getByLabelText('Go to page 3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('should render all pages for small total', () => {
    const { getByLabelText } = render(
      <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
    );
    expect(getByLabelText('Go to page 1')).toBeInTheDocument();
    expect(getByLabelText('Go to page 2')).toBeInTheDocument();
    expect(getByLabelText('Go to page 3')).toBeInTheDocument();
  });
});
