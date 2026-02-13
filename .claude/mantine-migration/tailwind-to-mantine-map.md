# Tailwind → Mantine Mapping Reference

This file is a lookup table for the migration agent. It maps common Tailwind patterns to their Mantine equivalents.

> **Note:** This is a generic mapping. Once the actual `tailwind.config.js` is analyzed, this file should be updated with project-specific custom values.

---

## Layout

| Tailwind | Mantine |
|----------|---------|
| `flex` | `<Flex>` or `<Group>` / `<Stack>` |
| `flex flex-row items-center` | `<Group>` |
| `flex flex-col` | `<Stack>` |
| `flex flex-wrap` | `<Flex wrap="wrap">` |
| `flex-1` | `<Box style={{ flex: 1 }}>` or `flex: 1` in CSS module |
| `flex-shrink-0` | CSS module: `flex-shrink: 0` |
| `inline-flex` | `<Flex display="inline-flex">` |
| `grid grid-cols-{n}` | `<SimpleGrid cols={n}>` |
| `grid grid-cols-{n} gap-{n}` | `<SimpleGrid cols={n} spacing="...">` |
| `gap-{n}` | `gap="xs\|sm\|md\|lg\|xl"` prop |
| `justify-center` | `justify="center"` prop |
| `justify-between` | `justify="space-between"` prop |
| `justify-end` | `justify="flex-end"` prop |
| `items-center` | `align="center"` prop |
| `items-start` | `align="flex-start"` prop |
| `items-end` | `align="flex-end"` prop |
| `self-center` | CSS module: `align-self: center` |

## Container / Width

| Tailwind | Mantine |
|----------|---------|
| `container mx-auto` | `<Container>` |
| `max-w-sm` | `<Container size="xs">` |
| `max-w-md` | `<Container size="sm">` |
| `max-w-lg` | `<Container size="md">` |
| `max-w-xl` | `<Container size="lg">` |
| `max-w-4xl mx-auto` | `<Container size="lg">` |
| `max-w-6xl mx-auto` | `<Container size="xl">` |
| `max-w-full` | `<Container size="100%">` or `<Box w="100%">` |
| `w-full` | `w="100%"` prop |
| `w-1/2` | `w="50%"` prop |
| `h-full` | `h="100%"` prop |
| `min-h-screen` | `mih="100vh"` prop |

## Spacing

| Tailwind | Pixels | Mantine prop | CSS variable |
|----------|--------|-------------|-------------|
| `p-0` / `m-0` | 0 | `p={0}` / `m={0}` | — |
| `p-0.5` / `m-0.5` | 2px | `p={2}` | — |
| `p-1` / `m-1` | 4px | `p={4}` | `var(--mantine-spacing-xxs)` (if defined) |
| `p-2` / `m-2` | 8px | `p="xs"` | `var(--mantine-spacing-xs)` |
| `p-3` / `m-3` | 12px | `p="sm"` | `var(--mantine-spacing-sm)` |
| `p-4` / `m-4` | 16px | `p="md"` | `var(--mantine-spacing-md)` |
| `p-5` / `m-5` | 20px | `p="lg"` | `var(--mantine-spacing-lg)` |
| `p-6` / `m-6` | 24px | `p="xl"` | `var(--mantine-spacing-xl)` |
| `p-8` / `m-8` | 32px | `p={32}` | — |
| `p-10` / `m-10` | 40px | `p={40}` | — |
| `p-12` / `m-12` | 48px | `p={48}` | — |
| `px-*` | — | `px="..."` | — |
| `py-*` | — | `py="..."` | — |
| `pt-*` | — | `pt="..."` | — |
| `pb-*` | — | `pb="..."` | — |
| `pl-*` | — | `pl="..."` | — |
| `pr-*` | — | `pr="..."` | — |
| `mt-*` | — | `mt="..."` | — |
| `mb-*` | — | `mb="..."` | — |
| `ml-auto` | — | `ml="auto"` | — |
| `mr-auto` | — | `mr="auto"` | — |
| `space-y-*` | — | `<Stack gap="...">` | — |
| `space-x-*` | — | `<Group gap="...">` | — |

## Typography

| Tailwind | Mantine |
|----------|---------|
| `text-xs` | `<Text size="xs">` / `fz="xs"` / `var(--mantine-font-size-xs)` |
| `text-sm` | `<Text size="sm">` / `fz="sm"` / `var(--mantine-font-size-sm)` |
| `text-base` | `<Text size="md">` / `fz="md"` / `var(--mantine-font-size-md)` |
| `text-lg` | `<Text size="lg">` / `fz="lg"` / `var(--mantine-font-size-lg)` |
| `text-xl` | `<Text size="xl">` / `fz="xl"` / `var(--mantine-font-size-xl)` |
| `text-2xl` | `<Title order={3}>` or `fz={24}` |
| `text-3xl` | `<Title order={2}>` or `fz={30}` |
| `text-4xl` | `<Title order={1}>` or `fz={36}` |
| `font-normal` | `fw={400}` |
| `font-medium` | `fw={500}` |
| `font-semibold` | `fw={600}` |
| `font-bold` | `fw={700}` |
| `italic` | `fs="italic"` |
| `uppercase` | `tt="uppercase"` |
| `lowercase` | `tt="lowercase"` |
| `capitalize` | `tt="capitalize"` |
| `text-center` | `ta="center"` |
| `text-right` | `ta="right"` |
| `text-left` | `ta="left"` |
| `leading-tight` | `lh={1.25}` |
| `leading-normal` | `lh={1.5}` |
| `leading-relaxed` | `lh={1.75}` |
| `truncate` | `<Text truncate>` |
| `line-clamp-{n}` | `<Text lineClamp={n}>` |
| `underline` | `td="underline"` |
| `no-underline` | `td="none"` |

## Colors

| Tailwind | Mantine prop | CSS variable |
|----------|-------------|-------------|
| `text-gray-500` | `c="gray.5"` | `var(--mantine-color-gray-5)` |
| `text-gray-600` | `c="dimmed"` or `c="gray.6"` | `var(--mantine-color-dimmed)` |
| `text-gray-900` | `c="dark"` | `var(--mantine-color-dark-9)` |
| `text-white` | `c="white"` | `var(--mantine-color-white)` |
| `text-blue-500` | `c="blue.5"` | `var(--mantine-color-blue-5)` |
| `bg-white` | `bg="white"` | `var(--mantine-color-white)` |
| `bg-gray-50` | `bg="gray.0"` | `var(--mantine-color-gray-0)` |
| `bg-gray-100` | `bg="gray.1"` | `var(--mantine-color-gray-1)` |
| `bg-blue-500` | `bg="blue.5"` | `var(--mantine-color-blue-5)` |
| `border-gray-200` | CSS: `border-color: var(--mantine-color-gray-2)` |
| `border-gray-300` | CSS: `border-color: var(--mantine-color-gray-3)` |

> **Note:** Tailwind gray shades don't map 1:1 to Mantine. Tailwind uses 50-900, Mantine uses 0-9. Approximate mapping: Tailwind 50→Mantine 0, 100→1, 200→2, 300→3, 400→4, 500→5, 600→6, 700→7, 800→8, 900→9.

## Borders & Radius

| Tailwind | Mantine |
|----------|---------|
| `rounded-none` | `radius={0}` / `var(--mantine-radius-none)` |
| `rounded-sm` | `radius="xs"` / `var(--mantine-radius-xs)` |
| `rounded` | `radius="sm"` / `var(--mantine-radius-sm)` |
| `rounded-md` | `radius="md"` / `var(--mantine-radius-md)` |
| `rounded-lg` | `radius="lg"` / `var(--mantine-radius-lg)` |
| `rounded-xl` | `radius="xl"` / `var(--mantine-radius-xl)` |
| `rounded-full` | `radius="xl"` or `radius={9999}` |
| `border` | `withBorder` prop on Card, etc. or CSS module |
| `border-2` | CSS module: `border: 2px solid var(--mantine-color-gray-3)` |
| `border-t` | CSS module: `border-top: 1px solid ...` |
| `divide-y` | `<Divider>` between items |

## Shadows

| Tailwind | Mantine |
|----------|---------|
| `shadow-sm` | `shadow="xs"` / `var(--mantine-shadow-xs)` |
| `shadow` | `shadow="sm"` / `var(--mantine-shadow-sm)` |
| `shadow-md` | `shadow="md"` / `var(--mantine-shadow-md)` |
| `shadow-lg` | `shadow="lg"` / `var(--mantine-shadow-lg)` |
| `shadow-xl` | `shadow="xl"` / `var(--mantine-shadow-xl)` |
| `shadow-none` | `shadow="none"` |

## Position & Display

| Tailwind | Mantine / CSS Module |
|----------|---------------------|
| `relative` | `pos="relative"` or CSS module |
| `absolute` | `pos="absolute"` or CSS module |
| `fixed` | `pos="fixed"` or CSS module |
| `sticky` | `pos="sticky"` or CSS module |
| `top-0` | `top={0}` or CSS module |
| `right-0` | `right={0}` or CSS module |
| `bottom-0` | `bottom={0}` or CSS module |
| `left-0` | `left={0}` or CSS module |
| `z-10` | CSS module: `z-index: 10` |
| `z-50` | CSS module: `z-index: 50` |
| `hidden` | `display="none"` or `<Box hidden>` |
| `block` | `display="block"` |
| `inline-block` | `display="inline-block"` |
| `overflow-hidden` | CSS module: `overflow: hidden` |
| `overflow-auto` | CSS module: `overflow: auto` |
| `overflow-y-auto` | CSS module: `overflow-y: auto` |

## Responsive visibility

| Tailwind | Mantine |
|----------|---------|
| `hidden sm:block` | `visibleFrom="sm"` |
| `hidden md:block` | `visibleFrom="md"` |
| `block md:hidden` | `hiddenFrom="md"` |
| `hidden lg:flex` | `<Flex visibleFrom="lg">` |

## Transitions & Animations

| Tailwind | CSS Module |
|----------|-----------|
| `transition-all` | `transition: all` |
| `transition-colors` | `transition: color, background-color, border-color` |
| `transition-opacity` | `transition: opacity` |
| `transition-transform` | `transition: transform` |
| `duration-150` | `150ms` |
| `duration-200` | `200ms` |
| `duration-300` | `300ms` |
| `ease-in-out` | `ease-in-out` |
| `ease-out` | `ease-out` |
| `transform hover:scale-105` | `.el:hover { transform: scale(1.05) }` |
| `hover:opacity-80` | `.el:hover { opacity: 0.8 }` |

## Interactive states

| Tailwind | Mantine / CSS Module |
|----------|---------------------|
| `hover:bg-gray-100` | CSS: `.el:hover { background-color: var(--mantine-color-gray-1) }` |
| `hover:shadow-md` | CSS: `.el:hover { box-shadow: var(--mantine-shadow-md) }` |
| `focus:ring-2 focus:ring-blue-500` | CSS: `.el:focus { outline: 2px solid var(--mantine-color-blue-5) }` |
| `active:bg-gray-200` | CSS: `.el:active { background-color: var(--mantine-color-gray-2) }` |
| `disabled:opacity-50` | CSS: `.el:disabled { opacity: 0.5 }` |
| `cursor-pointer` | CSS: `cursor: pointer` or Mantine `style={{ cursor: 'pointer' }}` |
| `select-none` | CSS: `user-select: none` |
| `pointer-events-none` | CSS: `pointer-events: none` |

## Mantine CSS variables reference

Full list at: https://mantine.dev/styles/css-variables-list/

Key patterns:
- Spacing: `var(--mantine-spacing-{xs|sm|md|lg|xl})`
- Font size: `var(--mantine-font-size-{xs|sm|md|lg|xl})`
- Color: `var(--mantine-color-{name}-{0-9})`
- Radius: `var(--mantine-radius-{xs|sm|md|lg|xl})`
- Shadow: `var(--mantine-shadow-{xs|sm|md|lg|xl})`
- Line height: `var(--mantine-line-height-{xs|sm|md|lg|xl})`
- Breakpoint: `var(--mantine-breakpoint-{xs|sm|md|lg|xl})`
