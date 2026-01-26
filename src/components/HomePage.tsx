import { useState } from 'react';
import { MessageInput } from './MessageInput';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';

interface HomePageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  userProfile: import('../App').UserProfile;
  onSelectSimulation?: (simulationId: string) => void;
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

export function HomePage({ colorTheme, fontStyle, onSelectChat, onNewChat, onToggleSidebar, isSidebarOpen, userProfile, onSelectSimulation }: HomePageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);
  const [inputValue, setInputValue] = useState('');

  const today = new Date();
  const promptSuggestions = getPromptSuggestions(userProfile.role);

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <div className={`flex-1 h-full flex flex-col ${font.base}`}>
      {/* Main Content */}
      <div className="flex-1 overflow-auto flex items-center">
        <div className="flex flex-col w-full max-w-chat mx-auto px-6">
          {/* Welcome Header */}
          <div className="pb-6">
            <h1 className={`text-2xl mb-1 tracking-tight font-semibold ${theme.title} ${font.title}`} style={{ fontSize: '2rem' }}>
              Good {today.getHours() < 12 ? 'Morning' : today.getHours() < 18 ? 'Afternoon' : 'Evening'}, {userProfile.name.split(' ')[0]}
            </h1>
            <p className={`text-xs opacity-70`} style={{ color: 'inherit' }}>
              {today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Chat Input Section */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <MessageInput
                onSend={(message, classificationType) => {
                  console.log('Quick chat message:', message, 'Classification:', classificationType);
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
            <div className={`mt-4 flex flex-wrap gap-2 transition-opacity ${inputValue ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {promptSuggestions.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
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
