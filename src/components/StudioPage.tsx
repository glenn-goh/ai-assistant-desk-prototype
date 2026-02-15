import { Plus, Bot, Wand2 } from 'lucide-react';
import { Button, TextInput, Textarea, Card, Stack, Group, Title, Text, Box } from '@mantine/core';
import { FormField } from './shared';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import cls from './StudioPage.module.css';

interface StudioPageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function StudioPage({ colorTheme, fontStyle }: StudioPageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  return (
    <div className={cls.page} style={{ ...theme.mainBg, ...font.base }}>
      {/* Header */}
      <div className={cls.header} style={theme.header}>
        <Title order={1} style={{ ...theme.title, ...font.title }} size="md">Create Your Assistant</Title>
      </div>

      {/* Content */}
      <div className={cls.scrollArea}>
        <Stack gap="xl" className={cls.content}>
          {/* Header Section */}
          <Box className={cls.headerSection}>
            <Box className={cls.headerIconBox} style={theme.userAvatar}>
              <Wand2 size={24} color="white" />
            </Box>
            <Box>
              <Text size="xs" style={{ ...theme.chatItemText, ...font.title }}>Assistant Studio</Text>
              <Text size="xs" style={{ ...theme.navItem, opacity: 0.7 }}>
                Design and configure your custom AI assistant
              </Text>
            </Box>
          </Box>

          {/* Create Assistant Form */}
          <Card withBorder shadow="md">
            <Stack gap="xl">
              <Stack gap="xs">
                <Title order={3} size="xs">Create New Assistant</Title>
                <Text size="xs" c="gray.5">
                  Give your assistant a name and describe what it does
                </Text>
              </Stack>
              <Stack gap="xl">
                <FormField label="Assistant Name" htmlFor="assistant-name" labelClassName={undefined}>
                  <TextInput
                    id="assistant-name"
                    placeholder="e.g., Marketing Expert, Code Reviewer, Transcribe Workspace..."
                    size="sm"
                    style={{ ...theme.inputBorder, ...font.input }}
                  />
                </FormField>

                <FormField label="Description" htmlFor="description" labelClassName={undefined}>
                  <Textarea
                    id="description"
                    placeholder="Describe what your assistant does and how it helps users..."
                    minRows={5}
                    size="sm"
                    style={{ ...theme.inputBorder, ...font.input }}
                  />
                </FormField>

                <Group gap="md" pt="lg">
                  <Button style={theme.sendButton} leftSection={<Plus size={16} />} size="sm">
                    Create Assistant
                  </Button>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </Group>
              </Stack>
            </Stack>
          </Card>

          {/* Tips Section */}
          <Card withBorder shadow="md">
            <Stack gap="md">
              <Group gap="sm">
                <Bot size={20} />
                <Title order={3} size="xs">Tips for Creating Great Assistants</Title>
              </Group>
              <Stack gap="md">
                <Text className={cls.tip} style={theme.navItem}>
                  <strong>Be Specific:</strong> Give your assistant a clear, descriptive name
                </Text>
                <Text className={cls.tip} style={theme.navItem}>
                  <strong>Clear Description:</strong> Explain what your assistant does and who it's for
                </Text>
                <Text className={cls.tip} style={theme.navItem}>
                  <strong>Focus on Purpose:</strong> Think about the specific tasks your assistant will help with
                </Text>
                <Text className={cls.tip} style={theme.navItem}>
                  <strong>Keep it Simple:</strong> Start with a clear concept, you can always refine it later
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </div>
    </div>
  );
}
