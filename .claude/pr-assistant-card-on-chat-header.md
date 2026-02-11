# PR: Clickable Assistant Card on Chat Header

**Branch:** `alvin-tweaks/assistant-card-on-chat-header`

## Summary

Added the ability to click the assistant name subtitle in the chat header to view the assistant's card in a popover. This gives users quick access to assistant details (description, classification, favourite toggle, tools management) without leaving the chat.

## Changes

### New Behavior

- **Clickable subtitle**: When chatting with a custom assistant, the subtitle (e.g., "Email Drafter") in the chat header is now a clickable button with a small ChevronDown icon.
- **Popover card**: Clicking the subtitle opens a Radix Popover anchored below, displaying the `AssistantCard` in view-only mode (card body is not clickable, but all interactive buttons work).
- **Favourite toggle**: Heart icon on the popover card works — users can favourite/unfavourite the assistant directly from the chat.
- **Tools management**: "Add to tools" / "Remove from tools" button is shown on the popover card. When the 3-tool limit is reached, the existing `ReplaceToolModal` dialog appears to let users choose which tool to replace.
- **Non-interactive for default assistant**: The "My AI Assistant" subtitle remains plain text (not clickable) since there's no assistant card to show.

### Bug Fixes

- **Tooltip flash fix**: Prevented the favourite tooltip from appearing immediately when the popover opens by adding `onOpenAutoFocus={(e) => e.preventDefault()}` to the `PopoverContent`, stopping Radix from auto-focusing the heart button.
- **Sidebar favourites-only**: Fixed the "CUSTOM ASSISTANTS" section in the sidebar to only display favourited assistants. Previously, unfavourited assistants that the user had chatted with also appeared there.
- **Collapse sidebar tooltip**: Moved the "Collapse sidebar" tooltip position from `side="right"` to `side="bottom"`.

## Files Modified

| File | Change |
|------|--------|
| `src/components/AssistantCard.tsx` | Added `viewOnly`, `isInTools`, `onToggleTools` props. View-only mode disables card body click. Tools button renders when `onToggleTools` is provided. Added `delayDuration={300}` to favourite tooltip. |
| `src/components/ChatHeader.tsx` | Added assistant card popover with Radix Popover. New props: `assistant`, `isFavorited`, `onToggleFavorite`, `toolAssistants`, `onAddToTools`, `onRemoveFromTools`, `onReplaceToolAssistant`. Manages replace modal state locally. |
| `src/components/ChatSimulatorView.tsx` | Looks up `Assistant` object via `getAssistantByName()`. Passes assistant data, favourite state, and tools state through to `ChatHeader`. New props: `onToggleFavorite`, `toolAssistants`, `onAddToTools`, `onRemoveFromTools`, `onReplaceToolAssistant`. |
| `src/App.tsx` | Passes `handleToggleFavorite`, `toolAssistants`, `handleAddToTools`, `handleRemoveFromTools`, `handleReplaceToolAssistant` to the interactive `ChatSimulatorView`. |
| `src/data/assistants.ts` | Added `getAssistantByName()` helper function to look up an assistant by name from `topRatedAssistants`. |
| `src/components/ChatSidebar.tsx` | Simplified "CUSTOM ASSISTANTS" section to only show favourited assistants. Removed `interactedAssistants` / `chattedAssistantTypes` logic. Moved collapse sidebar tooltip to bottom. |

## Data Flow

```
App.tsx (state: favoritedAssistants, toolAssistants, handlers)
  └─> ChatSimulatorView (looks up Assistant object by name)
        └─> ChatHeader (manages popover + replace modal state)
              └─> AssistantCard (viewOnly mode, receives all callbacks)
              └─> ReplaceToolModal (shown when tools limit reached)
```

## Design Decisions

- **Reused `AssistantCard`** component with a `viewOnly` prop rather than creating a new popover-specific card component.
- **Reused `ReplaceToolModal`** from ExplorePage for the 3-tool limit — same UX across both surfaces.
- **ChevronDown icon** always visible next to the subtitle to indicate interactivity (not just on hover).
- **Popover** (not modal/dialog) for the card — lightweight, dismisses on click outside, anchored to the subtitle.
