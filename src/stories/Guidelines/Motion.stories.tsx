import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Guidelines/Motion',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimingScale: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Animation Timing</h1>
      <p className="text-lg text-slate-600 mb-8">
        Consistent timing creates predictable, polished interactions.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-2">Motion Philosophy</h2>
        <p className="text-sm text-blue-800">
          In professional applications, animations should be quick and functional—not decorative.
          They provide feedback and guide attention without slowing users down.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Fast (150ms)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Immediate feedback for hover states, focus rings, and micro-interactions.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-150 hover:bg-blue-600 hover:shadow-md cursor-pointer">
              Hover Me (150ms)
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">transition-all duration-150 • 150ms</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Standard (300ms)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Default timing for most transitions like dropdowns, tooltips, and content reveals.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-green-800 hover:scale-105 cursor-pointer">
              Hover Me (300ms)
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">transition-all duration-300 • 300ms</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Slow (500ms)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Longer transitions for modals, panels, and significant layout changes.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-500 hover:bg-purple-600 hover:shadow-xl cursor-pointer">
              Hover Me (500ms)
            </div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">transition-all duration-500 • 500ms</code>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="font-semibold text-slate-900 mb-3">Choosing Timing</h2>
        <ul className="text-sm text-slate-700 space-y-2">
          <li>• <strong>150ms</strong> - Color changes, opacity, small transforms</li>
          <li>• <strong>300ms</strong> - Dropdowns, tooltips, moderate movements</li>
          <li>• <strong>500ms</strong> - Modals, drawers, major state changes</li>
        </ul>
      </div>
    </div>
  ),
};

export const EasingFunctions: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Easing Functions</h1>
      <p className="text-lg text-slate-600 mb-8">
        Easing curves make animations feel natural and polished.
      </p>

      <div className="space-y-6">
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Ease-in-out (Default)</h2>
          <p className="text-sm text-slate-600 mb-4">
            Starts slow, speeds up, then slows down. Best for most animations.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-lg transition-transform duration-500 ease-in-out hover:translate-x-32 cursor-pointer"></div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">ease-in-out • cubic-bezier(0.4, 0, 0.2, 1)</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Ease-out</h2>
          <p className="text-sm text-slate-600 mb-4">
            Starts fast, ends slow. Use for elements entering the screen.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-lg transition-transform duration-500 ease-out hover:translate-x-32 cursor-pointer"></div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">ease-out • cubic-bezier(0, 0, 0.2, 1)</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Ease-in</h2>
          <p className="text-sm text-slate-600 mb-4">
            Starts slow, ends fast. Use for elements leaving the screen.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-500 rounded-lg transition-transform duration-500 ease-in hover:translate-x-32 cursor-pointer"></div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">ease-in • cubic-bezier(0.4, 0, 1, 1)</code>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Linear</h2>
          <p className="text-sm text-slate-600 mb-4">
            Constant speed. Use sparingly for loading indicators or infinite animations.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="w-12 h-12 bg-orange-500 rounded-lg transition-transform duration-500 linear hover:translate-x-32 cursor-pointer"></div>
          </div>
          <code className="text-xs text-slate-600 mt-3 block">linear • linear</code>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="font-semibold text-blue-900 mb-3">General Rule</h2>
        <p className="text-sm text-blue-800">
          When in doubt, use <strong>ease-in-out</strong> with <strong>300ms</strong>. This combination
          works well for most UI animations and feels natural to users.
        </p>
      </div>
    </div>
  ),
};

const AnimatedExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-150"
      >
        {isOpen ? 'Hide' : 'Show'} Panel
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-100 rounded-lg p-6 border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Animated Panel</h4>
          <p className="text-sm text-slate-600">
            This panel animates its height and opacity using transition-all with 300ms duration
            and ease-in-out easing.
          </p>
        </div>
      </div>
    </div>
  );
};

export const WhenToAnimate: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">When to Animate</h1>
      <p className="text-lg text-slate-600 mb-8">
        Not everything needs animation. Use motion purposefully to improve usability.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-900">Do Animate</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">1. Feedback for User Actions</h3>
              <p className="text-sm text-green-800 mb-3">
                Confirm that clicks, hovers, and interactions were registered.
              </p>
              <div className="bg-white rounded p-3">
                <button className="bg-green-700 text-white px-4 py-2 rounded transition-all duration-150 hover:bg-green-800 active:scale-95">
                  Click Me
                </button>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">2. Revealing/Hiding Content</h3>
              <p className="text-sm text-green-800 mb-3">
                Show where content is coming from and going to.
              </p>
              <div className="bg-white rounded p-3">
                <AnimatedExample />
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">3. Directing Attention</h3>
              <p className="text-sm text-green-800 mb-3">
                Guide users to important changes or new content.
              </p>
              <div className="bg-white rounded p-3">
                <div className="bg-blue-500 text-white px-4 py-2 rounded inline-block animate-pulse">
                  New notification
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-green-900 mb-2">4. Loading States</h3>
              <p className="text-sm text-green-800 mb-3">
                Indicate that work is happening in the background.
              </p>
              <div className="bg-white rounded p-3 flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-slate-600">Loading...</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-900">Don't Animate</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Critical Information</h3>
              <p className="text-sm text-red-800">
                Error messages, alerts, and important updates should appear immediately.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Data Tables</h3>
              <p className="text-sm text-red-800">
                Table content, sorting, and filtering should update instantly for efficiency.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Text Changes</h3>
              <p className="text-sm text-red-800">
                Labels, headings, and body text should never fade or slide when updating.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Form Inputs</h3>
              <p className="text-sm text-red-800">
                User typing should have zero delay. Only animate validation feedback.
              </p>
            </div>
          </div>
        </section>

        <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h2 className="font-semibold text-slate-900 mb-3">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-900 mb-2">✓ Do</h4>
              <ul className="text-green-800 space-y-1">
                <li>• Keep animations under 500ms</li>
                <li>• Use animation to provide feedback</li>
                <li>• Be consistent with timing</li>
                <li>• Test with reduced-motion preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-2">✗ Don't</h4>
              <ul className="text-red-800 space-y-1">
                <li>• Animate everything</li>
                <li>• Use animation for decoration only</li>
                <li>• Make users wait for animations</li>
                <li>• Forget about accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AccessibleMotion: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Accessible Motion</h1>
      <p className="text-lg text-slate-600 mb-8">
        Respect user preferences for reduced motion.
      </p>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-orange-900 mb-2">Why This Matters</h2>
        <p className="text-sm text-orange-800">
          Some users experience dizziness, nausea, or seizures from animations. Respecting
          prefers-reduced-motion is a WCAG requirement and shows care for all users.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Using Tailwind</h2>
          <p className="text-sm text-slate-600 mb-4">
            Tailwind provides a <code className="bg-slate-100 px-2 py-1 rounded text-sm">motion-reduce:</code> variant
            to disable animations when users prefer reduced motion.
          </p>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-100 font-mono">
{`<div className="
  transition-all duration-300
  motion-reduce:transition-none
">
  Content
</div>`}
            </pre>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">What to Disable</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-green-700 font-semibold">✓</span>
              <div>
                <strong className="text-slate-900">Keep essential feedback:</strong>
                <p className="text-slate-600">Button state changes, focus indicators (but instant, not animated)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 font-semibold">✗</span>
              <div>
                <strong className="text-slate-900">Disable decorative motion:</strong>
                <p className="text-slate-600">Smooth transitions, fades, slides, scale effects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h2 className="font-semibold text-slate-900 mb-3">Example Implementation</h2>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-4">
            <pre className="text-sm text-slate-100 font-mono whitespace-pre-wrap">
{`// Animated button with reduced motion support
<button className="
  bg-blue-500 text-white px-6 py-3 rounded-lg
  transition-all duration-150
  hover:bg-blue-600 hover:shadow-lg
  motion-reduce:transition-none
  motion-reduce:hover:shadow-none
">
  Click Me
</button>

// Panel that slides in
<div className="
  transform transition-transform duration-300
  translate-x-0
  motion-reduce:transition-none
  motion-reduce:transform-none
">
  Panel content
</div>`}
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="font-semibold text-blue-900 mb-3">Testing</h2>
        <p className="text-sm text-blue-800 mb-3">
          Test your animations with reduced motion enabled:
        </p>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>macOS:</strong> System Preferences → Accessibility → Display → Reduce motion</li>
          <li>• <strong>Windows:</strong> Settings → Ease of Access → Display → Show animations</li>
          <li>• <strong>Browser DevTools:</strong> Rendering → Emulate CSS media → prefers-reduced-motion</li>
        </ul>
      </div>
    </div>
  ),
};
