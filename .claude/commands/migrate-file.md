# Migrate File from Tailwind to Mantine v8

Migrate a single component file from Tailwind CSS to Mantine v8 with CSS Modules.

**Target file:** `$ARGUMENTS`

## Prerequisites

Before running this command, ensure:
- Mantine v8 is installed (`@mantine/core`, `@mantine/hooks`)
- The theme file exists at `src/theme/theme.ts`
- `@mantine/core/styles.css` is imported in the app entry

## Migration Steps

### 1. Read and catalog

Read the target file and list every Tailwind class used. Group them by category:
- **Layout:** flex, grid, gap, p, m, w, h, etc.
- **Typography:** text-sm, font-medium, etc.
- **Colors:** bg-gray-100, text-gray-900, etc.
- **Borders:** border, rounded-lg, etc.
- **Effects:** shadow, opacity, transition, etc.

### 2. Plan conversion

For each Tailwind class, determine the Mantine equivalent using these references:
- `.claude/mantine-migration/tailwind-to-mantine-map.md` — project-specific mapping
- `.claude/mantine-migration/MIGRATION-INSTRUCTIONS.md` — migration rules

Follow the component hierarchy (from MIGRATION-INSTRUCTIONS.md §3):
1. **Mantine component** — Button, Card, Modal, TextInput, etc.
2. **Mantine layout** — Group, Stack, Flex, Grid, SimpleGrid, Container
3. **Box with style props** — `<Box p="md" bg="gray.1">`
4. **CSS Module** — for complex custom styling

### 3. Convert

- Replace Tailwind `className` strings with Mantine component props, style props, or CSS Module classes
- Create `{ComponentName}.module.css` next to the component file
- Every CSS property must use Mantine CSS variables (`var(--mantine-spacing-md)`, never `16px`)
- Replace Radix UI primitives with Mantine equivalents where they exist (Dialog → Modal, DropdownMenu → Menu, etc.)
- Keep Lucide React icons as-is — do NOT swap to Tabler icons

### 4. Verify zero Tailwind

After conversion, verify that the file has ZERO remaining Tailwind classes:
- Search the file for common Tailwind patterns: `className=".*\b(flex|grid|p-|m-|w-|h-|text-|bg-|border|rounded|shadow|gap|space-|items-|justify-|truncate|transition|hover:|focus:)`
- If any remain, convert them

### 5. Build check

```bash
npm run dev
```

Confirm no build errors.

### 6. Report

Output a summary:
- Tailwind classes removed (count)
- Mantine components added
- CSS Module file created (if any)
- Any Radix → Mantine component swaps
- Remaining issues or manual checks needed

## Rules (from MIGRATION-INSTRUCTIONS.md)

- Migrate the file COMPLETELY — no half-Tailwind, half-Mantine state
- Theme-first: all tokens in `src/theme/theme.ts`, CSS modules reference CSS variables
- No `@mantine/tailwind` bridge library
- No inline `style={{}}` for things that belong in theme or CSS modules
- No hardcoded color/spacing/font-size values
