import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Guidelines/Introduction',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">APEX Design System</h1>
      <p className="text-xl text-slate-600 mb-8">
        A comprehensive design system for building professional, accessible, and efficient enterprise SaaS applications.
      </p>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">What is this Design System?</h2>
        <p className="text-slate-700 leading-relaxed">
          This design system provides a complete set of reusable components, patterns, and guidelines
          specifically crafted for B2B SaaS applications. It helps teams build consistent, professional
          interfaces that prioritize usability, accessibility, and developer experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Enterprise-Grade</h3>
            <p className="text-sm text-blue-800">
              Built for complex business workflows and data-heavy interfaces that professionals rely on daily.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Professional</h3>
            <p className="text-sm text-green-800">
              Clean, minimal aesthetics that convey trust and competence without unnecessary decoration.
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Accessible</h3>
            <p className="text-sm text-purple-800">
              WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and inclusive design.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Core Principles</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Consistency</h3>
            <p className="text-slate-700">
              Components behave predictably across the entire application. Users learn once and
              apply everywhere, reducing cognitive load and increasing efficiency.
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Clarity</h3>
            <p className="text-slate-700">
              Clear visual hierarchy and intuitive interactions guide users to complete tasks
              without confusion. Every element has a purpose and communicates it effectively.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Efficiency</h3>
            <p className="text-slate-700">
              Optimized for productivity and task completion. Users can accomplish their goals
              quickly without unnecessary steps or distractions.
            </p>
          </div>

          <div className="border-l-4 border-orange-600 pl-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Accessibility</h3>
            <p className="text-slate-700">
              Usable by everyone, including keyboard-only users, screen reader users, and people
              with various disabilities. Accessibility is built in, not bolted on.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Who is This For?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This design system is optimized for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Enterprise SaaS Applications</strong> - B2B products with complex data and workflows</li>
          <li><strong>Admin Dashboards</strong> - Internal tools and management interfaces</li>
          <li><strong>Data-Heavy Interfaces</strong> - Applications with tables, forms, and analytics</li>
          <li><strong>Professional Tools</strong> - Where clarity and efficiency are top priorities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Foundation</h3>
            <p className="text-sm text-slate-600">Colors, typography, spacing, and other design tokens</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Components</h3>
            <p className="text-sm text-slate-600">21+ production-ready UI components with variants</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Patterns</h3>
            <p className="text-sm text-slate-600">Common composition patterns and usage examples</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Guidelines</h3>
            <p className="text-sm text-slate-600">Design principles, best practices, and usage guidance</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        <p className="text-slate-700 leading-relaxed">
          Explore the design system using the navigation on the left:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 mt-4">
          <li><strong>Foundation</strong> - Start with colors, typography, and spacing to understand the visual language</li>
          <li><strong>Components</strong> - Browse individual components with interactive examples and API documentation</li>
          <li><strong>Patterns</strong> - See how components work together in common scenarios</li>
          <li><strong>Guidelines</strong> - Learn design principles, grid systems, accessibility standards, and more</li>
        </ol>

        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-800">
            Each component includes usage guidelines, accessibility notes, and best practices.
            Look for the "Guidelines" section in component documentation for detailed guidance on when and how to use each element.
          </p>
        </div>
      </div>
    </div>
  ),
};
