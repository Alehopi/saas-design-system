import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './Tooltip';

describe('Tooltip accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render trigger', () => {
    const { getByText } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Info</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(getByText('Hover me')).toBeInTheDocument();
  });
});
