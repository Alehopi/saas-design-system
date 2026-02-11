import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Tabs accessibility', () => {
  const renderTabs = () =>
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

  it('should have no axe violations', async () => {
    const { container } = renderTabs();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render tablist', () => {
    const { getByRole } = renderTabs();
    expect(getByRole('tablist')).toBeInTheDocument();
  });

  it('should render tab triggers', () => {
    const { getAllByRole } = renderTabs();
    expect(getAllByRole('tab')).toHaveLength(2);
  });

  it('should render active tab content', () => {
    const { getByText } = renderTabs();
    expect(getByText('Content 1')).toBeInTheDocument();
  });

  it('should have no axe violations with disabled tab', async () => {
    const { container } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
