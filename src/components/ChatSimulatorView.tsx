import React, { useState, useEffect, useRef } from 'react';
import { FileText, X, ArrowLeft, Copy, Download, Check, Undo2, Redo2, GripVerticalIcon } from 'lucide-react';
import { Button, Text, Box } from '@mantine/core';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import type { ImperativePanelHandle } from 'react-resizable-panels';
import { MessageInput } from './MessageInput';
import { TooltipIconButton, EditableText } from './shared';
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
import cls from './ChatSimulatorView.module.css';

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
  reasoning?: Array<string | { text: string; icon: string; description?: string }>;
  doneSummary?: string;
  tags?: string[];
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
  data?: ChatSimulation;
  onFormSubmit?: (formData: any, artifactTitle: string) => void;
  onComplete?: () => void;
  onToggleSidebar?: () => void;
  onBack?: () => void;
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
  assistantName?: string;
  onFirstUserMessage?: () => void;
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

  // Animate right panel open/close
  useEffect(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    if (showOutputPanel) {
      panel.expand();
      const timer = setTimeout(() => setPanelContentVisible(true), 220);
      return () => clearTimeout(timer);
    } else {
      setPanelContentVisible(false);
      const timer = setTimeout(() => panel.collapse(), 10);
      return () => clearTimeout(timer);
    }
  }, [showOutputPanel]);

  // Scroll user's message to top when they send a message
  useEffect(() => {
    if (shouldScrollToBottom.current) {
      setTimeout(() => {
        lastUserMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      shouldScrollToBottom.current = false;
    }
  }, [displayedMessages, interactiveMessages]);

  // Calculate spacer height
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
    setSelectedArtifact(null);
    setDisplayedMessages(prev => [...prev, { role: 'user', text: 'Form submitted ✓' }]);
    if (onFormSubmit) {
      onFormSubmit(formData, artifactTitle);
    } else {
      setTimeout(async () => {
        setShowThinkingDots(true);
        await sleep(1333);
        setShowThinkingDots(false);
        setDisplayedMessages(prev => [...prev, {
          type: 'text',
          content: `Thank you for submitting the form! I've received your information and will process it accordingly.`
        }]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 333);
    }
  };

  const hasFiredFirstUserMessage = useRef(false);

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
      if (userContent.autoSend && userContent.text) {
        setTimeout(() => {
          if (!hasFiredFirstUserMessage.current) {
            hasFiredFirstUserMessage.current = true;
            onFirstUserMessage?.();
          }
          setDisplayedMessages(prev => [...prev, { role: 'user', text: userContent.text }]);
          setCurrentMessageIndex(prev => prev + 1);
        }, 500);
      } else if (userContent.formSubmission) {
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        setIsTyping(true);
      }
    } else {
      const responses = currentMsg.content as BotResponse[];
      processBotResponses(responses);
    }
  }, [currentMessageIndex, isInteractive, data]);

  const processBotResponses = async (responses: BotResponse[]) => {
    setShowThinkingDots(true);
    await sleep(1000);
    setShowThinkingDots(false);
    for (const response of responses) {
      if (response.type === 'thinking') {
        await processThinkingResponse(response);
      } else if (response.type === 'assistantSwitch') {
        setSearchingAssistant(true);
        await sleep(1333);
        setSearchingAssistant(false);
        setDisplayedMessages(prev => [...prev, { type: 'assistantSwitch', message: response.message }]);
        await sleep(333);
      } else if (response.type === 'text') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 667);
        setDisplayedMessages(prev => [...prev, { type: 'text', content: response.content }]);
      } else if (response.type === 'artifact') {
        await sleep(response.delayMs ? response.delayMs / 1.5 : 667);
        setDisplayedMessages(prev => [...prev, { type: 'artifact', data: response }]);
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
    const timing = (response.timingMs || 1500) / 1.5;
    const reasoning = response.reasoning || [];
    for (let i = 0; i < reasoning.length; i++) {
      setCurrentReasoning(prev => [...prev, reasoning[i]]);
      await sleep(timing / reasoning.length);
    }
    if (response.thought) {
      setCurrentThought(response.thought);
      await sleep(500);
    }
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

  const processInteractiveBotResponses = async (responses: BotResponse[]) => {
    setIsProcessingRichResponse(true);
    richResponseAbortRef.current = false;
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
        setInteractiveDisplayedMessages(prev => [...prev, {
          type: 'decision',
          question: response.question,
          options: response.options,
        }]);
        setAwaitingDecision(true);
        setIsProcessingRichResponse(false);
        return;
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
    const option = interactiveDisplayedMessages
      .filter((m: any) => m.type === 'decision')
      .flatMap((m: any) => m.options)
      .find((o: any) => o.value === value);
    const label = option?.label || value;
    setInteractiveDisplayedMessages(prev => [
      ...prev
        .filter((m: any) => m.type !== 'decision')
        .map((m: any) => m.type === 'thinking' && m.pending ? { ...m, pending: false } : m),
      { type: 'userDecision', text: label },
    ]);
    onDecisionMade?.(value);
  };

  useEffect(() => {
    if (!isInteractive || !pendingBotResponses || pendingBotResponses.length === 0) return;
    processInteractiveBotResponses(pendingBotResponses);
  }, [pendingBotResponses]);

  useEffect(() => {
    if (!isInteractive) return;
    const latestArtifact = [...interactiveDisplayedMessages].reverse().find(m => m.type === 'artifact');
    if (latestArtifact && (!selectedArtifact || selectedArtifact.title !== latestArtifact.data.title)) {
      setSelectedArtifact(latestArtifact.data);
      setShowOutputPanel(true);
    }
  }, [interactiveDisplayedMessages]);

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
      if (newSet.has(idx)) newSet.delete(idx);
      else newSet.add(idx);
      return newSet;
    });
  };

  const handleCopyArtifact = async () => {
    if (selectedArtifact) {
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
    <PanelGroup direction="horizontal" className={cls.panelGroup}>
      {/* Chat Area */}
      <Panel defaultSize={100} minSize={30}>
        <Box className={cls.chatColumn}>
        {/* Copy Toast */}
        {showCopyToast && (
          <Box className={cls.copyToast}>
            <Box className={cls.copyToastInner}>Copied</Box>
          </Box>
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
        <Box ref={messagesContainerRef} className={cls.messagesArea}>
          <Box className={cls.messagesInner}>
          {isInteractive ? (
            (() => {
              const lastUserIdx = interactiveMessages.map(m => m.role).lastIndexOf('user');
              const messagesUpToLastUser = lastUserIdx >= 0 ? interactiveMessages.slice(0, lastUserIdx + 1) : interactiveMessages;
              const messagesAfterLastUser = lastUserIdx >= 0 ? interactiveMessages.slice(lastUserIdx + 1) : [];

              return (
                <>
                  {messagesUpToLastUser.map((msg, idx) => (
                    <div key={msg.id} className={cls.messageGroup}>
                      {msg.role === 'user' ? (
                        <div
                          ref={idx === lastUserIdx ? lastUserMessageRef : null}
                          className={cls.userMessageWrapper}
                        >
                          <div className={cls.userBubble}>
                            {msg.content}
                          </div>
                          <div className={cls.userActions}>
                            <TooltipIconButton
                              icon={Copy}
                              tooltip="Copy"
                              onClick={() => handleCopyMessage(msg.id, msg.content)}
                              size="sm"
                              iconSize={16}
                            />
                          </div>
                        </div>
                      ) : msg.richContent ? (
                        <div className={cls.richContentGroup}>
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
                                <Box className={cls.mermaidWrapper}>
                                  <MermaidDiagram chart={rich.chart} maxWidth="400px" />
                                </Box>
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

                  {(messagesAfterLastUser.length > 0 || interactiveDisplayedMessages.length > 0 || currentThought || currentReasoning.length > 0 || showThinkingDots) && (
                    <div ref={assistantContentRef} className={cls.richContentGroup}>
                      {messagesAfterLastUser.map((msg) => (
                        <div key={msg.id} className={cls.messageGroup}>
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
                            <Box className={cls.mermaidWrapper}>
                              <MermaidDiagram chart={msg.chart} maxWidth="400px" />
                            </Box>
                          )}
                          {msg.type === 'userDecision' && (
                            <Box className={cls.decisionBubble}>
                              <div className={cls.userBubble}>
                                {msg.text}
                              </div>
                            </Box>
                          )}
                        </div>
                      ))}

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

                      {showThinkingDots && <SkeletonLoader />}
                    </div>
                  )}
                </>
              );
            })()
          ) : (
            (() => {
              const lastUserIdx = displayedMessages.map(m => m.role).lastIndexOf('user');
              const messagesUpToLastUser = lastUserIdx >= 0 ? displayedMessages.slice(0, lastUserIdx + 1) : displayedMessages;
              const messagesAfterLastUser = lastUserIdx >= 0 ? displayedMessages.slice(lastUserIdx + 1) : [];

              return (
                <>
                  {messagesUpToLastUser.map((msg, idx) => (
                    <div key={idx} className={cls.messageGroup}>
                      {msg.role === 'user' && (
                        <div
                          ref={idx === lastUserIdx ? lastUserMessageRef : null}
                          className={cls.userMessageWrapper}
                        >
                          <div className={cls.userBubble}>
                            {msg.text}
                          </div>
                          <div className={cls.userActions}>
                            <TooltipIconButton
                              icon={Copy}
                              tooltip="Copy"
                              onClick={() => handleCopyMessage(`sim-${idx}`, msg.text)}
                              size="sm"
                              iconSize={16}
                            />
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

                  {(messagesAfterLastUser.length > 0 || currentThought || currentReasoning.length > 0 || searchingAssistant || showThinkingDots) && (
                    <div ref={assistantContentRef} className={cls.richContentGroup}>
                      {messagesAfterLastUser.map((msg, idx) => (
                        <div key={`after-${idx}`} className={cls.messageGroup}>
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

                      {searchingAssistant && <SearchingAssistantLoader />}
                      {showThinkingDots && <SkeletonLoader />}
                    </div>
                  )}
                </>
              );
            })()
          )}

            {/* Spacer */}
            <div style={{ height: `${spacerHeight}px` }} />
            <div ref={chatEndRef} />
          </Box>
        </Box>

        {/* Input Area */}
        <Box className={cls.inputArea}>
          <Box className={cls.inputInner}>
            {isInteractive ? (
              <MessageInput
                onSend={(message) => {
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
                toolAssistants={toolAssistants}
                disabled={isProcessingRichResponse || awaitingDecision}
                onNavigateToExplore={onNavigateToExplore}
              />
            ) : (
              <MessageInput
                onSend={handleSendMessage}
                value={typedText}
                onChange={setTypedText}
                autoTypeText={getCurrentTargetText()}
                disabled={!isTyping}
                toolAssistants={toolAssistants}
                onNavigateToExplore={onNavigateToExplore}
              />
            )}
            {((isInteractive && interactiveMessages.length > 0) || (!isInteractive && displayedMessages.length > 0)) && (
              <Text size="xs" c="gray.4" mt="sm" className={cls.disclaimer}>AI can make mistakes. Check important info.</Text>
            )}
          </Box>
        </Box>
        </Box>
      </Panel>

      {/* Resizable Handle */}
      <PanelResizeHandle className={`${cls.resizeHandle} ${!showOutputPanel ? cls.resizeHandleHidden : ''}`}>
        <Box className={cls.resizeHandleGrip}>
          <GripVerticalIcon size={12} color="var(--mantine-color-gray-5)" />
        </Box>
      </PanelResizeHandle>

      {/* Output Panel */}
      <Panel
        ref={rightPanelRef}
        defaultSize={0}
        minSize={20}
        collapsedSize={0}
        collapsible
        onExpand={() => setShowOutputPanel(true)}
        onCollapse={() => setShowOutputPanel(false)}
      >
        <Box className={`${cls.outputPanel} ${!panelContentVisible ? cls.outputPanelHidden : ''}`}>
          {/* Canvas Header with Toolbar */}
          <Box className={cls.canvasHeader}>
            <Box className={cls.canvasHeaderLeft}>
              {selectedArtifact && (
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className={cls.canvasBackButton}
                >
                  <ArrowLeft size={16} />
                </button>
              )}
              {selectedArtifact ? (
                <EditableText
                  value={selectedArtifact.title}
                  onSave={() => {}}
                  as="h2"
                  className={cls.canvasTitle}
                />
              ) : (
                <Text size="sm" fw={600} c="gray.9" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Canvas</Text>
              )}
            </Box>

            <Box className={cls.canvasHeaderRight}>
              {selectedArtifact && (
                <Box className={cls.canvasToolbar}>
                  <Button
                    variant="outline"
                    color="gray"
                    size="xs"
                    onClick={handleDownloadDocx}
                    leftSection={<Download size={16} />}
                  >
                    Save as .docx
                  </Button>
                </Box>
              )}

              <button
                onClick={() => setShowOutputPanel(false)}
                className={cls.canvasCloseButton}
              >
                <X size={20} />
              </button>
            </Box>
          </Box>

          {/* Output Content */}
          <Box className={cls.outputContent} ref={outputContentRef}>
            {selectedArtifact ? (
              <Box className={cls.artifactView}>
                <Box className={cls.artifactInner}>
                  {/* Artifact Header */}
                  <Box className={cls.artifactHeader}>
                    <Box className={cls.artifactIconWrapper}>
                      {getFileIcon(selectedArtifact.fileType)}
                    </Box>
                    <Box>
                      <h1 className={cls.artifactTitle}>{selectedArtifact.title}</h1>
                      <p className={cls.artifactDescription}>{selectedArtifact.description}</p>
                    </Box>
                  </Box>

                  {/* Artifact Content */}
                  {selectedArtifact.fileType === 'chart' ? (
                    <MermaidDiagram chart={selectedArtifact.content} />
                  ) : (
                    <div className={`prose-lofi artifact-content ${cls.artifactContent}`} dangerouslySetInnerHTML={{ __html: selectedArtifact.content }} />
                  )}
                </Box>
              </Box>
            ) : (
              <Box className={cls.canvasListPanel}>
                <Box mb="md">
                  <h3 className={cls.canvasListHeader}>List of Canvas</h3>

                  {(() => {
                    const allArtifacts = [
                      ...displayedMessages.filter(m => m.type === 'artifact'),
                      ...interactiveDisplayedMessages.filter(m => m.type === 'artifact'),
                    ];
                    return allArtifacts.length > 0 ? (
                    <Box className={cls.canvasListItems}>
                      {allArtifacts.map((msg, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedArtifact(msg.data)}
                          className={cls.canvasListItem}
                        >
                          <Box className={cls.canvasListItemIcon}>
                            {getFileIcon(msg.data.fileType)}
                          </Box>
                          <Box className={cls.canvasListItemInfo}>
                            <Box className={cls.canvasListItemTitle}>{msg.data.title}</Box>
                            <Box className={cls.canvasListItemDesc}>{msg.data.description}</Box>
                          </Box>
                          <Box style={{ color: 'var(--mantine-color-gray-5)' }}>
                            <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                          </Box>
                        </button>
                      ))}
                    </Box>
                  ) : (
                    <Box className={cls.canvasEmptyState}>
                      <FileText className={cls.canvasEmptyIcon} />
                      <Text size="sm">No output canvas generated yet</Text>
                      <Text size="xs" mt={4}>Canvases created during the chat will appear here</Text>
                    </Box>
                  );
                  })()}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Panel>
    </PanelGroup>
  );
};
