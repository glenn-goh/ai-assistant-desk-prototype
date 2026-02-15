import { User, Brain, ArrowLeft, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button, Modal, TextInput, Textarea, Select, Switch, Divider, Tabs, Text, Title, Box, Stack, Group, Menu, ActionIcon } from '@mantine/core';
import { FormField } from './shared';
import type { UserProfile } from '../App';
import { useState } from 'react';
import cls from './PersonalizationDialog.module.css';

export type ColorTheme = 'dark' | 'light' | 'minimal' | 'singapore-red' | 'pastel-pink' | 'army-green' | 'rainbow' | 'national-day';
export type FontStyle = 'modern' | 'large' | 'compact';

const JOB_ROLES = [
  "Marketing Officer",
  "HR Officer",
  "Product Manager",
  "Software Engineer",
  "Data Scientist",
  "UX Designer",
  "Policy Officer",
  "Solution Architect",
  "DevOps Engineer",
  "Cyber Security Specialist",
];

const AI_STYLE_OPTIONS = [
  { value: 'Concise', label: 'Concise' },
  { value: 'Professional', label: 'Professional' },
  { value: 'Academic', label: 'Academic' },
  { value: 'Creative', label: 'Creative' },
  { value: 'Others', label: 'Others' },
];

interface PersonalizationDialogProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onColorThemeChange: (theme: ColorTheme) => void;
  onFontStyleChange: (style: FontStyle) => void;
  userProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PersonalizationDialog({
  colorTheme,
  fontStyle,
  onColorThemeChange,
  onFontStyleChange,
  userProfile,
  onUpdateProfile,
  open,
  onOpenChange,
}: PersonalizationDialogProps) {
  const [customInstructions, setCustomInstructions] = useState(userProfile.customInstructions || '');
  const [aiStyle, setAiStyle] = useState(userProfile.aiStyle || 'Concise');
  const [otherAiStyle, setOtherAiStyle] = useState('');
  const [callMeName, setCallMeName] = useState(userProfile.name || '');
  const [jobRole, setJobRole] = useState(userProfile.role || '');
  const [otherJobRole, setOtherJobRole] = useState('');
  const [workActivities, setWorkActivities] = useState<string[]>(userProfile.workActivities || []);
  const [memoryEnabled, setMemoryEnabled] = useState(true);
  const [showMemoriesModal, setShowMemoriesModal] = useState(false);

  const handleClose = () => {
    setShowMemoriesModal(false);
    onOpenChange?.(false);
  };

  return (
    <Modal
      opened={!!open}
      onClose={handleClose}
      size="lg"
      title={
        showMemoriesModal ? (
          <Group gap="xs">
            <button
              onClick={() => setShowMemoriesModal(false)}
              className={cls.backButton}
            >
              <ArrowLeft size={20} />
            </button>
            <Text fw={600} size="lg">Saved Memories</Text>
          </Group>
        ) : (
          <Text fw={600} size="lg">Settings</Text>
        )
      }
      styles={{ body: { maxHeight: '70vh', overflowY: 'auto' } }}
    >
      {showMemoriesModal ? (
        <>
          <Text size="sm" c="gray.5" mb="md">
            Things AI Assistant has learned about you
          </Text>

          <Stack gap="sm">
            {[
              { id: '1', text: 'Works at GovTech as a Marketing Officer', date: 'Jan 15, 2026' },
              { id: '2', text: 'Prefers concise, bullet-point responses', date: 'Jan 18, 2026' },
              { id: '3', text: 'Often works on marketing campaigns and content', date: 'Jan 20, 2026' },
            ].map((memory) => (
              <Box key={memory.id} className={cls.memoryItem}>
                <Box style={{ flex: 1 }}>
                  <Text size="sm" c="gray.9">{memory.text}</Text>
                  <Text size="xs" c="gray.5" mt={4}>{memory.date}</Text>
                </Box>
                <Menu position="bottom-end" withinPortal>
                  <Menu.Target>
                    <ActionIcon
                      variant="subtle"
                      color="gray"
                      size="sm"
                      className={cls.menuButton}
                    >
                      <MoreHorizontal size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      color="red"
                      leftSection={<Trash2 size={16} />}
                      onClick={() => {
                        // Delete memory logic would go here
                      }}
                    >
                      Remove memory
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Box>
            ))}
          </Stack>
        </>
      ) : (
        <>
          <Text size="sm" c="gray.5" mb="lg">
            Customize your AI Assistant experience
          </Text>

          <Tabs defaultValue="accounts">
            <Tabs.List grow>
              <Tabs.Tab value="accounts" leftSection={<User size={16} />}>
                Accounts
              </Tabs.Tab>
              <Tabs.Tab value="memories" leftSection={<Brain size={16} />}>
                Personalisation
              </Tabs.Tab>
            </Tabs.List>

            {/* Accounts Tab */}
            <Tabs.Panel value="accounts" pt="lg">
              <Stack gap="lg">
                <Box>
                  <Text fw={600} mb="md">Profile Information</Text>

                  <Box className={cls.profileCard}>
                    <Box className={cls.avatar}>
                      <User size={32} color="white" />
                    </Box>
                    <Box style={{ flex: 1 }}>
                      <Text fw={500} c="gray.9">{userProfile.name}</Text>
                      <Text size="sm" c="gray.5">{userProfile.email}</Text>
                    </Box>
                  </Box>
                </Box>

                <FormField label="Name" htmlFor="name">
                  <TextInput
                    id="name"
                    value={callMeName}
                    onChange={(e) => setCallMeName(e.currentTarget.value)}
                    placeholder="Enter your name"
                  />
                </FormField>

                <FormField label="Email" htmlFor="email">
                  <TextInput
                    id="email"
                    value={userProfile.email}
                    disabled
                    styles={{ input: { backgroundColor: 'var(--mantine-color-gray-1)', cursor: 'not-allowed' } }}
                  />
                </FormField>

                <Group justify="flex-end" pt="md">
                  <Button onClick={() => {
                    onUpdateProfile({
                      ...userProfile,
                      name: callMeName.trim() || userProfile.name,
                    });
                    onOpenChange?.(false);
                  }}>Save Changes</Button>
                </Group>
              </Stack>
            </Tabs.Panel>

            {/* Personalisation Tab */}
            <Tabs.Panel value="memories" pt="lg">
              <Stack gap="lg">
                <Box>
                  <Title order={4} mb="md">AI personalisation</Title>
                </Box>

                {/* Preferred AI Style and Tone */}
                <FormField
                  label="Preferred AI style and tone"
                  htmlFor="ai-style"
                  helperText="Set the style and tone of how your AI Assistant responds to you."
                >
                  <Select
                    id="ai-style"
                    value={aiStyle}
                    onChange={(value) => setAiStyle(value || 'Concise')}
                    data={AI_STYLE_OPTIONS}
                  />
                  {aiStyle === 'Others' && (
                    <TextInput
                      placeholder="Describe your preferred style..."
                      value={otherAiStyle}
                      onChange={(e) => setOtherAiStyle(e.currentTarget.value)}
                      mt="xs"
                    />
                  )}
                </FormField>

                {/* Custom Instructions */}
                <FormField label="Custom Instructions" htmlFor="custom-instructions">
                  <Textarea
                    id="custom-instructions"
                    placeholder="e.g., Always provide sources, use Singapore English spelling, include relevant policy references..."
                    minRows={4}
                    value={customInstructions}
                    onChange={(e) => setCustomInstructions(e.currentTarget.value)}
                  />
                </FormField>

                <Divider />

                {/* Memories Section */}
                <Stack gap="md">
                  <Group justify="space-between">
                    <Text fw={600}>Memories</Text>
                    <Button variant="outline" size="xs" onClick={() => setShowMemoriesModal(true)}>
                      Manage
                    </Button>
                  </Group>
                  <Group justify="space-between">
                    <Box style={{ flex: 1 }}>
                      <Text size="sm" c="gray.9">Reference saved memories</Text>
                      <Text size="xs" c="gray.5">AI Assistant save and use memories when responding.</Text>
                    </Box>
                    <Switch checked={memoryEnabled} onChange={(e) => setMemoryEnabled(e.currentTarget.checked)} />
                  </Group>
                </Stack>

                <Group justify="flex-end" pt="md">
                  <Button onClick={() => {
                    onUpdateProfile({
                      ...userProfile,
                      customInstructions: customInstructions,
                      name: callMeName,
                      aiStyle: aiStyle === 'Others' ? otherAiStyle : aiStyle,
                      workActivities: workActivities,
                    });
                    onOpenChange?.(false);
                  }}>Save Changes</Button>
                </Group>
              </Stack>
            </Tabs.Panel>
          </Tabs>
        </>
      )}
    </Modal>
  );
}
