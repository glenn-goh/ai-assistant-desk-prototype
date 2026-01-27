import React, { useState, useEffect, useRef } from 'react';
import { FileText, Code, BarChart3, ClipboardList, X, PanelLeft, PanelRight, ArrowLeft } from 'lucide-react';
import { MessageInput } from './MessageInput';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';

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
  onSendMessage?: (message: string) => void;
  title?: string;
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';
}

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
}) => {
  const isInteractive = mode === 'interactive';
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
      }
    }

    setCurrentMessageIndex(prev => prev + 1);
  };

  const processThinkingResponse = async (response: ThinkingResponse) => {
    const timing = (response.timingMs || 1500) / 1.5; // 1.5x faster

    for (let i = 0; i < response.thoughts.length; i++) {
      setCurrentThought(response.thoughts[i]);
      await sleep(timing);
    }
    // Save only the last thought to messages (stays visible)
    if (response.thoughts.length > 0) {
      setDisplayedMessages(prev => [...prev, { type: 'thinking', thought: response.thoughts[response.thoughts.length - 1] }]);
    }
    setCurrentThought("");
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
    <ResizablePanelGroup direction="horizontal" className="h-full bg-gray-100">
      {/* Chat Area */}
      <ResizablePanel defaultSize={showOutputPanel ? 50 : 100} minSize={30}>
        <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-100">
          <button
            onClick={onToggleSidebar}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <span className="text-sm font-medium text-gray-900">
              {isInteractive ? (interactiveTitle || 'New Chat') : data?.title}
            </span>
            {isInteractive ? (
              classificationType && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300">
                  {classificationType === 'cce-sn' ? 'C(CE) + SN' : classificationType === 'cce-sh' ? 'C(CE) + SH' : 'RSN'}
                </span>
              )
            ) : (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300">C(CE) + SN</span>
            )}
          </div>
          <button
            onClick={() => setShowOutputPanel(!showOutputPanel)}
            className={`text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors ${showOutputPanel ? 'bg-gray-200' : ''}`}
          >
            <PanelRight className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-100">
          <div className="max-w-chat mx-auto space-y-8">
          {isInteractive ? (
            /* Interactive mode - render real chat messages */
            interactiveMessages.map((msg) => (
              <div key={msg.id}>
                {msg.role === 'user' ? (
                  <div className="flex justify-end items-end gap-2 ml-24 mb-12">
                    <div className="bg-gray-200 text-black rounded-lg px-4 py-3 max-w-2xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start items-end gap-2 mb-2">
                    <div className="w-full whitespace-pre-wrap text-gray-900" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.content}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            /* Simulator mode - render scripted messages */
            displayedMessages.map((msg, idx) => (
              <div key={idx}>
                {msg.role === 'user' && (
                  <div className="flex justify-end items-end gap-2 ml-24 mb-12">
                    <div className="bg-gray-200 text-black rounded-lg px-4 py-3 max-w-2xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.text}
                    </div>
                  </div>
                )}

                {msg.type === 'thinking' && (
                  <div className="flex justify-start items-end gap-2">
                    <div className="rounded-lg py-3 max-w-2xl italic text-gray-500" style={{ fontSize: '16px' }}>
                      {msg.thought}
                    </div>
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
                  <div className="flex justify-start items-end gap-2 mb-2">
                    <div className="w-full whitespace-pre-wrap text-gray-900" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      {msg.content}
                    </div>
                  </div>
                )}

                {msg.type === 'artifact' && (
                  <div className="w-full">
                    <button
                      onClick={() => {
                        setSelectedArtifact(msg.data);
                        setShowOutputPanel(true);
                      }}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">
                          {getFileIcon(msg.data.fileType)}
                        </div>
                        <div className="flex-1">
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
              {/* Active thinking state */}
              {currentThought && (
                <div className="flex justify-start items-end gap-2">
                  <div className="rounded-lg py-3 max-w-2xl italic" style={{ fontSize: '16px' }}>
                    <span className="shimmer-text">{currentThought}</span>
                  </div>
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

              {/* Thinking dots */}
              {showThinkingDots && (
                <div className="flex justify-start items-end gap-2">
                  <div className="px-4 py-3">
                    <div className="flex gap-2 items-end">
                      <div
                        className={`w-2.5 h-2.5 ${theme.accent} rounded-full`}
                        style={{
                          animation: 'dotBounce 1.4s ease-in-out infinite',
                          animationDelay: '0ms'
                        }}
                      ></div>
                      <div
                        className={`w-2.5 h-2.5 ${theme.accent} rounded-full`}
                        style={{
                          animation: 'dotBounce 1.4s ease-in-out infinite',
                          animationDelay: '200ms'
                        }}
                      ></div>
                      <div
                        className={`w-2.5 h-2.5 ${theme.accent} rounded-full`}
                        style={{
                          animation: 'dotBounce 1.4s ease-in-out infinite',
                          animationDelay: '400ms'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-gray-100 px-6 py-4">
          <div className="max-w-chat mx-auto">
            {isInteractive ? (
              /* Interactive mode - normal input */
              <MessageInput
                onSend={(message) => onSendMessage?.(message)}
                autoFocus={true}
              />
            ) : (
              /* Simulator mode - auto-type input */
              <>
                <MessageInput
                  onSend={handleSendMessage}
                  value={typedText}
                  onChange={setTypedText}
                  autoTypeText={getCurrentTargetText()}
                  disabled={!isTyping}
                />
                {isTyping && (
                  <p className="text-xs text-gray-500 mt-2">Press Enter to send the complete message</p>
                )}
              </>
            )}
          </div>
        </div>
        </div>
      </ResizablePanel>

      {/* Resizable Handle */}
      {showOutputPanel && (
        <>
          <ResizableHandle withHandle className="bg-gray-200 hover:bg-gray-300 transition-colors" />

          {/* Output Panel */}
          <ResizablePanel defaultSize={50} minSize={20}>
            <div className="flex flex-col h-full bg-white">
          {/* Output Header */}
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
              <h2 className="text-sm font-semibold text-gray-900">Output</h2>
            </div>
            <button
              onClick={() => setShowOutputPanel(false)}
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Output Content */}
          <div className="flex-1 overflow-auto" ref={outputContentRef}>
            {isInteractive ? (
              /* Interactive mode - simple empty state */
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12 text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">No output files generated yet</p>
                  <p className="text-xs mt-1">Files created during the chat will appear here</p>
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
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Generated Files</h3>

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
                      <p className="text-sm">No output files generated yet</p>
                      <p className="text-xs mt-1">Files created during the chat will appear here</p>
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