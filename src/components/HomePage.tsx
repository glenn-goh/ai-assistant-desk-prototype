import { useState } from 'react';
import { MessageInput } from './MessageInput';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Shield, ShieldCheck, ChevronDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Separator } from './ui/separator';
import { IncognitoIcon } from './IncognitoIcon';

interface HomePageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  isSidebarOpen?: boolean;
  userProfile: import('../App').UserProfile;
  onSelectSimulation?: (simulationId: string) => void;
  onStartChat?: (message: string, classificationType?: 'rsn' | 'cce-sn' | 'cce-sh', isIncognito?: boolean) => void;
  bookmarkedAssistants?: string[];
}

// Predefined prompts based on user role
const getPromptSuggestions = (role: string) => {
  switch (role) {
    case 'HR Officer':
      return [
        'Help me draft a job description',
        'Shortlist candidates for a position',
        'Create interview questions',
        'Review leave policy updates',
      ];
    case 'Policy Officer':
      return [
        'Draft a parliamentary question response',
        'Summarize this policy document',
        'Create a policy brief',
        'Analyze regulatory impact',
      ];
    case 'Marketing Officer':
      return [
        'Draft a marketing campaign brief',
        'Create social media content plan',
        'Analyze campaign performance',
        'Help with procurement AOR',
      ];
    default:
      return [
        'Help me draft a document',
        'Summarize this content',
        'Create a project plan',
        'Analyze data trends',
      ];
  }
};

export function HomePage({ colorTheme, fontStyle, onSelectChat, onNewChat, isSidebarOpen, userProfile, onSelectSimulation, onStartChat, bookmarkedAssistants = [] }: HomePageProps) {
  const [inputValue, setInputValue] = useState('');
  const [classificationType, setClassificationType] = useState<'rsn' | 'cce-sn'>('rsn');
  const [isIncognito, setIsIncognito] = useState(false);

  const today = new Date();
  const promptSuggestions = getPromptSuggestions(userProfile.role);

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  // Reset incognito when switching to CCE/SN
  const handleClassificationChange = (value: 'rsn' | 'cce-sn') => {
    setClassificationType(value);
    if (value === 'cce-sn') {
      setIsIncognito(false);
    }
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 overflow-auto flex items-center">
        <div className="flex flex-col w-full max-w-chat mx-auto px-6">
          {/* Welcome Header */}
          <div className="pb-8">
            {isIncognito ? (
              <div>
                <h1 className="text-2xl mb-1 tracking-tight font-semibold text-gray-900" style={{ fontSize: '2rem' }}>
                  Incognito chat
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <IncognitoIcon className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-500">
                    Incognito chat does not reference memories or save to chat history
                  </p>
                </div>
              </div>
            ) : (
              <h1 className="text-2xl mb-1 tracking-tight font-semibold text-gray-900" style={{ fontSize: '2rem' }}>
                Good {today.getHours() < 12 ? 'Morning' : today.getHours() < 18 ? 'Afternoon' : 'Evening'}, {userProfile.name.split(' ')[0]}
              </h1>
            )}
          </div>

          {/* Data Classification Selector */}
          <div className="mb-2 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                Data classification
              </span>
              <Select value={classificationType} onValueChange={(value) => handleClassificationChange(value as 'rsn' | 'cce-sn')}>
                <SelectTrigger
                  className="w-auto h-9 bg-white border-gray-300 px-3"
                >
                  <div className="flex items-center gap-2">
                    {classificationType === 'rsn' ? (
                      <Shield className="w-4 h-4" />
                    ) : (
                      <ShieldCheck className="w-4 h-4" />
                    )}
                    <span className="whitespace-nowrap">Up to {classificationType === 'rsn' ? 'R/SN' : 'C(CE)/SN'}</span>
                  </div>
                </SelectTrigger>
                  <SelectContent className="w-[400px]">
                    {/* Header */}
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-900">Data Classification</h3>
                      <p className="text-sm text-gray-500 mt-1">Select the highest classification level allowed</p>
                    </div>
                    <Separator />
                    {/* Options */}
                    <div className="p-2">
                      <SelectItem value="rsn" className="cursor-pointer">
                        <div className="flex items-start gap-3 py-2">
                          <Shield className="w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">R/SN</div>
                            <div className="text-sm text-gray-500">Restricted / Sensitive Normal</div>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="cce-sn" className="cursor-pointer">
                        <div className="flex items-start gap-3 py-2">
                          <ShieldCheck className="w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">C(CE)/SN</div>
                            <div className="text-sm text-gray-500">Confidential (Cloud-Eligible) / Sensitive Normal</div>
                            <div className="text-sm font-bold text-gray-900 mt-1">CCE/SN chats will not be saved.</div>
                          </div>
                        </div>
                      </SelectItem>
                    </div>
                  </SelectContent>
                </Select>
            </div>
            <p className="text-xs text-gray-500 flex-1">
              This setting cannot be changed once the chat begins.
            </p>

            {/* Incognito Toggle - Only for R/SN */}
            {classificationType === 'rsn' && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setIsIncognito(!isIncognito)}
                      className={`p-2 rounded-lg transition-colors ml-auto ${isIncognito ? 'bg-gray-200 text-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'}`}
                    >
                      <IncognitoIcon className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isIncognito ? 'Exit incognito mode' : 'Enable incognito mode'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          {/* Chat Input Section */}
          <div data-tour="chat-interface">
            <div className="rounded-2xl border bg-white border-gray-300">
              <MessageInput
                onSend={(message) => {
                  if (onStartChat) {
                    onStartChat(message, classificationType, isIncognito);
                  }
                }}
                colorTheme={colorTheme}
                fontStyle={fontStyle}
                showFileUpload={true}
                showClassification={false}
                value={inputValue}
                onChange={setInputValue}
                autoFocus={true}
                bookmarkedAssistants={bookmarkedAssistants}
              />
            </div>

            {/* PromptSuggestions - hide without shifting layout when input has text */}
            <div className={`mt-8 flex flex-wrap gap-2 transition-opacity ${inputValue ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {promptSuggestions.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-2 text-sm rounded-full transition-colors bg-white border border-gray-900 text-gray-900 hover:bg-gray-100"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
