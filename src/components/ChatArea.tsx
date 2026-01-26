import { useEffect, useRef, useState } from 'react';
import { PanelLeft, MessageSquare, PanelRight, ArrowLeft, FileText, File } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { ChatMessage } from './ChatMessage';
import { MessageInput } from './MessageInput';
import { AgentProcess } from './AgentProcess';
import { AIAdoptionReport } from './AIAdoptionReport';
import { CandidatesList } from './CandidatesList';
import { ParliamentaryAnswer } from './ParliamentaryAnswer';
import { ProcurementAOR } from './ProcurementAOR';
import { getAgentSteps, getAgentSummary } from '../lib/agent-process-data';
import type { Chat } from '../App';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import christmasBanner from 'figma:asset/c40ed3952ce54c1b90fff90b82ba5589caf255b7.png';

interface ChatAreaProps {
  chat?: Chat;
  onSendMessage: (content: string) => void;
  onToggleSidebar: () => void;
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  userProfile: import('../App').UserProfile;
}

export function ChatArea({ chat, onSendMessage, onToggleSidebar, colorTheme, fontStyle, userProfile }: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  const [showOutput, setShowOutput] = useState(true);
  const [activeFileId, setActiveFileId] = useState<string | null>('current-output');

  useEffect(() => {
    if (chat?.id) {
      setActiveFileId('current-output');
    }
  }, [chat?.id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat?.messages]);

  // Check if this is an assistant chat (shared assistant)
  const isAssistantChat = chat?.assistantType;

  // Regular chat layout (for the 3 main chat types)
  if (!isAssistantChat) {
    return (
      <div className={`flex-1 flex flex-col ${theme.mainBg} ${font.base}`}>
        {/* Header */}
        <div className={`flex items-center gap-2 px-4 py-2 border-b ${theme.header}`}>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
          >
            <PanelLeft className="w-5 h-5" />
          </Button>
          <h1 className={`text-xs ${theme.title} ${font.title}`}>{chat?.title || 'AI Assistant Desk'}</h1>
          {chat?.classificationType && (
            <span className={`px-2 py-0.5 rounded text-[9px] ${
              chat.classificationType === 'cce-sn' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
            }`}>
              {chat.classificationType === 'cce-sn' ? 'C(CE) + SN' : 'C(CE) + SH'}
            </span>
          )}
          <div className="ml-auto">
             <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowOutput(!showOutput)}
              className={showOutput ? "bg-gray-100 dark:bg-gray-800" : ""}
            >
               <PanelRight className="w-5 h-5" />
             </Button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col min-w-0">
            {/* Messages */}
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
                  {chat?.messages.map(message => (
                    <ChatMessage 
                      key={message.id} 
                      message={message} 
                      colorTheme={colorTheme}
                      fontStyle={fontStyle}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Input */}
            <div className={`border-t ${theme.header} flex-shrink-0`}>
              <div className="max-w-3xl mx-auto px-4 py-4">
                <MessageInput 
                  onSend={onSendMessage} 
                  colorTheme={colorTheme} 
                  fontStyle={fontStyle}
                  showFileUpload={chat?.assistantType === 'transcribe'}
                />
              </div>
            </div>
          </div>

          {/* Optional Output Panel for Regular Chats (if needed in future) */}
          {showOutput && (
             <div className={`w-[40%] border-l ${theme.separator} flex flex-col`}>
                <div className={`flex items-center justify-between px-4 h-10 border-b ${theme.header}`}>
                   <h2 className={`text-xs font-medium ${theme.title}`}>Output</h2>
                </div>
                <div className="flex-1 flex items-center justify-center text-xs text-gray-500">
                   No output generated yet.
                </div>
             </div>
          )}
        </div>
      </div>
    );
  }

  // Split layout for assistant chats
  return (
    <div className={`flex-1 flex ${theme.mainBg} ${font.base} h-full overflow-hidden`}>
      {/* Left Side - Chat */}
      <div className={`${showOutput ? 'w-[30%]' : 'flex-1'} flex flex-col border-r border-gray-200 dark:border-gray-700 h-full transition-all duration-300 ease-in-out`}>
        {/* Header */}
        <div className={`flex items-center justify-between gap-2 px-4 h-12 border-b ${theme.header} flex-shrink-0`}>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSidebar}
            >
              <PanelLeft className="w-5 h-5" />
            </Button>
            <h1 className={`text-xs ${theme.title} ${font.title}`}>{chat?.title || 'AI Assistant Desk'}</h1>
            {chat?.classificationType && (
              <span className={`px-2 py-0.5 rounded text-[9px] ${
                chat.classificationType === 'cce-sn' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
              }`}>
                {chat.classificationType === 'cce-sn' ? 'C(CE) + SN' : 'C(CE) + SH'}
              </span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowOutput(!showOutput)}
            className={showOutput ? "bg-gray-100 dark:bg-gray-800" : ""}
          >
            <PanelRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="px-4 py-6 space-y-6">
              {chat?.messages.map((message, index) => (
                <div key={message.id}>
                  <ChatMessage 
                    message={message} 
                    colorTheme={colorTheme}
                    fontStyle={fontStyle}
                  />
                  
                  {/* Show process after each assistant message */}
                  {message.role === 'assistant' && chat?.assistantType === 'parliamentary-question' && (() => {
                    const steps = getAgentSteps('parliamentary-question', index);
                    const summary = getAgentSummary('parliamentary-question', index);
                    // Find the last assistant message with steps
                    const lastAssistantIndex = chat.messages.map((m, i) => ({ msg: m, index: i }))
                      .filter(({ msg }) => msg.role === 'assistant')
                      .reverse()
                      .find(({ index: i }) => getAgentSteps('parliamentary-question', i).length > 0)?.index;
                    const isLatest = index === lastAssistantIndex;
                    
                    return steps.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {summary && (
                          <p className={`text-[10px] ${theme.navItem} italic`}>
                            {summary}
                          </p>
                        )}
                        <AgentProcess 
                          colorTheme={colorTheme} 
                          fontStyle={fontStyle}
                          steps={steps}
                          isLatest={isLatest}
                        />
                      </div>
                    );
                  })()}

                  {message.role === 'assistant' && chat?.assistantType === 'deep-research-ai' && (() => {
                    const steps = getAgentSteps('deep-research-ai', index);
                    const summary = getAgentSummary('deep-research-ai', index);
                    // Find the last assistant message with steps
                    const lastAssistantIndex = chat.messages.map((m, i) => ({ msg: m, index: i }))
                      .filter(({ msg }) => msg.role === 'assistant')
                      .reverse()
                      .find(({ index: i }) => getAgentSteps('deep-research-ai', i).length > 0)?.index;
                    const isLatest = index === lastAssistantIndex;
                    
                    return steps.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {summary && (
                          <p className={`text-[10px] ${theme.navItem} italic`}>
                            {summary}
                          </p>
                        )}
                        <AgentProcess 
                          colorTheme={colorTheme} 
                          fontStyle={fontStyle}
                          steps={steps}
                          isLatest={isLatest}
                        />
                      </div>
                    );
                  })()}

                  {message.role === 'assistant' && chat?.assistantType === 'recruitment-assistant' && (() => {
                    const steps = getAgentSteps('recruitment-assistant', chat.messages.length);
                    const summary = getAgentSummary('recruitment-assistant', chat.messages.length);
                    // Find the last assistant message with steps
                    const lastAssistantIndex = chat.messages.map((m, i) => ({ msg: m, index: i }))
                      .filter(({ msg }) => msg.role === 'assistant')
                      .reverse()
                      .find(() => getAgentSteps('recruitment-assistant', chat.messages.length).length > 0)?.index;
                    const isLatest = index === lastAssistantIndex;
                    
                    return steps.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {summary && (
                          <p className={`text-[10px] ${theme.navItem} italic`}>
                            {summary}
                          </p>
                        )}
                        <AgentProcess 
                          colorTheme={colorTheme} 
                          fontStyle={fontStyle}
                          steps={steps}
                          isLatest={isLatest}
                        />
                      </div>
                    );
                  })()}

                  {message.role === 'assistant' && chat?.assistantType === 'procurement-assistant' && (() => {
                    const steps = getAgentSteps('procurement-assistant', index);
                    const summary = getAgentSummary('procurement-assistant', index);
                    // Find the last assistant message with steps
                    const lastAssistantIndex = chat.messages.map((m, i) => ({ msg: m, index: i }))
                      .filter(({ msg }) => msg.role === 'assistant')
                      .reverse()
                      .find(({ index: i }) => getAgentSteps('procurement-assistant', i).length > 0)?.index;
                    const isLatest = index === lastAssistantIndex;
                    
                    return steps.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {summary && (
                          <p className={`text-[10px] ${theme.navItem} italic`}>
                            {summary}
                          </p>
                        )}
                        <AgentProcess 
                          colorTheme={colorTheme} 
                          fontStyle={fontStyle}
                          steps={steps}
                          isLatest={isLatest}
                        />
                      </div>
                    );
                  })()}
                </div>
              ))}
              
              {/* Remove the standalone process components at the end */}
            </div>
          </ScrollArea>
        </div>

        {/* Input */}
        <div className={`border-t ${theme.header} flex-shrink-0`}>
          <div className="px-4 py-4">
            <MessageInput 
              onSend={onSendMessage} 
              colorTheme={colorTheme} 
              fontStyle={fontStyle}
              showFileUpload={chat?.assistantType === 'transcribe'}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Output */}
      {showOutput && (
        <div className="w-[70%] flex flex-col h-full overflow-hidden border-l border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className={`flex items-center gap-2 px-4 h-12 border-b ${theme.header} flex-shrink-0`}>
            {activeFileId && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setActiveFileId(null)}
                className="mr-2 h-8 px-2"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="text-xs">Back</span>
              </Button>
            )}
            <h2 className={`text-xs ${theme.title} ${font.title}`}>Output</h2>
          </div>

          {/* Output Content */}
          <div className="flex-1 overflow-auto">
            {!activeFileId ? (
              <div className="p-4 space-y-2">
                <div className={`text-xs font-medium mb-4 ${theme.title}`}>All Files</div>
                
                {/* Current Output Item */}
                <div 
                  onClick={() => setActiveFileId('current-output')}
                  className={`p-3 rounded-lg border ${theme.separator} hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors flex items-center gap-3`}
                >
                   <div className="w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                     <FileText className="w-4 h-4" />
                   </div>
                   <div>
                     <div className={`text-xs font-medium ${theme.title}`}>Current Generated Output</div>
                     <div className={`text-[10px] ${theme.navItem}`}>Last updated just now</div>
                   </div>
                </div>

                {/* Mock Reference Files */}
                <div 
                  onClick={() => setActiveFileId('ref-1')}
                  className={`p-3 rounded-lg border ${theme.separator} hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors flex items-center gap-3`}
                >
                   <div className="w-8 h-8 rounded bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                     <File className="w-4 h-4" />
                   </div>
                   <div>
                     <div className={`text-xs font-medium ${theme.title}`}>Policy Guidelines v2.pdf</div>
                     <div className={`text-[10px] ${theme.navItem}`}>Reference Document</div>
                   </div>
                </div>

                <div 
                  onClick={() => setActiveFileId('ref-2')}
                  className={`p-3 rounded-lg border ${theme.separator} hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors flex items-center gap-3`}
                >
                   <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                     <File className="w-4 h-4" />
                   </div>
                   <div>
                     <div className={`text-xs font-medium ${theme.title}`}>Meeting Notes - Oct 24.docx</div>
                     <div className={`text-[10px] ${theme.navItem}`}>Reference Document</div>
                   </div>
                </div>
              </div>
            ) : activeFileId === 'current-output' ? (
              <>
                {chat?.assistantType === 'email-drafter' && chat.messages.length > 2 ? (
                  <div className={`h-full ${theme.outputPanel} rounded-lg shadow-lg`}>
                    <div className="p-8 max-w-3xl mx-auto">
                      {/* Email Header */}
                      <div className="space-y-3 pb-4 border-b border-gray-200">
                        <div className="flex items-start gap-2">
                          <span className={`text-xs font-semibold ${theme.navItem} w-16`}>To:</span>
                          <span className={`text-xs ${theme.title}`}>user@example.gov.sg</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className={`text-xs font-semibold ${theme.navItem} w-16`}>From:</span>
                          <span className={`text-xs ${theme.title}`}>support@govtech.sg</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className={`text-xs font-semibold ${theme.navItem} w-16`}>Subject:</span>
                          <span className={`text-xs ${theme.title}`}>Re: Transcribe API Documentation</span>
                        </div>
                      </div>

                      {/* Email Body */}
                      <div className={`mt-6 space-y-4 ${theme.title}`}>
                        <p className="text-xs">Dear User,</p>
                        
                        <p className="text-xs">
                          Thank you for your interest in our Transcribe API! I'm happy to help you find the information you need.
                        </p>
                        
                        <p className="text-xs">
                          You can access our comprehensive API documentation at: <a href="https://docs.govtech.sg/transcribe-api" className="text-blue-600 underline">https://docs.govtech.sg/transcribe-api</a>
                        </p>
                        
                        <p className="text-xs">
                          The documentation includes:
                        </p>
                        
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li className="text-xs">Getting started guide and quick start tutorials</li>
                          <li className="text-xs">Complete API reference with endpoints and parameters</li>
                          <li className="text-xs">Authentication and security best practices</li>
                          <li className="text-xs">Code samples in multiple programming languages</li>
                          <li className="text-xs">Troubleshooting tips and FAQs</li>
                        </ul>
                        
                        <p className="text-xs">
                          If you encounter any issues or have questions while integrating the API, please don't hesitate to reach out to our support team at <a href="mailto:transcribe-support@govtech.sg" className="text-blue-600 underline">transcribe-support@govtech.sg</a>. We're here to help!
                        </p>
                        
                        <p className="text-xs">
                          Best regards,<br />
                          GovTech Support Team<br />
                          Government Technology Agency
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs">
                          Copy Email
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs">
                          Edit Draft
                        </button>
                      </div>
                    </div>
                  </div>
                ) : chat?.assistantType === 'deep-research-ai' ? (
                  <AIAdoptionReport colorTheme={colorTheme} fontStyle={fontStyle} />
                ) : chat?.assistantType === 'recruitment-assistant' ? (
                  <CandidatesList 
                    colorTheme={colorTheme} 
                    fontStyle={fontStyle}
                    messageCount={chat.messages.length}
                  />
                ) : chat?.assistantType === 'parliamentary-question' ? (
                  <ParliamentaryAnswer 
                    colorTheme={colorTheme} 
                    fontStyle={fontStyle}
                  />
                ) : chat?.assistantType === 'procurement-assistant' ? (
                  <ProcurementAOR 
                    colorTheme={colorTheme} 
                    fontStyle={fontStyle}
                    messageCount={chat.messages.length}
                  />
                ) : (
                  <div className={`h-full rounded-lg border-2 border-dashed ${theme.separator} flex items-center justify-center`}>
                    <p className={`${theme.navItem} text-sm`}>Generated output will appear here</p>
                  </div>
                )}
              </>
            ) : (
              // Mock Document Viewer
              <div className={`h-full p-8 ${theme.mainBg}`}>
                <div className={`max-w-2xl mx-auto border ${theme.separator} bg-white dark:bg-gray-800 shadow-sm p-8 min-h-[500px]`}>
                   <h1 className="text-lg font-bold mb-4">{activeFileId === 'ref-1' ? 'Policy Guidelines v2' : 'Meeting Notes - Oct 24'}</h1>
                   <div className="space-y-4 text-sm opacity-80">
                      <p>This is a preview of the reference document.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}