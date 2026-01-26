import React, { useState, useEffect, useRef } from 'react';
import { FileText, Code, BarChart3, ClipboardList, X } from 'lucide-react';

// Type definitions
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
  text: string;
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
  colorScheme?: 'indigo' | 'slate' | 'blue' | 'green' | 'purple';
  onFormSubmit?: (formData: any, artifactTitle: string) => void;
  onComplete?: () => void;
}

const ChatSimulator: React.FC<ChatSimulatorProps> = ({ 
  data, 
  colorScheme = 'slate',
  onFormSubmit,
  onComplete 
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
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Color scheme mapping
  const colors = {
    indigo: {
      primary: 'indigo-600',
      primaryHover: 'indigo-700',
      light: 'indigo-50',
      border: 'indigo-200',
      text: 'indigo-900',
      accent: 'indigo-500'
    },
    slate: {
      primary: 'slate-600',
      primaryHover: 'slate-700',
      light: 'slate-50',
      border: 'slate-200',
      text: 'slate-900',
      accent: 'slate-500'
    },
    blue: {
      primary: 'blue-600',
      primaryHover: 'blue-700',
      light: 'blue-50',
      border: 'blue-200',
      text: 'blue-900',
      accent: 'blue-500'
    },
    green: {
      primary: 'green-600',
      primaryHover: 'green-700',
      light: 'green-50',
      border: 'green-200',
      text: 'green-900',
      accent: 'green-500'
    },
    purple: {
      primary: 'purple-600',
      primaryHover: 'purple-700',
      light: 'purple-50',
      border: 'purple-200',
      text: 'purple-900',
      accent: 'purple-500'
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
        await sleep(2000);
        setShowThinkingDots(false);
        
        setDisplayedMessages(prev => [...prev, { 
          type: 'text', 
          content: `Thank you for submitting the form! I've received your information and will process it accordingly.` 
        }]);

        // Move to next message if available
        setCurrentMessageIndex(prev => prev + 1);
      }, 500);
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
      setIsTyping(true);
      inputRef.current?.focus();
    } else {
      // Bot message
      const responses = currentMsg.content as BotResponse[];
      processBotResponses(responses);
    }
  }, [currentMessageIndex]);

  const processBotResponses = async (responses: BotResponse[]) => {
    // Show thinking dots (reduced to 1.5s from 3s)
    setShowThinkingDots(true);
    await sleep(1500);
    setShowThinkingDots(false);

    for (const response of responses) {
      if (response.type === 'thinking') {
        await processThinkingResponse(response);
      } else if (response.type === 'assistantSwitch') {
        // Show searching state (increased to 2s from 1s)
        setSearchingAssistant(true);
        await sleep(2000);
        setSearchingAssistant(false);
        
        // Show final "Switched to" state
        setDisplayedMessages(prev => [...prev, { type: 'assistantSwitch', message: response.message }]);
        await sleep(500);
      } else if (response.type === 'text') {
        await sleep(response.delayMs || 1000);
        setDisplayedMessages(prev => [...prev, { type: 'text', content: response.content }]);
      } else if (response.type === 'artifact') {
        await sleep(response.delayMs || 1000);
        setDisplayedMessages(prev => [...prev, { type: 'artifact', data: response }]);
      }
    }

    setCurrentMessageIndex(prev => prev + 1);
  };

  const processThinkingResponse = async (response: ThinkingResponse) => {
    const timing = response.timingMs || 1500;
    
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
    <div className="flex h-screen bg-gray-50">
      {/* Chat Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${selectedArtifact ? 'mr-96' : ''}`}>
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className={`text-xl font-semibold text-${theme.text}`}>{data.title}</h1>
          {data.description && (
            <p className="text-sm text-gray-600 mt-1">{data.description}</p>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {displayedMessages.map((msg, idx) => (
            <div key={idx}>
              {msg.role === 'user' && (
                <div className="flex justify-end">
                  <div className={`bg-${theme.primary} text-white rounded-lg px-4 py-2 max-w-2xl`}>
                    {msg.text}
                  </div>
                </div>
              )}

              {msg.type === 'thinking' && (
                <div className="flex justify-start">
                  <div className={`bg-${theme.light} text-${theme.text} rounded-lg px-4 py-2 max-w-2xl italic text-sm border border-${theme.border}`}>
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
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 max-w-2xl whitespace-pre-wrap">
                    {msg.content}
                  </div>
                </div>
              )}

              {msg.type === 'artifact' && (
                <div className="flex justify-start">
                  <button
                    onClick={() => setSelectedArtifact(msg.data)}
                    className={`bg-white border-2 border-${theme.border} rounded-lg px-4 py-3 max-w-md hover:border-${theme.accent} transition-colors text-left`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-${theme.primary} mt-1`}>
                        {getFileIcon(msg.data.fileType)}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-${theme.text}`}>{msg.data.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{msg.data.description}</div>
                        <div className={`text-xs text-${theme.primary} mt-2`}>
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
            <div className="flex justify-start">
              <div className={`bg-${theme.light} text-${theme.text} rounded-lg px-4 py-2 max-w-2xl italic text-sm border border-${theme.border}`}>
                {currentThought}
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
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="flex gap-1">
                  <div className={`w-2 h-2 bg-${theme.accent} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                  <div className={`w-2 h-2 bg-${theme.accent} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                  <div className={`w-2 h-2 bg-${theme.accent} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Completion message */}
          {isComplete && (
            <div className="flex justify-center">
              <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                Demo completed
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={typedText}
              onKeyDown={handleKeyPress}
              disabled={!isTyping}
              placeholder={isTyping ? "Type to continue..." : "Waiting for response..."}
              className={`flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-${theme.accent} disabled:bg-gray-100`}
            />
          </div>
          {isTyping && (
            <p className="text-xs text-gray-500 mt-2">Press Enter to send the complete message</p>
          )}
        </div>
      </div>

      {/* Artifact Viewer */}
      {selectedArtifact && (
        <div className="fixed right-0 top-0 bottom-0 w-96 bg-white border-l border-gray-300 shadow-2xl flex flex-col">
          {/* Artifact Header */}
          <div className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-${theme.light}`}>
            <div className="flex items-center gap-3">
              <div className={`text-${theme.primary}`}>
                {getFileIcon(selectedArtifact.fileType)}
              </div>
              <div>
                <h2 className={`font-semibold text-${theme.text}`}>{selectedArtifact.title}</h2>
                <p className="text-xs text-gray-600">{selectedArtifact.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedArtifact(null)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Artifact Content */}
          <div className="flex-1 overflow-y-auto">
            <div dangerouslySetInnerHTML={{ __html: selectedArtifact.content }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSimulator;
