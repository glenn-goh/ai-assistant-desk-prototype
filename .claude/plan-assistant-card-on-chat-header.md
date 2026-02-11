# Plan: Clickable Assistant Subtitle in Chat Header

## Goal

Make the assistant name subtitle in `ChatHeader` clickable so it opens the `AssistantCard` in a modal dialog, giving users quick access to assistant details without leaving the chat.

**Scope:** Only applies to custom assistant chats. The default "My AI Assistant" subtitle is NOT clickable.

## Decisions

- **Display:** Popover anchored below the subtitle text, dismisses on click outside
- **Card behavior:** View-only body (no click-to-start-chat), but heart, ellipsis menu, and other buttons remain functional
- **Favourite toggle:** Yes, included and functional
- **Ellipsis menu:** Same options as Explore page (Share disabled, Edit on Studio)
- **Component reuse:** Reuse existing `AssistantCard` directly inside the dialog — no new card component needed. Add a prop to disable the card body click.

## Current State

- **ChatHeader** (`src/components/ChatHeader.tsx`): Displays `subtitle` (the assistant name) as a plain `<span>` at line 131. Only receives `assistantName` as a string — no assistant object or ID.
- **AssistantCard** (`src/components/AssistantCard.tsx`): Full card component used on Explore page. Shows icon, name, description, classification, favourite toggle, ellipsis menu. Requires an `Assistant` object + callbacks (`onToggleFavorite`, `onStartChat`).
- **Assistant data** (`src/data/assistants.ts`): All assistants defined in `allAssistants` object with full metadata (id, name, description, owner, icon, classification, etc.).

## Implementation Steps

### 1. Update AssistantCard to support view-only mode

In `src/components/AssistantCard.tsx`:

- Add an optional `viewOnly?: boolean` prop.
- When `viewOnly` is true: remove the card body `onClick` handler and `cursor-pointer` style so the card doesn't act as a button.
- All interactive elements (heart toggle, ellipsis menu) remain functional regardless of `viewOnly`.

### 2. Pass assistant data down to ChatHeader

ChatHeader currently only gets `assistantName` (string). We need the full `Assistant` object to render the card.

- Add optional `assistant?: Assistant` prop to `ChatHeaderProps`.
- Add `isFavorited?: boolean` and `onToggleFavorite?: (assistantId: string) => void` props to `ChatHeaderProps`.
- In `ChatSimulatorView`, look up the `Assistant` object by name from the assistants data and pass it to `ChatHeader`.
- In `App.tsx`, pass `favoritedAssistants` and `onToggleFavorite` through to `ChatSimulatorView` so the heart toggle works.

### 3. Make the subtitle clickable in ChatHeader

In `src/components/ChatHeader.tsx`:

- Only when `assistant` prop is provided (i.e., not "My AI Assistant"):
  - Make the subtitle `<span>` clickable with `cursor-pointer`.
  - Add a small always-visible down-chevron icon (`ChevronDown` from lucide-react) next to the subtitle text to indicate it's interactive.
  - On click, open a Radix `Popover` (already available via `src/components/ui/popover.tsx`) containing the `AssistantCard` in `viewOnly` mode, anchored below the subtitle.
- When no `assistant` prop (default "My AI Assistant"): subtitle remains plain, non-clickable text.

### 4. Wire up callbacks

- `onToggleFavorite` — pass through from App.tsx → ChatSimulatorView → ChatHeader → Dialog → AssistantCard.
- `onStartChat` — pass a no-op since we're already in a chat (card body click is disabled via `viewOnly` anyway).

## Files to Modify

| File | Change |
|------|--------|
| `src/components/AssistantCard.tsx` | Add `viewOnly` prop to disable card body click |
| `src/components/ChatHeader.tsx` | Add `assistant`, `isFavorited`, `onToggleFavorite` props; make subtitle clickable; render Dialog with AssistantCard |
| `src/components/ChatSimulatorView.tsx` | Look up `Assistant` object by name; pass it + favourite state to ChatHeader |
| `src/App.tsx` | Pass `favoritedAssistants` and `onToggleFavorite` through to ChatSimulatorView |
