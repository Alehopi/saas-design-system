import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// This is a design system library - no App component needed
// Components are viewed and tested through Storybook

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-semantic-bg-primary flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-semantic-fg-primary mb-4">
          APEX Design System
        </h1>
        <p className="text-lg text-semantic-fg-secondary mb-8">
          Run <code className="px-2 py-1 bg-semantic-bg-tertiary rounded text-sm font-mono">npm run storybook</code> to view components
        </p>
      </div>
    </div>
  </StrictMode>,
);
