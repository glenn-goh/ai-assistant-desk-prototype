# Migration Checklist

## Phase 0 — Setup

- [ ] Screenshot baseline captured (`screenshots/before/`)
- [ ] Playwright installed and screenshot script working
- [ ] pixelmatch installed for verification

## Phase 1 — Component Extraction

- [ ] Codebase scanned for duplicate patterns
- [ ] Extraction report generated (`migration-status/extraction-report.md`)
- [ ] Components extracted into `src/components/shared/`
- [ ] All usages updated to use extracted components
- [ ] `npm run dev` passes
- [ ] Visual check — no regressions from extraction
- [ ] Committed: `refactor: extract reusable components`

## Phase 2 — Mantine Setup

- [ ] Mantine packages installed:
  - [ ] `@mantine/core`
  - [ ] `@mantine/hooks`
  - [ ] `@mantine/form` (if forms are used)
  - [ ] `@mantine/notifications` (if toasts/notifications are used)
  - [ ] `@mantine/modals` (if modal manager needed)
- [ ] PostCSS plugin configured: `postcss-preset-mantine`
- [ ] `src/theme/theme.ts` created from Tailwind config analysis
- [ ] `MantineProvider` wraps app in root component
- [ ] Mantine CSS imported in main entry file
- [ ] `npm run dev` passes
- [ ] Committed: `chore: add Mantine and create theme config`

## Phase 3 — File-by-file Migration

### Shared components (migrate first)

| File | Status | Notes |
|------|--------|-------|
| `src/components/shared/...` | ⬜ | |
| | ⬜ | |
| | ⬜ | |

### Feature components

| File | Status | Notes |
|------|--------|-------|
| | ⬜ | |
| | ⬜ | |
| | ⬜ | |

### Page components

| File | Status | Notes |
|------|--------|-------|
| | ⬜ | |
| | ⬜ | |
| | ⬜ | |

### Layout / Shell

| File | Status | Notes |
|------|--------|-------|
| | ⬜ | |
| | ⬜ | |

**Status key:** ⬜ Not started | 🔄 In progress | ✅ Done | ⚠️ Needs review

## Phase 4 — Tailwind Removal

- [ ] All component files have zero Tailwind classes (verified by grep)
- [ ] `tailwindcss` package removed
- [ ] `tailwind.config.js` / `tailwind.config.ts` deleted
- [ ] PostCSS Tailwind plugin removed from `postcss.config.js`
- [ ] `@tailwind` directives removed from CSS files
- [ ] `autoprefixer` removed (if only used for Tailwind)
- [ ] Tailwind-related dev dependencies removed
- [ ] `npm run dev` passes
- [ ] Committed: `chore: remove Tailwind CSS`

## Phase 5 — Verification

- [ ] Post-migration screenshots captured (`screenshots/after/`)
- [ ] Visual regression report generated (`migration-status/visual-regression-report.md`)
- [ ] All critical differences resolved
- [ ] All major differences resolved or accepted
- [ ] Minor differences reviewed and accepted
- [ ] Manual browser check of all pages at mobile, tablet, desktop
- [ ] All interactive elements tested (modals, dropdowns, hover states)
- [ ] Final commit: `feat: complete Tailwind to Mantine migration`

## Post-migration cleanup

- [ ] Remove `tailwind-to-mantine-map.md` (no longer needed)
- [ ] Remove `screenshots/` directory (or archive)
- [ ] Update README if it references Tailwind
- [ ] Update any CI/CD scripts that reference Tailwind
- [ ] Delete any unused CSS files
- [ ] Review for any remaining `className` props that could be simplified
