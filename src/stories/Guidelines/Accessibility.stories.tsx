import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Guidelines/Accessibility',
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
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Accessibility Standards</h1>
      <p className="text-lg text-slate-600 mb-8">
        This design system follows WCAG 2.1 AA guidelines to ensure usability for everyone.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-2">Our Commitment</h2>
        <p className="text-sm text-blue-800">
          Accessibility is not a feature—it's a requirement. Every component is designed and tested
          to be usable by people with diverse abilities, including those who use keyboards,
          screen readers, or other assistive technologies.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">WCAG 2.1 AA</h2>
          <p className="text-slate-700 leading-relaxed">
            We meet Level AA of the Web Content Accessibility Guidelines 2.1, which is the
            standard for most government and enterprise applications. This ensures perceivable,
            operable, understandable, and robust interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Perceivable</h3>
            <p className="text-sm text-slate-600">
              Information and UI components are presented in ways users can perceive through
              sight, sound, or touch.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Operable</h3>
            <p className="text-sm text-slate-600">
              Users can interact with all interface components using keyboard, mouse, or
              assistive technology.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Understandable</h3>
            <p className="text-sm text-slate-600">
              Information and operation of the interface are clear and predictable.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Robust</h3>
            <p className="text-sm text-slate-600">
              Content works with current and future assistive technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorContrast: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Color Contrast</h1>
      <p className="text-lg text-slate-600 mb-8">
        Sufficient color contrast ensures text is readable for users with low vision or color blindness.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Contrast Requirements</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Normal Text (4.5:1)</h3>
              <p className="text-sm text-slate-600 mb-4">
                Body text and most UI text must have a contrast ratio of at least 4.5:1 against its background.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-700 font-semibold">✓</span>
                    <span className="font-semibold text-green-900">Passes</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-slate-900">This is slate-900 on white (16.1:1)</p>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-700 font-semibold">✗</span>
                    <span className="font-semibold text-red-900">Fails</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-slate-700">
                      <span className="font-mono bg-slate-100 px-1 rounded">text-slate-400</span> on white (3.2:1)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Large Text (3:1)</h3>
              <p className="text-sm text-slate-600 mb-4">
                Large text (18px+ or 14px+ bold) can use a lower contrast ratio of 3:1.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-700 font-semibold">✓</span>
                    <span className="font-semibold text-green-900">Passes</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-2xl text-slate-600">Large heading (4.6:1)</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-700 font-semibold">✓</span>
                    <span className="font-semibold text-green-900">Passes</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-xl font-bold text-slate-500">Bold text (3.9:1)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">UI Components (3:1)</h3>
              <p className="text-sm text-slate-600 mb-4">
                Interactive elements like buttons, form borders, and icons need 3:1 contrast with adjacent colors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-700 font-semibold">✓</span>
                    <span className="font-semibold text-green-900">Passes</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <input
                      type="text"
                      placeholder="Good border"
                      className="border-2 border-slate-300 rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-600 font-semibold">✗</span>
                    <span className="font-semibold text-red-900">Fails</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <input
                      type="text"
                      placeholder="Too light border"
                      className="border border-slate-100 rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-3">Approved Color Combinations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-white rounded p-3 text-center">
              <div className="mb-2 text-slate-900 font-medium">slate-900</div>
              <div className="text-xs text-slate-600">on white</div>
            </div>
            <div className="bg-slate-900 rounded p-3 text-center">
              <div className="mb-2 text-white font-medium">white</div>
              <div className="text-xs text-slate-300">on slate-900</div>
            </div>
            <div className="bg-blue-600 rounded p-3 text-center">
              <div className="mb-2 text-white font-medium">white</div>
              <div className="text-xs text-blue-100">on blue-600</div>
            </div>
            <div className="bg-white rounded p-3 text-center border border-slate-200">
              <div className="mb-2 text-slate-700 font-medium">slate-700</div>
              <div className="text-xs text-slate-600">on white</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const KeyboardNavigation: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Keyboard Navigation</h1>
      <p className="text-lg text-slate-600 mb-8">
        All functionality must be accessible via keyboard for users who cannot use a mouse.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Essential Keys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <kbd className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-sm font-mono">Tab</kbd>
              <p className="text-sm text-slate-600 mt-2">Move focus forward through interactive elements</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <kbd className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-sm font-mono">Shift + Tab</kbd>
              <p className="text-sm text-slate-600 mt-2">Move focus backward</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <kbd className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-sm font-mono">Enter</kbd>
              <p className="text-sm text-slate-600 mt-2">Activate buttons and links</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <kbd className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-sm font-mono">Space</kbd>
              <p className="text-sm text-slate-600 mt-2">Activate buttons, toggle checkboxes</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <kbd className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-sm font-mono">Esc</kbd>
              <p className="text-sm text-slate-600 mt-2">Close modals, dropdowns, and cancel actions</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5 bg-white">
              <kbd className="bg-slate-100 border border-slate-300 rounded px-2 py-1 text-sm font-mono">Arrow Keys</kbd>
              <p className="text-sm text-slate-600 mt-2">Navigate within menus, tabs, and radio groups</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Focus Management</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Visible Focus Indicators</h3>
              <p className="text-sm text-slate-600 mb-4">
                All interactive elements must show a clear visual indicator when focused.
              </p>
              <div className="bg-slate-100 rounded-lg p-6 space-y-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Focus Me (Tab to see ring)
                </button>
                <input
                  type="text"
                  placeholder="Focus this input"
                  className="border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Focus Order</h3>
              <p className="text-sm text-slate-600 mb-4">
                Tab order should follow visual/reading order (top to bottom, left to right).
              </p>
              <div className="bg-slate-100 rounded-lg p-6">
                <div className="space-y-3">
                  <input type="text" placeholder="1. First input" className="border border-slate-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-600" />
                  <input type="text" placeholder="2. Second input" className="border border-slate-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-600" />
                  <div className="flex gap-3">
                    <button className="bg-slate-500 text-white px-4 py-2 rounded focus:ring-2 focus:ring-slate-600">3. Cancel</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-600">4. Submit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">Focus Trapping</h3>
              <p className="text-sm text-slate-600">
                Modals and dialogs should trap focus, preventing Tab from moving focus outside the modal.
                Focus returns to the trigger element when closed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};

export const ScreenReaderSupport: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Screen Reader Support</h1>
      <p className="text-lg text-slate-600 mb-8">
        Proper semantic HTML and ARIA labels ensure screen readers convey information accurately.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Semantic HTML</h2>
          <p className="text-slate-700 mb-4">
            Use native HTML elements whenever possible—they have built-in accessibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-700 font-semibold">✓</span>
                <span className="font-semibold text-green-900">Do</span>
              </div>
              <div className="bg-white rounded p-3 font-mono text-xs">
                {`<button>Click me</button>`}
              </div>
              <p className="text-xs text-green-800 mt-2">Semantic, keyboard accessible, announced correctly</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-600 font-semibold">✗</span>
                <span className="font-semibold text-red-900">Don't</span>
              </div>
              <div className="bg-white rounded p-3 font-mono text-xs">
                {`<div onClick={...}>Click</div>`}
              </div>
              <p className="text-xs text-red-800 mt-2">Not keyboard accessible, not announced as button</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">ARIA Labels</h2>
          <p className="text-slate-700 mb-4">
            When semantic HTML isn't enough, use ARIA attributes to provide context.
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">aria-label</h3>
              <p className="text-sm text-slate-600 mb-3">
                Provides an accessible name when visual text is missing or unclear.
              </p>
              <div className="bg-slate-900 rounded p-3 font-mono text-xs text-slate-100">
                {`<button aria-label="Close dialog">
  <XIcon />
</button>`}
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">aria-describedby</h3>
              <p className="text-sm text-slate-600 mb-3">
                Links an element to descriptive text, like error messages or helper text.
              </p>
              <div className="bg-slate-900 rounded p-3 font-mono text-xs text-slate-100">
                {`<input
  type="email"
  aria-describedby="email-error"
/>
<span id="email-error">
  Invalid email format
</span>`}
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">aria-live</h3>
              <p className="text-sm text-slate-600 mb-3">
                Announces dynamic content changes without moving focus.
              </p>
              <div className="bg-slate-900 rounded p-3 font-mono text-xs text-slate-100">
                {`<div aria-live="polite">
  3 items added to cart
</div>`}
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">role</h3>
              <p className="text-sm text-slate-600 mb-3">
                Defines the purpose of an element when semantic HTML isn't available.
              </p>
              <div className="bg-slate-900 rounded p-3 font-mono text-xs text-slate-100">
                {`<div role="alert">
  Your session will expire soon
</div>`}
              </div>
            </div>
          </div>
        </section>

        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="font-semibold text-blue-900 mb-3">Testing with Screen Readers</h2>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• <strong>macOS:</strong> VoiceOver (Cmd+F5)</li>
            <li>• <strong>Windows:</strong> NVDA (free) or JAWS</li>
            <li>• <strong>Chrome:</strong> ChromeVox extension</li>
            <li>• Test navigation, form completion, and error handling</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const BestPractices: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Accessibility Best Practices</h1>
      <p className="text-lg text-slate-600 mb-8">
        Guidelines for building accessible components and interfaces.
      </p>

      <div className="space-y-6">
        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">1. Every Image Needs Alt Text</h2>
          <p className="text-sm text-green-800 mb-3">
            Describe images for users who can't see them. If decorative, use empty alt="" to skip.
          </p>
          <div className="bg-white rounded p-3 font-mono text-xs">
            {`<img src="chart.png" alt="Sales increased 23% in Q4" />`}
          </div>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">2. Forms Need Labels</h2>
          <p className="text-sm text-green-800 mb-3">
            Every input needs a visible label, properly associated with for/id.
          </p>
          <div className="bg-white rounded p-3 font-mono text-xs">
            {`<label htmlFor="email">Email</label>
<input id="email" type="email" />`}
          </div>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">3. Don't Rely on Color Alone</h2>
          <p className="text-sm text-green-800 mb-3">
            Use icons, text, or patterns in addition to color to convey information.
          </p>
          <div className="bg-white rounded p-3 flex gap-3">
            <div className="flex items-center gap-2">
              <span className="text-green-700">✓</span>
              <span className="text-sm">Success</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">✗</span>
              <span className="text-sm">Error</span>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">4. Provide Clear Error Messages</h2>
          <p className="text-sm text-green-800 mb-3">
            Explain what went wrong and how to fix it. Link errors to fields with aria-describedby.
          </p>
          <div className="bg-white rounded p-3 text-sm text-red-700">
            Email is required. Please enter a valid email address.
          </div>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">5. Give Users Enough Time</h2>
          <p className="text-sm text-green-800">
            Don't auto-advance carousels. Provide pause controls. Warn before timeouts.
          </p>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">6. Make Click Targets Large Enough</h2>
          <p className="text-sm text-green-800 mb-3">
            Buttons and links should be at least 44x44px for easy clicking/tapping.
          </p>
          <div className="bg-white rounded p-3 flex gap-3">
            <button className="bg-blue-500 text-white px-6 py-3 rounded">Good Size</button>
            <button className="bg-red-500 text-white px-2 py-1 text-xs rounded">Too Small</button>
          </div>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">7. Provide Skip Links</h2>
          <p className="text-sm text-green-800">
            Let keyboard users skip repetitive navigation to get to main content quickly.
          </p>
        </div>

        <div className="border-l-4 border-green-600 pl-6 bg-green-50 p-5 rounded-r-lg">
          <h2 className="font-semibold text-green-900 mb-3">8. Test with Real Users</h2>
          <p className="text-sm text-green-800">
            Automated tools catch some issues, but testing with keyboard-only and screen reader
            users finds real-world problems.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="font-semibold text-slate-900 mb-3">Additional Resources</h2>
        <ul className="text-sm text-slate-700 space-y-2">
          <li>• <strong>WCAG Guidelines:</strong> w3.org/WAI/WCAG21/quickref</li>
          <li>• <strong>ARIA Practices:</strong> w3.org/WAI/ARIA/apg</li>
          <li>• <strong>Testing Tools:</strong> axe DevTools, WAVE, Lighthouse</li>
          <li>• <strong>Color Contrast:</strong> WebAIM Contrast Checker</li>
        </ul>
      </div>
    </div>
  ),
};
