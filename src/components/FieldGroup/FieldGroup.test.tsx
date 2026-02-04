import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { FieldGroup } from './FieldGroup';

describe('FieldGroup accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <FieldGroup label={<label htmlFor="name-input">Name</label>}>
        <input type="text" id="name-input" />
      </FieldGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="group"', () => {
    const { getByRole } = render(
      <FieldGroup label={<span>Name</span>}>
        <input type="text" />
      </FieldGroup>
    );
    expect(getByRole('group')).toBeInTheDocument();
  });

  it('should have aria-labelledby when label is provided', () => {
    const { getByRole } = render(
      <FieldGroup label={<span>Name</span>}>
        <input type="text" />
      </FieldGroup>
    );
    const group = getByRole('group');
    expect(group).toHaveAttribute('aria-labelledby');
  });
});
