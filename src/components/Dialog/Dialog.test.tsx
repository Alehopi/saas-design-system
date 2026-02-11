import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './Dialog';

describe('Dialog accessibility', () => {
  it('should have no axe violations when open', async () => {
    const { container } = render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render dialog title', () => {
    const { getByText } = render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>My Dialog</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    expect(getByText('My Dialog')).toBeInTheDocument();
  });

  it('should render close button by default', () => {
    const { getByText } = render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Desc</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    expect(getByText('Close')).toBeInTheDocument();
  });

  it('should render trigger button', () => {
    const { getByText } = render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Desc</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    expect(getByText('Open')).toBeInTheDocument();
  });
});
