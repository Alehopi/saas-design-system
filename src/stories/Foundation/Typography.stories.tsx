import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSizes: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Font Sizes</h1>
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-xs</span>
          <span className="text-xs">The quick brown fox jumps over the lazy dog (12px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-sm</span>
          <span className="text-sm">The quick brown fox jumps over the lazy dog (14px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-base</span>
          <span className="text-base">The quick brown fox jumps over the lazy dog (16px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-lg</span>
          <span className="text-lg">The quick brown fox jumps over the lazy dog (18px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-xl</span>
          <span className="text-xl">The quick brown fox jumps over the lazy dog (20px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-2xl</span>
          <span className="text-2xl">The quick brown fox jumps over the lazy dog (24px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-3xl</span>
          <span className="text-3xl">The quick brown fox jumps over the lazy dog (30px)</span>
        </div>
        <div className="flex items-baseline gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-24">text-4xl</span>
          <span className="text-4xl">The quick brown fox jumps (36px)</span>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Font Weights</h1>
      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-32">font-normal</span>
          <span className="text-lg font-normal">Regular weight text (400)</span>
        </div>
        <div className="flex items-center gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-32">font-medium</span>
          <span className="text-lg font-medium">Medium weight text (500)</span>
        </div>
        <div className="flex items-center gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-32">font-semibold</span>
          <span className="text-lg font-semibold">Semibold weight text (600)</span>
        </div>
        <div className="flex items-center gap-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-600 w-32">font-bold</span>
          <span className="text-lg font-bold">Bold weight text (700)</span>
        </div>
      </div>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Line Heights</h1>
      <div className="space-y-8 max-w-4xl">
        <div>
          <span className="text-xs font-mono text-slate-600 mb-2 block">leading-tight (1.25)</span>
          <p className="text-base leading-tight bg-slate-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div>
          <span className="text-xs font-mono text-slate-600 mb-2 block">leading-normal (1.5)</span>
          <p className="text-base leading-normal bg-slate-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div>
          <span className="text-xs font-mono text-slate-600 mb-2 block">leading-relaxed (1.625)</span>
          <p className="text-base leading-relaxed bg-slate-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div>
          <span className="text-xs font-mono text-slate-600 mb-2 block">leading-loose (2)</span>
          <p className="text-base leading-loose bg-slate-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const TypographyScale: Story = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Typography Scale</h1>
      <div className="space-y-6 max-w-4xl">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
          <p className="text-sm text-slate-600">text-4xl font-bold (36px/40px Bold)</p>
          <p className="text-base mt-4">Used for page titles and primary headings. Should appear once per page.</p>
        </div>
        <div className="border-b border-slate-200 pb-6">
          <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
          <p className="text-sm text-slate-600">text-3xl font-bold (30px/36px Bold)</p>
          <p className="text-base mt-4">Used for section headings and content organization.</p>
        </div>
        <div className="border-b border-slate-200 pb-6">
          <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
          <p className="text-sm text-slate-600">text-2xl font-semibold (24px/32px Semibold)</p>
          <p className="text-base mt-4">Used for sub-sections and card titles.</p>
        </div>
        <div className="border-b border-slate-200 pb-6">
          <h4 className="text-xl font-semibold mb-2">Heading 4</h4>
          <p className="text-sm text-slate-600">text-xl font-semibold (20px/28px Semibold)</p>
          <p className="text-base mt-4">Used for smaller headings and component titles.</p>
        </div>
        <div className="border-b border-slate-200 pb-6">
          <p className="text-base mb-2">Body Text</p>
          <p className="text-sm text-slate-600">text-base font-normal (16px/24px Regular)</p>
          <p className="text-base mt-4">Default text style for paragraphs and content. Provides optimal readability.</p>
        </div>
        <div className="border-b border-slate-200 pb-6">
          <p className="text-sm mb-2">Small Text</p>
          <p className="text-sm text-slate-600">text-sm font-normal (14px/20px Regular)</p>
          <p className="text-base mt-4">Used for secondary information, captions, and helper text.</p>
        </div>
        <div>
          <p className="text-xs mb-2">Extra Small Text</p>
          <p className="text-sm text-slate-600">text-xs font-normal (12px/16px Regular)</p>
          <p className="text-base mt-4">Used for labels, timestamps, and tertiary information.</p>
        </div>
      </div>
    </div>
  ),
};
