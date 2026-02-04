import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { ThemeToggler } from '../../components/ThemeToggler';
import { ThemeProvider } from '../../hooks/useTheme';

const meta = {
  title: 'Guidelines/Theming Guide',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemingGuide: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system">
      <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">Theming Guide</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Learn how to implement and customize themes in APEX Design System
        </p>
      </div>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Quick Start</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          APEX supports light, dark, and system theme modes out of the box. Wrap your application
          with the ThemeProvider to enable theme switching.
        </p>

        <Card className="mb-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-50">Basic Setup</h3>
            <pre className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { ThemeProvider } from 'apex-design-system';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      {/* Your app content */}
    </ThemeProvider>
  );
}`}</code>
            </pre>
          </div>
        </Card>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>Tip:</strong> The <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">defaultTheme</code> prop
            accepts "light", "dark", or "system". System mode automatically matches the user's OS preference.
          </p>
        </div>
      </section>

      {/* ThemeToggler Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Theme Toggler Component</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Use the built-in ThemeToggler component to let users switch between themes:
        </p>

        <Card className="mb-6">
          <div className="p-6">
            <div className="mb-4">
              <ThemeToggler />
            </div>
            <pre className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { ThemeToggler } from 'apex-design-system';

function Header() {
  return (
    <header>
      {/* ... other header content ... */}
      <ThemeToggler />
    </header>
  );
}`}</code>
            </pre>
          </div>
        </Card>
      </section>

      {/* useTheme Hook */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">useTheme Hook</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Access and control the theme programmatically using the useTheme hook:
        </p>

        <Card className="mb-6">
          <div className="p-6">
            <pre className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { useTheme } from 'apex-design-system';

function CustomThemeControl() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Dark Mode
      </button>
      <button onClick={() => setTheme('light')}>
        Light Mode
      </button>
      <button onClick={() => setTheme('system')}>
        System
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </Card>

        <div className="space-y-3">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">theme</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Returns the current theme: "light", "dark", or "system"
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">setTheme(theme)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Function to change the theme. Persists to localStorage automatically.
            </p>
          </div>
        </div>
      </section>

      {/* CSS Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">CSS Variables</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          APEX uses CSS variables for theming. All components automatically respond to theme changes.
        </p>

        <Card className="mb-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-50">Available Variables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 mb-2">Background Colors</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 font-mono">
                  <li>--bg-primary</li>
                  <li>--bg-secondary</li>
                  <li>--bg-tertiary</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 mb-2">Text Colors</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 font-mono">
                  <li>--fg-primary</li>
                  <li>--fg-secondary</li>
                  <li>--fg-muted</li>
                  <li>--fg-disabled</li>
                  <li>--fg-inverse</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 mb-2">Border Colors</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 font-mono">
                  <li>--border-default</li>
                  <li>--border-strong</li>
                  <li>--border-error</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 mb-2">Shadows</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 font-mono">
                  <li>--shadow-sm</li>
                  <li>--shadow-md</li>
                  <li>--shadow-lg</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Creating Theme-Aware Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Creating Theme-Aware Components</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          Use Tailwind's dark mode utilities to create components that respond to theme changes:
        </p>

        <Card className="mb-6">
          <div className="p-6">
            <pre className="bg-slate-900 dark:bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`function CustomCard({ children }) {
  return (
    <div className="
      bg-white dark:bg-slate-800
      text-slate-900 dark:text-slate-50
      border border-slate-200 dark:border-slate-700
      rounded-lg p-6
      shadow-md dark:shadow-lg
    ">
      {children}
    </div>
  );
}`}</code>
            </pre>
          </div>
        </Card>

        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Best Practice:</strong> Use semantic color classes (bg-semantic-primary, text-semantic-secondary)
            when possible instead of direct Tailwind colors. These are defined in the theme and automatically adjust.
          </p>
        </div>
      </section>

      {/* Testing with Different Themes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Testing with Different Themes</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          In Storybook, use the theme selector in the toolbar to preview components in light and dark modes:
        </p>

        <Card>
          <div className="p-6">
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Best Practices</h2>
        <div className="space-y-4">
          <Card>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">1. Test in Both Modes</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Always test your components in both light and dark modes to ensure proper contrast and readability.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">2. Respect User Preferences</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Use "system" as the default theme to respect users' OS-level preferences.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">3. Maintain WCAG Contrast</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Ensure all text meets WCAG 2.1 AA contrast requirements (4.5:1 for normal text, 3:1 for large text) in both themes.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">4. Avoid Hardcoded Colors</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Use semantic color classes or CSS variables instead of hardcoded hex values to ensure theme compatibility.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">5. Test Color Blind Modes</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Don't rely solely on color to convey information. Use icons, labels, and patterns for better accessibility.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Additional Resources</h2>
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>
              <strong className="text-slate-900 dark:text-slate-50">ThemeToggler Documentation:</strong> See the ThemeToggler component
              page for detailed props and customization options
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-50">Color Foundation:</strong> Visit Design Tokens → Colors to see the
              complete color palette and semantic colors
            </li>
            <li>
              <strong className="text-slate-900 dark:text-slate-50">Accessibility Guidelines:</strong> Check Guidelines → Accessibility
              for WCAG compliance and testing tools
            </li>
          </ul>
        </div>
      </section>
    </div>
    </ThemeProvider>
  ),
};
