import { useState } from 'react';
import { MessageInput } from './MessageInput';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { Shield, ShieldCheck } from 'lucide-react';
import { Select, Text, Title, Box } from '@mantine/core';
import { TooltipIconButton } from './shared';
import { IncognitoIcon } from './IncognitoIcon';
import cls from './HomePage.module.css';

interface HomePageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  isSidebarOpen?: boolean;
  userProfile: import('../App').UserProfile;
  onSelectSimulation?: (simulationId: string) => void;
  onStartChat?: (message: string, classificationType?: 'rsn' | 'cce-sn' | 'cce-sh', isIncognito?: boolean) => void;
  toolAssistants?: string[];
  onIncognitoChange?: (isIncognito: boolean) => void;
  onNavigateToExplore?: () => void;
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

const classificationData = [
  { value: 'rsn', label: 'Up to R/SN' },
  { value: 'cce-sn', label: 'Up to C(CE)/SN' },
];

export function HomePage({ colorTheme, fontStyle, onSelectChat, onNewChat, isSidebarOpen, userProfile, onSelectSimulation, onStartChat, toolAssistants = [], onIncognitoChange, onNavigateToExplore }: HomePageProps) {
  const [inputValue, setInputValue] = useState('');
  const [classificationType, setClassificationType] = useState<'rsn' | 'cce-sn'>('rsn');
  const [isIncognito, setIsIncognito] = useState(false);

  const today = new Date();
  const promptSuggestions = getPromptSuggestions(userProfile.role);

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  // Reset incognito when switching to CCE/SN
  const handleClassificationChange = (value: string | null) => {
    if (!value) return;
    const typedValue = value as 'rsn' | 'cce-sn';
    setClassificationType(typedValue);
    if (typedValue === 'cce-sn') {
      setIsIncognito(false);
      onIncognitoChange?.(false);
    }
  };

  return (
    <Box className={cls.page}>
      {/* Main Content */}
      <Box className={cls.mainContent}>
        <Box className={cls.innerContent}>
          {/* Welcome Header */}
          <Box className={cls.welcomeHeader}>
            {isIncognito ? (
              <Box>
                <Title order={1} size="2rem" fw={600} c="gray.9">
                  Incognito chat
                </Title>
                <Box className={cls.incognitoHint}>
                  <IncognitoIcon className="w-4 h-4 text-gray-500" />
                  <Text size="sm" c="gray.5">
                    Incognito chat does not reference memories or save to chat history
                  </Text>
                </Box>
              </Box>
            ) : (
              <Title order={1} size="2rem" fw={600} c="gray.9">
                Good {today.getHours() < 12 ? 'Morning' : today.getHours() < 18 ? 'Afternoon' : 'Evening'}, {userProfile.name.split(' ')[0]}
              </Title>
            )}
          </Box>

          {/* Data Classification Selector */}
          <Box className={cls.classificationRow}>
            <Box className={cls.classificationSelector}>
              <Text size="sm" fw={500} c="gray.9">
                Data classification
              </Text>
              <Select
                value={classificationType}
                onChange={handleClassificationChange}
                data={classificationData}
                leftSection={classificationType === 'rsn' ? <Shield size={16} /> : <ShieldCheck size={16} />}
                size="xs"
                className={cls.classificationSelect}
                comboboxProps={{ withinPortal: true }}
                renderOption={({ option }) => (
                  <Box className={cls.selectOptionContent}>
                    <Box className={cls.selectOptionIcon}>
                      {option.value === 'rsn' ? <Shield size={20} /> : <ShieldCheck size={20} />}
                    </Box>
                    <Box style={{ flex: 1 }}>
                      <Text fw={600} c="gray.9" size="sm">{option.value === 'rsn' ? 'R/SN' : 'C(CE)/SN'}</Text>
                      <Text size="sm" c="gray.5">
                        {option.value === 'rsn' ? 'Restricted / Sensitive Normal' : 'Confidential (Cloud-Eligible) / Sensitive Normal'}
                      </Text>
                      {option.value === 'cce-sn' && (
                        <Text size="sm" fw={700} c="gray.9" mt={4}>CCE/SN chats will not be saved.</Text>
                      )}
                    </Box>
                  </Box>
                )}
              />
            </Box>
            <Text size="xs" c="gray.5" style={{ flex: 1 }}>
              This setting cannot be changed once the chat begins.
            </Text>

            {/* Incognito Toggle - Only for R/SN */}
            {classificationType === 'rsn' && (
              <TooltipIconButton
                icon={IncognitoIcon}
                tooltip={isIncognito ? 'Exit incognito mode' : 'Enable incognito mode'}
                onClick={() => {
                  const newValue = !isIncognito;
                  setIsIncognito(newValue);
                  onIncognitoChange?.(newValue);
                }}
                className="p-2 rounded-lg transition-colors ml-auto text-gray-500 hover:text-gray-700 hover:bg-gray-200"
              />
            )}
          </Box>

          {/* Chat Input Section */}
          <Box data-tour="chat-interface">
            <Box className={cls.chatInputWrapper}>
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
                toolAssistants={toolAssistants}
                onNavigateToExplore={onNavigateToExplore}
              />
            </Box>

            {/* PromptSuggestions - hide without shifting layout when input has text */}
            <Box className={`${cls.promptSuggestions} ${inputValue ? cls.promptSuggestionsHidden : ''}`}>
              {promptSuggestions.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className={cls.promptChip}
                >
                  {prompt}
                </button>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
