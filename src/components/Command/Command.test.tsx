import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from './Command';

// cmdk uses ResizeObserver and scrollIntoView internally
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  Element.prototype.scrollIntoView = vi.fn();
});

describe('Command accessibility', () => {
  const renderCommand = () =>
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>Copy</CommandItem>
            <CommandItem>Paste</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

  it('should have no axe violations', async () => {
    const { container } = renderCommand();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render search input', () => {
    const { getByPlaceholderText } = renderCommand();
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should render command items', () => {
    const { getByText } = renderCommand();
    expect(getByText('Copy')).toBeInTheDocument();
    expect(getByText('Paste')).toBeInTheDocument();
  });

  it('should render group heading', () => {
    const { getByText } = renderCommand();
    expect(getByText('Actions')).toBeInTheDocument();
  });
});
