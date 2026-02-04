import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const SpacingBox = ({ size, value, pixels }: { size: string; value: string; pixels: string }) => (
  <div className="flex items-center gap-6 border-b border-slate-200 py-4">
    <div className="w-32">
      <p className="font-mono text-sm font-medium">{size}</p>
      <p className="text-xs text-slate-600">{pixels}</p>
    </div>
    <div
      className="bg-blue-500 rounded"
      style={{ width: value, height: '32px' }}
    />
    <p className="text-sm text-slate-600">{value}</p>
  </div>
);

export const SpacingScale: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Spacing Scale</h1>
      <p className="text-slate-600 mb-6">
        Consistent spacing values based on 4px base unit (0.25rem).
      </p>
      <div className="max-w-4xl bg-white rounded-lg border border-slate-200 p-6">
        <SpacingBox size="space-0" value="0px" pixels="0rem" />
        <SpacingBox size="space-1" value="4px" pixels="0.25rem" />
        <SpacingBox size="space-2" value="8px" pixels="0.5rem" />
        <SpacingBox size="space-3" value="12px" pixels="0.75rem" />
        <SpacingBox size="space-4" value="16px" pixels="1rem" />
        <SpacingBox size="space-5" value="20px" pixels="1.25rem" />
        <SpacingBox size="space-6" value="24px" pixels="1.5rem" />
        <SpacingBox size="space-8" value="32px" pixels="2rem" />
        <SpacingBox size="space-10" value="40px" pixels="2.5rem" />
        <SpacingBox size="space-12" value="48px" pixels="3rem" />
        <SpacingBox size="space-16" value="64px" pixels="4rem" />
        <SpacingBox size="space-20" value="80px" pixels="5rem" />
        <SpacingBox size="space-24" value="96px" pixels="6rem" />
      </div>
    </div>
  ),
};

export const SpacingUsage: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Spacing Usage Guidelines</h1>
      <div className="space-y-8 max-w-4xl">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Component Internal Spacing</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border-2 border-blue-500">
              <p className="text-sm font-medium mb-2">Tight (space-2 / 8px)</p>
              <p className="text-sm text-slate-600">Used within small components like badges, tags, or compact buttons.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-2 border-blue-500">
              <p className="text-sm font-medium mb-2">Default (space-4 / 16px)</p>
              <p className="text-sm text-slate-600">Standard spacing for most components like buttons, inputs, cards.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-2 border-blue-500">
              <p className="text-sm font-medium mb-2">Comfortable (space-6 / 24px)</p>
              <p className="text-sm text-slate-600">Used in larger components or when more breathing room is needed.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Layout Spacing</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border-2 border-green-500">
              <p className="text-sm font-medium mb-2">Between elements (space-4 to space-6)</p>
              <p className="text-sm text-slate-600">Spacing between related elements in a group.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-2 border-green-500">
              <p className="text-sm font-medium mb-2">Between sections (space-8 to space-12)</p>
              <p className="text-sm text-slate-600">Spacing between distinct sections of content.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-2 border-green-500">
              <p className="text-sm font-medium mb-2">Page margins (space-16 to space-24)</p>
              <p className="text-sm text-slate-600">Spacing around page edges and major layout containers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const StackSpacing: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Vertical Stack Spacing</h1>
      <p className="text-slate-600 mb-6">Examples of vertical spacing between stacked elements.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Tight (space-y-2)</h2>
          <div className="space-y-2">
            <div className="bg-slate-100 p-3 rounded">Item 1</div>
            <div className="bg-slate-100 p-3 rounded">Item 2</div>
            <div className="bg-slate-100 p-3 rounded">Item 3</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Normal (space-y-4)</h2>
          <div className="space-y-4">
            <div className="bg-slate-100 p-3 rounded">Item 1</div>
            <div className="bg-slate-100 p-3 rounded">Item 2</div>
            <div className="bg-slate-100 p-3 rounded">Item 3</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Relaxed (space-y-6)</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 p-3 rounded">Item 1</div>
            <div className="bg-slate-100 p-3 rounded">Item 2</div>
            <div className="bg-slate-100 p-3 rounded">Item 3</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
