import React, { useState, useEffect, useRef } from 'react';
import { FileText, Code, BarChart3, ClipboardList, X, PanelRight, ArrowLeft, ChevronDown, ChevronRight, Copy, Download, Check, Undo2, Redo2, Pencil, EyeOff, ThumbsUp, ThumbsDown, MoreHorizontal, FolderPlus } from 'lucide-react';
import { MessageInput } from './MessageInput';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from './ui/dropdown-menu';
import type { Folder } from '../types/folder';
import { IncognitoIcon } from './IncognitoIcon';

// Type definitions
interface ChatSimulation {
  id: string;
  title: string;
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

type BotResponse =
  | ThinkingResponse
  | AssistantSwitchResponse
  | TextResponse
  | ArtifactResponse;

interface ThinkingResponse {
  type: "thinking";
  thoughts: string[];
  timingMs?: number;
  reasoning?: string[]; // Detailed reasoning steps for expandable view
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
  folders?: Folder[];
  onMoveToFolder?: (chatId: string, folderId: string) => void;
  bookmarkedAssistants?: string[];
  assistantType?: string;
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
  folders = [],
  onMoveToFolder,
  bookmarkedAssistants = [],
  assistantType,
}) => {
  const isInteractive = mode === 'interactive';
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentThought, setCurrentThought] = useState("");
  const [currentReasoning, setCurrentReasoning] = useState<string[]>([]);
  const [showThinkingDots, setShowThinkingDots] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactResponse | null>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitleValue, setEditTitleValue] = useState('');
  const [isTemporaryChat, setIsTemporaryChat] = useState(false);
  const [isEditingCanvasTitle, setIsEditingCanvasTitle] = useState(false);
  const [editCanvasTitleValue, setEditCanvasTitleValue] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [searchingAssistant, setSearchingAssistant] = useState(false);
  const [showOutputPanel, setShowOutputPanel] = useState(false);
  const [expandedThinkingIds, setExpandedThinkingIds] = useState<Set<number>>(new Set());
  const [artifactVersions, setArtifactVersions] = useState<{[key: string]: number}>({});
  const [copied, setCopied] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [feedbackMessageId, setFeedbackMessageId] = useState<{[key: string]: 'up' | 'down' | null}>({});
  const chatEndRef = useRef<HTMLDivElement>(null);
  const outputContentRef = useRef<HTMLDivElement>(null);

  // Lo-fi grayscale theme
  const theme = {
    primary: 'bg-gray-900 hover:bg-gray-700',
    light: 'bg-gray-100',
    border: 'border-gray-300',
    text: 'text-gray-900',
    accent: 'bg-gray-700',
    ring: 'focus:ring-gray-500'
  };

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedMessages, currentThought, interactiveMessages]);

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

  // Handle message send from MessageInput (simulator only)
  const handleSendMessage = (text: string) => {
    if (!data) return;
    if (currentMessageIndex >= data.messages.length) return;

    const currentMsg = data.messages[currentMessageIndex];
    if (currentMsg.role !== 'user') return;

    const targetText = (currentMsg.content as UserMessage).text;

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
        // Auto-open canvas when artifact is displayed
        setSelectedArtifact(response);
        setShowOutputPanel(true);
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
      reasoning: reasoning
    }]);

    setCurrentThought("");
    setCurrentReasoning([]);
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'document':
        return <FileText className="w-5 h-5" />;
      case 'code':
        return <Code className="w-5 h-5" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5" />;
      case 'form':
        return <ClipboardList className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

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
    setTimeout(() => setCopiedMessageId(null), 2000);
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
      <ResizablePanel defaultSize={showOutputPanel ? 50 : 100} minSize={30}>
        <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
          <div className={`flex items-center gap-3 flex-1 ${isIncognito ? 'justify-center' : ''}`}>
            {isIncognito ? (
              <div className="flex items-center gap-2">
                <IncognitoIcon className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">
                  Incognito chat
                </span>
              </div>
            ) : isEditingTitle && isInteractive ? (
              <input
                type="text"
                value={editTitleValue}
                onChange={(e) => setEditTitleValue(e.target.value)}
                onBlur={() => {
                  if (editTitleValue.trim() && chatId && onRenameChat) {
                    onRenameChat(chatId, editTitleValue.trim());
                  }
                  setIsEditingTitle(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (editTitleValue.trim() && chatId && onRenameChat) {
                      onRenameChat(chatId, editTitleValue.trim());
                    }
                    setIsEditingTitle(false);
                  } else if (e.key === 'Escape') {
                    setIsEditingTitle(false);
                  }
                }}
                className="text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                autoFocus
              />
            ) : (
              <div className="flex items-center gap-2 group/title">
                <span
                  className="text-sm font-medium text-gray-900 cursor-pointer"
                  onDoubleClick={() => {
                    if (isInteractive && onRenameChat) {
                      setEditTitleValue(interactiveTitle || 'New Chat');
                      setIsEditingTitle(true);
                    }
                  }}
                  title="Double-click to rename"
                >
                  {isInteractive ? (interactiveTitle || 'New Chat') : data?.title}
                </span>
              </div>
            )}
            {isInteractive ? (
              classificationType && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300">
                  {classificationType === 'cce-sn' ? 'C(CE) + SN' : classificationType === 'cce-sh' ? 'C(CE) + SH' : 'RSN'}
                </span>
              )
            ) : (
              data?.classificationType && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300">
                  {data.classificationType === 'cce-sn' ? 'C(CE) + SN' : data.classificationType === 'cce-sh' ? 'C(CE) + SH' : 'RSN'}
                </span>
              )
            )}
          </div>
          <div className="flex items-center gap-1">
            {/* Temporary Chat Toggle - only show when new chat and no messages */}
            {isInteractive && isNewChat && interactiveMessages.length === 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setIsTemporaryChat(!isTemporaryChat)}
                      className={`p-1.5 rounded-lg transition-colors ${isTemporaryChat ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                      <EyeOff className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isTemporaryChat ? 'Temporary chat enabled - no memory, not saved' : 'Enable temporary chat'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {/* Show indicator when temporary chat is active */}
            {isTemporaryChat && interactiveMessages.length > 0 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg flex items-center gap-1">
                <EyeOff className="w-3 h-3" />
                Temporary
              </span>
            )}
            {/* Ellipsis Menu - only show for existing chats (not new chats) and non-incognito */}
            {isInteractive && !isNewChat && chatId && !isIncognito && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                  {/* Only show Move to folder for non-incognito and non-CCE chats */}
                  {!isIncognito && classificationType !== 'cce-sn' && classificationType !== 'cce-sh' && (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="hover:bg-gray-100">
                        <FolderPlus className="w-4 h-4 mr-2" />
                        Move to folder
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="bg-white border-2 border-gray-900 rounded-lg">
                        {folders.length === 0 ? (
                          <DropdownMenuItem disabled className="text-gray-400 text-sm">
                            No folders available
                          </DropdownMenuItem>
                        ) : (
                          folders.map(folder => (
                            <DropdownMenuItem
                              key={folder.id}
                              onClick={() => onMoveToFolder?.(chatId, folder.id)}
                              className="hover:bg-gray-100"
                            >
                              {folder.name}
                            </DropdownMenuItem>
                          ))
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {!showOutputPanel && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setShowOutputPanel(true)}
                      className="text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Expand canvas</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
          <div className="max-w-chat mx-auto space-y-8">
          {isInteractive ? (
            /* Interactive mode - render real chat messages */
            interactiveMessages.map((msg) => (
              <div key={msg.id} className="group">
                {msg.role === 'user' ? (
                  <div className="flex justify-end items-start gap-2 ml-24 mb-12">
                    <button
                      onClick={() => handleCopyMessage(msg.id, msg.content)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1"
                      title="Copy message"
                    >
                      {copiedMessageId === msg.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                    <div className="bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="w-full whitespace-pre-wrap text-gray-900" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.content}
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => handleCopyMessage(msg.id, msg.content)}
                              className="p-1.5 hover:bg-gray-100 rounded"
                            >
                              {copiedMessageId === msg.id ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copiedMessageId === msg.id ? 'Copied' : 'Copy'}</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => handleFeedback(msg.id, 'up')}
                              className={`p-1.5 hover:bg-gray-100 rounded ${feedbackMessageId[msg.id] === 'up' ? 'text-green-600' : 'text-gray-400'}`}
                            >
                              <ThumbsUp className="w-4 h-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Good response</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => handleFeedback(msg.id, 'down')}
                              className={`p-1.5 hover:bg-gray-100 rounded ${feedbackMessageId[msg.id] === 'down' ? 'text-red-600' : 'text-gray-400'}`}
                            >
                              <ThumbsDown className="w-4 h-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Bad response</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            /* Simulator mode - render scripted messages */
            displayedMessages.map((msg, idx) => (
              <div key={idx} className="group">
                {msg.role === 'user' && (
                  <div className="flex justify-end items-start gap-2 ml-24 mb-12">
                    <button
                      onClick={() => handleCopyMessage(`sim-${idx}`, msg.text)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded mt-1"
                      title="Copy message"
                    >
                      {copiedMessageId === `sim-${idx}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                    <div className="bg-gray-100 text-black rounded-lg px-4 py-3 max-w-2xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.text}
                    </div>
                  </div>
                )}

                {msg.type === 'thinking' && (
                  <div className="flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200">
                    {/* Expandable thinking header - entire row clickable */}
                    <button
                      onClick={() => toggleThinkingExpanded(idx)}
                      className="flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <span className="text-sm font-medium text-gray-600">Reasoning</span>
                      <div className="text-gray-600">
                        {expandedThinkingIds.has(idx) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {/* Expanded reasoning content */}
                    {expandedThinkingIds.has(idx) && msg.reasoning && (
                      <div className="mt-2 space-y-2">
                        {msg.reasoning.map((step: string, stepIdx: number) => (
                          <div key={stepIdx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 font-mono text-xs mt-0.5">{stepIdx + 1}.</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {msg.type === 'assistantSwitch' && (
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 text-xs text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                      <span className="text-gray-500">Switched to</span>
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold text-gray-900">{msg.message}</span>
                    </div>
                  </div>
                )}

                {msg.type === 'text' && (
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="w-full whitespace-pre-wrap text-gray-900" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.content}
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => handleCopyMessage(`sim-text-${idx}`, msg.content)}
                              className="p-1.5 hover:bg-gray-100 rounded"
                            >
                              {copiedMessageId === `sim-text-${idx}` ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copiedMessageId === `sim-text-${idx}` ? 'Copied' : 'Copy'}</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => handleFeedback(`sim-text-${idx}`, 'up')}
                              className={`p-1.5 hover:bg-gray-100 rounded ${feedbackMessageId[`sim-text-${idx}`] === 'up' ? 'text-green-600' : 'text-gray-400'}`}
                            >
                              <ThumbsUp className="w-4 h-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Good response</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => handleFeedback(`sim-text-${idx}`, 'down')}
                              className={`p-1.5 hover:bg-gray-100 rounded ${feedbackMessageId[`sim-text-${idx}`] === 'down' ? 'text-red-600' : 'text-gray-400'}`}
                            >
                              <ThumbsDown className="w-4 h-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Bad response</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                )}

                {msg.type === 'artifact' && (
                  <div>
                    <button
                      onClick={() => {
                        setSelectedArtifact(msg.data);
                        setShowOutputPanel(true);
                      }}
                      className="inline-flex bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">
                          {getFileIcon(msg.data.fileType)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{msg.data.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{msg.data.description}</div>
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ))
          )}

          {/* Simulator-only states */}
          {!isInteractive && (
            <>
              {/* Active thinking state with live reasoning */}
              {(currentThought || currentReasoning.length > 0) && (
                <div className="flex flex-col gap-1 mb-4 p-3 bg-white rounded-lg border border-gray-200">
                  {/* Expandable thinking header showing current step - entire row clickable */}
                  <button
                    onClick={() => setExpandedThinkingIds(prev => {
                      const newSet = new Set(prev);
                      if (newSet.has(-1)) newSet.delete(-1);
                      else newSet.add(-1);
                      return newSet;
                    })}
                    className="flex items-center justify-between w-full text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-sm font-medium text-gray-600">
                      {currentReasoning.length > 0
                        ? currentReasoning[currentReasoning.length - 1]
                        : currentThought || "Processing..."}
                    </span>
                    <div className="text-gray-600">
                      {expandedThinkingIds.has(-1) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded reasoning details */}
                  {expandedThinkingIds.has(-1) && currentReasoning.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {currentReasoning.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-gray-400 font-mono text-xs mt-0.5">{stepIdx + 1}.</span>
                          <span className={stepIdx === currentReasoning.length - 1 ? 'shimmer-text' : ''}>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Searching assistant loading state */}
              {searchingAssistant && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Searching assistants...</span>
                  </div>
                </div>
              )}

              {/* Skeleton loader */}
              {showThinkingDots && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] space-y-3 py-3">
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
                  </div>
                </div>
              )}
            </>
          )}

            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="max-w-chat mx-auto">
            {isInteractive ? (
              /* Interactive mode - normal input */
              <MessageInput
                onSend={(message) => onSendMessage?.(message)}
                autoFocus={true}
                bookmarkedAssistants={bookmarkedAssistants}
                assistantType={assistantType}
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
      {showOutputPanel && (
        <>
          <ResizableHandle withHandle className="bg-gray-100 hover:bg-gray-100 transition-colors" />

          {/* Output Panel */}
          <ResizablePanel defaultSize={50} minSize={20}>
            <div className="flex flex-col h-full bg-white">
          {/* Canvas Header with Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white h-[52px]">
            <div className="flex items-center gap-2">
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
                  className="text-sm font-semibold text-gray-900 cursor-pointer"
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
                <TooltipProvider>
                  <div className="flex items-center gap-1">
                    {/* Copy */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyArtifact}
                          className="h-8 w-8 p-0"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy content</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Divider */}
                    <div className="h-5 w-px bg-gray-100 mx-1" />

                    {/* Undo/Redo */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handlePrevVersion}
                          disabled={getCurrentVersion() <= 1}
                          className="h-8 w-8 p-0"
                        >
                          <Undo2 className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Undo</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleNextVersion}
                          disabled={getCurrentVersion() >= 3}
                          className="h-8 w-8 p-0"
                        >
                          <Redo2 className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Redo</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Divider */}
                    <div className="h-5 w-px bg-gray-100 mx-1" />

                    {/* Download as .docx button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownloadDocx}
                      className="h-8 px-3 gap-2 border-gray-300"
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-xs">Download as .docx</span>
                    </Button>
                  </div>
                </TooltipProvider>
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
            {isInteractive ? (
              /* Interactive mode - simple empty state */
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12 text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">No output canvas generated yet</p>
                  <p className="text-xs mt-1">Canvases created during the chat will appear here</p>
                </div>
              </div>
            ) : selectedArtifact ? (
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
                  <div className="prose prose-sm max-w-none prose-lofi" dangerouslySetInnerHTML={{ __html: selectedArtifact.content }} />

                </div>
              </div>
            ) : (
              <div className="h-full p-4">
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">List of Canvas</h3>

                  {displayedMessages.filter(m => m.type === 'artifact').length > 0 ? (
                    <div className="space-y-2">
                      {displayedMessages.filter(m => m.type === 'artifact').map((msg, idx) => (
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
                  )}
                </div>
              </div>
            )}
          </div>
            </div>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  );
};
