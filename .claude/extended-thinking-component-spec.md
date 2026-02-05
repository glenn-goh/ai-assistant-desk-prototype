# Extended Thinking Component — Spec

## Overview

A collapsible accordion component that summarizes the assistant's reasoning process. It sits **above** the final response content and provides transparency into the model's chain-of-thought and tool usage.

---

## Anatomy

### 1. Summary Bar (always visible)

- **Summary text**: A single-line, auto-generated natural language summary of what the thinking accomplished (e.g., *"Systematized competing constraints across food, accessibility, and guest accommodations"*)
- **Tool badge**: A small inline indicator showing the combined count of tools and custom assistants invoked during thinking (e.g., `🔧 3 tools used`). Only rendered if `toolCount > 0`. Custom assistant invocations are counted as tools at the summary level; the detail panel distinguishes them visually.
- **Toggle chevron**: Right-aligned arrow. Points right (`›`) when collapsed, down (`⌄`) when expanded.
- The entire bar is the click/tap target for toggling.

### 2. Detail Panel (visible when expanded)

A sequential list of **thinking steps**, rendered in order of execution. Each step is one of two types:

- **Reasoning step**: A block of the model's internal narration / chain-of-thought text.
- **Tool invocation step**: Shows tool name, a brief description of what was called, and optionally a truncated result preview.
- **Assistant invocation step**: Shows the custom assistant that was delegated to, the task it was given, and optionally its response summary. Rendered with a distinct assistant icon and the assistant's display name. If the assistant itself used tools or reasoning, those can be nested as child steps.

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
  type: 'reasoning' | 'tool_call' | 'assistant_call';
  content: string;               // markdown text for reasoning, description for tool/assistant
  toolName?: string;             // e.g. "web_search", "code_execution"
  toolInput?: string;            // optional: truncated input/query
  toolResult?: string;           // optional: truncated result preview
  assistantName?: string;        // display name of the custom assistant, e.g. "Policy Checker"
  assistantId?: string;          // unique identifier for the assistant
  assistantTask?: string;        // the task/query delegated to the assistant
  assistantResult?: string;      // optional: truncated response summary from the assistant
  childSteps?: ThinkingStep[];   // optional: nested reasoning/tool steps from the assistant
  timestamp?: number;
}
```

### Derived Values

```ts
const toolCount = steps.filter(s => s.type === 'tool_call' || s.type === 'assistant_call').length;
```

---

## Behavior

1. **Default collapsed** — After thinking completes, the component collapses to the summary bar. During streaming, it remains expanded so the user can watch progress.
2. **Toggle** — Clicking the summary bar toggles the detail panel open/closed.
3. **Streaming** — Steps append in real-time. The summary text may update at the end once the model produces a final summary.
4. **Tool count** — Computed from steps array, displayed on the summary bar so users get signal at a glance without expanding.
5. **No thinking = no component** — If the response has no thinking block, the component is not rendered at all.
6. **Assistant delegation** — When a custom assistant is invoked, the step shows the assistant name, the task delegated, and a summary of its response. If the assistant performed its own reasoning or tool calls, those appear as nested child steps that can be independently expanded/collapsed.
7. **Assistant streaming** — While an assistant is executing, its step shows a spinner with the assistant name (e.g., *"Policy Checker is working…"*). Child steps stream in as the assistant progresses.

---

## Accessibility

- Summary bar is a `<button>` with `aria-expanded`.
- Detail panel uses `aria-hidden` when collapsed.
- Status communicated via `aria-live="polite"` region.
