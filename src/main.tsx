import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// This is a design system library - no App component needed
// Components are viewed and tested through Storybook

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-background-primary flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground-primary mb-4">
          SaaS Design System
        </h1>
        <p className="text-lg text-foreground-secondary mb-8">
          Run <code className="px-2 py-1 bg-neutral-100 rounded text-sm font-mono">npm run storybook</code> to view components
        </p>
      </div>
    </div>
  </StrictMode>,
);
