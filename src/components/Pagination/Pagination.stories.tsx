import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page (1-indexed)',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Number of sibling pages to show on each side',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination currentPage={page} totalPages={50} onPageChange={setPage} />;
  },
};

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />;
  },
};

export const Small: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="sm" />;
  },
};

export const Large: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="lg" />;
  },
};

export const AllSizes: Story = {
  render: () => {
    const [page1, setPage1] = useState(3);
    const [page2, setPage2] = useState(3);
    const [page3, setPage3] = useState(3);
    return (
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm text-slate-500">Small</p>
          <Pagination currentPage={page1} totalPages={10} onPageChange={setPage1} size="sm" />
        </div>
        <div>
          <p className="mb-2 text-sm text-slate-500">Medium (default)</p>
          <Pagination currentPage={page2} totalPages={10} onPageChange={setPage2} size="md" />
        </div>
        <div>
          <p className="mb-2 text-sm text-slate-500">Large</p>
          <Pagination currentPage={page3} totalPages={10} onPageChange={setPage3} size="lg" />
        </div>
      </div>
    );
  },
};

export const WithTable: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="w-[500px] space-y-4">
        <div className="rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="p-3 text-left font-medium">Name</th>
                <th className="p-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.min(itemsPerPage, totalItems - (page - 1) * itemsPerPage) }).map((_, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800/50">
                  <td className="p-3">Item {(page - 1) * itemsPerPage + i + 1}</td>
                  <td className="p-3 text-slate-500">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing {(page - 1) * itemsPerPage + 1}–{Math.min(page * itemsPerPage, totalItems)} of {totalItems}
          </p>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} size="sm" />
        </div>
      </div>
    );
  },
};
