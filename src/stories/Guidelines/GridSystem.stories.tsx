import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Guidelines/Grid System',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingScale: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Spacing Scale</h1>
      <p className="text-lg text-slate-600 mb-8">
        Our spacing system is based on an 8px grid, providing consistent rhythm and alignment throughout the interface.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-2">8px Base Unit</h2>
        <p className="text-sm text-blue-800">
          All spacing values are multiples of 4px, with 8px as the fundamental unit. This creates
          visual harmony and makes it easier to maintain consistent spacing across components.
        </p>
      </div>

      <div className="space-y-6">
        {[
          { name: '1', px: '4px', rem: '0.25rem', usage: 'Micro spacing within tight components' },
          { name: '2', px: '8px', rem: '0.5rem', usage: 'Small gaps, icon spacing, tight padding' },
          { name: '3', px: '12px', rem: '0.75rem', usage: 'Compact element spacing' },
          { name: '4', px: '16px', rem: '1rem', usage: 'Default spacing between related elements' },
          { name: '6', px: '24px', rem: '1.5rem', usage: 'Spacing between component groups' },
          { name: '8', px: '32px', rem: '2rem', usage: 'Section spacing, card padding' },
          { name: '12', px: '48px', rem: '3rem', usage: 'Large section gaps' },
          { name: '16', px: '64px', rem: '4rem', usage: 'Major layout sections' },
        ].map((space) => (
          <div key={space.name} className="border border-slate-200 rounded-lg p-5 bg-white">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-3 flex-1">
                <span className="font-mono font-semibold text-slate-900 text-lg">
                  {space.name}
                </span>
                <span className="text-slate-600">•</span>
                <span className="font-mono text-slate-700">{space.px}</span>
                <span className="text-slate-600">({space.rem})</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-3">{space.usage}</p>
            <div className="bg-slate-100 rounded p-3">
              <div
                className="bg-blue-700 rounded"
                style={{ width: space.px, height: '24px' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="font-semibold text-slate-900 mb-3">Tailwind CSS Classes</h2>
        <p className="text-sm text-slate-700 mb-3">
          Use Tailwind's spacing utilities which align with our scale:
        </p>
        <div className="font-mono text-xs text-slate-600 space-y-1">
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-1</code> = 4px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-2</code> = 8px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-3</code> = 12px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-4</code> = 16px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-6</code> = 24px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-8</code> = 32px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-12</code> = 48px</div>
          <div><code className="bg-slate-200 px-2 py-1 rounded">p-16</code> = 64px</div>
        </div>
      </div>
    </div>
  ),
};

export const LayoutGrid: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Layout Grid</h1>
      <p className="text-lg text-slate-600 mb-8">
        Guidelines for creating consistent, well-organized layouts.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Container Widths</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">Full Width</h3>
              <p className="text-sm text-slate-600 mb-3">Use for dashboards and data-heavy interfaces</p>
              <div className="bg-slate-100 rounded p-2">
                <div className="bg-blue-700 h-12 rounded" style={{ width: '100%' }}></div>
              </div>
              <code className="text-xs text-slate-600 mt-2 block">max-w-full</code>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">Wide (1280px)</h3>
              <p className="text-sm text-slate-600 mb-3">Use for application content with sidebars</p>
              <div className="bg-slate-100 rounded p-2">
                <div className="bg-blue-700 h-12 rounded mx-auto" style={{ maxWidth: '1280px' }}></div>
              </div>
              <code className="text-xs text-slate-600 mt-2 block">max-w-7xl (1280px)</code>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">Standard (1024px)</h3>
              <p className="text-sm text-slate-600 mb-3">Use for forms and focused content</p>
              <div className="bg-slate-100 rounded p-2">
                <div className="bg-blue-700 h-12 rounded mx-auto" style={{ maxWidth: '1024px' }}></div>
              </div>
              <code className="text-xs text-slate-600 mt-2 block">max-w-5xl (1024px)</code>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">Reading (768px)</h3>
              <p className="text-sm text-slate-600 mb-3">Use for documentation and text-heavy content</p>
              <div className="bg-slate-100 rounded p-2">
                <div className="bg-blue-700 h-12 rounded mx-auto" style={{ maxWidth: '768px' }}></div>
              </div>
              <code className="text-xs text-slate-600 mt-2 block">max-w-3xl (768px)</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Grid Columns</h2>
          <p className="text-slate-700 mb-4">
            Use a 12-column grid system for flexible layouts. Common patterns:
          </p>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Two Column (8-4)</h3>
              <p className="text-sm text-slate-600 mb-3">Main content + sidebar</p>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-sm">
                  Main (8 cols)
                </div>
                <div className="col-span-4 bg-slate-400 h-16 rounded flex items-center justify-center text-white text-sm">
                  Sidebar (4 cols)
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Three Column (4-4-4)</h3>
              <p className="text-sm text-slate-600 mb-3">Equal columns for cards or features</p>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-sm">
                  Column 1
                </div>
                <div className="col-span-4 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-sm">
                  Column 2
                </div>
                <div className="col-span-4 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-sm">
                  Column 3
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Four Column (3-3-3-3)</h3>
              <p className="text-sm text-slate-600 mb-3">Stats, metrics, or small cards</p>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-xs">
                  Stat 1
                </div>
                <div className="col-span-3 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-xs">
                  Stat 2
                </div>
                <div className="col-span-3 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-xs">
                  Stat 3
                </div>
                <div className="col-span-3 bg-blue-700 h-16 rounded flex items-center justify-center text-white text-xs">
                  Stat 4
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Vertical Rhythm</h2>
          <p className="text-slate-700 mb-4">
            Consistent vertical spacing creates visual hierarchy and improves scannability.
          </p>

          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <div className="space-y-4">
              <div>
                <div className="h-8 bg-slate-900 rounded mb-2"></div>
                <p className="text-xs text-slate-600">Large heading (32px below)</p>
              </div>

              <div>
                <div className="h-6 bg-slate-700 rounded mb-3"></div>
                <p className="text-xs text-slate-600">Medium heading (24px below)</p>
              </div>

              <div className="space-y-2">
                <div className="h-4 bg-slate-400 rounded"></div>
                <div className="h-4 bg-slate-400 rounded"></div>
                <div className="h-4 bg-slate-400 rounded"></div>
                <p className="text-xs text-slate-600 mt-2">Body text (16px between paragraphs)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Responsive Breakpoints</h1>
      <p className="text-lg text-slate-600 mb-8">
        Mobile-first responsive design using Tailwind's breakpoint system.
      </p>

      <div className="space-y-6">
        {[
          { name: 'sm', min: '640px', usage: 'Small tablets and large phones in landscape' },
          { name: 'md', min: '768px', usage: 'Tablets in portrait' },
          { name: 'lg', min: '1024px', usage: 'Tablets in landscape and small laptops' },
          { name: 'xl', min: '1280px', usage: 'Desktop screens' },
          { name: '2xl', min: '1536px', usage: 'Large desktop screens' },
        ].map((bp) => (
          <div key={bp.name} className="border border-slate-200 rounded-lg p-5 bg-white">
            <div className="flex items-center gap-4 mb-2">
              <code className="font-mono font-semibold text-lg text-blue-600">{bp.name}:</code>
              <span className="text-slate-700">{bp.min} and up</span>
            </div>
            <p className="text-sm text-slate-600">{bp.usage}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="font-semibold text-blue-900 mb-3">Mobile-First Approach</h2>
        <p className="text-sm text-blue-800 mb-3">
          Start with mobile styles, then add complexity at larger breakpoints:
        </p>
        <div className="bg-white rounded p-4 font-mono text-xs text-slate-700">
          <div>{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">`}</div>
          <div className="pl-4 text-slate-600">{`/* 1 column on mobile */`}</div>
          <div className="pl-4 text-slate-600">{`/* 2 columns on tablets */`}</div>
          <div className="pl-4 text-slate-600">{`/* 3 columns on desktop */`}</div>
          <div>{`</div>`}</div>
        </div>
      </div>
    </div>
  ),
};
