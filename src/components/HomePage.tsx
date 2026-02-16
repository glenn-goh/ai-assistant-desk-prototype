import { useState } from 'react';
import { MessageInput } from './MessageInput';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { Shield, ShieldCheck, ChevronDown, Check } from 'lucide-react';
import { Text, Title, Box, Menu } from '@mantine/core';
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


export function HomePage({ colorTheme, fontStyle, onSelectChat, onNewChat, isSidebarOpen, userProfile, onSelectSimulation, onStartChat, toolAssistants = [], onIncognitoChange, onNavigateToExplore }: HomePageProps) {
  const [inputValue, setInputValue] = useState('');
  const [classificationType, setClassificationType] = useState<'rsn' | 'cce-sn'>('rsn');
  const [isClassificationOpen, setIsClassificationOpen] = useState(false);
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
              <Menu
                opened={isClassificationOpen}
                onChange={setIsClassificationOpen}
                position="bottom-start"
                offset={4}
                withinPortal
              >
                <Menu.Target>
                  <button type="button" className={cls.classificationTrigger}>
                    {classificationType === 'rsn' ? <Shield size={16} /> : <ShieldCheck size={16} />}
                    <span>Up to {classificationType === 'rsn' ? 'R/SN' : 'C(CE)/SN'}</span>
                    <ChevronDown size={14} style={{ opacity: 0.5 }} />
                  </button>
                </Menu.Target>
                <Menu.Dropdown style={{ width: 400, padding: 0 }}>
                  <Box className={cls.classDropdownHeader}>
                    <Text fw={600} c="gray.9">Data Classification</Text>
                    <Text size="sm" c="gray.5" mt={4}>Select the highest classification level allowed</Text>
                  </Box>
                  <Menu.Divider />
                  <Box p="xs">
                    <button
                      type="button"
                      className={cls.classDropdownItem}
                      onClick={() => { handleClassificationChange('rsn'); setIsClassificationOpen(false); }}
                    >
                      <Shield size={20} color="var(--mantine-color-gray-7)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <Box style={{ flex: 1 }}>
                        <Text fw={600} c="gray.9" size="sm">R/SN</Text>
                        <Text size="sm" c="gray.5">Restricted / Sensitive Normal</Text>
                      </Box>
                      {classificationType === 'rsn' && <Check size={16} color="var(--mantine-color-gray-9)" />}
                    </button>
                    <button
                      type="button"
                      className={cls.classDropdownItem}
                      onClick={() => { handleClassificationChange('cce-sn'); setIsClassificationOpen(false); }}
                    >
                      <ShieldCheck size={20} color="var(--mantine-color-gray-7)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <Box style={{ flex: 1 }}>
                        <Text fw={600} c="gray.9" size="sm">C(CE)/SN</Text>
                        <Text size="sm" c="gray.5">Confidential (Cloud-Eligible) / Sensitive Normal</Text>
                        <Text size="sm" fw={700} c="gray.9" mt={4}>CCE/SN chats will not be saved.</Text>
                      </Box>
                      {classificationType === 'cce-sn' && <Check size={16} color="var(--mantine-color-gray-9)" />}
                    </button>
                  </Box>
                </Menu.Dropdown>
              </Menu>
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
                size="sm"
                color="gray.5"
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
