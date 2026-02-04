import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ color, name, value }: { color: string; name: string; value: string }) => (
  <div className="flex items-center gap-4 p-4 border-b border-slate-200">
    <div
      className="w-16 h-16 rounded-lg border border-slate-200 shadow-sm"
      style={{ backgroundColor: color }}
    />
    <div>
      <p className="font-semibold text-slate-900">{name}</p>
      <p className="text-sm text-slate-600">{value}</p>
    </div>
  </div>
);

export const Primary: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Primary Colors</h1>
      <p className="text-slate-600 mb-6">Main brand colors used across the design system.</p>
      <div className="max-w-2xl bg-white rounded-lg border border-slate-200">
        <ColorSwatch color="#3b82f6" name="Blue 600" value="rgb(59, 130, 246)" />
        <ColorSwatch color="#2563eb" name="Blue 700" value="rgb(37, 99, 235)" />
        <ColorSwatch color="#1d4ed8" name="Blue 800" value="rgb(29, 78, 216)" />
      </div>
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Neutral Colors</h1>
      <p className="text-slate-600 mb-6">Grayscale palette for text, borders, and backgrounds.</p>
      <div className="max-w-2xl bg-white rounded-lg border border-slate-200">
        <ColorSwatch color="#0f172a" name="Slate 950" value="rgb(15, 23, 42)" />
        <ColorSwatch color="#1e293b" name="Slate 900" value="rgb(30, 41, 59)" />
        <ColorSwatch color="#334155" name="Slate 800" value="rgb(51, 65, 85)" />
        <ColorSwatch color="#475569" name="Slate 700" value="rgb(71, 85, 105)" />
        <ColorSwatch color="#64748b" name="Slate 600" value="rgb(100, 116, 139)" />
        <ColorSwatch color="#94a3b8" name="Slate 500" value="rgb(148, 163, 184)" />
        <ColorSwatch color="#cbd5e1" name="Slate 400" value="rgb(203, 213, 225)" />
        <ColorSwatch color="#e2e8f0" name="Slate 300" value="rgb(226, 232, 240)" />
        <ColorSwatch color="#f1f5f9" name="Slate 200" value="rgb(241, 245, 249)" />
        <ColorSwatch color="#f8fafc" name="Slate 100" value="rgb(248, 250, 252)" />
        <ColorSwatch color="#ffffff" name="White" value="rgb(255, 255, 255)" />
      </div>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Semantic Colors</h1>
      <p className="text-slate-600 mb-6">Colors with specific meanings for states and feedback.</p>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Success</h2>
          <div className="max-w-2xl bg-white rounded-lg border border-slate-200">
            <ColorSwatch color="#22c55e" name="Green 500" value="rgb(34, 197, 94)" />
            <ColorSwatch color="#16a34a" name="Green 600" value="rgb(22, 163, 74)" />
            <ColorSwatch color="#15803d" name="Green 700" value="rgb(21, 128, 61)" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Warning</h2>
          <div className="max-w-2xl bg-white rounded-lg border border-slate-200">
            <ColorSwatch color="#eab308" name="Yellow 500" value="rgb(234, 179, 8)" />
            <ColorSwatch color="#ca8a04" name="Yellow 600" value="rgb(202, 138, 4)" />
            <ColorSwatch color="#a16207" name="Yellow 700" value="rgb(161, 98, 7)" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Error</h2>
          <div className="max-w-2xl bg-white rounded-lg border border-slate-200">
            <ColorSwatch color="#ef4444" name="Red 500" value="rgb(239, 68, 68)" />
            <ColorSwatch color="#dc2626" name="Red 600" value="rgb(220, 38, 38)" />
            <ColorSwatch color="#b91c1c" name="Red 700" value="rgb(185, 28, 28)" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Complete Color Palette</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Primary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Primary (Blue)</h2>
          <div className="space-y-2">
            {[
              { name: '50', value: '#eff6ff' },
              { name: '100', value: '#dbeafe' },
              { name: '200', value: '#bfdbfe' },
              { name: '300', value: '#93c5fd' },
              { name: '400', value: '#60a5fa' },
              { name: '500', value: '#3b82f6' },
              { name: '600', value: '#2563eb' },
              { name: '700', value: '#1d4ed8' },
              { name: '800', value: '#1e40af' },
              { name: '900', value: '#1e3a8a' },
            ].map((color) => (
              <div key={color.name} className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded border border-slate-200"
                  style={{ backgroundColor: color.value }}
                />
                <div>
                  <p className="text-sm font-medium">Blue {color.name}</p>
                  <p className="text-xs text-slate-600">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slate */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Neutral (Slate)</h2>
          <div className="space-y-2">
            {[
              { name: '50', value: '#f8fafc' },
              { name: '100', value: '#f1f5f9' },
              { name: '200', value: '#e2e8f0' },
              { name: '300', value: '#cbd5e1' },
              { name: '400', value: '#94a3b8' },
              { name: '500', value: '#64748b' },
              { name: '600', value: '#475569' },
              { name: '700', value: '#334155' },
              { name: '800', value: '#1e293b' },
              { name: '900', value: '#0f172a' },
            ].map((color) => (
              <div key={color.name} className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded border border-slate-200"
                  style={{ backgroundColor: color.value }}
                />
                <div>
                  <p className="text-sm font-medium">Slate {color.name}</p>
                  <p className="text-xs text-slate-600">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};
