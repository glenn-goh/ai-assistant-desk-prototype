# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev    # Start development server (http://localhost:5173)
npm run build  # Build for production (outputs to build/)
```

No test or lint commands are configured.

## Architecture Overview

This is a React + TypeScript prototype for an AI Assistant Desk application using Vite and Tailwind CSS 4. It follows a lo-fi wireframe aesthetic with grayscale colors.

### Core Application Flow

**App.tsx** is the main orchestrator containing:
- Authentication state (`isAuthenticated`) → shows `LoginPage` when false
- Onboarding state (`hasOnboarded`) → shows `OnboardingPage` after login
- Main app with sidebar + content area after onboarding

**Views** controlled by `activeView` state:
- `home` → `HomePage` (default landing with quick chat input)
- `chat` → `ChatSimulatorView` (handles both simulations and real chats)
- `explore` → `ExplorePage` (browse available assistants)
- `studio` → `StudioPage` (create custom assistants)
- `library` → `LibraryPage` (saved resources)
- `chats` → `ChatsPage` (chat history)

**Modes** controlled by `mode` state:
- `desk` - Normal chat/usage mode
- `studio` - Assistant creation mode

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

### Data Types

**Chat/Message** (defined in App.tsx):
```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  hasFile?: boolean;
  fileName?: string;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  assistantType?: string;
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';
}
```

**Simulation data** (in `src/data/`):
- Pre-scripted conversation flows with thinking states, text responses, and artifacts
- Bot responses can be: `ThinkingResponse`, `TextResponse`, `ArtifactResponse`, `AssistantSwitchResponse`

### Styling

Uses lo-fi grayscale aesthetic:
- Background: `bg-gray-100`
- User messages: `bg-gray-200` bubbles, right-aligned
- Assistant messages: Plain text, left-aligned, no bubble
- 16px font size with 1.7 line-height for messages
- `max-w-chat` custom class for content width

Radix UI primitives in `src/components/ui/` for accessible components.
