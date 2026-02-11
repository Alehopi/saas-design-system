import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { RadioGroup, RadioGroupItem } from './Radio';

describe('Radio accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <RadioGroup aria-label="Options">
        <div>
          <RadioGroupItem value="a" id="a" />
          <label htmlFor="a">Option A</label>
        </div>
        <div>
          <RadioGroupItem value="b" id="b" />
          <label htmlFor="b">Option B</label>
        </div>
      </RadioGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render radio group', () => {
    const { getByRole } = render(
      <RadioGroup aria-label="Options">
        <div>
          <RadioGroupItem value="a" id="a" />
          <label htmlFor="a">Option A</label>
        </div>
      </RadioGroup>
    );
    expect(getByRole('radiogroup')).toBeInTheDocument();
  });

  it('should render radio buttons', () => {
    const { getAllByRole } = render(
      <RadioGroup aria-label="Options">
        <div>
          <RadioGroupItem value="a" id="a" />
          <label htmlFor="a">Option A</label>
        </div>
        <div>
          <RadioGroupItem value="b" id="b" />
          <label htmlFor="b">Option B</label>
        </div>
      </RadioGroup>
    );
    expect(getAllByRole('radio')).toHaveLength(2);
  });
});
