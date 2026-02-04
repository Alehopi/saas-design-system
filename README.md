# APEX Design System

A comprehensive, production-ready design system for enterprise SaaS applications. Built with modern web technologies and designed for scalability, accessibility, and developer experience.

## ✨ Features

- **21+ Production-Ready Components** - Buttons, inputs, modals, tables, and more
- **Full TypeScript Support** - Complete type safety and IntelliSense
- **Accessible by Default** - WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Customizable Theming** - Built on Tailwind CSS for easy customization
- **Comprehensive Documentation** - Interactive Storybook with usage guidelines
- **Radix UI Primitives** - Accessible, unstyled components as foundation
- **Design Tokens** - Consistent colors, typography, and spacing
- **Responsive Design** - Mobile-first approach with flexible layouts
- **Pattern Library** - Pre-built composition patterns for common use cases

## 🚀 Quick Start

### Installation

```bash
npm install apex-design-system
# or
yarn add apex-design-system
# or
pnpm add apex-design-system
```

### Basic Usage

```tsx
import { Button, Input, Card } from 'apex-design-system';
import 'apex-design-system/dist/styles.css';

function App() {
  return (
    <Card>
      <h2>Welcome to Your App</h2>
      <Input
        placeholder="Enter your email"
        type="email"
      />
      <Button variant="primary" size="md">
        Get Started
      </Button>
    </Card>
  );
}
```

## 📦 Components

### Form Components
- **Button** - Call-to-action buttons with variants (primary, secondary, outline, ghost, danger)
- **Input** - Text inputs with validation states
- **Select** - Dropdown selects with search
- **Checkbox** - Single and group checkboxes
- **Radio** - Radio button groups
- **Switch** - Toggle switches
- **Textarea** - Multi-line text inputs

### Display Components
- **Card** - Content containers
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallbacks
- **Progress** - Progress bars and indicators
- **Separator** - Visual dividers
- **Alert** - Notifications and messages
- **Toast** - Temporary notifications

### Navigation Components
- **Tabs** - Tabbed interfaces
- **Accordion** - Collapsible content sections

### Overlay Components
- **Dialog/Modal** - Modal dialogs
- **Tooltip** - Contextual help text

### Utility Components
- **Skeleton** - Loading placeholders
- **Spinner** - Loading indicators

## 🎨 Foundation

### Colors
- **Primary** - Blue scale for primary actions and branding
- **Gray** - Neutral scale for text and backgrounds
- **Semantic** - Success (green), warning (yellow), danger (red), info (blue)

### Typography
- **Font Family** - Inter for UI, system fonts fallback
- **Type Scale** - xs, sm, base, lg, xl, 2xl, 3xl, 4xl
- **Font Weights** - Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing
- **Base Unit** - 8px grid system
- **Scale** - 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## 📚 Documentation

Explore the full component library and guidelines in Storybook:

```bash
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) to browse:
- **Foundation** - Colors, typography, spacing
- **Components** - All components with interactive examples
- **Patterns** - Common composition patterns
- **Guidelines** - Design principles and best practices

## 🛠 Tech Stack

- **React** 19.2.0 - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** 3.4.17 - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Storybook** 10.2.1 - Component documentation
- **Vite** 7.2.4 - Build tool
- **Class Variance Authority** - Component variants
- **Lucide React** - Icon system

## 🌐 Browser Support

- **Chrome** - Latest 2 versions
- **Firefox** - Latest 2 versions
- **Safari** - Latest 2 versions
- **Edge** - Latest 2 versions

## 🏗 Development

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd apex-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for deployment
- `npm run lint` - Run ESLint

## 📖 Usage Guidelines

### When to Use This Design System

This design system is optimized for:
- **Enterprise SaaS Applications** - B2B products with complex data and workflows
- **Admin Dashboards** - Internal tools and management interfaces
- **Data-Heavy Interfaces** - Tables, forms, and analytics
- **Professional Applications** - Where clarity and efficiency are priorities

### Design Principles

1. **Consistency** - Predictable patterns and behaviors across all components
2. **Clarity** - Clear visual hierarchy and intuitive interactions
3. **Efficiency** - Optimized for productivity and task completion
4. **Accessibility** - Usable by everyone, including keyboard and screen reader users

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting PRs.

## 📞 Support

For questions and support, please open an issue in the GitHub repository.

---

Built with ❤️ for enterprise SaaS applications
