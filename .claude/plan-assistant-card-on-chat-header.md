# Plan: Clickable Assistant Subtitle in Chat Header

## Goal

Make the assistant name subtitle in `ChatHeader` clickable so it opens an assistant card popover/popup, giving users quick access to assistant details without leaving the chat.

## Current State

- **ChatHeader** (`src/components/ChatHeader.tsx`): Displays `subtitle` (the assistant name) as a plain `<span>` at line 131. Only receives `assistantName` as a string — no assistant object or ID.
- **AssistantCard** (`src/components/AssistantCard.tsx`): A full card component used on the Explore page. Shows icon, name, description, classification, favourite toggle, and ellipsis menu. Requires an `Assistant` object + callbacks (`onToggleFavorite`, `onStartChat`).
- **Assistant data** (`src/data/assistants.ts`): All assistants defined in `allAssistants` object with full metadata (id, name, description, owner, icon, classification, etc.).

## Implementation Steps

### 1. Pass assistant data to ChatHeader

ChatHeader currently only gets `assistantName` (string). We need the full `Assistant` object to render the card.

- Add an optional `assistant?: Assistant` prop to `ChatHeaderProps`.
- In `ChatSimulatorView`, look up the `Assistant` object by name from the assistants data and pass it through.
- In `App.tsx`, when creating chats with assistants, ensure the assistant data is available to pass down.

### 2. Create an AssistantCardPopover component

Rather than reusing `AssistantCard` directly (which is styled as a grid card), create a popover variant:

- Use Radix `Popover` (already available via `src/components/ui/popover.tsx`) to anchor to the subtitle.
- Render assistant details inside the popover: icon, name, description, classification, owner, favourite toggle.
- Reuse styling/layout from `AssistantCard` but adapted for popover context (no click-to-start-chat behavior since we're already in a chat).

### 3. Make the subtitle clickable

In `ChatHeader.tsx`:

- Wrap the subtitle `<span>` (line 130-132) with a click handler or Popover trigger.
- Add hover/click styling to indicate interactivity (e.g., underline on hover, cursor pointer).
- On click, open the `AssistantCardPopover`.

### 4. Wire up callbacks

The popover card may need:

- `onToggleFavorite` — pass through from parent (already available in App.tsx).
- Optionally a "View in Explore" link to navigate to the assistant's explore page entry.
- No `onStartChat` needed since we're already in a chat with this assistant.

## Files to Modify

| File | Change |
|------|--------|
| `src/components/ChatHeader.tsx` | Add `assistant` prop, make subtitle clickable, integrate popover |
| `src/components/AssistantCardPopover.tsx` | **New file** — popover variant of the assistant card |
| `src/components/ChatSimulatorView.tsx` | Look up and pass `Assistant` object to ChatHeader |
| `src/App.tsx` | Ensure assistant data + favourite callbacks flow to ChatSimulatorView |

## Open Questions

- Should the popover include the favourite (heart) toggle, or keep it read-only?
- Should there be a "View in Explore" or "Edit on Studio" link in the popover?
- Should the popover also work in simulator mode, or only interactive mode?
