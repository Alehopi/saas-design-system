import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

describe('Card accessibility', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no axe violations for all variants', async () => {
    const variants = ['default', 'elevated', 'outlined'] as const;
    for (const variant of variants) {
      const { container } = render(
        <Card variant={variant}>
          <CardContent>Content</CardContent>
        </Card>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });

  it('should render title as heading', () => {
    const { getByRole } = render(
      <Card>
        <CardHeader>
          <CardTitle>My Title</CardTitle>
        </CardHeader>
      </Card>
    );
    expect(getByRole('heading')).toHaveTextContent('My Title');
  });

  it('should render all sections', () => {
    const { getByText } = render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Desc</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Foot</CardFooter>
      </Card>
    );
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Desc')).toBeInTheDocument();
    expect(getByText('Body')).toBeInTheDocument();
    expect(getByText('Foot')).toBeInTheDocument();
  });
});
