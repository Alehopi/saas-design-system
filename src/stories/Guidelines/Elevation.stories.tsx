import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Guidelines/Elevation',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadowSystem: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Shadow System</h1>
      <p className="text-lg text-slate-600 mb-8">
        Subtle shadows create depth and hierarchy without adding visual clutter.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-2">Design Philosophy</h2>
        <p className="text-sm text-blue-800">
          In professional interfaces, depth should be subtle and purposeful. We use shadows sparingly
          to indicate interactivity, hierarchy, and layering—not for decoration.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">None</h2>
          <p className="text-sm text-slate-600 mb-4">
            Flat elements that sit on the same plane as their container. Use for inline elements and non-interactive content.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg flex items-center justify-center">
            <div className="bg-white border border-slate-200 rounded-lg p-6 w-48 h-24 flex items-center justify-center">
              <span className="text-slate-600">No Shadow</span>
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">shadow-none</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Small (sm)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Very subtle shadow for slight elevation. Use for cards and containers that need minimal separation.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg flex items-center justify-center">
            <div className="bg-white shadow-sm rounded-lg p-6 w-48 h-24 flex items-center justify-center">
              <span className="text-slate-600">Small Shadow</span>
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">shadow-sm • 0 1px 2px 0 rgb(0 0 0 / 0.05)</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Medium (default)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Standard shadow for cards, panels, and elevated content. Most common shadow in the system.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg flex items-center justify-center">
            <div className="bg-white shadow rounded-lg p-6 w-48 h-24 flex items-center justify-center">
              <span className="text-slate-600">Medium Shadow</span>
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">shadow • 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Large (lg)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Prominent shadow for modals, dropdowns, and floating elements that need strong separation.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-48 h-24 flex items-center justify-center">
              <span className="text-slate-600">Large Shadow</span>
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">shadow-lg • 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Extra Large (xl)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Maximum elevation for critical overlays and high-priority modals.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg p-6 w-48 h-24 flex items-center justify-center">
              <span className="text-slate-600">XL Shadow</span>
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">shadow-xl • 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)</code>
        </div>
      </div>
    </div>
  ),
};

export const ZIndexScale: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Z-Index Scale</h1>
      <p className="text-lg text-slate-600 mb-8">
        Consistent layering system for stacking elements in the interface.
      </p>

      <div className="space-y-4">
        {[
          { level: '0', value: '0', usage: 'Base layer - default for all elements', example: 'Page content, cards' },
          { level: '10', value: '10', usage: 'Sticky elements and fixed headers', example: 'Sticky table headers, fixed navigation' },
          { level: '20', value: '20', usage: 'Dropdowns and popovers', example: 'Select menus, autocomplete suggestions' },
          { level: '30', value: '30', usage: 'Overlays and backdrops', example: 'Modal backdrops, drawer overlays' },
          { level: '40', value: '40', usage: 'Modals and dialogs', example: 'Confirmation dialogs, forms in modals' },
          { level: '50', value: '50', usage: 'Tooltips and toasts', example: 'Notification toasts, help tooltips' },
        ].map((item) => (
          <div key={item.level} className="border border-slate-200 rounded-lg p-5 bg-white">
            <div className="flex items-start gap-4">
              <div className="font-mono font-semibold text-lg text-blue-600 min-w-[60px]">
                z-{item.level}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-slate-900 mb-1">{item.usage}</h2>
                <p className="text-sm text-slate-600">{item.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="font-semibold text-blue-900 mb-3">Usage Guidelines</h2>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>• Always use defined z-index values, never arbitrary numbers</li>
          <li>• Higher values should only be used for elements that truly need to be on top</li>
          <li>• If unsure, start with z-10 and adjust as needed</li>
          <li>• Document any custom z-index values in component code</li>
        </ul>
      </div>
    </div>
  ),
};

export const LayeringExamples: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Layering Examples</h1>
      <p className="text-lg text-slate-600 mb-8">
        See how shadows and z-index work together to create depth and hierarchy.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Card Hierarchy</h2>
          <p className="text-sm text-slate-600 mb-4">
            Different shadow levels create visual hierarchy among cards.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-slate-200 rounded mb-3"></div>
                <h3 className="font-semibold text-slate-900 mb-2">Base Card</h3>
                <p className="text-sm text-slate-600">No shadow, uses border for definition</p>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded mb-3"></div>
                <h3 className="font-semibold text-slate-900 mb-2">Elevated Card</h3>
                <p className="text-sm text-slate-600">Small shadow for subtle elevation</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-200 rounded mb-3"></div>
                <h3 className="font-semibold text-slate-900 mb-2">Featured Card</h3>
                <p className="text-sm text-slate-600">Large shadow for prominence</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Modal Overlay Stack</h2>
          <p className="text-sm text-slate-600 mb-4">
            Proper layering of backdrop, modal, and elements within.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg relative h-64">
            {/* Simulated backdrop */}
            <div className="absolute inset-0 bg-slate-900/20 rounded-lg flex items-center justify-center">
              {/* Simulated modal */}
              <div className="bg-white shadow-xl rounded-lg p-6 w-80 relative z-40">
                <h3 className="font-semibold text-slate-900 mb-3">Dialog Title</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Modal content sits on z-40 with xl shadow
                </p>
                {/* Simulated dropdown in modal */}
                <div className="relative">
                  <div className="bg-slate-100 border border-slate-300 rounded px-3 py-2 text-sm">
                    Select option
                  </div>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg border border-slate-200 p-2 z-50">
                    <div className="text-xs text-slate-600">Dropdown on z-50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-600 space-y-1">
            <div>• Backdrop: z-30, semi-transparent overlay</div>
            <div>• Modal: z-40, shadow-xl</div>
            <div>• Dropdown within modal: z-50, shadow-lg</div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Interactive States</h2>
          <p className="text-sm text-slate-600 mb-4">
            Shadows can change on hover to indicate interactivity.
          </p>
          <div className="bg-slate-100 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-lg p-6 transition-shadow hover:shadow-md cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded mb-3"></div>
                <h3 className="font-semibold text-slate-900 mb-2">Hover Me</h3>
                <p className="text-sm text-slate-600">shadow-sm → shadow-md</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 transition-shadow hover:shadow-lg cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded mb-3"></div>
                <h3 className="font-semibold text-slate-900 mb-2">Hover Me</h3>
                <p className="text-sm text-slate-600">shadow → shadow-lg</p>
              </div>
            </div>
          </div>
        </section>

        <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h2 className="font-semibold text-slate-900 mb-3">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <span>✓</span> Do
              </h3>
              <ul className="text-green-800 space-y-1">
                <li>• Use subtle shadows (sm, md) for most elements</li>
                <li>• Reserve large shadows for floating/modal elements</li>
                <li>• Increase shadow on hover for interactive cards</li>
                <li>• Keep layering predictable and consistent</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <span>✗</span> Don't
              </h3>
              <ul className="text-red-800 space-y-1">
                <li>• Use heavy shadows on every element</li>
                <li>• Mix multiple shadow sizes on similar elements</li>
                <li>• Forget about z-index when using shadows</li>
                <li>• Use shadows as primary design language</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
