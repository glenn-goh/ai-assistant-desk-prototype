# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev    # Start development server (http://localhost:3000, auto-opens browser)
npm run build  # Build for production (outputs to build/)
```

No test or lint commands are configured. Requires Node.js v18+.

## Architecture Overview

React + TypeScript prototype for an AI Assistant Desk application using Vite, Mantine v8, and CSS Modules. Lo-fi wireframe aesthetic with grayscale colors.

**Path alias:** `@` maps to `./src` (configured in vite.config.ts and tsconfig).
**Base path:** `/ai-assistant-desk-prototype/mvp/` (for GitHub Pages deployment).

### Core Application Flow

**App.tsx** is the main orchestrator containing all top-level state:
- Authentication (`isAuthenticated`) → `LoginPage`
- Onboarding (`hasOnboarded`) → `OnboardingPage`
- Main app with sidebar + content area

**Views** controlled by `activeView` state:
- `home` → `HomePage` | `chat` → `ChatSimulatorView` | `explore` → `ExplorePage`
- `studio` → `StudioPage` | `library` → `LibraryPage` | `chats` → `ChatsPage` | `folder` → folder view

**Modes:** `desk` (normal chat) | `studio` (assistant creation)

### Chat Classification System

Three-tier classification drives chat persistence behavior:
- **RSN** (Restricted/Sensitive, Non-Classified): Default, chats are saved to history
- **CCE-SN** (Confidential CE, Sensitive, Non-Classified): Cannot be saved, dark UI treatment
- **CCE-SH** (Confidential CE, Sensitive, Highly Sensitive): Cannot be saved, dark UI treatment

**Incognito mode** is separate from CCE — it is a manual toggle available only for R/SN classification on the home page (`isHomeIncognito` state). CCE chats have their own dark UI treatment but are not "incognito" in the toggle sense. The `incognitoChat` state variable is used for both, but the UX distinction matters.

### Chat Lifecycle

Chats transition through states managed in App.tsx:
1. **Draft** (`activeChatId.startsWith('new-')`) — No messages, no history entry
2. **Preview** (`activeChatId.startsWith('preview-')`) — Created when starting an assistant chat from explore page, converts to real chat on first user message
3. **Real Chat** — Added to `chats` array (only if not CCE classification)
4. **Incognito Chat** — For CCE classifications, stored in separate `incognitoChat` state, never persisted

Active chat is derived with priority: incognito > preview > new draft > regular chats.

**Assistant Chat Naming:** When a user starts a chat with a custom assistant, the header initially shows only the assistant name as the title (no subtitle). After the first user message, the title changes to a predefined mock chat name (from `getAssistantMockTitle()` in App.tsx) and the assistant name becomes the subtitle. This applies to both simulator mode (using `data.assistantName`/`data.title`) and interactive mode (using `assistantName` prop/`interactiveTitle`).

### ChatSimulatorView Dual-Mode Component

`ChatSimulatorView` handles both scripted demos and real interactive chats:

**Simulator Mode** (`mode="simulator"`):
- Uses `data` prop with pre-scripted `ChatSimulation` messages
- Auto-typing animation, thinking states, artifact displays
- User presses Enter to advance through scripted sequence

**Interactive Mode** (`mode="interactive"`):
- Uses `interactiveMessages` and `onSendMessage` props
- Real free-form chat with message history
- Same UI styling as simulator

### Simulation Data Format

Pre-scripted conversation flows in `src/data/`. Each simulation has `id`, `title` (shown after first user message), optional `assistantName` (shown as title before first user message, subtitle after), and `messages`. Bot responses can be:
- `ThinkingResponse` — `{type: "thinking", thought?, reasoning?: string[], timingMs?, doneSummary?, tags?}`
- `TextResponse` — `{type: "text", content: string, delayMs?}`
- `ArtifactResponse` — `{type: "artifact", title, fileType, description, content, delayMs?, interactive?}`
- `AssistantSwitchResponse` — `{type: "assistantSwitch", message: string}`
- `DecisionResponse` — `{type: "decision", question: string, options: string[]}`

### Rich Interactive Response Pipeline

In interactive mode, bot responses flow through `pendingBotResponses` state in App.tsx. These are queued and rendered progressively by `ChatSimulatorView`, supporting the same response types as simulation data. This allows interactive chats to display thinking states, artifacts, and decision cards — not just plain text.

### Key Data Types (defined in App.tsx)

```typescript
interface Message { id, role: 'user' | 'assistant', content, timestamp, hasFile?, fileName? }
interface Chat { id, title, messages: Message[], createdAt, assistantType?, assistantName?, classificationType?, isIncognito? }
interface Folder { id, name, createdAt, chatIds: string[], customInstructions?, files?, memoriesScope }
interface UserProfile { name, email, role, agency, profileDescription?, workFocus?, customInstructions?, traits?, aiStyle?, workActivities?, dataSources? }
```

### Styling

**Stack:** Mantine v8 + CSS Modules + Mantine CSS variables. Tailwind CSS has been fully removed.

**Theme:** Defined in `src/theme/theme.ts` — Mantine `createTheme()` with lo-fi grayscale palette, Source Sans 3 font, custom spacing/radius/shadows. Use Mantine props (`size`, `c`, `fw`, etc.) for component styling; they take precedence over CSS module classes.

**Global styles** in `src/styles/globals.css`:
- 5-color grayscale palette: Gray-100 (lightest) through Gray-900 (darkest), plus red for errors
- User messages: gray-1 background bubbles, right-aligned. Assistant messages: plain text, left-aligned
- 16px font size with 1.7 line-height for messages
- `max-w-chat` custom variable for chat content width constraint (700px)
- `.prose-lofi` class for rendered HTML content with grayscale filter + typography overrides
- Custom animations: `@dotBounce` (thinking indicator), `@shimmer` (thinking text effect)

**Artifact content styling** (`src/styles/artifact-tailwind.css`):
- Artifact HTML content (in `src/data/` simulation files) contains Tailwind CSS class names baked into the HTML strings
- Since Tailwind is removed, a scoped CSS file provides all needed Tailwind utility classes under `.artifact-content` parent selector
- This means Tailwind classes like `flex`, `p-6`, `bg-blue-50`, etc. **only work inside** elements with the `artifact-content` class
- The canvas artifact render in `ChatSimulatorView.tsx` applies `className="prose-lofi artifact-content"` to activate both the lo-fi filter and scoped Tailwind utilities
- If new Tailwind classes are added to artifact HTML, they must be added to `artifact-tailwind.css`

**CSS conventions:**
- Use CSS Modules (`.module.css`) for component-specific styles
- Use Mantine component props for size/color/spacing where possible (they override CSS module classes)
- Use `var(--mantine-color-gray-*)` and `var(--mantine-font-size-*)` for CSS variable references
- Do NOT use Tailwind classes in component JSX — only in artifact HTML content strings

### Project System

Projects group chats with shared context: custom instructions, uploaded files, and memory scope (`project-only` | `include-external`). Defined in `src/types/project.ts`. Projects appear in the sidebar and can be assigned to chats via the chat header menu.

### State Patterns

- No router — all navigation via `activeView` state in App.tsx
- `ChatSidebar` receives 40+ props from App.tsx for chat/folder/navigation operations
- Feature tracking: `viewedSimulations`, `hasSeenWalkthrough` (persisted to localStorage)
- Bookmark system: max 3 bookmarked assistants with swap modal on overflow
- `homeResetKey` — incremented to force-remount `HomePage` and reset its local state (e.g., after exiting incognito)

### Keyboard Shortcuts

- `Shift+Cmd+O` — New Chat
- `Cmd+K` — Search Chats
- Defined in `handleKeyDown` effect in App.tsx

### Reference Code

`src/reference/` contains reference code provided by the user to be incorporated into the application. Check this folder when implementing features that may have prior art.

### Deployment

Multi-branch GitHub Pages via `.github/workflows/deploy-multi-branch.yml`:
- `main` branch builds to `/` root
- `MVP` branch builds to `/mvp/`
- Both deployed together with an index selector page
- Base path `/ai-assistant-desk-prototype/mvp/` is configured in vite.config.ts for the MVP build

### Design Reference

Original Figma design: https://www.figma.com/design/gOkwlIFZzJLoRd3JF1zp8y/AI-Assistant-Desk--UXD-s-edit


### Mantine Migration (Complete)

Fully migrated from Tailwind CSS 4 + Radix UI to Mantine v8 + CSS Modules. Run `npm run ladle` to view the theme documentation at localhost:61000.

Detailed reference guides are in `.claude/mantine-migration/`:
- `MIGRATION-INSTRUCTIONS.md` — Rules, conventions, and v8-specific notes
- `tailwind-to-mantine-map.md` — Full class-by-class mapping table
- `migration-checklist.md` — Phase-by-phase checklist
- `theme-template.md` — Theme file template with Tailwind config mapping rules

---

## Tailwind to Mantine Migration Guide

This section documents the complete process used to migrate this project. Use it as a reference for similar migrations.

### Phase 1: Setup & Baseline

**1. Install Mantine v8 alongside Tailwind (coexistence during migration)**
```bash
npm install @mantine/core @mantine/hooks
```

**2. Create the Mantine theme file** (`src/theme/theme.ts`)
Map your existing Tailwind config values into Mantine's `createTheme()`:

| Tailwind source | Mantine theme key |
|----------------|-------------------|
| Color palette (gray-100 to gray-900) | `colors.gray` — expand to 10-shade `MantineColorsTuple` |
| `fontFamily` | `fontFamily`, `fontFamilyMonospace` |
| `fontSize` | `fontSizes` — use `rem()` helper: `xs: rem(12), sm: rem(14), md: rem(16)` |
| `spacing` | `spacing` — map Tailwind's 4px multiples: `xs: rem(4), sm: rem(8), md: rem(12)` |
| `borderRadius` | `radius` + `defaultRadius` |
| `boxShadow` | `shadows` |
| `screens` | `breakpoints` |
| `lineHeight` | `lineHeights` |

Also configure component defaults in `components` key to match your existing Radix UI/Tailwind styling (Button radius, Card padding, Modal centering, etc.).

**3. Wrap app in MantineProvider** (`src/main.tsx`)
```tsx
import '@mantine/core/styles.css';
import './styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
```

**4. Capture baseline screenshots** for visual regression comparison (optional but recommended)

### Phase 2: File-by-File Component Migration

Migrate one file completely before moving to the next. A migrated file must have **zero Tailwind classes** remaining.

**Migration order:** shared components → feature components → page components → layout/shell

#### For each component file:

**Step 1: Replace Tailwind layout classes with Mantine components or CSS Modules**

| Tailwind pattern | Mantine replacement |
|-----------------|---------------------|
| `<div className="flex items-center gap-2">` | `<Group gap="sm">` |
| `<div className="flex flex-col gap-4">` | `<Stack gap="md">` |
| `<div className="grid grid-cols-2 gap-4">` | `<SimpleGrid cols={2} spacing="md">` |
| `<div className="flex flex-1">` | `<Box style={{ flex: 1 }}>` or CSS module |
| `<div className="relative">` | `<Box pos="relative">` |
| `<div className="container mx-auto">` | `<Container>` |

**Step 2: Replace Tailwind utility classes with Mantine props on `<Box>`, `<Text>`, etc.**

| Tailwind | Mantine prop |
|----------|-------------|
| `className="p-4 mt-2 mb-4"` | `p="md" mt="sm" mb="md"` |
| `className="text-sm text-gray-500"` | `<Text size="sm" c="gray.5">` |
| `className="font-semibold"` | `fw={600}` |
| `className="text-center"` | `ta="center"` |
| `className="truncate"` | `<Text truncate>` |
| `className="rounded-lg shadow-md"` | `<Paper radius="lg" shadow="md">` |
| `className="bg-gray-100"` | `bg="gray.1"` |

**Step 3: Move complex/custom styling to CSS Modules**

Create `ComponentName.module.css` next to the component. All values must reference Mantine CSS variables:

```css
/* ✅ Correct — uses Mantine CSS variables */
.wrapper {
  padding: var(--mantine-spacing-md);
  border: 1px solid var(--mantine-color-gray-3);
  border-radius: var(--mantine-radius-lg);
  font-size: var(--mantine-font-size-sm);
  color: var(--mantine-color-gray-7);
  background-color: var(--mantine-color-gray-0);
  transition: background-color 150ms ease;
}

.wrapper:hover {
  background-color: var(--mantine-color-gray-1);
}

/* ❌ Wrong — hardcoded values */
.wrapper {
  padding: 16px;
  border: 1px solid #d4d4d4;
  font-size: 14px;
}
```

Import in the component:
```tsx
import cls from './ComponentName.module.css';
// ...
<div className={cls.wrapper}>
```

**Step 4: Replace Radix UI primitives with Mantine equivalents**

| Radix UI | Mantine |
|----------|---------|
| `<Dialog>` | `<Modal>` |
| `<Popover>` | `<Popover>` |
| `<DropdownMenu>` | `<Menu>` |
| `<Tooltip>` | `<Tooltip>` |
| `<Select>` | `<Select>` |
| `<Switch>` | `<Switch>` |
| `<Tabs>` | `<Tabs>` |
| `<Separator>` | `<Divider>` |

**Step 5: Verify** — run `npm run dev`, check browser, confirm no visual regressions

### Phase 3: Tailwind Removal

After all components are migrated:

```bash
npm uninstall tailwindcss @tailwindcss/vite  # or whatever TW packages were installed
```

- Delete `tailwind.config.js` / `tailwind.config.ts`
- Remove `@tailwind` / `@import "tailwindcss"` directives from CSS files
- Remove Tailwind PostCSS plugins from `postcss.config.js`
- Grep the entire codebase for any remaining Tailwind classes: `grep -r "className.*bg-\|className.*text-\|className.*flex\|className.*p-\|className.*m-" src/`

### Phase 4: Handling Embedded HTML with Tailwind Classes

If your app renders raw HTML strings (e.g., artifact/canvas content from data files) that contain Tailwind classes, you have two options:

**Option A: Scoped CSS file (recommended — no HTML changes needed)**

Create a CSS file with all needed Tailwind utility classes scoped under a parent selector:

```css
/* src/styles/artifact-tailwind.css */
.artifact-content {
  .flex { display: flex; }
  .p-6 { padding: 1.5rem; }
  .bg-blue-50 { background-color: #eff6ff; }
  .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  /* ... all classes used in the HTML content ... */
}
```

Then wrap the HTML render in the scoped class:
```tsx
<div className="artifact-content" dangerouslySetInnerHTML={{ __html: content }} />
```

To extract all classes: search data files for `class="..."` patterns and deduplicate.

**Option B: Convert HTML to inline styles** — more work, but eliminates all Tailwind dependency.

### Key Gotchas & Lessons Learned

**1. Mantine props override CSS module classes.** The `<Text size="xs" c="gray.4">` props generate inline styles that beat CSS module specificity. When a Mantine component ignores your CSS class for `font-size` or `color`, use the component's props instead.

**2. Tailwind gray shades ≠ Mantine gray shades.** Tailwind uses 50–900, Mantine uses 0–9. Approximate mapping: Tailwind 50→Mantine 0, 100→1, 200→2, ..., 900→9.

**3. Icons: keep Lucide React.** Do NOT swap to Tabler icons. Lucide works fine inside Mantine components:
```tsx
<Button leftSection={<Search size={16} />}>Search</Button>
<ActionIcon variant="subtle" color="gray" size="lg">
  <Paperclip size={18} />
</ActionIcon>
```

**4. Custom SVG icons need explicit props.** If you have custom icon components (like `IncognitoIcon`), add `size` and `style` props to match the lucide icon API so they work consistently in `ActionIcon`/`TooltipIconButton` wrappers.

**5. CSS nesting works in CSS Modules.** Vite + PostCSS supports nested selectors:
```css
.messageGroup:hover .userActions { opacity: 1; }
```

**6. Mantine v8 specifics:**
- `Switch` shows a check indicator inside the thumb by default — set `withThumbIndicator: false` to match v7
- `Popover` `hideDetached` defaults to `true` — popovers auto-close when target leaves DOM
- `Menu.Item` no longer uses `data-hovered` — use `:hover` and `:focus` pseudo-classes
- Import `@mantine/core/styles.css` in entry file (bundles all needed global styles)

**7. Spacing mapping from this project:**
| Tailwind | Pixels | Mantine |
|----------|--------|---------|
| `p-1` / `gap-1` | 4px | `xs` |
| `p-2` / `gap-2` | 8px | `sm` |
| `p-3` / `gap-3` | 12px | `md` |
| `p-4` / `gap-4` | 16px | `lg` |
| `p-6` / `gap-6` | 24px | `xl` |
| `p-8` | 32px | `{32}` (numeric) |

**8. Responsive breakpoints:**
```tsx
// Mantine component props
<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>

// CSS Module
@media (min-width: 48em) { /* sm */ }
@media (min-width: 62em) { /* md */ }

// Visibility
<Box visibleFrom="md">  // hidden on mobile, visible from md up
<Box hiddenFrom="md">   // visible on mobile, hidden from md up
```