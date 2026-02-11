import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

describe('Accordion accessibility', () => {
  const renderAccordion = () =>
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  it('should have no axe violations', async () => {
    const { container } = renderAccordion();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render trigger buttons', () => {
    const { getAllByRole } = renderAccordion();
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should have heading elements wrapping triggers', () => {
    const { getAllByRole } = renderAccordion();
    const headings = getAllByRole('heading');
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });
});
