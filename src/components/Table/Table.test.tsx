import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from './Table';

describe('Table accessibility', () => {
  const renderTable = () =>
    render(
      <Table>
        <TableCaption>User list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>alice@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell>bob@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

  it('should have no axe violations', async () => {
    const { container } = renderTable();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render table element', () => {
    const { getByRole } = renderTable();
    expect(getByRole('table')).toBeInTheDocument();
  });

  it('should render column headers', () => {
    const { getAllByRole } = renderTable();
    const headers = getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
  });

  it('should render table caption', () => {
    const { getByText } = renderTable();
    expect(getByText('User list')).toBeInTheDocument();
  });

  it('should render data cells', () => {
    const { getByText } = renderTable();
    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('bob@example.com')).toBeInTheDocument();
  });
});
