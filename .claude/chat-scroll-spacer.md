# Chat Scroll Spacer Implementation

This document captures the implementation for scrolling user messages to the top and using a dynamic spacer as a placeholder for assistant responses.

## Goal

When a user sends a message:
1. The user message scrolls to the top of the chat area
2. A spacer acts as a placeholder for the assistant's response
3. As the assistant responds, the spacer shrinks and is replaced by actual content

## Key Refs and State

```tsx
const messagesContainerRef = useRef<HTMLDivElement>(null);
const lastUserMessageRef = useRef<HTMLDivElement>(null);
const assistantContentRef = useRef<HTMLDivElement>(null);
const shouldScrollToBottom = useRef(false);
const [spacerHeight, setSpacerHeight] = useState<number>(0);
```

## Spacer Height Calculation

The spacer fills the remaining space after the user message and assistant content:

```tsx
useEffect(() => {
  const calculateSpacer = () => {
    if (!messagesContainerRef.current) return;

    const containerHeight = messagesContainerRef.current.clientHeight;
    const headerHeight = 52; // Chat header height
    const gap = 16; // Gap between header and content
    const lastUserHeight = lastUserMessageRef.current?.offsetHeight || 0;
    const assistantHeight = assistantContentRef.current?.offsetHeight || 0;

    // Spacer = remaining space after user message and assistant content
    const calculated = containerHeight - lastUserHeight - assistantHeight - headerHeight - gap;
    setSpacerHeight(Math.max(0, calculated));
  };

  calculateSpacer();
  const timer = setTimeout(calculateSpacer, 50); // Recalculate after DOM updates
  window.addEventListener('resize', calculateSpacer);
  return () => {
    window.removeEventListener('resize', calculateSpacer);
    clearTimeout(timer);
  };
}, [displayedMessages, interactiveMessages, currentThought, currentReasoning, showThinkingDots, searchingAssistant]);
```

## Scroll Behavior

Only scroll when user sends a message, not when assistant replies:

```tsx
useEffect(() => {
  if (shouldScrollToBottom.current) {
    setTimeout(() => {
      lastUserMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    shouldScrollToBottom.current = false;
  }
}, [displayedMessages, interactiveMessages]);
```

Set the flag when user sends:

```tsx
// In MessageInput onSend handler:
onSend={(message) => {
  shouldScrollToBottom.current = true;
  onSendMessage?.(message);
}}
```

## Message Structure

Split messages into two groups:
1. Messages up to and including the last user message
2. Messages after the last user message (assistant responses)

```tsx
const lastUserIdx = messages.map(m => m.role).lastIndexOf('user');
const messagesUpToLastUser = lastUserIdx >= 0 ? messages.slice(0, lastUserIdx + 1) : messages;
const messagesAfterLastUser = lastUserIdx >= 0 ? messages.slice(lastUserIdx + 1) : [];
```

## Rendering Structure

```tsx
{/* Messages up to and including last user message */}
{messagesUpToLastUser.map((msg, idx) => (
  <div key={msg.id} className="group">
    {msg.role === 'user' ? (
      <div ref={idx === lastUserIdx ? lastUserMessageRef : null} className="...">
        {/* User message content */}
      </div>
    ) : (
      // Assistant message (before last user)
    )}
  </div>
))}

{/* Assistant content after last user message - wrapped for height tracking */}
{messagesAfterLastUser.length > 0 && (
  <div ref={assistantContentRef} className="space-y-8">
    {messagesAfterLastUser.map((msg) => (
      // Assistant messages
    ))}
    {/* Also include loading states here (thinking, skeleton, etc.) */}
  </div>
)}

{/* Spacer - placeholder for assistant content */}
<div style={{ height: `${spacerHeight}px` }} />

<div ref={chatEndRef} />
```

## User Message Top Margin

Add `mt-4` (16px) to the user message bubble for gap between header and message when scrolled to top:

```tsx
<div className="bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl mt-4">
  {msg.content}
</div>
```

## How It Works

1. **User sends message**: `shouldScrollToBottom` is set to true
2. **Scroll triggers**: User message scrolls to top with `block: 'start'`
3. **Initial spacer**: `spacerHeight = containerHeight - userMsgHeight - 0 - header - gap` (large)
4. **Assistant responds**: Content added to `assistantContentRef`, spacer recalculates and shrinks
5. **Final state**: Spacer = 0 if assistant content fills space, or fills remaining space if short response
