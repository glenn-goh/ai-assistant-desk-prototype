# AI Chat Simulator - Project Requirements

## Overview
Create a demo chat simulator that replays predefined conversations between a human user and an AI bot. This is intended for demonstration and prototyping purposes.

---

## Architecture

### Components
1. **Data File**: JSON/TypeScript format containing conversation definitions
2. **Player Component**: React artifact that renders and animates the chat simulation

---

## Features

### 1. User Message Input

**Behavior:**
- User can type randomly on keyboard (any characters)
- Each keystroke triggers the next character of a **predefined text** to appear
- The actual keys pressed don't matter - typing just advances the animation
- Pressing **Enter** key instantly completes the remaining text and sends the message
- After message is sent, bot begins its response sequence

**Example:**
```
Predefined text: "What are the latest features?"
User types: "asdfgh..." → displays "What a"
User presses Enter → displays full "What are the latest features?" and sends
```

---

### 2. Bot Response Types

Bot responses are **composable and repeatable** - a single bot reply can include multiple response blocks in sequence.

#### 2.1 Thinking Response
Shows the bot's internal thought process.

**Behavior:**
- Array of strings that cycle through automatically
- Each string displays for a configurable duration (default: 1.5 seconds)
- Strings replace each other (not appended)
- Last string in array persists as the final thought
- Visual indicator that this is "thinking" (e.g., different styling)

**Configuration:**
```typescript
{
  type: "thinking",
  thoughts: [
    "Analyzing your question...",
    "Searching knowledge base...",
    "Found relevant information"
  ],
  timingMs: 1500 // optional, defaults to 1500ms
}
```

#### 2.2 Assistant Switch Response
Indicates a change or activation of a specific assistant/tool.

**Behavior:**
- Displays as smaller, subtle text
- Brief notification style message
- Examples: "Switching to Code Assistant", "Activating Web Search"

**Configuration:**
```typescript
{
  type: "assistantSwitch",
  message: "Switching to Code Assistant"
}
```

#### 2.3 Text Response
Standard chat message from the bot.

**Behavior:**
- Regular message format
- Can include markdown formatting
- Displays as a typical chat bubble

**Configuration:**
```typescript
{
  type: "text",
  content: "Here's the information you requested..."
}
```

#### 2.4 Artifact Response
Shows a generated output file with preview and detail view. Artifacts can be static content or interactive forms.

**Behavior:**
- Displays as a clickable card in the chat
- Card shows: file name, file type/icon, brief description
- Clicking opens a **side panel** (similar to Claude's artifact viewer)
- Side panel displays full artifact content
- Side panel appears to the right of chat interface

**Types of Artifacts:**
1. **Static Content**: Documents, reports, charts, code snippets (read-only)
2. **Interactive Forms**: Forms that users can fill out, with the data captured for workflow execution or bot processing

**Configuration:**
```typescript
{
  type: "artifact",
  title: "Data Analysis Report",
  fileType: "document", // or "code", "chart", "form", etc.
  description: "Q3 Sales Analysis",
  content: "<!-- Full content that appears in side panel -->",
  interactive?: boolean, // true if this is a form/interactive element
  onSubmit?: (data: any) => void // callback for form submissions
}
```

**Interactive Form Example:**
```typescript
{
  type: "artifact",
  title: "Customer Feedback Form",
  fileType: "form",
  description: "Help us improve our service",
  content: `<form>...</form>`, // HTML form content
  interactive: true
}
```

When a user submits an interactive form, the bot can:
- Acknowledge the submission
- Use the data to trigger workflows
- Provide personalized responses based on form inputs
- Generate new artifacts with the submitted data

---

### 3. Timing & Animation

#### Message Delays
- **Bot Response Delay**: Configurable delay before bot responds (default: 3000ms)
- **Typing Indicator**: Show three dancing horizontal dots (•••) while bot is preparing response
- **Smooth Transitions**: Animate between different response types

#### Configurable Timing
```typescript
{
  type: "text",
  content: "Response message",
  delayMs: 2000 // optional override, defaults to 3000ms
}
```

---

### 4. Visual Design

#### Design System
- **Style**: Minimal, clean, modern
- **Color Scheme**: **Inherits from existing UI/application colors** - The simulator will adapt to match the host application's color palette and design system. If no existing UI colors are present, use slate gray as the default.
- **Layout**: 
  - Chat interface on the left
  - Artifact viewer panel on the right (when active)
  - Responsive and clean spacing

#### Chat Interface
- User messages: Right-aligned
- Bot messages: Left-aligned
- Clear visual distinction between message types
- Smooth scrolling behavior
- Colors adapt to existing application theme

#### Artifact Viewer
- Side panel that slides in from the right
- Close button to dismiss
- Adequate width for content viewing
- Clean, readable content display
- Supports both static content and interactive forms

---

## Data File Structure

### Example Template

```typescript
interface ChatSimulation {
  id: string;
  title: string;
  description?: string;
  messages: Message[];
}

interface Message {
  role: "user" | "bot";
  content: UserMessage | BotResponse[];
}

interface UserMessage {
  text: string; // The predefined text to type out
}

type BotResponse = 
  | ThinkingResponse 
  | AssistantSwitchResponse 
  | TextResponse 
  | ArtifactResponse;

interface ThinkingResponse {
  type: "thinking";
  thoughts: string[];
  timingMs?: number; // default: 1500
}

interface AssistantSwitchResponse {
  type: "assistantSwitch";
  message: string;
}

interface TextResponse {
  type: "text";
  content: string;
  delayMs?: number; // default: 3000
}

interface ArtifactResponse {
  type: "artifact";
  title: string;
  fileType: string;
  description: string;
  content: string;
  delayMs?: number; // default: 3000
  interactive?: boolean; // Whether this artifact contains interactive elements (forms)
}
```

### Example Conversation Data

```json
{
  "id": "demo-001",
  "title": "Feature Overview Demo",
  "messages": [
    {
      "role": "user",
      "content": {
        "text": "What are the latest features in the platform?"
      }
    },
    {
      "role": "bot",
      "content": [
        {
          "type": "thinking",
          "thoughts": [
            "Analyzing your question...",
            "Checking latest updates...",
            "Preparing comprehensive overview"
          ]
        },
        {
          "type": "text",
          "content": "I'll provide you with an overview of our latest features."
        },
        {
          "type": "assistantSwitch",
          "message": "Activating Documentation Assistant"
        },
        {
          "type": "text",
          "content": "Here's a detailed breakdown of new capabilities..."
        },
        {
          "type": "artifact",
          "title": "Feature Overview",
          "fileType": "document",
          "description": "Comprehensive feature list",
          "content": "<h1>Latest Features</h1><ul><li>Feature 1</li></ul>"
        }
      ]
    },
    {
      "role": "user",
      "content": {
        "text": "I'd like to provide feedback"
      }
    },
    {
      "role": "bot",
      "content": [
        {
          "type": "text",
          "content": "I'd love to hear your feedback! Please fill out this form."
        },
        {
          "type": "artifact",
          "title": "Feedback Form",
          "fileType": "form",
          "description": "Share your thoughts with us",
          "content": "<form>...</form>",
          "interactive": true
        }
      ]
    }
  ]
}
```

**Note on Interactive Artifacts:**
When a user submits an interactive form artifact:
1. The form data is captured
2. A new user message appears showing "Form submitted"
3. The bot can respond with acknowledgment
4. The bot can use the data to trigger workflows
5. The bot can generate personalized responses or new artifacts based on the input

---

## Technical Requirements

### Technology Stack
- **Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS (adapts to existing UI colors, defaults to slate gray)

### Key Functionality
1. Parse and load conversation data from JSON
2. Animate typing effect for user messages
3. Sequence bot response components with proper timing
4. Handle artifact viewer toggle and display
5. Support for interactive artifacts (forms with data capture)
6. Smooth scrolling and animations

---

## Deliverables

1. **Data File Template**: 
   - JSON/TypeScript template with clear examples
   - Documentation of all available response types
   - Sample conversation showcasing all features

2. **Player Component**:
   - React artifact that can be embedded
   - Fully functional chat simulator
   - All animations and interactions working
   - Artifact side panel implementation

---

## Usage Notes

### For Implementation
- Data file should be easy to edit without code knowledge
- Comments in template to guide content creators
- Validation for data structure would be helpful

### For Demonstration
- Smooth, professional animations
- Realistic timing to simulate actual AI interaction
- Clear visual feedback for all states

---

## Future Considerations
- Multiple conversation support (playlist)
- Pause/play controls
- Speed adjustment
- Export conversation as video/GIF
- Custom themes beyond indigo

---

## Questions for Refinement

When reviewing this document, consider:
1. Are all response types clearly defined?
2. Is the data structure flexible enough?
3. Are timing defaults appropriate?
4. Is the visual design specification clear enough?
5. Any missing features or edge cases?

---

**Document Version**: 1.0  
**Last Updated**: 2025-11-25  
**Status**: Ready for Implementation
