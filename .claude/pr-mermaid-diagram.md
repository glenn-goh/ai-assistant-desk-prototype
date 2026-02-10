# PR: Flowchart & Diagram Tool with Mermaid Rendering

## Summary

- Add keyword-triggered diagram generation using the mermaid library for real flowchart rendering
- Support two display modes: inline chat diagrams and canvas panel artifacts
- Persist rich assistant responses (thinking blocks, diagrams, artifact cards) across chat turns
- Fix stale state bug in chat message commit flow

## What Changed

### New Files

**`src/data/interactive-diagram.ts`**
Response generators for the diagram tool, following the same pattern as `interactive-web-search.ts`. Exports two functions:
- `getDiagramInChatResponses()` — thinking block + inline mermaid diagram + explanation text
- `getDiagramInCanvasResponses()` — thinking block + text + artifact (opens in canvas panel)

Both use an HR screening flowchart (sourced from `.claude/hr-screening.mermaid`) as the mock diagram content.

**`src/components/MermaidDiagram.tsx`**
React component that renders mermaid syntax to SVG. Uses a neutral grayscale theme to match the lo-fi aesthetic. Accepts an optional `maxWidth` prop (400px for inline chat, full-width for canvas).

### Modified Files

**`src/App.tsx`**
- Added `detectDiagramKeyword()` function — routes `"diagram in chat"` / `"flowchart in chat"` to inline mode, and `"diagram"` / `"flowchart"` / `"diagram in canvas"` to canvas mode
- Wired keyword detection into `handleSendMessage` and `handleStartChatFromHome` (after web search check)
- Extended `Message` interface with optional `richContent: any[]` field for persisting rich responses
- Updated `handleCommitRichContent` to accept and store rich content array
- Fixed stale state bug: changed existing-chat branch in `handleSendMessage` to use updater pattern (`setChats(prev => ...)`) so committed rich content is not overwritten by the user message update

**`src/components/ChatSimulatorView.tsx`**
- Added `mermaid` and `artifact` handling in `processInteractiveBotResponses()` for interactive mode
- Added rendering for `mermaid` type (inline diagram in rounded white container) and `artifact` type (clickable ArtifactCard) in the interactive messages loop
- Added rich content rendering for committed messages — when a message has `richContent`, renders each item with the correct component (ReasoningBlock, TextResponseBlock, MermaidDiagram, ArtifactCard)
- Updated canvas panel: removed hardcoded empty state for interactive mode; falls through to show selected artifact or artifact list
- Canvas list now includes artifacts from both `displayedMessages` (simulator) and `interactiveDisplayedMessages` (interactive)
- Added auto-select effect for artifacts in interactive mode
- Added `showOutputPanel` to spacer height recalculation dependencies

**`package.json`**
- Added `mermaid` dependency

## Trigger Keywords

| Input | Mode | Behavior |
|---|---|---|
| `diagram in chat` | Inline | Thinking block, then mermaid diagram rendered in chat |
| `flowchart in chat` | Inline | Same as above |
| `diagram` | Canvas | Thinking block, text, artifact card; diagram opens in canvas panel |
| `flowchart` | Canvas | Same as above |
| `diagram in canvas` | Canvas | Same as above |

## Test Plan

- [ ] Type "diagram in chat" from home page — should see thinking block, then inline mermaid flowchart in a white rounded container (max 400px)
- [ ] Type "flowchart" from home page — should see thinking block, text, artifact card in chat; mermaid diagram renders in canvas panel (full width)
- [ ] Send multiple diagram messages in sequence — previous responses (thinking blocks, diagrams, artifact cards) should persist in chat history
- [ ] Click an artifact card — should open/re-open the diagram in the canvas panel
- [ ] Click back arrow in canvas panel — should show the artifact list with the diagram entry
- [ ] Verify mermaid diagram uses grayscale theme (no purple)
- [ ] Verify no emojis in diagram node labels
