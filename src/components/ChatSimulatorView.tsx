import React, { useState, useEffect, useRef } from 'react';
import { FileText, Code, BarChart3, ClipboardList, X, PanelLeft, PanelRight, ArrowLeft } from 'lucide-react';
import { MessageInput } from './MessageInput';

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
  onBack?: () => void;
}

export const ChatSimulatorView: React.FC<ChatSimulatorProps> = ({
  data,
  onFormSubmit,
  onComplete,
  onToggleSidebar,
  onBack
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

  // Handle message send from MessageInput
  const handleSendMessage = (text: string) => {
    if (currentMessageIndex >= data.messages.length) return;

    const currentMsg = data.messages[currentMessageIndex];
    if (currentMsg.role !== 'user') return;

    const targetText = (currentMsg.content as UserMessage).text;

    setIsTyping(false);
    setDisplayedMessages(prev => [...prev, { role: 'user', text: targetText }]);
    setTypedText("");
    setCurrentMessageIndex(prev => prev + 1);
  };

  // Get the current target text for typing simulation
  const getCurrentTargetText = () => {
    if (currentMessageIndex >= data.messages.length) return undefined;
    const currentMsg = data.messages[currentMessageIndex];
    if (currentMsg.role !== 'user') return undefined;
    return (currentMsg.content as UserMessage).text;
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
      <div className="flex-1 flex flex-col border-r border-gray-300">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300 bg-white">
          <button
            onClick={onToggleSidebar}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <span className="text-sm font-medium text-gray-900">{data.title}</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300">C(CE) + SN</span>
          </div>
          <button
            onClick={() => setShowOutputPanel(!showOutputPanel)}
            className={`text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors ${showOutputPanel ? 'bg-gray-200' : ''}`}
          >
            <PanelRight className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="max-w-chat mx-auto space-y-6">
          {displayedMessages.map((msg, idx) => (
            <div key={idx}>
              {msg.role === 'user' && (
                <div className="flex justify-end items-end gap-2 ml-24 mb-12">
                  <div className="bg-gray-900 text-white rounded-lg px-4 py-3 max-w-2xl" style={{ fontSize: '14px' }}>
                    {msg.text}
                  </div>
                </div>
              )}

              {msg.type === 'thinking' && (
                <div className="flex justify-start items-end gap-2">
                  <div className={`${theme.light} ${theme.text} rounded-lg px-4 py-3 max-w-2xl italic border ${theme.border}`} style={{ fontSize: '14px' }}>
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
                <div className="flex justify-start items-end gap-2">
                  <div className="w-full whitespace-pre-wrap text-gray-900" style={{ fontSize: '14px' }}>
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
                    className="bg-white border-2 border-gray-900 rounded-lg px-4 py-3 max-w-md hover:bg-gray-100 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-gray-700 mt-1">
                        {getFileIcon(msg.data.fileType)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{msg.data.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{msg.data.description}</div>
                        <div className="text-xs text-gray-700 mt-2 underline">
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
              <div className={`${theme.light} ${theme.text} rounded-lg px-4 py-3 max-w-2xl italic border ${theme.border} flex items-center gap-3`} style={{ fontSize: '14px' }}>
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
              <div className="bg-white border border-gray-300 rounded-lg px-4 py-3">
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
        </div>

        {/* Input Area */}
        <div className="bg-white px-6 py-4">
          <div className="max-w-chat mx-auto">
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
          </div>
        </div>
      </div>

      {/* Output Panel */}
      {showOutputPanel && (
        <div className="w-1/2 flex flex-col bg-gray-100 border-l border-gray-300">
          {/* Output Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white">
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
      )}
    </div>
  );
};