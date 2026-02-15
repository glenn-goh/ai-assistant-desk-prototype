import { useState } from 'react';
import { Check } from 'lucide-react';
import { Modal, Button, Card, Stack, Text, Box, Group } from '@mantine/core';
import { IconContainer } from './shared';
import type { Assistant } from '../data/assistants';
import cls from './ReplaceToolModal.module.css';

interface ReplaceToolModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentTools: Assistant[];
  newAssistant: Assistant;
  onReplace: (oldAssistantId: string, newAssistantId: string) => void;
}

export function ReplaceToolModal({
  open,
  onOpenChange,
  currentTools,
  newAssistant,
  onReplace,
}: ReplaceToolModalProps) {
  const [selectedToReplace, setSelectedToReplace] = useState<string | null>(null);

  const handleConfirmReplace = () => {
    if (selectedToReplace) {
      onReplace(selectedToReplace, newAssistant.id);
      onOpenChange(false);
      setSelectedToReplace(null);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    setSelectedToReplace(null);
  };

  const NewAssistantIcon = newAssistant.icon;

  return (
    <Modal
      opened={open}
      onClose={() => onOpenChange(false)}
      title="Replace a tool"
      size="lg"
      padding={0}
      styles={{ header: { padding: 'var(--mantine-spacing-xl)', paddingBottom: 'var(--mantine-spacing-sm)' } }}
    >
      <Text size="sm" c="gray.5" px="xl" mb="md">
        You can only have 3 assistants in your tools. Select which assistant to replace with <Text span fw={600}>{newAssistant.name}</Text>.
      </Text>

      {/* New Assistant Preview */}
      <Box className={cls.previewSection}>
        <Text size="xs" fw={500} c="gray.7" mb="sm">Adding:</Text>
        <Card withBorder padding="lg" styles={{ root: { borderWidth: 2, borderColor: 'var(--mantine-color-gray-9)' } }}>
          <Group className={cls.previewCard}>
            <IconContainer icon={NewAssistantIcon} size="md" />
            <Box className={cls.cardContent}>
              <Text size="sm" fw={600} c="gray.9" mb={4}>{newAssistant.name}</Text>
              <Text size="xs" c="gray.5" lineClamp={2}>{newAssistant.description}</Text>
            </Box>
          </Group>
        </Card>
      </Box>

      {/* Current Tools to Replace */}
      <Box className={cls.selectSection}>
        <Text size="xs" fw={500} c="gray.7" mb="md">Select one to replace:</Text>
        <Stack gap="sm">
          {currentTools.map(assistant => {
            const IconComponent = assistant.icon;
            const isSelected = selectedToReplace === assistant.id;
            return (
              <Box
                key={assistant.id}
                className={`${cls.toolCard} ${isSelected ? cls.toolCardSelected : ''}`}
                onClick={() => setSelectedToReplace(assistant.id)}
              >
                <Group align="flex-start" gap="md">
                  <IconContainer icon={IconComponent} size="md" />
                  <Box className={cls.cardContent}>
                    <Text size="sm" fw={600} c="gray.9" mb={4}>{assistant.name}</Text>
                    <Text size="xs" c="gray.5" lineClamp={2}>{assistant.description}</Text>
                  </Box>
                  {isSelected && (
                    <Box className={cls.checkIcon}>
                      <Check size={12} color="white" />
                    </Box>
                  )}
                </Group>
              </Box>
            );
          })}
        </Stack>
      </Box>

      {/* Footer */}
      <Box className={cls.footer}>
        <Button variant="subtle" color="gray" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          onClick={handleConfirmReplace}
          disabled={!selectedToReplace}
        >
          Confirm Replace
        </Button>
      </Box>
    </Modal>
  );
}
