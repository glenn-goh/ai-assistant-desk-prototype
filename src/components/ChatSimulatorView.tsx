import React, { useState, useEffect, useRef } from 'react';
import { FileText, Code, BarChart3, ClipboardList, X, PanelLeft, Bot, Paperclip, FolderOpen, Wrench, Send, Search, Mic, MessageSquare, ScanLine, PanelRight, ArrowLeft, File } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import userAvatar from 'figma:asset/ed3327b092c51eb4f6fab282e873ac3eb916ae69.png';

// Type definitions
interface ChatSimulation {
  id: string;
  title: string;
  description?: string;
  colorScheme?: 'indigo' | 'slate' | 'blue' | 'green' | 'purple' | 'emerald';
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

interface ChatSimulatorProps {
  data: ChatSimulation;
  onFormSubmit?: (formData: any, artifactTitle: string) => void;
  onComplete?: () => void;
  onToggleSidebar?: () => void;
}

export const ChatSimulatorView: React.FC<ChatSimulatorProps> = ({ 
  data, 
  onFormSubmit,
  onComplete,
  onToggleSidebar
}) => {
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentThought, setCurrentThought] = useState("");
  const [showThinkingDots, setShowThinkingDots] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactResponse | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [searchingAssistant, setSearchingAssistant] = useState(false);
  const [showOutputPanel, setShowOutputPanel] = useState(false);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [isLibraryPopoverOpen, setIsLibraryPopoverOpen] = useState(false);
  const [isToolsPopoverOpen, setIsToolsPopoverOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputContentRef = useRef<HTMLDivElement>(null);

  const colorScheme = data.colorScheme || 'slate';

  const tools = [
    { id: 'internet-search', name: 'Internet Search', icon: Search },
    { id: 'audio-transcription', name: 'Audio Transcription', icon: Mic },
    { id: 'key-info-extraction', name: 'Key Info Extraction (KIE)', icon: ScanLine },
  ];

  const libraries = [
    { id: 'govtech-branding', name: 'GovTech branding guidelines', type: 'SharePoint' },
    { id: 'procurement-guidelines', name: 'Procurement Guidelines', type: 'SharePoint' },
    { id: 'ai-programme', name: 'AI Programme Resources', type: 'Google Drive' },
    { id: 'policy-documents', name: 'Policy Documents', type: 'AWS S3' },
  ];

  const toggleTool = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const toggleLibrary = (libraryId: string) => {
    setSelectedLibraries(prev => 
      prev.includes(libraryId) 
        ? prev.filter(id => id !== libraryId)
        : [...prev, libraryId]
    );
  };

  // Color scheme mapping
  const colors = {
    indigo: {
      primary: 'bg-indigo-600 hover:bg-indigo-700',
      light: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      accent: 'bg-indigo-500',
      ring: 'focus:ring-indigo-500'
    },
    slate: {
      primary: 'bg-slate-600 hover:bg-slate-700',
      light: 'bg-slate-50',
      border: 'border-slate-200',
      text: 'text-slate-900',
      accent: 'bg-slate-500',
      ring: 'focus:ring-slate-500'
    },
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-700',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      accent: 'bg-blue-500',
      ring: 'focus:ring-blue-500'
    },
    green: {
      primary: 'bg-green-600 hover:bg-green-700',
      light: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
      accent: 'bg-green-500',
      ring: 'focus:ring-green-500'
    },
    purple: {
      primary: 'bg-purple-600 hover:bg-purple-700',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-900',
      accent: 'bg-purple-500',
      ring: 'focus:ring-purple-500'
    },
    emerald: {
      primary: 'bg-emerald-600 hover:bg-emerald-700',
      light: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      accent: 'bg-emerald-500',
      ring: 'focus:ring-emerald-500'
    }
  };

  const theme = colors[colorScheme];

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedMessages, currentThought]);

  // Setup form submission handler when artifact changes
  useEffect(() => {
    if (selectedArtifact && selectedArtifact.interactive) {
      setTimeout(() => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          form.onsubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            handleFormSubmit(data, selectedArtifact.title);
          };
        });
      }, 100);
    }
  }, [selectedArtifact]);

  // Check if conversation is complete
  useEffect(() => {
    if (currentMessageIndex >= data.messages.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentMessageIndex, data.messages.length, isComplete, onComplete]);

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

  // Handle keypress for typing animation
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (currentMessageIndex >= data.messages.length) return;
    
    const currentMsg = data.messages[currentMessageIndex];
    if (currentMsg.role !== 'user') return;

    const targetText = (currentMsg.content as UserMessage).text;

    if (e.key === 'Enter') {
      // Complete the text immediately and send
      setTypedText(targetText);
      setIsTyping(false);
      
      setTimeout(() => {
        setDisplayedMessages(prev => [...prev, { role: 'user', text: targetText }]);
        setTypedText("");
        setCurrentMessageIndex(prev => prev + 1);
        // Refocus input after a short delay to allow state updates
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }, 100);
    } else {
      // Type next character
      if (typedText.length < targetText.length) {
        setTypedText(targetText.substring(0, typedText.length + 1));
      }
    }
  };

  // Process bot messages
  useEffect(() => {
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
        inputRef.current?.focus();
      }
    } else {
      // Bot message
      const responses = currentMsg.content as BotResponse[];
      processBotResponses(responses);
    }
  }, [currentMessageIndex]);

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
      }
    }

    setCurrentMessageIndex(prev => prev + 1);
    
    // Refocus input after bot response completes
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const processThinkingResponse = async (response: ThinkingResponse) => {
    const timing = (response.timingMs || 1500) / 1.5; // 1.5x faster
    
    for (let i = 0; i < response.thoughts.length; i++) {
      setCurrentThought(response.thoughts[i]);
      
      if (i < response.thoughts.length - 1) {
        await sleep(timing);
      } else {
        // Last thought - keep it visible
        await sleep(timing);
        setDisplayedMessages(prev => [...prev, { type: 'thinking', thought: response.thoughts[i] }]);
        setCurrentThought("");
      }
    }
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

  return (
    <div className="flex h-full bg-white">
      {/* Chat Area */}
      <div className={`flex-1 flex flex-col border-r border-gray-200`}>
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-white">
          <button 
            onClick={onToggleSidebar}
            className="text-gray-600 hover:text-gray-900"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <span className="text-sm text-gray-900">{data.title}</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">C(CE) + SN</span>
          </div>
          <button 
            onClick={() => setShowOutputPanel(!showOutputPanel)}
            className={`text-gray-600 hover:text-gray-900 rounded-md p-1 transition-colors ${showOutputPanel ? 'bg-gray-100' : ''}`}
          >
            <PanelRight className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {displayedMessages.map((msg, idx) => (
            <div key={idx}>
              {msg.role === 'user' && (
                <div className="flex justify-end items-end gap-2">
                  <div className="bg-blue-500 text-white rounded-2xl px-4 py-3 max-w-2xl" style={{ fontSize: '14px' }}>
                    {msg.text}
                  </div>
                </div>
              )}

              {msg.type === 'thinking' && (
                <div className="flex justify-start items-end gap-2">
                  <div className={`${theme.light} ${theme.text} rounded-2xl px-4 py-3 max-w-2xl italic border ${theme.border}`} style={{ fontSize: '14px' }}>
                    {msg.thought}
                  </div>
                </div>
              )}

              {msg.type === 'assistantSwitch' && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                    <span className="text-gray-500">Switched to</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{msg.message}</span>
                  </div>
                </div>
              )}

              {msg.type === 'text' && (
                <div className="flex justify-start items-end gap-2">
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-2xl whitespace-pre-wrap" style={{ fontSize: '14px' }}>
                    {msg.content}
                  </div>
                </div>
              )}

              {msg.type === 'artifact' && (
                <div className="flex justify-start items-end gap-2">
                  <button
                    onClick={() => {
                      setSelectedArtifact(msg.data);
                      setShowOutputPanel(true);
                    }}
                    className={`bg-white border-2 ${theme.border} rounded-2xl px-4 py-3 max-w-md hover:border-${colorScheme}-500 transition-colors text-left`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-${colorScheme}-600 mt-1`}>
                        {getFileIcon(msg.data.fileType)}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${theme.text} text-sm`}>{msg.data.title}</div>
                        <div className="text-xs text-gray-600 mt-1">{msg.data.description}</div>
                        <div className={`text-xs text-${colorScheme}-600 mt-2`}>
                          {msg.data.interactive ? 'Click to fill out →' : 'Click to view →'}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Active thinking state */}
          {currentThought && (
            <div className="flex justify-start items-end gap-2">
              <div className={`${theme.light} ${theme.text} rounded-2xl px-4 py-3 max-w-2xl italic border ${theme.border} flex items-center gap-3`} style={{ fontSize: '14px' }}>
                <div className="flex-shrink-0">
                  <div className={`w-2 h-2 ${theme.accent} rounded-full animate-pulse`} style={{ animationDuration: '1s' }}></div>
                </div>
                <span>{currentThought}</span>
              </div>
            </div>
          )}

          {/* Searching assistant loading state */}
          {searchingAssistant && (
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Searching assistants...</span>
              </div>
            </div>
          )}

          {/* Thinking dots */}
          {showThinkingDots && (
            <div className="flex justify-start items-end gap-2">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className={`w-2 h-2 ${theme.accent} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                  <div className={`w-2 h-2 ${theme.accent} rounded-full animate-bounce`} style={{ animationDelay: '75ms' }}></div>
                  <div className={`w-2 h-2 ${theme.accent} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className={`rounded-lg border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-blue-500/20`}>
            {/* Text input */}
            <div className="mb-2">
              <input
                ref={inputRef}
                type="text"
                value={typedText}
                onKeyDown={handleKeyPress}
                disabled={!isTyping}
                placeholder={isTyping ? "Type to continue..." : "Waiting for response..."}
                className={`w-full min-h-[36px] resize-none border-0 focus:outline-none focus:ring-0 bg-transparent text-sm disabled:bg-transparent disabled:text-gray-400`}
              />
            </div>

            {/* Icons and Send button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors text-gray-600">
                  <Paperclip className="w-3.5 h-3.5" />
                </button>

                {/* Library Button */}
                <DropdownMenu open={isLibraryPopoverOpen} onOpenChange={setIsLibraryPopoverOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors text-gray-600 relative"
                    >
                      <FolderOpen className="w-3.5 h-3.5" />
                      {selectedLibraries.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                          {selectedLibraries.length}
                        </span>
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 p-0 z-50" 
                    align="start" 
                    side="top" 
                    sideOffset={8}
                  >
                    <div className="p-3 border-b">
                      <h3 className="font-medium text-xs">Select Libraries</h3>
                      <p className="text-xs text-muted-foreground">Connect this chat to libraries</p>
                    </div>
                    <div className="p-2">
                      {libraries.map((library) => {
                        const isSelected = selectedLibraries.includes(library.id);
                        return (
                          <button
                            key={library.id}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleLibrary(library.id);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isSelected ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
                          >
                            <FolderOpen className="w-5 h-5 flex-shrink-0" />
                            <div className="flex-1 text-left">
                              <div className="text-xs">{library.name}</div>
                              <div className="text-[10px] text-muted-foreground">{library.type}</div>
                            </div>
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-purple-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Tools Button */}
                <DropdownMenu open={isToolsPopoverOpen} onOpenChange={setIsToolsPopoverOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors text-gray-600 relative"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      {selectedTools.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                          {selectedTools.length}
                        </span>
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 p-0 z-50" 
                    align="start" 
                    side="top" 
                    sideOffset={8}
                  >
                    <div className="p-3 border-b">
                      <h3 className="font-medium text-xs">Available Tools</h3>
                      <p className="text-xs text-muted-foreground">Select tools to enable</p>
                    </div>
                    <div className="p-2">
                      {tools.map((tool) => {
                        const Icon = tool.icon;
                        const isSelected = selectedTools.includes(tool.id);
                        return (
                          <button
                            key={tool.id}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleTool(tool.id);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="flex-1 text-left text-xs">{tool.name}</span>
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                            )}
                          </button>
                        );
                      })}
                      
                      {/* Explore AI Common Tools link */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // TODO: Navigate to AI Common Tools page
                          console.log('Navigate to AI Common Tools');
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-1 border-t border-gray-200 pt-3"
                      >
                        <span className="flex-1 text-left text-xs text-blue-600 font-medium">Explore AI Common Tools</span>
                      </button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <button 
                disabled={!isTyping}
                className={`h-7 w-7 flex items-center justify-center rounded-md transition-colors ${
                  isTyping 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          {isTyping && (
            <p className="text-xs text-gray-500 mt-2">Press Enter to send the complete message</p>
          )}
        </div>
      </div>

      {/* Output Panel */}
      {showOutputPanel && (
        <div className="w-1/2 flex flex-col bg-gray-50 border-l border-gray-200">
          {/* Output Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              {selectedArtifact && (
                <button 
                  onClick={() => setSelectedArtifact(null)}
                  className="mr-2 flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <h2 className="text-sm font-semibold text-gray-700">Output</h2>
            </div>
            <button 
              onClick={() => setShowOutputPanel(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Output Content */}
          <div className="flex-1 overflow-auto" ref={outputContentRef}>
            {selectedArtifact ? (
              <div className="h-full bg-white">
                <div className="p-8 max-w-4xl mx-auto">
                  {/* Artifact Header */}
                  <div className="mb-6 flex items-start gap-3">
                    <div className={`text-${colorScheme}-600 mt-1`}>
                      {getFileIcon(selectedArtifact.fileType)}
                    </div>
                    <div>
                      <h1 className="text-2xl text-gray-900 mb-1">{selectedArtifact.title}</h1>
                      <p className="text-xs text-gray-600">{selectedArtifact.description}</p>
                    </div>
                  </div>

                  {/* Artifact Content */}
                  <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: selectedArtifact.content }} />

                </div>
              </div>
            ) : (
              <div className="h-full p-4">
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Generated Files</h3>
                  
                  {displayedMessages.filter(m => m.type === 'artifact').length > 0 ? (
                    <div className="space-y-2">
                      {displayedMessages.filter(m => m.type === 'artifact').map((msg, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedArtifact(msg.data)}
                          className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all text-left"
                        >
                          <div className={`p-2 rounded bg-${colorScheme}-50 text-${colorScheme}-600`}>
                            {getFileIcon(msg.data.fileType)}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{msg.data.title}</div>
                            <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{msg.data.description}</div>
                          </div>
                          <div className="text-gray-400">
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-400 bg-white rounded-lg border border-dashed border-gray-200">
                      <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">No output files generated yet</p>
                      <p className="text-xs mt-1">Files created during the chat will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};