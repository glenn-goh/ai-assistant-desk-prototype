# CLAUDE.md — Tailwind to Mantine Migration

## Project Overview

This is a Vite + React application being migrated from Tailwind CSS to Mantine v7. The goal is zero visual regression with full adoption of Mantine's component library and theming system.

## Tech Stack

- **Framework:** Vite + React
- **Styling (current):** Tailwind CSS
- **Styling (target):** Mantine v7 with CSS Modules
- **Icons:** Lucide React (keep as-is, do NOT swap to Tabler)
- **Language:** TypeScript / JavaScript (match existing)

## Migration Rules — READ BEFORE EVERY EDIT

### 1. File-by-file migration (no coexistence)

- Migrate one file completely before moving to the next
- A migrated file must have ZERO Tailwind classes remaining
- Never leave a file in a half-Tailwind, half-Mantine state
- After migrating a file, run the dev server to confirm no build errors

### 2. Theme-first approach

- All design tokens live in `src/theme/theme.ts`
- CSS Modules must reference Mantine CSS variables, never hardcoded values
- Use `var(--mantine-spacing-md)` not `16px`
- Use `var(--mantine-color-primary-6)` not `#3b82f6`
- Use `var(--mantine-font-size-sm)` not `14px`
- If a value doesn't exist in the theme, ADD it to the theme file first

### 3. Component hierarchy

When replacing Tailwind-styled elements, follow this priority:

1. **Mantine component** — Use a built-in Mantine component if one exists (Button, Card, Modal, TextInput, Select, etc.)
2. **Mantine layout** — Use Group, Stack, Flex, Grid, SimpleGrid, Container for layout
3. **Mantine Box with style props** — For simple one-off styling (`<Box p="md" bg="gray.1">`)
4. **CSS Module** — For complex custom styling that doesn't fit the above

### 4. CSS Module conventions

- File naming: `ComponentName.module.css`
- Place CSS modules next to their component file
- For shared/theme-level overrides: place in `src/theme/` folder
- Every property value must use CSS variables from the Mantine theme:

```css
/* ✅ CORRECT */
.card {
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-sm);
  font-size: var(--mantine-font-size-sm);
  color: var(--mantine-color-gray-7);
  background-color: var(--mantine-color-body);
}

/* ❌ WRONG — hardcoded values */
.card {
  padding: 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #495057;
  background-color: #ffffff;
}
```

### 5. Responsive design

Tailwind breakpoint prefixes map to Mantine as follows:

| Tailwind | Mantine prop syntax | CSS Module approach |
|----------|-------------------|-------------------|
| `sm:` | `{{ base: '...', sm: '...' }}` | `@media (min-width: em(48em))` using `@mantine/core` |
| `md:` | `{{ base: '...', md: '...' }}` | `@media (min-width: em(62em))` |
| `lg:` | `{{ base: '...', lg: '...' }}` | `@media (min-width: em(75em))` |
| `xl:` | `{{ base: '...', xl: '...' }}` | `@media (min-width: em(88em))` |

For show/hide: use `visibleFrom="md"` and `hiddenFrom="md"` props.

For responsive style props on Mantine components, use object syntax:
```tsx
<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
```

In CSS Modules, use Mantine's breakpoint variables:
```css
.container {
  flex-direction: column;

  @media (min-width: 48em) {
    flex-direction: row;
  }
}
```

### 6. Animations and transitions

- Replace Tailwind `transition-*` classes with CSS Module transitions referencing Mantine variables
- For enter/exit animations (modals, dropdowns), use Mantine's `Transition` component
- For hover states, use CSS Module `:hover` selectors or Mantine's `styles` prop

```css
/* Replacing: transition-all duration-300 ease-in-out */
.element {
  transition: all 300ms ease-in-out;
}

/* Replacing: hover:bg-gray-100 */
.element:hover {
  background-color: var(--mantine-color-gray-1);
}
```

### 7. Icons — Lucide React

- Keep all Lucide React icons as-is
- Do NOT replace with Tabler icons
- Lucide icons work fine inside Mantine components:
```tsx
<Button leftSection={<Search size={16} />}>Search</Button>
```

### 8. What NOT to do

- Do NOT install `@mantine/tailwind` or any bridge library
- Do NOT use inline `style={{}}` for things that should be in the theme or CSS modules
- Do NOT create wrapper components around Mantine components unless there's a genuine reuse case
- Do NOT hardcode any color, spacing, font-size, or radius value — always use theme variables
- Do NOT migrate test files in the same pass as component files

## File Structure (target)

```
src/
├── theme/
│   ├── theme.ts              # Mantine createTheme() config
│   ├── global.module.css     # Global overrides using CSS variables
│   └── component-overrides/  # Per-component Mantine style overrides
│       ├── Button.module.css
│       └── Card.module.css
├── components/
│   ├── shared/               # Extracted reusable components
│   │   ├── AppCard/
│   │   │   ├── AppCard.tsx
│   │   │   └── AppCard.module.css
│   │   └── ...
│   └── features/             # Feature-specific components
├── pages/                    # or routes/
└── ...
```

## Available Agent Commands

Run these with `/claude` or by referencing the agent files:

- `agents/screenshot-agent.md` — Capture baseline and comparison screenshots
- `agents/extraction-agent.md` — Identify and extract reusable components
- `agents/migration-agent.md` — Migrate a specific file from Tailwind to Mantine
- `agents/verification-agent.md` — Compare before/after screenshots

## Migration Order

1. Run screenshot agent to capture baseline
2. Run extraction agent to identify and refactor reusable components
3. Install Mantine and create theme file
4. Migrate shared/reusable components first
5. Migrate page-level components
6. Migrate layout components (App shell, navigation)
7. Remove Tailwind and all related config
8. Run verification agent to compare

## Tailwind → Mantine Quick Reference

See `tailwind-to-mantine-map.md` for the full mapping of classes used in this project.

## Verification

After EVERY file migration:
1. `npm run dev` — must compile without errors
2. Visual check in browser — the component should look identical
3. After full migration: run verification agent for pixel comparison
