# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev    # Start development server (http://localhost:3000, auto-opens browser)
npm run build  # Build for production (outputs to build/)
```

No test or lint commands are configured.

## Architecture Overview

React + TypeScript prototype for an AI Assistant Desk application using Vite, Tailwind CSS 4, and Radix UI primitives. Lo-fi wireframe aesthetic with grayscale colors.

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
- **CCE-SN** (Confidential CE, Sensitive, Non-Classified): Cannot be saved, uses `incognitoChat` state
- **CCE-SH** (Confidential CE, Sensitive, Highly Sensitive): Cannot be saved, uses `incognitoChat` state

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
- `ThinkingResponse` — `{type: "thinking", thought?, reasoning?: string[], timingMs?}`
- `TextResponse` — `{type: "text", content: string, delayMs?}`
- `ArtifactResponse` — `{type: "artifact", title, fileType, description, content, delayMs?, interactive?}`
- `AssistantSwitchResponse` — `{type: "assistantSwitch", message: string}`

### Key Data Types (defined in App.tsx)

```typescript
interface Message { id, role: 'user' | 'assistant', content, timestamp, hasFile?, fileName? }
interface Chat { id, title, messages: Message[], createdAt, assistantType?, assistantName?, classificationType?, isIncognito? }
interface Folder { id, name, createdAt, chatIds: string[], customInstructions?, files?, memoriesScope }
interface UserProfile { name, email, role, agency, profileDescription?, workFocus?, customInstructions?, traits?, aiStyle?, workActivities?, dataSources? }
```

### Styling

Lo-fi grayscale aesthetic with CSS variables defined in `src/styles/globals.css`:
- 5-color grayscale palette: Gray-100 (lightest) through Gray-900 (darkest), plus red for errors
- User messages: `bg-gray-100` bubbles, right-aligned. Assistant messages: plain text, left-aligned
- 16px font size with 1.7 line-height for messages
- `max-w-chat` custom utility for chat content width constraint
- `.prose-lofi` class for artifact content with grayscale color overrides
- Dark mode support via `.dark` class selector
- Custom animations: `@dotBounce` (thinking indicator), `@shimmer` (thinking text effect)
- Radix UI primitives in `src/components/ui/` for accessible components

### State Patterns

- No router — all navigation via `activeView` state in App.tsx
- `ChatSidebar` receives 40+ props from App.tsx for chat/folder/navigation operations
- Feature tracking: `viewedSimulations`, `hasSeenWalkthrough` (persisted to localStorage)
- Bookmark system: max 3 bookmarked assistants with swap modal on overflow
