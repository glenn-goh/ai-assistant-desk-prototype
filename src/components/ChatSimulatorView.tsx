import React, { useState, useEffect, useRef } from 'react';
import { FileText, X, ArrowLeft, Copy, Download, Check, Undo2, Redo2 } from 'lucide-react';
import { MessageInput } from './MessageInput';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import type { ImperativePanelHandle } from 'react-resizable-panels';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import type { Project } from '../types/project';
import { ChatHeader } from './ChatHeader';
import { MessageActions } from './chat/MessageActions';
import { ReasoningBlock } from './chat/ReasoningBlock';
import { TextResponseBlock } from './chat/TextResponseBlock';
import { AssistantSwitchBadge } from './chat/AssistantSwitchBadge';
import { ArtifactCard, getFileIcon } from './chat/ArtifactCard';
import { DecisionCard } from './chat/DecisionCard';
import { SkeletonLoader } from './chat/SkeletonLoader';
import MermaidDiagram from './MermaidDiagram';
import { SearchingAssistantLoader } from './chat/SearchingAssistantLoader';
import { getAssistantByName } from '../data/assistants';

// Type definitions
interface ChatSimulation {
  id: string;
  title: string;
  assistantName?: string;
  description?: string;
  colorScheme?: 'indigo' | 'slate' | 'blue' | 'green' | 'purple' | 'emerald';
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';
  messages: Message[];
}

interface Message {
  role: "user" | "bot";
  content: UserMessage | BotResponse[];
}

interface UserMessage {
  text?: string;
  formSubmission?: boolean;
  autoSend?: boolean;
}

interface DecisionResponse {
  type: "decision";
  question: string;
  options: Array<{ label: string; value: string; variant?: 'primary' | 'secondary' }>;
}

type BotResponse =
  | ThinkingResponse
  | AssistantSwitchResponse
  | TextResponse
  | ArtifactResponse
  | DecisionResponse;

interface ThinkingResponse {
  type: "thinking";
  thoughts: string[];
  timingMs?: number;
  reasoning?: Array<string | { text: string; icon: string; description?: string }>; // Detailed reasoning steps for expandable view
  doneSummary?: string; // Summary shown when reasoning is done
  tags?: string[]; // Pills shown next to done summary (e.g. ["3 tools used"])
}

interface AssistantSwitchResponse {
  type: "assistantSwitch";
  message: string;
}

interface TextResponse {
  type: "text";
  content: string;
  delayMs?: number;
}

interface ArtifactResponse {
  type: "artifact";
  title: string;
  fileType: string;
  description: string;
  content: string;
  delayMs?: number;
  interactive?: boolean;
}

// Interactive mode message type (from App.tsx)
interface InteractiveMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  hasFile?: boolean;
  fileName?: string;
}

interface ChatSimulatorProps {
  // Simulator mode props
  data?: ChatSimulation;
  onFormSubmit?: (formData: any, artifactTitle: string) => void;
  onComplete?: () => void;
  onToggleSidebar?: () => void;
  onBack?: () => void;
  // Interactive mode props
  mode?: 'simulator' | 'interactive';
  interactiveMessages?: InteractiveMessage[];
  onSendMessage?: (message: string, isTemporary?: boolean) => void;
  title?: string;
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';
  chatId?: string;
  onRenameChat?: (chatId: string, newTitle: string) => void;
  isNewChat?: boolean;
  isIncognito?: boolean;
  projects?: Project[];
  onMoveToProject?: (chatId: string, projectId: string) => void;
  favoritedAssistants?: string[];
  onToggleFavorite?: (assistantId: string) => void;
  toolAssistants?: string[];
  onAddToTools?: (assistantId: string) => void;
  onRemoveFromTools?: (assistantId: string) => void;
  onReplaceToolAssistant?: (oldAssistantId: string, newAssistantId: string) => void;
  assistantType?: string;
  assistantName?: string; // Display name of the custom assistant being used
  onFirstUserMessage?: () => void; // Called when the first user message appears (simulator mode)
  // Rich interactive response props
  pendingBotResponses?: BotResponse[];
  onDecisionMade?: (value: string) => void;
  onRichResponseComplete?: () => void;
  onCommitRichContent?: (textContent: string, richContent?: any[]) => void;
  onNavigateToExplore?: () => void;
}

// Simulated reasoning content for thinking states
const simulatedReasoning = [
  "Analyzing the user's request and identifying key requirements...",
  "Breaking down the task into smaller, manageable components...",
  "Retrieving relevant information from knowledge base...",
  "Cross-referencing with policy documents and guidelines...",
  "Evaluating multiple approaches to solve this problem...",
  "Considering potential edge cases and constraints...",
  "Synthesizing information into a coherent response...",
  "Verifying accuracy and completeness of the solution...",
];

export const ChatSimulatorView: React.FC<ChatSimulatorProps> = ({
  data,
  onFormSubmit,
  onComplete,
  onToggleSidebar,
  onBack,
  mode = 'simulator',
  interactiveMessages = [],
  onSendMessage,
  title: interactiveTitle,
  classificationType,
  chatId,
  onRenameChat,
  isNewChat = false,
  isIncognito = false,
  projects = [],
  onMoveToProject,
  favoritedAssistants = [],
  onToggleFavorite,
  toolAssistants = [],
  onAddToTools,
  onRemoveFromTools,
  onReplaceToolAssistant,
  assistantType,
  assistantName,
  onFirstUserMessage,
  pendingBotResponses,
  onDecisionMade,
  onRichResponseComplete,
  onCommitRichContent,
  onNavigateToExplore,
}) => {
  const isInteractive = mode === 'interactive';
  const currentAssistantName = isInteractive ? assistantName : data?.assistantName;
  const assistantObj = currentAssistantName ? getAssistantByName(currentAssistantName) : undefined;
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentThought, setCurrentThought] = useState("");
  const [currentReasoning, setCurrentReasoning] = useState<Array<string | { text: string; icon: string }>>([]);
  const [showThinkingDots, setShowThinkingDots] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactResponse | null>(null);
  const [isEditingCanvasTitle, setIsEditingCanvasTitle] = useState(false);
  const [editCanvasTitleValue, setEditCanvasTitleValue] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [searchingAssistant, setSearchingAssistant] = useState(false);
  const [showOutputPanel, setShowOutputPanel] = useState(false);
  const [panelContentVisible, setPanelContentVisible] = useState(false);
  const [expandedThinkingIds, setExpandedThinkingIds] = useState<Set<number>>(new Set());
  const [artifactVersions, setArtifactVersions] = useState<{[key: string]: number}>({});
  const [copied, setCopied] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [feedbackMessageId, setFeedbackMessageId] = useState<{[key: string]: 'up' | 'down' | null}>({});
  const chatEndRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<ImperativePanelHandle>(null);
  const outputContentRef = useRef<HTMLDivElement>(null);
  const shouldScrollToBottom = useRef(false);
  const lastUserMessageRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const assistantContentRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState<number>(0);

  // Interactive rich response state
  const [interactiveDisplayedMessages, setInteractiveDisplayedMessages] = useState<any[]>([]);
  const [isProcessingRichResponse, setIsProcessingRichResponse] = useState(false);
  const [awaitingDecision, setAwaitingDecision] = useState(false);
  const richResponseAbortRef = useRef(false);

  // Lo-fi grayscale theme
  const theme = {
    primary: 'bg-gray-900 hover:bg-gray-700',
    light: 'bg-gray-100',
    border: 'border-gray-300',
    text: 'text-gray-900',
    accent: 'bg-gray-700',
    ring: 'focus:ring-gray-500'
  };

  // Animate right panel open/close
  // Open: expand panel → wait for animation → fade in content
  // Close: hide content instantly → collapse panel
  useEffect(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    if (showOutputPanel) {
      panel.expand();
      // Fade in content after panel expand animation (200ms)
      const timer = setTimeout(() => setPanelContentVisible(true), 220);
      return () => clearTimeout(timer);
    } else {
      // Hide content instantly, then collapse
      setPanelContentVisible(false);
      const timer = setTimeout(() => panel.collapse(), 10);
      return () => clearTimeout(timer);
    }
  }, [showOutputPanel]);

  // Scroll user's message to top when they send a message (not when assistant replies)
  useEffect(() => {
    if (shouldScrollToBottom.current) {
      setTimeout(() => {
        lastUserMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      shouldScrollToBottom.current = false;
    }
  }, [displayedMessages, interactiveMessages]);

  // Calculate spacer height: container - lastUserMessage - assistantContent - header - gap
  useEffect(() => {
    const calculateSpacer = () => {
      if (!messagesContainerRef.current) return;

      const containerHeight = messagesContainerRef.current.clientHeight;
      const headerHeight = 52;
      const gap = 16;
      const lastUserHeight = lastUserMessageRef.current?.offsetHeight || 0;
      const assistantHeight = assistantContentRef.current?.offsetHeight || 0;

      const calculated = containerHeight - lastUserHeight - assistantHeight - headerHeight - gap;
      setSpacerHeight(Math.max(0, calculated));
    };

    calculateSpacer();
    const timer = setTimeout(calculateSpacer, 50);
    window.addEventListener('resize', calculateSpacer);
    return () => {
      window.removeEventListener('resize', calculateSpacer);
      clearTimeout(timer);
    };
  }, [displayedMessages, interactiveMessages, interactiveDisplayedMessages, currentThought, currentReasoning, showThinkingDots, searchingAssistant, showOutputPanel]);

  // Setup form submission handler when artifact changes (simulator only)
  useEffect(() => {
    if (isInteractive) return;
    if (selectedArtifact && selectedArtifact.interactive) {
      setTimeout(() => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          form.onsubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const formDataObj = Object.fromEntries(formData);
            handleFormSubmit(formDataObj, selectedArtifact.title);
          };
        });
      }, 100);
    }
  }, [selectedArtifact, isInteractive]);

  // Check if conversation is complete (simulator only)
  useEffect(() => {
    if (isInteractive) return;
    if (!data) return;
    if (currentMessageIndex >= data.messages.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentMessageIndex, data?.messages?.length, isComplete, onComplete, isInteractive]);

  // Scroll output panel to top when artifact changes
  useEffect(() => {
    if (selectedArtifact && outputContentRef.current) {
      outputContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedArtifact]);

  const handleFormSubmit = (formData: any, artifactTitle: string) => {
    // Close the artifact viewer
    setSelectedArtifact(null);

    // Add a message showing form was submitted
    setDisplayedMessages(prev => [...prev, {
      role: 'user',
      text: 'Form submitted ✓'
    }]);

    // Call external handler if provided
    if (onFormSubmit) {
      onFormSubmit(formData, artifactTitle);
    } else {
      // Default behavior: show acknowledgment
      setTimeout(async () => {
        setShowThinkingDots(true);
        await sleep(1333); // 1.5x faster: was 2000
        setShowThinkingDots(false);

        setDisplayedMessages(prev => [...prev, {
          type: 'text',
          content: `Thank you for submitting the form! I've received your information and will process it accordingly.`
        }]);

        // Move to next message if available
        setCurrentMessageIndex(prev => prev + 1);
      }, 333); // 1.5x faster: was 500
    }
  };

  // Track whether we've already fired the first user message callback
  const hasFiredFirstUserMessage = useRef(false);

  // Handle message send from MessageInput (simulator only)
  const handleSendMessage = (text: string) => {
    if (!data) return;
    if (currentMessageIndex >= data.messages.length) return;

    const currentMsg = data.messages[currentMessageIndex];
    if (currentMsg.role !== 'user') return;

    const targetText = (currentMsg.content as UserMessage).text;

    if (!hasFiredFirstUserMessage.current) {
      hasFiredFirstUserMessage.current = true;
      onFirstUserMessage?.();
    }

    shouldScrollToBottom.current = true;
    setIsTyping(false);
    setDisplayedMessages(prev => [...prev, { role: 'user', text: targetText }]);
    setTypedText("");
    setCurrentMessageIndex(prev => prev + 1);
  };

  // Get the current target text for typing simulation (simulator only)
  const getCurrentTargetText = () => {
    if (isInteractive || !data) return undefined;
    if (currentMessageIndex >= data.messages.length) return undefined;
    const currentMsg = data.messages[currentMessageIndex];
    if (currentMsg.role !== 'user') return undefined;
    return (currentMsg.content as UserMessage).text;
  };

  // Process bot messages (simulator only)
  useEffect(() => {
    if (isInteractive || !data) return;
    if (currentMessageIndex >= data.messages.length) return;

    const currentMsg = data.messages[currentMessageIndex];

    if (currentMsg.role === 'user') {
      const userContent = currentMsg.content as UserMessage;

      // Check if this is an auto-send message
      if (userContent.autoSend && userContent.text) {
        // Automatically send this message
        setTimeout(() => {
          if (!hasFiredFirstUserMessage.current) {
            hasFiredFirstUserMessage.current = true;
            onFirstUserMessage?.();
          }
          setDisplayedMessages(prev => [...prev, { role: 'user', text: userContent.text }]);
          setCurrentMessageIndex(prev => prev + 1);
        }, 500);
      } else if (userContent.formSubmission) {
        // Handle form submission (existing behavior)
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        // Normal user typing
        setIsTyping(true);
      }
    } else {
      // Bot message
      const responses = currentMsg.content as BotResponse[];
      processBotResponses(responses);
    }
  }, [currentMessageIndex, isInteractive, data]);

  const processBotResponses = async (responses: BotResponse[]) => {
    // Show thinking dots
    setShowThinkingDots(true);
    await sleep(1000); // 1.5x faster: was 1500
    setShowThinkingDots(false);

    for (const response of responses) {
      if (response.type === 'thinking') {
        await processThinkingResponse(response);
      } else if (response.type === 'assistantSwitch') {
        // Show searching state
        setSearchingAssistant(true);
        await sleep(1333); // 1.5x faster: was 2000
        setSearchingAssistant(false);

        // Show final "Switched to" state
        setDisplayedMessages(prev => [...prev, { type: 'assistantSwitch', message: response.message }]);
        await sleep(333); // 1.5x faster: was 500
      } else if (response.type === 'text') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 667); // 1.5x faster: default was 1000
        setDisplayedMessages(prev => [...prev, { type: 'text', content: response.content }]);
      } else if (response.type === 'artifact') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 667); // 1.5x faster: default was 1000
        setDisplayedMessages(prev => [...prev, { type: 'artifact', data: response }]);
        // Only auto-open and select artifact when panel is not already open
        // If panel is open, keep showing the user's current selection
        setShowOutputPanel(prev => {
          if (!prev) {
            setSelectedArtifact(response);
          }
          return true;
        });
      }
    }

    setCurrentMessageIndex(prev => prev + 1);
  };

  const processThinkingResponse = async (response: ThinkingResponse) => {
    const timing = (response.timingMs || 1500) / 1.5; // 1.5x faster

    // Get reasoning array
    const reasoning = response.reasoning || [];

    // Show reasoning progressively
    for (let i = 0; i < reasoning.length; i++) {
      setCurrentReasoning(prev => [...prev, reasoning[i]]);
      await sleep(timing / reasoning.length);
    }

    // Show the thought if provided
    if (response.thought) {
      setCurrentThought(response.thought);
      await sleep(500);
    }

    // Save the thought and reasoning to messages (stays visible)
    setDisplayedMessages(prev => [...prev, {
      type: 'thinking',
      thought: response.thought || '',
      reasoning: reasoning,
      doneSummary: response.doneSummary,
      tags: response.tags
    }]);

    setCurrentThought("");
    setCurrentReasoning([]);
  };

  // Process rich bot responses for interactive mode
  const processInteractiveBotResponses = async (responses: BotResponse[]) => {
    setIsProcessingRichResponse(true);
    richResponseAbortRef.current = false;

    // Show initial thinking dots
    setShowThinkingDots(true);
    await sleep(800);
    if (richResponseAbortRef.current) return;
    setShowThinkingDots(false);

    for (let i = 0; i < responses.length; i++) {
      const response = responses[i];
      if (richResponseAbortRef.current) return;

      if (response.type === 'thinking') {
        await processThinkingResponse(response);
        if (richResponseAbortRef.current) return;
        // Check if next response is a decision — if so, mark thinking as pending (no "Done" yet)
        const nextIsDecision = i + 1 < responses.length && responses[i + 1].type === 'decision';
        setInteractiveDisplayedMessages(prev => [...prev, {
          type: 'thinking',
          thought: response.thought || '',
          reasoning: response.reasoning || [],
          doneSummary: response.doneSummary,
          tags: response.tags,
          pending: nextIsDecision,
        }]);
      } else if (response.type === 'decision') {
        // Render decision card and pause — wait for user click
        setInteractiveDisplayedMessages(prev => [...prev, {
          type: 'decision',
          question: response.question,
          options: response.options,
        }]);
        setAwaitingDecision(true);
        setIsProcessingRichResponse(false);
        return; // Stop processing — will resume via new pendingBotResponses
      } else if (response.type === 'text') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 500);
        if (richResponseAbortRef.current) return;
        setInteractiveDisplayedMessages(prev => [...prev, { type: 'text', content: response.content }]);
      } else if (response.type === 'artifact') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 500);
        if (richResponseAbortRef.current) return;
        setInteractiveDisplayedMessages(prev => [...prev, { type: 'artifact', data: response }]);
        setSelectedArtifact(response);
        setShowOutputPanel(true);
      } else if (response.type === 'mermaid') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 500);
        if (richResponseAbortRef.current) return;
        setInteractiveDisplayedMessages(prev => [...prev, { type: 'mermaid', chart: response.chart }]);
      }
    }

    setIsProcessingRichResponse(false);
    onRichResponseComplete?.();
  };

  const handleDecisionSelect = (value: string) => {
    setAwaitingDecision(false);

    // Find the label before removing the card
    const option = interactiveDisplayedMessages
      .filter((m: any) => m.type === 'decision')
      .flatMap((m: any) => m.options)
      .find((o: any) => o.value === value);
    const label = option?.label || value;

    // Remove decision card, mark pending thinking blocks as done, add user's selection bubble
    setInteractiveDisplayedMessages(prev => [
      ...prev
        .filter((m: any) => m.type !== 'decision')
        .map((m: any) => m.type === 'thinking' && m.pending ? { ...m, pending: false } : m),
      { type: 'userDecision', text: label },
    ]);

    onDecisionMade?.(value);
  };

  // Process pending bot responses when they change (interactive mode)
  useEffect(() => {
    if (!isInteractive || !pendingBotResponses || pendingBotResponses.length === 0) return;
    processInteractiveBotResponses(pendingBotResponses);
  }, [pendingBotResponses]);

  // Auto-select artifact when it appears in interactive displayed messages
  useEffect(() => {
    if (!isInteractive) return;
    const latestArtifact = [...interactiveDisplayedMessages].reverse().find(m => m.type === 'artifact');
    if (latestArtifact && (!selectedArtifact || selectedArtifact.title !== latestArtifact.data.title)) {
      setSelectedArtifact(latestArtifact.data);
      setShowOutputPanel(true);
    }
  }, [interactiveDisplayedMessages]);

  // Clear interactive rich response state on chat switch (skip initial mount)
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    richResponseAbortRef.current = true;
    setInteractiveDisplayedMessages([]);
    setIsProcessingRichResponse(false);
    setAwaitingDecision(false);
    setShowThinkingDots(false);
    setCurrentThought("");
    setCurrentReasoning([]);
  }, [chatId]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const toggleThinkingExpanded = (idx: number) => {
    setExpandedThinkingIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  const handleCopyArtifact = async () => {
    if (selectedArtifact) {
      // Strip HTML tags for plain text copy
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = selectedArtifact.content;
      const textContent = tempDiv.textContent || tempDiv.innerText || '';
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyMessage = async (messageId: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedMessageId(messageId);
    setShowCopyToast(true);
    setTimeout(() => {
      setCopiedMessageId(null);
      setShowCopyToast(false);
    }, 2000);
  };

  const handleFeedback = (messageId: string, feedback: 'up' | 'down') => {
    setFeedbackMessageId(prev => ({
      ...prev,
      [messageId]: prev[messageId] === feedback ? null : feedback
    }));
  };

  const handleDownloadDocx = () => {
    if (selectedArtifact) {
      // Create a simple HTML document that Word can open
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${selectedArtifact.title}</title>
        </head>
        <body>
          <h1>${selectedArtifact.title}</h1>
          ${selectedArtifact.content}
        </body>
        </html>
      `;
      const blob = new Blob([htmlContent], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedArtifact.title.replace(/\s+/g, '_')}.doc`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const getCurrentVersion = () => {
    if (!selectedArtifact) return 1;
    return artifactVersions[selectedArtifact.title] || 1;
  };

  const handlePrevVersion = () => {
    if (selectedArtifact && getCurrentVersion() > 1) {
      setArtifactVersions(prev => ({
        ...prev,
        [selectedArtifact.title]: (prev[selectedArtifact.title] || 1) - 1
      }));
    }
  };

  const handleNextVersion = () => {
    if (selectedArtifact) {
      // Simulate max 3 versions
      const current = getCurrentVersion();
      if (current < 3) {
        setArtifactVersions(prev => ({
          ...prev,
          [selectedArtifact.title]: current + 1
        }));
      }
    }
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full bg-gray-50">
      {/* Chat Area */}
      <ResizablePanel defaultSize={100} minSize={30}>
        <div className="flex-1 flex flex-col h-full relative">
        {/* Copy Toast */}
        {showCopyToast && (
          <div className="absolute left-1/2 -translate-x-1/2 z-50" style={{ top: 'calc(44px + 16px)' }}>
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg animate-in fade-in duration-200">
              Copied
            </div>
          </div>
        )}
        {/* Chat Header */}
        <ChatHeader
          isInteractive={isInteractive}
          isIncognito={isIncognito}
          isNewChat={isNewChat}
          interactiveTitle={interactiveTitle}
          simulatorTitle={data?.title}
          assistantName={isInteractive ? assistantName : data?.assistantName}
          classificationType={isInteractive ? classificationType : data?.classificationType}
          hasUserMessage={isInteractive
            ? interactiveMessages.length > 0
            : displayedMessages.some(m => m.role === 'user')}
          chatId={chatId}
          onRenameChat={onRenameChat}
          projects={projects}
          onMoveToProject={onMoveToProject}
          assistant={assistantObj}
          isFavorited={assistantObj ? favoritedAssistants.includes(assistantObj.id) : false}
          onToggleFavorite={onToggleFavorite}
          toolAssistants={toolAssistants}
          onAddToTools={onAddToTools}
          onRemoveFromTools={onRemoveFromTools}
          onReplaceToolAssistant={onReplaceToolAssistant}
          showOutputPanel={showOutputPanel}
          onShowOutputPanel={() => setShowOutputPanel(true)}
        />

        {/* Messages */}
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
          <div className="max-w-chat mx-auto space-y-8">
          {isInteractive ? (
            /* Interactive mode - render real chat messages */
            (() => {
              const lastUserIdx = interactiveMessages.map(m => m.role).lastIndexOf('user');
              const messagesUpToLastUser = lastUserIdx >= 0 ? interactiveMessages.slice(0, lastUserIdx + 1) : interactiveMessages;
              const messagesAfterLastUser = lastUserIdx >= 0 ? interactiveMessages.slice(lastUserIdx + 1) : [];

              return (
                <>
                  {/* Messages up to and including last user message */}
                  {messagesUpToLastUser.map((msg, idx) => (
                    <div key={msg.id} className="group">
                      {msg.role === 'user' ? (
                        <div
                          ref={idx === lastUserIdx ? lastUserMessageRef : null}
                          className="flex flex-col items-end ml-24"
                        >
                          <div className="bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl mt-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                            {msg.content}
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    onClick={() => handleCopyMessage(msg.id, msg.content)}
                                    className="p-1.5 hover:bg-gray-100 rounded"
                                  >
                                    <Copy className="w-4 h-4 text-gray-400" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Copy</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      ) : msg.richContent ? (
                        <div className="space-y-8">
                          {msg.richContent.map((rich: any, ridx: number) => (
                            <div key={`${msg.id}-rich-${ridx}`}>
                              {rich.type === 'thinking' && (
                                <ReasoningBlock
                                  id={parseInt(msg.id) + ridx}
                                  reasoning={rich.reasoning || []}
                                  doneSummary={rich.doneSummary}
                                  tags={rich.tags}
                                  isExpanded={expandedThinkingIds.has(parseInt(msg.id) + ridx)}
                                  onToggle={toggleThinkingExpanded}
                                />
                              )}
                              {rich.type === 'text' && (
                                <TextResponseBlock
                                  messageId={`${msg.id}-rich-${ridx}`}
                                  content={rich.content}
                                  copiedMessageId={copiedMessageId}
                                  feedbackState={feedbackMessageId}
                                  onCopy={handleCopyMessage}
                                  onFeedback={handleFeedback}
                                />
                              )}
                              {rich.type === 'mermaid' && (
                                <div className="my-4 bg-white rounded-xl border border-gray-200 p-4 inline-block" style={{ maxWidth: '400px' }}>
                                  <MermaidDiagram chart={rich.chart} maxWidth="400px" />
                                </div>
                              )}
                              {rich.type === 'artifact' && (
                                <ArtifactCard
                                  title={rich.data.title}
                                  description={rich.data.description}
                                  fileType={rich.data.fileType}
                                  onSelect={() => {
                                    setSelectedArtifact(rich.data);
                                    setShowOutputPanel(true);
                                  }}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <TextResponseBlock
                          messageId={msg.id}
                          content={msg.content}
                          copiedMessageId={copiedMessageId}
                          feedbackState={feedbackMessageId}
                          onCopy={handleCopyMessage}
                          onFeedback={handleFeedback}
                        />
                )}
                    </div>
                  ))}

                  {/* Assistant content after last user message + rich responses */}
                  {(messagesAfterLastUser.length > 0 || interactiveDisplayedMessages.length > 0 || currentThought || currentReasoning.length > 0 || showThinkingDots) && (
                    <div ref={assistantContentRef} className="space-y-8">
                      {messagesAfterLastUser.map((msg) => (
                        <div key={msg.id} className="group">
                          <TextResponseBlock
                            messageId={msg.id}
                            content={msg.content}
                            copiedMessageId={copiedMessageId}
                            feedbackState={feedbackMessageId}
                            onCopy={handleCopyMessage}
                            onFeedback={handleFeedback}
                          />
                        </div>
                      ))}

                      {/* Rich interactive displayed messages (thinking, decisions, text) */}
                      {interactiveDisplayedMessages.map((msg, idx) => (
                        <div key={`rich-${idx}`}>
                          {msg.type === 'thinking' && (
                            <ReasoningBlock
                              id={idx + 2000}
                              reasoning={msg.reasoning || []}
                              doneSummary={msg.doneSummary}
                              tags={msg.tags}
                              isExpanded={expandedThinkingIds.has(idx + 2000)}
                              onToggle={toggleThinkingExpanded}
                              isLive={msg.pending}
                              liveLabel="Awaiting confirmation..."
                            />
                          )}
                          {msg.type === 'decision' && (
                            <DecisionCard
                              question={msg.question}
                              options={msg.options}
                              onSelect={handleDecisionSelect}
                              disabled={msg.disabled}
                            />
                          )}
                          {msg.type === 'text' && (
                            <TextResponseBlock
                              messageId={`rich-text-${idx}`}
                              content={msg.content}
                              copiedMessageId={copiedMessageId}
                              feedbackState={feedbackMessageId}
                              onCopy={handleCopyMessage}
                              onFeedback={handleFeedback}
                            />
                          )}
                          {msg.type === 'artifact' && (
                            <ArtifactCard
                              title={msg.data.title}
                              description={msg.data.description}
                              fileType={msg.data.fileType}
                              onSelect={() => {
                                setSelectedArtifact(msg.data);
                                setShowOutputPanel(true);
                              }}
                            />
                          )}
                          {msg.type === 'mermaid' && (
                            <div className="my-4 bg-white rounded-xl border border-gray-200 p-4 inline-block" style={{ maxWidth: '400px' }}>
                              <MermaidDiagram chart={msg.chart} maxWidth="400px" />
                            </div>
                          )}
                          {msg.type === 'userDecision' && (
                            <div className="flex justify-end items-start gap-2 ml-24">
                              <div className="bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl mt-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                                {msg.text}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Active thinking state with live reasoning (interactive mode) */}
                      {(currentThought || currentReasoning.length > 0) && (
                        <ReasoningBlock
                          id={-1}
                          reasoning={currentReasoning}
                          isExpanded={expandedThinkingIds.has(-1)}
                          onToggle={(id) => setExpandedThinkingIds(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(id)) newSet.delete(id);
                            else newSet.add(id);
                            return newSet;
                          })}
                          isLive
                          liveLabel={currentThought || 'Processing...'}
                        />
                      )}

                      {/* Skeleton loader */}
                      {showThinkingDots && <SkeletonLoader />}
                    </div>
                  )}
                </>
              );
            })()
          ) : (
            /* Simulator mode - render scripted messages */
            (() => {
              const lastUserIdx = displayedMessages.map(m => m.role).lastIndexOf('user');
              const messagesUpToLastUser = lastUserIdx >= 0 ? displayedMessages.slice(0, lastUserIdx + 1) : displayedMessages;
              const messagesAfterLastUser = lastUserIdx >= 0 ? displayedMessages.slice(lastUserIdx + 1) : [];

              return (
                <>
                  {messagesUpToLastUser.map((msg, idx) => (
                    <div key={idx} className="group">
                      {msg.role === 'user' && (
                        <div
                          ref={idx === lastUserIdx ? lastUserMessageRef : null}
                          className="flex flex-col items-end ml-24"
                        >
                          <div className="bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl mt-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                            {msg.text}
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    onClick={() => handleCopyMessage(`sim-${idx}`, msg.text)}
                                    className="p-1.5 hover:bg-gray-100 rounded"
                                  >
                                    <Copy className="w-4 h-4 text-gray-400" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Copy</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      )}

                {msg.type === 'thinking' && (
                  <ReasoningBlock
                    id={idx}
                    reasoning={msg.reasoning || []}
                    doneSummary={msg.doneSummary}
                    tags={msg.tags}
                    isExpanded={expandedThinkingIds.has(idx)}
                    onToggle={toggleThinkingExpanded}
                  />
                )}

                {msg.type === 'assistantSwitch' && (
                  <AssistantSwitchBadge message={msg.message} />
                )}

                {msg.type === 'text' && (
                  <TextResponseBlock
                    messageId={`sim-text-${idx}`}
                    content={msg.content}
                    copiedMessageId={copiedMessageId}
                    feedbackState={feedbackMessageId}
                    onCopy={handleCopyMessage}
                    onFeedback={handleFeedback}
                  />
                )}

                {msg.type === 'artifact' && (
                  <ArtifactCard
                    title={msg.data.title}
                    description={msg.data.description}
                    fileType={msg.data.fileType}
                    onSelect={() => {
                      setSelectedArtifact(msg.data);
                      setShowOutputPanel(true);
                    }}
                  />
                )}
              </div>
            ))}

                  {/* Assistant content after last user message */}
                  {(messagesAfterLastUser.length > 0 || currentThought || currentReasoning.length > 0 || searchingAssistant || showThinkingDots) && (
                    <div ref={assistantContentRef} className="space-y-8">
                      {messagesAfterLastUser.map((msg, idx) => (
                        <div key={`after-${idx}`} className="group">
                          {msg.type === 'thinking' && (
                            <ReasoningBlock
                              id={idx + 1000}
                              reasoning={msg.reasoning || []}
                              doneSummary={msg.doneSummary}
                              tags={msg.tags}
                              isExpanded={expandedThinkingIds.has(idx + 1000)}
                              onToggle={toggleThinkingExpanded}
                            />
                          )}
                          {msg.type === 'assistantSwitch' && (
                            <AssistantSwitchBadge message={msg.message} />
                          )}
                          {msg.type === 'text' && (
                            <TextResponseBlock
                              messageId={`sim-after-${idx}`}
                              content={msg.content}
                              copiedMessageId={copiedMessageId}
                              feedbackState={feedbackMessageId}
                              onCopy={handleCopyMessage}
                              onFeedback={handleFeedback}
                            />
                          )}
                          {msg.type === 'artifact' && (
                            <ArtifactCard
                              title={msg.data.title}
                              description={msg.data.description}
                              fileType={msg.data.fileType}
                              onSelect={() => {
                                setSelectedArtifact(msg.data);
                                setShowOutputPanel(true);
                              }}
                            />
                          )}
                        </div>
                      ))}

                      {/* Active thinking state with live reasoning */}
                      {(currentThought || currentReasoning.length > 0) && (
                        <ReasoningBlock
                          id={-1}
                          reasoning={currentReasoning}
                          isExpanded={expandedThinkingIds.has(-1)}
                          onToggle={(id) => setExpandedThinkingIds(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(id)) newSet.delete(id);
                            else newSet.add(id);
                            return newSet;
                          })}
                          isLive
                          liveLabel={currentThought || 'Processing...'}
                        />
                      )}

                      {/* Searching assistant loading state */}
                      {searchingAssistant && <SearchingAssistantLoader />}

                      {/* Skeleton loader */}
                      {showThinkingDots && <SkeletonLoader />}
                    </div>
                  )}
                </>
              );
            })()
          )}

            {/* Spacer - placeholder for assistant content */}
            <div style={{ height: `${spacerHeight}px` }} />

            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="max-w-chat mx-auto">
            {isInteractive ? (
              /* Interactive mode - normal input */
              <MessageInput
                onSend={(message) => {
                  // Commit any completed rich content as a regular assistant message before sending
                  if (interactiveDisplayedMessages.length > 0 && !isProcessingRichResponse && !awaitingDecision) {
                    const textItems = interactiveDisplayedMessages
                      .filter((m: any) => m.type === 'text')
                      .map((m: any) => m.content);
                    if (onCommitRichContent) {
                      onCommitRichContent(
                        textItems.join('\n\n') || '',
                        interactiveDisplayedMessages
                      );
                    }
                    setInteractiveDisplayedMessages([]);
                  }
                  shouldScrollToBottom.current = true;
                  onSendMessage?.(message);
                }}
                autoFocus={true}
                bookmarkedAssistants={favoritedAssistants}
                assistantType={assistantType}
                disabled={isProcessingRichResponse || awaitingDecision}
                onNavigateToExplore={onNavigateToExplore}
              />
            ) : (
              /* Simulator mode - auto-type input */
              <MessageInput
                onSend={handleSendMessage}
                value={typedText}
                onChange={setTypedText}
                autoTypeText={getCurrentTargetText()}
                disabled={!isTyping}
                assistantType={assistantType}
                onNavigateToExplore={onNavigateToExplore}
              />
            )}
            {/* Disclaimer - only show when chat has started */}
            {((isInteractive && interactiveMessages.length > 0) || (!isInteractive && displayedMessages.length > 0)) && (
              <p className="text-xs text-gray-400 mt-3 text-center">AI can make mistakes. Check important info.</p>
            )}
          </div>
        </div>
        </div>
      </ResizablePanel>

      {/* Resizable Handle */}
      <ResizableHandle withHandle className={`bg-gray-100 hover:bg-gray-100 transition-colors ${!showOutputPanel ? 'opacity-0 pointer-events-none' : ''}`} />

      {/* Output Panel */}
      <ResizablePanel
        ref={rightPanelRef}
        defaultSize={0}
        minSize={20}
        collapsedSize={0}
        collapsible
        onExpand={() => setShowOutputPanel(true)}
        onCollapse={() => setShowOutputPanel(false)}
      >
        <div className={`flex flex-col h-full bg-white overflow-hidden transition-opacity duration-75 ${panelContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Canvas Header with Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white h-[52px]">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              {selectedArtifact && (
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="mr-2 flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {isEditingCanvasTitle && selectedArtifact ? (
                <input
                  type="text"
                  value={editCanvasTitleValue}
                  onChange={(e) => setEditCanvasTitleValue(e.target.value)}
                  onBlur={() => {
                    // In a real implementation, this would update the artifact title
                    setIsEditingCanvasTitle(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsEditingCanvasTitle(false);
                    } else if (e.key === 'Escape') {
                      setIsEditingCanvasTitle(false);
                    }
                  }}
                  className="text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  autoFocus
                />
              ) : (
                <h2
                  className="text-sm font-semibold text-gray-900 cursor-pointer truncate"
                  onDoubleClick={() => {
                    if (selectedArtifact) {
                      setEditCanvasTitleValue(selectedArtifact.title);
                      setIsEditingCanvasTitle(true);
                    }
                  }}
                  title={selectedArtifact ? "Double-click to rename" : undefined}
                >
                  {selectedArtifact ? selectedArtifact.title : 'Canvas'}
                </h2>
              )}
            </div>

            <div className="flex items-center gap-1">
              {/* Canvas Toolbar - only when viewing artifact */}
              {selectedArtifact && (
                <div className="flex items-center gap-1">
                    {/* Save as .docx button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownloadDocx}
                      className="h-8 px-3 gap-2 border-gray-300"
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-xs">Save as .docx</span>
                    </Button>
                  </div>
              )}

              <button
                onClick={() => setShowOutputPanel(false)}
                className="text-gray-500 hover:text-gray-900 transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Output Content */}
          <div className="flex-1 overflow-auto" ref={outputContentRef}>
            {selectedArtifact ? (
              <div className="h-full bg-white">
                <div className="p-8 max-w-4xl mx-auto">
                  {/* Artifact Header */}
                  <div className="mb-6 flex items-start gap-3">
                    <div className="text-gray-700 mt-1">
                      {getFileIcon(selectedArtifact.fileType)}
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-gray-900 mb-1">{selectedArtifact.title}</h1>
                      <p className="text-xs text-gray-500">{selectedArtifact.description}</p>
                    </div>
                  </div>

                  {/* Artifact Content */}
                  {selectedArtifact.fileType === 'chart' ? (
                    <MermaidDiagram chart={selectedArtifact.content} />
                  ) : (
                    <div className="prose prose-sm max-w-none prose-lofi" dangerouslySetInnerHTML={{ __html: selectedArtifact.content }} />
                  )}

                </div>
              </div>
            ) : (
              <div className="h-full p-4">
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">List of Canvas</h3>

                  {(() => {
                    const allArtifacts = [
                      ...displayedMessages.filter(m => m.type === 'artifact'),
                      ...interactiveDisplayedMessages.filter(m => m.type === 'artifact'),
                    ];
                    return allArtifacts.length > 0 ? (
                    <div className="space-y-2">
                      {allArtifacts.map((msg, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedArtifact(msg.data)}
                          className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-300 hover:border-gray-900 hover:shadow-sm transition-all text-left"
                        >
                          <div className="p-2 rounded-lg bg-gray-100 text-gray-700">
                            {getFileIcon(msg.data.fileType)}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{msg.data.title}</div>
                            <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{msg.data.description}</div>
                          </div>
                          <div className="text-gray-500">
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
                      <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">No output canvas generated yet</p>
                      <p className="text-xs mt-1">Canvases created during the chat will appear here</p>
                    </div>
                  );
                  })()}
                </div>
              </div>
            )}
          </div>
            </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
