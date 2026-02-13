# Component Extraction Agent

## Purpose

Audit the codebase for duplicated UI patterns and extract them into reusable shared components. This runs BEFORE any Tailwind-to-Mantine migration — all extracted components should still use Tailwind at this stage.

## Why this comes first

Vibe-coded repos often have the same card layout, button style, or section wrapper copy-pasted across multiple files. If we migrate first, we'd convert the same pattern 10+ times. Extracting first means we migrate each pattern exactly once.

## Step 1 — Full codebase scan

Read every component file in `src/`. For each file, note:

- The Tailwind classes used
- The JSX structure (what HTML elements, what nesting)
- Props being passed
- Any inline styles
- Any conditional rendering patterns

## Step 2 — Identify extraction candidates

Look for these patterns:

### A. Duplicate UI blocks

JSX blocks that appear in 2+ files with the same or very similar structure. Common culprits:

- **Card patterns**: `div` with padding, shadow, rounded corners, containing a title + body
- **Section wrappers**: `div` with max-width, centering, vertical padding
- **List items**: Repeated row layouts with icon + text + action
- **Form groups**: Label + input + error message wrappers
- **Page headers**: Title + subtitle + breadcrumb combinations
- **Empty states**: Icon + message + CTA button layouts
- **Stat displays**: Number + label + optional trend indicator

### B. Repeated Tailwind class combinations

Look for the same long `className` string appearing in multiple places. For example:

```tsx
// If you see this pattern in 3+ places, it's an extraction candidate
className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
```

### C. Styled wrappers with no logic

Components that are just a `div` with Tailwind classes wrapping `children`. These are prime extraction targets.

## Step 3 — Plan the extractions

For each candidate, create an extraction plan:

```
Component: AppCard
Found in: Dashboard.tsx (3x), Settings.tsx (1x), Profile.tsx (2x)
Common structure:
  - Outer div: rounded-lg, shadow, p-4/p-6, bg-white, border
  - Optional: header section with title
  - Body: children
Variations:
  - Some have onClick (clickable cards)
  - Some have a header, some don't
  - Padding varies: p-4 vs p-6
Props needed:
  - children (required)
  - title (optional)
  - onClick (optional)
  - padding ('sm' | 'md') — to handle p-4 vs p-6
  - className (optional, for one-off overrides)
```

## Step 4 — Extract components

Create extracted components in `src/components/shared/`:

```
src/components/shared/
├── AppCard/
│   ├── AppCard.tsx
│   └── index.ts
├── SectionWrapper/
│   ├── SectionWrapper.tsx
│   └── index.ts
├── PageHeader/
│   ├── PageHeader.tsx
│   └── index.ts
└── ...
```

### Extraction rules:

1. **Keep Tailwind for now** — Don't migrate styling yet, just consolidate
2. **Props over flexibility** — Design a clean props API; don't make it infinitely flexible
3. **Handle variations with props, not separate components** — If cards have 2-3 variants, use a `variant` prop
4. **Preserve existing behavior exactly** — The extraction should be a pure refactor with zero visual change
5. **Update all usages** — Replace every instance of the old inline pattern with the new component
6. **Export from barrel files** — Create `index.ts` for clean imports

### Example extraction:

**Before** (found in 4 files):
```tsx
<div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  <p className="mt-2 text-sm text-gray-600">{description}</p>
</div>
```

**After** (extracted component):
```tsx
// src/components/shared/AppCard/AppCard.tsx
interface AppCardProps {
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function AppCard({ title, children, onClick, className }: AppCardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      onClick={onClick}
    >
      {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
      <div className={title ? 'mt-2' : ''}>{children}</div>
    </div>
  );
}
```

## Step 5 — Verify

After all extractions:

1. Run `npm run dev` — no build errors
2. Visually check every page that uses extracted components — should look identical
3. Run the screenshot agent and compare with baseline — should be pixel-identical

## Step 6 — Generate extraction report

Create `migration-status/extraction-report.md`:

```markdown
# Component Extraction Report

## Extracted Components

| Component | Instances replaced | Source files affected | Notes |
|-----------|-------------------|----------------------|-------|
| AppCard | 6 | Dashboard, Settings, Profile | Added variant prop for compact vs default |
| PageHeader | 4 | All page components | Includes breadcrumb support |
| ... | ... | ... | ... |

## Patterns NOT extracted (and why)

- [Pattern]: Only appeared once, not worth extracting
- [Pattern]: Too variable between instances, would need too many props

## Files modified

- src/pages/Dashboard.tsx — replaced 3 card patterns with AppCard
- ...
```

## Important notes

- This agent should ONLY refactor structure. No styling changes, no Mantine, no new dependencies.
- If unsure whether something should be extracted, err on the side of NOT extracting. We can always extract later.
- Pay attention to event handlers and state — make sure extracted components properly forward refs, events, and don't break existing functionality.
- Commit after this step with message: `refactor: extract reusable components from duplicated patterns`
