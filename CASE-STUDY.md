# APEX Design System — Case Study

## Building a Production-Grade Design System with CLI Tooling

---

## Overview

APEX is a complete design system for SaaS/B2B applications, built from the ground up with React 19, TypeScript, and Tailwind CSS. It includes 31 accessible, theme-aware components, interactive documentation via Storybook, and a published CLI tool (`apex-design-cli` on npm) that lets developers install components directly into their projects with a single command.

**Live Demo:** [Storybook on Vercel](https://saas-design-system.vercel.app)
**CLI on npm:** [npmjs.com/package/apex-design-cli](https://www.npmjs.com/package/apex-design-cli)
**CLI Repository:** [github.com/Alehopi/apex-cli](https://github.com/Alehopi/apex-cli)
**Design System Repository:** [github.com/Alehopi/saas-design-system](https://github.com/Alehopi/saas-design-system)

---

## The Problem

Most design systems in the industry fall into one of two extremes:

1. **Published npm packages** (Material UI, Chakra UI) — easy to install but hard to customize. You're locked into their API and styling decisions.
2. **Copy-paste collections** (early Tailwind UI) — fully customizable but no installation tooling, no dependency management, no versioning.

**Shadcn/ui** pioneered a third approach: a CLI that copies component source code directly into your project, giving you full ownership while automating the tedious parts (file placement, dependency resolution, import configuration). Only a handful of design systems in the industry have implemented this pattern.

The goal was to build a design system that covers the full spectrum — from design tokens to automated installation — at the quality level expected of a senior frontend engineer.

---

## Phase 1: Design System + Documentation + Deployment

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Component primitives | Radix UI | Headless, accessible by default, composable. 13 Radix primitives used. |
| Variant management | CVA (Class Variance Authority) | Type-safe variant API, works natively with Tailwind. |
| Styling | Tailwind CSS 3 + CSS custom properties | Utility-first with semantic design tokens for theming. |
| Documentation | Storybook 10 + MDX | Interactive playground, accessibility auditing, responsive testing. |
| Testing | Vitest + Testing Library + vitest-axe | Fast, React 19 compatible, axe-core for accessibility. |
| Deployment | Vercel | Zero-config, auto-deploys from GitHub on every push. |

### Component Library — 31 Components

Built with a strict file convention per component:

```
src/components/{Name}/
├── {Name}.tsx            # Component implementation
├── {Name}.stories.tsx    # Storybook stories
├── {Name}.mdx            # Documentation
├── {Name}.test.tsx        # Tests (all components)
└── index.ts              # Public exports
```

**Organized by category:**

| Category | Components |
|----------|-----------|
| **Inputs** (7) | Button, Input, Textarea, Select, Checkbox, Radio, Switch |
| **Display** (4) | Badge, Avatar, Card, Tooltip |
| **Feedback** (6) | Alert, Toast, Progress, Spinner, EmptyState, Skeleton |
| **Overlay** (4) | Dialog, DropdownMenu, Command, Tooltip |
| **Navigation** (4) | Accordion, Tabs, Breadcrumb, Pagination |
| **Data Display** (1) | Table |
| **Utility** (6) | Label, HelperText, ErrorMessage, FieldGroup, Divider, ThemeToggler |

Plus **4 application patterns**: DashboardLayout, LoginForm, SettingsPage, ListDetail.

### Design Token System

All visual properties are driven by CSS custom properties, enabling runtime theming:

```css
:root {
  --color-bg-primary: #ffffff;
  --color-fg-primary: #0f172a;
  --color-border-default: #e2e8f0;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  /* 20+ semantic tokens */
}

.dark {
  --color-bg-primary: #0f172a;
  --color-fg-primary: #f8fafc;
  /* Full dark mode overrides */
}
```

Tokens are mapped to Tailwind via `tailwind.config.ts`, so components use semantic class names like `bg-semantic-bg-primary` instead of hard-coded colors.

### Accessibility — WCAG 2.1 AA

Accessibility was not an afterthought. It was enforced at three levels:

1. **Component level** — Radix UI primitives provide keyboard navigation, focus management, and ARIA attributes out of the box. Additional attributes added where needed (`aria-live="assertive"` for ErrorMessage, `role="group"` for FieldGroup, `role="region"` for EmptyState).

2. **Visual level** — Disabled states use explicit color tokens (not `opacity-50`) to maintain 4.5:1 contrast ratio. Focus indicators use `focus-visible:ring-2` for keyboard-only visibility. Placeholder text meets AA contrast requirements.

3. **Testing level** — 134 automated tests across all 31 components using vitest-axe, which runs axe-core accessibility audits against rendered components. Every component has dedicated test coverage including axe-core accessibility audits and behavioral assertions. Storybook's `@storybook/addon-a11y` provides real-time auditing during development.

4. **Motion** — Global `prefers-reduced-motion` support disables all animations and transitions for users who request it.

### Dark Mode

Complete dark mode support across all 31 components using a class-based strategy (`darkMode: 'class'` in Tailwind). A custom `ThemeProvider` + `useTheme` hook manages theme state with three modes: light, dark, and system (follows OS preference). The `ThemeToggler` component provides a three-way toggle UI.

### Storybook Documentation

**49 stories** organized into four sections:

- **Guidelines** (7): Introduction, Design Principles, Theming Guide, Accessibility, Grid System, Elevation, Motion
- **Design Tokens** (3): Colors, Typography, Spacing
- **Components** (35): One per component, with variants, states, and responsive demos
- **Patterns** (4): Full-page application layouts

**Addons configured:**
- `@storybook/addon-a11y` — Real-time accessibility auditing
- `@storybook/addon-themes` — Light/dark mode toggle in toolbar
- `@storybook/addon-docs` — MDX documentation rendering
- `@chromatic-com/storybook` — Visual regression testing integration

**Responsive testing** with 4 viewport presets: Mobile (375px), Tablet (768px), Desktop (1280px), Desktop Large (1920px).

### Deployment

Deployed on Vercel with automatic CI/CD:

```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "installCommand": "npm install --legacy-peer-deps"
}
```

Every push to `main` triggers a new deployment. The Storybook is publicly accessible as a living documentation site.

---

## Phase 2: CLI Tool

### Why Build a CLI?

The design system is the product. The CLI is the distribution mechanism. Without it, a developer would need to:

1. Clone the repository
2. Find the right component file
3. Copy it manually
4. Figure out which npm packages it needs
5. Install those packages
6. Fix all the import paths

The CLI automates all of this into a single command: `npx apex-design-cli add button`.

The CLI is **published on npm** as [`apex-design-cli`](https://www.npmjs.com/package/apex-design-cli), making it immediately usable by anyone. Only ~5% of design systems in the industry have CLI tooling. This follows the approach pioneered by Shadcn/ui and adopted by Vercel's design systems.

### CLI Architecture

**Tech stack:**

| Package | Purpose |
|---------|---------|
| Commander.js | CLI framework — command parsing, arguments, flags |
| Prompts | Interactive terminal prompts (text, confirm, select) |
| Chalk | Terminal color formatting |
| Ora | Loading spinners for async operations |
| fs-extra | Enhanced filesystem operations |
| Zod | Runtime schema validation for configuration |
| Execa | Cross-platform process execution |
| tsup | TypeScript bundler (ESM output) |

**~1,000 lines of TypeScript** across 10 source files:

```
src/
├── index.ts                 # CLI entry point (Commander.js)
├── commands/
│   ├── init.ts              # Project initialization (278 LOC)
│   ├── add.ts               # Component installation (200 LOC)
│   └── list.ts              # Component catalog (90 LOC)
└── utils/
    ├── registry.ts          # Registry loading + dependency resolution (111 LOC)
    ├── config.ts            # Zod-validated configuration (83 LOC)
    ├── transformer.ts       # Import path transformation (57 LOC)
    ├── installer.ts         # Package manager abstraction (55 LOC)
    ├── project-detector.ts  # Project type detection (54 LOC)
    └── logger.ts            # Formatted console output (31 LOC)
```

### The Component Registry

The registry is the central data layer — 33 JSON files that describe every component:

```
registry/
├── registry.json              # Master index (31 component names)
└── components/
    ├── button.json            # Component metadata
    ├── dialog.json
    ├── pagination.json        # Navigation component
    ├── skeleton.json          # Loading placeholder
    ├── utils.json             # Shared utility (cn function)
    ├── use-theme.json         # Theme hook
    └── ... (33 files)
```

Each component JSON contains:

```json
{
  "name": "button",
  "type": "registry:ui",
  "title": "Button",
  "description": "An interactive element that triggers actions with multiple variants and sizes.",
  "category": "inputs",
  "files": [
    {
      "path": "../../saas-design-system/src/components/Button/Button.tsx",
      "target": "components/ui/button.tsx"
    }
  ],
  "dependencies": [
    "class-variance-authority@^0.7.1",
    "lucide-react@^0.563.0"
  ],
  "registryDependencies": ["utils"],
  "exports": ["Button", "buttonVariants", "ButtonProps"]
}
```

Key fields:
- **files.path** — Where to read the source code from
- **files.target** — Where to write it in the user's project
- **dependencies** — npm packages to install automatically
- **registryDependencies** — Internal components that must be co-installed (e.g., every component depends on `utils` for the `cn()` function)
- **type** — Determines target directory (`registry:ui` → components/, `registry:hook` → hooks/, `registry:lib` → lib/)

### Command: `init`

Prepares a project for APEX components:

```
apex-design-cli init
├── 1. Detect project environment
│   ├── Package manager: npm | yarn | pnpm | bun (via lockfile detection)
│   ├── TypeScript: tsconfig.json presence
│   └── Framework: Next.js | Vite | React (via package.json dependencies)
│
├── 2. Interactive configuration (or --yes for defaults)
│   ├── Component path (./src/components/ui)
│   ├── Utilities path (./src/lib)
│   ├── Hooks path (./src/hooks)
│   ├── Path aliases (@/ prefix)
│   └── Tailwind/CSS file locations
│
├── 3. Project setup
│   ├── Write apex.config.json (Zod-validated schema)
│   ├── Create directory structure
│   ├── Create utils.ts with cn() function (clsx + tailwind-merge)
│   ├── Inject CSS design tokens (light + dark + reduced-motion)
│   └── Configure tsconfig.json path aliases (@/* → ./src/*)
│
└── 4. Install base dependencies
    └── clsx, tailwind-merge, class-variance-authority
```

### Command: `add`

The core command. Installs components with full dependency resolution:

```
apex-design-cli add button dialog card
├── 1. Load apex.config.json
├── 2. Validate component names against registry
├── 3. Resolve dependency tree (BFS algorithm)
│   └── button → [utils]
│   └── dialog → [utils]
│   └── card → [utils]
│   └── Deduplicated: button, dialog, card, utils
│
├── 4. Detect file conflicts (prompt to overwrite)
├── 5. Install npm dependencies
│   └── class-variance-authority, @radix-ui/react-dialog, lucide-react
│
├── 6. Copy + transform files
│   ├── Read source from design system
│   ├── Transform imports:
│   │   BEFORE: import { cn } from '../../lib/utils'
│   │   AFTER:  import { cn } from '@/lib/utils'
│   └── Write to target directory
│
└── 7. Display success + import examples
    └── import { Button } from '@/components/ui/button'
```

#### Dependency Resolution Algorithm

The `resolveDependencyTree()` function uses breadth-first search to resolve all transitive dependencies:

```typescript
// Simplified algorithm
async function resolveDependencyTree(names: string[]) {
  const resolved = new Map();
  const queue = [...names];

  while (queue.length > 0) {
    const name = queue.shift();
    if (resolved.has(name)) continue;

    const component = await loadComponentRegistry(name);
    resolved.set(name, component);

    for (const dep of component.registryDependencies) {
      if (!resolved.has(dep)) queue.push(dep);
    }
  }

  return Array.from(resolved.values());
}
```

This ensures that when you install `theme-toggler`, the `use-theme` hook and `utils` are automatically included — no manual dependency tracking needed.

#### Import Path Transformation

Components in the design system use relative imports (`../../lib/utils`). When copied to a user's project, these need to match their configuration. The transformer uses regex-based rewriting:

```
../../lib/utils       → @/lib/utils
../../hooks/useTheme  → @/hooks/use-theme
../ComponentName      → @/components/ui/component-name
```

It also converts PascalCase to kebab-case (`ThemeToggler` → `theme-toggler`) and respects the user's alias configuration.

### Command: `list`

Displays the full component catalog grouped by category:

```
  APEX Design System v1.0.0
  31 components available

  INPUTS
  ────────────────────────────────────────────────
    button               CVA
    An interactive element that triggers actions...
    checkbox             Radix
    A control that allows toggling between states...

  DISPLAY
  ────────────────────────────────────────────────
    avatar               Radix CVA
    ...
```

Components are tagged with **Radix** (uses Radix UI primitives) and/or **CVA** (uses Class Variance Authority) badges.

---

## Technical Metrics

| Metric | Value |
|--------|-------|
| **UI Components** | 31 |
| **Application Patterns** | 4 |
| **Storybook Stories** | 49 |
| **MDX Documentation Pages** | 31 |
| **Automated Tests** | 134 (100% component coverage, accessibility audits on every component) |
| **Test Coverage** | 31/31 components (100%) |
| **Radix UI Primitives** | 13 packages |
| **CLI Source Code** | ~1,000 LOC (TypeScript) |
| **CLI Published** | [apex-design-cli on npm](https://www.npmjs.com/package/apex-design-cli) |
| **Registry Files** | 33 JSON component descriptors |
| **Design Tokens** | 100+ CSS custom properties (light + dark) |
| **Accessibility Standard** | WCAG 2.1 AA |
| **Dark Mode** | Full coverage (all 31 components) |
| **Responsive Breakpoints** | 4 (375px, 768px, 1280px, 1920px) |
| **Supported Package Managers** | 4 (npm, yarn, pnpm, bun) |
| **Supported Frameworks** | 4 (React, Next.js, Vite, other) |

---

## Developer Experience Flow

```bash
# 1. Create a new React project
npm create vite@latest my-app -- --template react-ts
cd my-app

# 2. Initialize APEX
npx apex-design-cli init
# ✔ Detected: vite (TypeScript) with npm
# ✔ Project configured
# ✔ Base dependencies installed
# ✅ APEX Design System initialized!

# 3. Browse available components
npx apex-design-cli list
# Shows 31 components organized by category

# 4. Install components
npx apex-design-cli add button card input dialog
# ✔ Dependencies resolved
# ℹ Auto-including Utils (required dependency)
# ✔ Installed 5 dependencies
# ✔ Copied 5 files
# ✅ Components installed successfully!

# 5. Use immediately
# import { Button } from '@/components/ui/button'
```

From zero to working components in under 2 minutes.

---

## Key Engineering Decisions

### Why copy-paste over npm package?

Publishing as an npm package means developers import pre-built components they can't easily modify. The copy-paste approach (via CLI) gives developers:

- **Full ownership** of the source code
- **No version lock-in** — the code is theirs to evolve
- **Easy customization** — modify variants, styles, or behavior directly
- **No bundle overhead** — only installed components are included

The trade-off is that updates require re-running the CLI, but the explicit ownership model is what makes this approach increasingly popular in the React ecosystem.

### Why Radix UI as the primitive layer?

Radix provides headless, accessible components that handle the hard parts (keyboard navigation, focus trapping, ARIA attributes, screen reader support) without imposing any visual design. This means APEX components get enterprise-grade accessibility for free while maintaining complete control over styling.

### Why CVA for variants?

CVA provides a type-safe API for defining component variants that works natively with Tailwind CSS. It replaces ad-hoc `className` concatenation with a structured, autocompletable variant system:

```typescript
const buttonVariants = cva('base-classes', {
  variants: {
    variant: { primary: '...', secondary: '...', ghost: '...' },
    size: { sm: '...', md: '...', lg: '...' }
  },
  defaultVariants: { variant: 'primary', size: 'md' }
});
```

### Why BFS for dependency resolution?

Breadth-first search ensures that dependencies are resolved level by level, preventing circular dependency issues and guaranteeing that shared dependencies (like `utils`) are only processed once. The `Map`-based deduplication means that even complex dependency graphs resolve correctly.

---

## What I Learned

1. **CLI tooling is a multiplier.** The design system has value on its own, but the CLI transforms it from a code repository into a developer tool. Publishing it to npm (`apex-design-cli`) made it real — anyone can run `npx apex-design-cli add button` and have a working component in seconds. It changes the perception from "a collection of components" to "an installable system."

2. **Accessibility is a feature, not a checkbox.** Using Radix UI as a foundation and enforcing axe-core audits in tests caught issues that manual testing missed. Semantic color tokens for disabled states (instead of opacity hacks) was a non-obvious but important detail for WCAG compliance. Having 134 tests across 100% of components ensures regressions are caught immediately.

3. **Registry design matters.** The JSON-based component registry is the single source of truth that makes the CLI possible. Getting the schema right (especially `registryDependencies` for internal dependencies and `type` for file routing) was the key architectural decision.

4. **Import transformation is deceptively complex.** Regex-based import rewriting handles 90% of cases, but edge cases (re-exports, dynamic imports, type-only imports) require careful pattern ordering. The transformer processes patterns from most specific to least specific to avoid false matches.

5. **Test coverage builds confidence.** Going from 8 tested components to 31 (100%) revealed subtle issues — `cmdk` needing `ResizeObserver` polyfills in jsdom, Toast components requiring async rendering, and ThemeToggler depending on mock context. Each fix improved the test infrastructure for the whole project.

---

## Tech Stack Summary

### Design System
React 19 | TypeScript | Tailwind CSS 3 | Radix UI (13 primitives) | CVA | Storybook 10 | Vitest | vitest-axe | Vite | Vercel

### CLI Tool (Published: [apex-design-cli on npm](https://www.npmjs.com/package/apex-design-cli))
Node.js | TypeScript | Commander.js | Zod | Prompts | Chalk | Ora | Execa | fs-extra | tsup
