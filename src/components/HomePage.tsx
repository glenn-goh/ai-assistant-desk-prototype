import { useState } from 'react';
import { MessageInput } from './MessageInput';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';

interface HomePageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  userProfile: import('../App').UserProfile;
  onSelectSimulation?: (simulationId: string) => void;
  onStartChat?: (message: string, classificationType?: 'rsn' | 'cce-sn' | 'cce-sh') => void;
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

export function HomePage({ colorTheme, fontStyle, onSelectChat, onNewChat, onToggleSidebar, isSidebarOpen, userProfile, onSelectSimulation, onStartChat }: HomePageProps) {
  const [inputValue, setInputValue] = useState('');

  const today = new Date();
  const promptSuggestions = getPromptSuggestions(userProfile.role);

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 overflow-auto flex items-center">
        <div className="flex flex-col w-full max-w-chat mx-auto px-6">
          {/* Welcome Header */}
          <div className="pb-10">
            <h1 className="text-2xl mb-1 tracking-tight font-semibold text-gray-900" style={{ fontSize: '2rem' }}>
              Good {today.getHours() < 12 ? 'Morning' : today.getHours() < 18 ? 'Afternoon' : 'Evening'}, {userProfile.name.split(' ')[0]}
            </h1>
            <p className="text-xs text-gray-500">
              {today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Chat Input Section */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-300">
              <MessageInput
                onSend={(message, classificationType) => {
                  if (onStartChat) {
                    onStartChat(message, classificationType);
                  }
                }}
                colorTheme={colorTheme}
                fontStyle={fontStyle}
                showFileUpload={true}
                showClassification={true}
                value={inputValue}
                onChange={setInputValue}
              />
            </div>

            {/* PromptSuggestions - hide without shifting layout when input has text */}
            <div className={`mt-8 flex flex-wrap gap-2 transition-opacity ${inputValue ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {promptSuggestions.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-2 text-sm bg-white border border-gray-900 rounded-full hover:bg-gray-100 transition-colors text-gray-900"
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
