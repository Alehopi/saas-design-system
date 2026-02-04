import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Guidelines/Design Principles',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisualPrinciples: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Visual Design Principles</h1>
      <p className="text-lg text-slate-600 mb-8">
        The visual language that defines our design system's look and feel.
      </p>

      <div className="space-y-8">
        <div className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Clean & Minimal</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every element serves a purpose. We prioritize content over decoration, using whitespace
            strategically to create breathing room and guide attention to what matters.
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Key Characteristics:</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Generous whitespace for visual clarity</li>
              <li>• Subtle borders and shadows for depth</li>
              <li>• Limited color palette for consistency</li>
              <li>• No gradients or heavy textures</li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-green-600 pl-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Data-Focused</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Designed for interfaces that display and manipulate data. Clear typography, organized
            layouts, and consistent spacing help users process information quickly.
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Key Characteristics:</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Tabular data layouts with clear hierarchy</li>
              <li>• Monospace fonts for numeric data</li>
              <li>• Color used sparingly for semantic meaning</li>
              <li>• Dense information without clutter</li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-purple-600 pl-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Professional & Trustworthy</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Enterprise tools need to convey reliability and competence. We use a neutral color
            palette, consistent spacing, and professional typography to build trust.
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Key Characteristics:</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Neutral grays as primary palette</li>
              <li>• Blue for primary actions (universal trust color)</li>
              <li>• Consistent, predictable interactions</li>
              <li>• No playful or casual elements</li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-orange-600 pl-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Accessible by Default</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Accessibility is not optional. Every component meets WCAG 2.1 AA standards with
            proper color contrast, keyboard navigation, and screen reader support.
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Key Characteristics:</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• 4.5:1 contrast ratio for text</li>
              <li>• Visible focus indicators on all interactive elements</li>
              <li>• Proper ARIA labels and semantic HTML</li>
              <li>• Keyboard-only navigation support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DesignPhilosophy: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Design Philosophy for B2B SaaS</h1>
      <p className="text-lg text-slate-600 mb-8">
        Why we make the decisions we do and how to apply these principles to your work.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Form Follows Function</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            In enterprise software, users are trying to accomplish tasks, not admire designs.
            Every visual decision should support usability and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <span className="text-lg">✓</span> Do
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Choose clarity over creativity</li>
                <li>• Use familiar patterns</li>
                <li>• Prioritize scannability</li>
                <li>• Make interactive elements obvious</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <span className="text-lg">✗</span> Don't
              </h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Add decoration for decoration's sake</li>
                <li>• Invent new interaction patterns</li>
                <li>• Hide functionality behind clever UI</li>
                <li>• Use color/icons without text labels</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Consistency Over Perfection</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A consistently "good enough" experience is better than an inconsistent mix of
            excellent and poor experiences. Users value predictability.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">What This Means in Practice:</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Use existing components even if not perfect for your use case</li>
              <li>• Follow established patterns for similar interactions</li>
              <li>• Maintain consistent spacing, sizing, and styling</li>
              <li>• If you must diverge, document why and update the system</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Progressive Disclosure</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Show users what they need, when they need it. Don't overwhelm with every option
            upfront. Reveal complexity gradually as users dive deeper.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-3">Examples:</h3>
            <ul className="text-sm text-purple-800 space-y-2">
              <li>• Hide advanced filters behind a dropdown</li>
              <li>• Show validation errors only after interaction</li>
              <li>• Provide tooltips for additional context</li>
              <li>• Use modals/panels for secondary workflows</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Feedback & Confirmation</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Users should always know what's happening. Provide immediate feedback for actions,
            clear loading states, and confirmation for destructive operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">Immediate</h3>
              <p className="text-xs text-slate-600">
                Button states, hover effects, focus rings respond instantly to user input
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">In Progress</h3>
              <p className="text-xs text-slate-600">
                Loading spinners, progress bars, skeleton screens show work is happening
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">Complete</h3>
              <p className="text-xs text-slate-600">
                Success toasts, updated data, new state confirms the action succeeded
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};

export const WhenToUse: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">When to Use This Design System</h1>
      <p className="text-lg text-slate-600 mb-8">
        Understanding where this system excels and where it might not be the best fit.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Ideal Use Cases</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">B2B SaaS Applications</h3>
              <p className="text-sm text-green-800">
                CRM systems, project management tools, analytics platforms, and other professional software
                where users perform tasks repeatedly and value efficiency.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">Internal Tools & Dashboards</h3>
              <p className="text-sm text-green-800">
                Admin panels, business intelligence dashboards, operations tools where the focus
                is on data visualization and task completion.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">Data-Heavy Interfaces</h3>
              <p className="text-sm text-green-800">
                Applications with complex tables, forms, filters, and data manipulation where
                clarity and organization are critical.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-900">Not Ideal For</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Consumer Apps</h3>
              <p className="text-sm text-red-800">
                Social networks, entertainment apps, or consumer-focused products that benefit
                from playful, emotional, or brand-heavy designs.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Marketing Sites</h3>
              <p className="text-sm text-red-800">
                Landing pages, marketing websites, or promotional content that needs to delight
                and persuade rather than facilitate tasks.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Creative Tools</h3>
              <p className="text-sm text-red-800">
                Design software, content creation tools, or artistic applications where the UI
                should inspire creativity and expression.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-900">The Bottom Line</h2>
          <p className="text-sm text-blue-800 leading-relaxed">
            This design system is optimized for professional users completing tasks efficiently.
            If your users are working (not browsing), dealing with data (not content), and value
            speed (not delight), this system will serve them well.
          </p>
        </section>
      </div>
    </div>
  ),
};
