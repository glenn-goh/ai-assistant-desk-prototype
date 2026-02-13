# Migration Agent

## Purpose

Migrate a single file from Tailwind CSS to Mantine v7, completely. After this agent runs on a file, that file should have zero Tailwind classes and fully use Mantine components, style props, and CSS Modules with Mantine CSS variables.

## Prerequisites

Before running this agent on any file:

1. ✅ Screenshot baseline has been captured
2. ✅ Component extraction has been completed
3. ✅ Mantine is installed and `theme.ts` exists in `src/theme/`
4. ✅ MantineProvider wraps the app in the root component
5. ✅ `tailwind-to-mantine-map.md` exists as a reference

## Input

Specify the file to migrate: e.g., `src/components/shared/AppCard/AppCard.tsx`

## Migration process

### Step 1 — Analyze the file

Read the file and catalog:

- All Tailwind classes used (list them)
- The component structure (what elements, what nesting)
- Any responsive classes (`sm:`, `md:`, `lg:`, `xl:`)
- Any state classes (`hover:`, `focus:`, `active:`, `disabled:`)
- Any animation/transition classes
- Lucide icons (these stay as-is)
- Any conditional class logic (template literals, clsx, classnames)

### Step 2 — Plan the conversion

For each element in the JSX, decide its replacement strategy:

```
<div className="flex items-center gap-4 p-6">
  → Mantine: <Group gap="md" p="xl">

<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  → Mantine: <Button>

<div className="grid grid-cols-3 gap-4">
  → Mantine: <SimpleGrid cols={3} spacing="md">

<div className="max-w-4xl mx-auto px-4">
  → Mantine: <Container size="lg">

<div className="bg-white rounded-lg shadow p-4 border">
  → Mantine: <Card shadow="sm" padding="md" radius="sm" withBorder>

<div className="custom-complex-layout ...many classes...">
  → CSS Module: create ComponentName.module.css
```

### Step 3 — Create CSS Module (if needed)

If any element has complex styling that doesn't map cleanly to a Mantine component or style props:

1. Create `ComponentName.module.css` next to the component file
2. ALL values must reference Mantine CSS variables:

```css
.wrapper {
  display: flex;
  align-items: center;
  gap: var(--mantine-spacing-md);
  padding: var(--mantine-spacing-lg);
  background-color: var(--mantine-color-body);
  border: 1px solid var(--mantine-color-gray-3);
  border-radius: var(--mantine-radius-md);
  transition: box-shadow 200ms ease;
}

.wrapper:hover {
  box-shadow: var(--mantine-shadow-md);
}

/* Responsive */
@media (max-width: 48em) {
  .wrapper {
    flex-direction: column;
    padding: var(--mantine-spacing-sm);
  }
}
```

### Step 4 — Convert the component

Rewrite the component file:

1. Add Mantine imports at the top
2. Import CSS module if created
3. Replace each JSX element according to the plan from Step 2
4. Remove ALL Tailwind class references
5. Remove `clsx` / `classnames` imports if no longer needed
6. Keep Lucide icon imports unchanged

### Step 5 — Handle responsive design

Map responsive patterns:

```tsx
// BEFORE (Tailwind)
<div className="flex flex-col md:flex-row gap-2 md:gap-4">
<div className="hidden md:block">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

// AFTER (Mantine)
<Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 'xs', md: 'md' }}>
<Box visibleFrom="md">
<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
```

For CSS Modules:
```css
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--mantine-spacing-sm);
}

@media (min-width: 48em) {
  .layout {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--mantine-spacing-md);
  }
}

@media (min-width: 75em) {
  .layout {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Step 6 — Handle animations and transitions

```tsx
// BEFORE (Tailwind)
className="transition-all duration-300 ease-in-out"
className="transform hover:scale-105"

// AFTER (CSS Module)
.element {
  transition: all 300ms ease-in-out;
}
.element:hover {
  transform: scale(1.05);
}

// For enter/exit animations (modals, tooltips), use Mantine's Transition:
<Transition mounted={opened} transition="fade" duration={200}>
  {(styles) => <div style={styles}>...</div>}
</Transition>
```

### Step 7 — Verify the conversion

After converting:

1. Run `npm run dev` — must compile without errors
2. Open the page in browser — must look identical to before
3. Check all interactive states — hover, click, focus, responsive resize
4. Run: `grep -r "className" src/path/to/file.tsx` — should have NO Tailwind utilities remaining
5. Any remaining `className` should only reference CSS module classes

## Tailwind → Mantine component mapping

| Tailwind pattern | Mantine replacement |
|-----------------|-------------------|
| `flex items-center gap-*` | `<Group>` (horizontal) or `<Flex>` |
| `flex flex-col gap-*` | `<Stack>` (vertical) |
| `grid grid-cols-*` | `<SimpleGrid>` or `<Grid>` |
| `max-w-* mx-auto` | `<Container size="...">` |
| `bg-white rounded shadow p-* border` | `<Card>` |
| `<button>` with styles | `<Button>` |
| `<input>` with styles | `<TextInput>`, `<NumberInput>`, etc. |
| `<select>` with styles | `<Select>` |
| `<textarea>` with styles | `<Textarea>` |
| modal/dialog | `<Modal>` |
| drawer/sidebar panel | `<Drawer>` |
| tooltip | `<Tooltip>` |
| tabs | `<Tabs>` |
| accordion | `<Accordion>` |
| badge/tag | `<Badge>` |
| avatar | `<Avatar>` |
| progress bar | `<Progress>` |
| skeleton/loading | `<Skeleton>` |
| divider/separator | `<Divider>` |
| alert/notification | `<Alert>` or `<Notification>` |
| breadcrumbs | `<Breadcrumbs>` |
| `space-y-*` | `<Stack gap="...">` |
| `divide-y` | Use `<Divider>` between items or `<Stack>` with `separator` |
| `truncate` | `<Text truncate>` |
| `line-clamp-*` | `<Text lineClamp={n}>` |
| `text-sm text-gray-600` | `<Text size="sm" c="dimmed">` |
| `font-bold text-xl` | `<Title order={3}>` or `<Text fw={700} size="xl">` |

## Tailwind spacing → Mantine spacing reference

| Tailwind | Value | Mantine |
|----------|-------|---------|
| `p-1`, `m-1` | 4px | `p="xxs"` or `p={4}` |
| `p-2`, `m-2` | 8px | `p="xs"` |
| `p-3`, `m-3` | 12px | `p="sm"` |
| `p-4`, `m-4` | 16px | `p="md"` |
| `p-5`, `m-5` | 20px | `p="lg"` (adjust in theme if needed) |
| `p-6`, `m-6` | 24px | `p="lg"` |
| `p-8`, `m-8` | 32px | `p="xl"` |
| `p-10`, `m-10` | 40px | `p={40}` or add to theme |
| `p-12`, `m-12` | 48px | `p={48}` or add to theme |

> Note: If the project's Tailwind config has custom spacing, update this mapping accordingly and adjust `theme.ts`.

## Common mistakes to avoid

1. **Don't nest Mantine layout components unnecessarily** — `<Group>` inside `<Flex>` inside `<Stack>` is usually wrong
2. **Don't use `style={{}}` for things that should be props** — `style={{ padding: 16 }}` should be `p="md"`
3. **Don't forget to handle the `key` prop** when converting mapped lists
4. **Don't remove whitespace/spacing** that was provided by Tailwind's `space-*` or `gap-*` without replacing it
5. **Don't convert `className` to `style`** — use Mantine props or CSS modules instead

## Output

After migration, the file should:

- Import from `@mantine/core` (and `@mantine/hooks` if needed)
- Import its CSS module if one was created
- Have zero Tailwind utility classes
- Have zero hardcoded style values (colors, spacing, fonts)
- Look visually identical to before
