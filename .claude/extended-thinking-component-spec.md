# Extended Thinking Component — Spec

## Overview

A collapsible accordion component that summarizes the assistant's reasoning process. It sits **above** the final response content and provides transparency into the model's chain-of-thought and tool usage.

---

## Anatomy

### 1. Summary Bar (always visible)

- **Summary text**: A single-line, auto-generated natural language summary of what the thinking accomplished (e.g., *"Systematized competing constraints across food, accessibility, and guest accommodations"*)
- **Tool badge**: A small inline indicator showing the count of tools invoked during thinking (e.g., `🔧 3 tools used`). Only rendered if `toolCount > 0`.
- **Toggle chevron**: Right-aligned arrow. Points right (`›`) when collapsed, down (`⌄`) when expanded.
- The entire bar is the click/tap target for toggling.

### 2. Detail Panel (visible when expanded)

A sequential list of **thinking steps**, rendered in order of execution. Each step is one of two types:

- **Reasoning step**: A block of the model's internal narration / chain-of-thought text.
- **Tool invocation step**: Shows tool name, a brief description of what was called, and optionally a truncated result preview.

Steps are visually distinct but appear in a single chronological stream.

### 3. Status Indicator

Appears at the **bottom** of the detail panel (or inline on the summary bar when collapsed).

| State | Icon | Label |
|---|---|---|
| `thinking` | Spinner / clock | "Thinking…" |
| `done` | Checkmark | "Done" |
| `error` | Warning | "Failed" |

---

## States

| State | Summary Bar | Detail Panel | Status |
|---|---|---|---|
| **Streaming / In-progress** | Summary may show placeholder or progressively update | Steps stream in as they occur | `thinking` |
| **Complete — Collapsed** (default) | Final summary + tool badge + chevron right | Hidden | `done` (inline) |
| **Complete — Expanded** | Final summary + tool badge + chevron down | Visible, all steps rendered | `done` (bottom) |

---

## Data Shape

```ts
interface ThinkingBlock {
  summary: string;               // one-line natural language summary
  status: 'thinking' | 'done' | 'error';
  steps: ThinkingStep[];
}

interface ThinkingStep {
  id: string;
  type: 'reasoning' | 'tool_call';
  content: string;               // markdown text for reasoning, description for tool
  toolName?: string;             // e.g. "web_search", "code_execution"
  toolInput?: string;            // optional: truncated input/query
  toolResult?: string;           // optional: truncated result preview
  timestamp?: number;
}
```

### Derived Values

```ts
const toolCount = steps.filter(s => s.type === 'tool_call').length;
```

---

## Behavior

1. **Default collapsed** — After thinking completes, the component collapses to the summary bar. During streaming, it remains expanded so the user can watch progress.
2. **Toggle** — Clicking the summary bar toggles the detail panel open/closed.
3. **Streaming** — Steps append in real-time. The summary text may update at the end once the model produces a final summary.
4. **Tool count** — Computed from steps array, displayed on the summary bar so users get signal at a glance without expanding.
5. **No thinking = no component** — If the response has no thinking block, the component is not rendered at all.

---

## Accessibility

- Summary bar is a `<button>` with `aria-expanded`.
- Detail panel uses `aria-hidden` when collapsed.
- Status communicated via `aria-live="polite"` region.
