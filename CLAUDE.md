# Agent Instructions for NextStarter

This document provides guidelines for AI coding agents working in this Next.js boilerplate repository.

## Project Overview

Next.js v16 (App Router) with TypeScript. See `package.json` for the full dependency list and `.node-version` for the required Node version.

---

### Testing

Playwright is configured for end-to-end testing. When adding tests:

- Use Playwright for end-to-end tests
- Test files live in the `tests/` directory
- Run tests with `npm run test` or `npx playwright test`

---

### Naming Conventions

- **Files and folders**: Use `kebab-case`
- **React components**: PascalCase for component names
- **Component exports**: Default exports at bottom of file
- **Display names**: Set `ComponentName.displayName = "ComponentName"` for debugging

---

## Code Style Guidelines

### TypeScript

- **Path alias**: `@/*` maps to `./src/*` (see `tsconfig.json`)
- **Type imports**: Use `import type` for type-only imports
- **Function style**: Prefer arrow functions (`prefer-arrow-callback`)
- **String concatenation**: Use template literals (`prefer-template`)

### Import Ordering

Imports are automatically sorted by the `simple-import-sort` ESLint plugin. Do not manually reorder imports.

### Formatting

Prettier config is in `.prettierrc.json`. Key ESLint rules to be aware of when writing code:

**ESLint Rules**:

- `no-console`: warn (use sparingly)
- `no-unused-vars`: warn (prefix with `_` for intentional unused vars)
- `sort-keys-fix`: Object keys sorted alphabetically (case-sensitive)
- Ignores: `src/components/ui` (ShadCN components)

### Component Structure

**Server Components (Default)**:

- Default to server components
- No `"use client"` directive needed
- Can use async/await for data fetching

**Client Components**:

- Add `"use client"` directive only when needed:
  - Interactive event handlers (onClick, onChange, etc.)
  - React hooks (useState, useEffect, etc.)
  - Browser-only APIs
  - Third-party libraries requiring client-side

**Component Organization**:

- **Separation of Concerns**: Extract features into separate components for better maintainability
- **Component Directories**: For complex components with sub-components, create a directory with `index.tsx` as the main export and sub-components alongside it
- **Co-location**: Keep related components together in the same directory
- **Shared Logic**: Extract reusable logic, data, and constants into separate files:
  - Export arrays/objects of configuration data
  - Share types between related components
  - Keep index.tsx as the main export

### Documentation

- **JSDoc comments**: Required for all functions and components except:
  - Very simple utility functions
  - Components in `src/components/ui/` (ShadCN components)
- **Include**: Description, parameter types, return types
- **Keep code readable**: Well-documented for maintainability

---

## Styling and Responsiveness

### Tailwind CSS

- **Approach**: Utility-first classes
- **Responsive design**: Mobile-first using Tailwind breakpoints (sm, md, lg, xl)
- **Dark mode**: Use `.dark` class for dark mode styles
- **Class sorting**: Automatically sorted by Prettier plugin
- **Semantic HTML**: Prefer semantic elements over generic `<div>` tags

### Accessibility

- Use semantic HTML and correct roles; prefer native elements (`button`, `a`, `input`) over clickable `div`s
- Provide an accessible name for every interactive control via text, `<label htmlFor>`, `aria-label`, or `aria-labelledby` (icons-only controls must have `aria-label`)
- SVGs and icons: decorative icons must be `aria-hidden="true"` and `focusable="false"`; meaningful icons require `role="img"` with `aria-label` or a `<title>` element
- Keyboard: all UI must be operable with keyboard (Tab, Shift+Tab, Enter/Space); manage focus on open/close of dialogs, trap focus in modals, support `Escape` to dismiss
- State: use `aria-expanded`, `aria-controls`, `aria-pressed`, `aria-selected`, and `aria-live` where appropriate; connect labels with controls via `id`/`aria-*`
- Focus: maintain logical tab order, ensure visible focus outlines, and move focus to the first meaningful element after route changes
- Images/media: provide descriptive `alt` text; avoid relying on color alone; ensure captions/transcripts for media when applicable
- Color/contrast: meet WCAG 2.1 AA contrast; verify both light and dark themes
- Landmarks: use `<header>`, `<nav>`, `<main id="main">`, `<footer>`; include a "Skip to content" link and set `aria-current="page"` on the active nav item
- Testing: use screen readers (VoiceOver/NVDA) and automated checks; include `eslint-plugin-jsx-a11y` and verify with Playwright interactions (focus order, keyboard support)

### Theme Support

- All components must support both light and dark modes
- Use Tailwind dark mode utilities: `dark:bg-gray-800`
- Theme provider configured in root layout
- Default theme: system preference

---

## Data Fetching

- Use `fetch` inside server components for API calls
- Static content can be hardcoded or imported from JSON/MDX
- Prefer `async/await` syntax
- Leverage Next.js caching and revalidation strategies

---

## Metadata and SEO

- Export `metadata` object from page components
- Include: title, description, Open Graph tags, Twitter cards
- Set canonical URLs using `alternates.canonical`
- Use template for page titles: `%s | NextStarter`
- Metadata base URL: `process.env.NEXT_PUBLIC_SITE_URL`

---

## Environment Variables

- Create `.env` file from `.env.example`
- Use `NEXT_PUBLIC_` prefix for client-side accessible variables

---

## Error Handling

- Implement error boundaries for client components
- Use Next.js error.tsx files for error UI
- Custom 404 page: `src/app/not-found.tsx`
- Log errors appropriately (avoid console.log in production)

---

## Performance Optimization

- Optimize images using `next/image`
- Use dynamic imports for code splitting when appropriate
- Leverage server components by default
- Minimize client-side JavaScript bundle size

---

## Git Workflow and Changelog

- Maintain detailed changelog in `CHANGELOG.md`
- Follow semantic versioning for releases
- Document: Added, Changed, Fixed, Removed features in each version
- Write clear, descriptive commit messages

---

## Additional Notes

- VS Code settings and recommended extensions are configured
- Robots.txt and sitemap.xml configured via TypeScript files
- Animations should use Framer Motion (when implemented)
- Keep performance, SEO, and accessibility in mind for every component
