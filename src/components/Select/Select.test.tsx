import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './Select';

describe('Select accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <Select>
        <SelectTrigger aria-label="Select option">
          <SelectValue placeholder="Choose..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render trigger with combobox role', () => {
    const { getByRole } = render(
      <Select>
        <SelectTrigger aria-label="Select option">
          <SelectValue placeholder="Choose..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(getByRole('combobox')).toBeInTheDocument();
  });

  it('should render placeholder text', () => {
    const { getByText } = render(
      <Select>
        <SelectTrigger aria-label="Select option">
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(getByText('Pick one')).toBeInTheDocument();
  });
});
