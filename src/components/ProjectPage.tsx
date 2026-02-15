import { useState } from 'react';
import { ArrowLeft, Folder as ProjectIcon, MessageSquare, MoreHorizontal, Trash2, SquarePen, Settings, Upload, FileText, X } from 'lucide-react';
import { Button, TextInput, Textarea, Modal, Text, Title, Box, Stack, Group, Divider, Menu, ActionIcon, Input } from '@mantine/core';
import { ListItemRow, EmptyState } from './shared';
import type { Project } from '../types/project';
import type { Chat } from '../App';
import cls from './ProjectPage.module.css';

interface ProjectPageProps {
  project: Project;
  chats: Chat[];
  onBack: () => void;
  onSelectChat: (chatId: string) => void;
  onDeleteProject: (projectId: string) => void;
  onRemoveChatFromProject: (projectId: string, chatId: string) => void;
  onStartNewChatInProject?: (projectId: string) => void;
  onUpdateProject?: (projectId: string, updates: Partial<Project>) => void;
}

export function ProjectPage({
  project,
  chats,
  onBack,
  onSelectChat,
  onDeleteProject,
  onRemoveChatFromProject,
  onStartNewChatInProject,
  onUpdateProject,
}: ProjectPageProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editName, setEditName] = useState(project.name);
  const [editInstructions, setEditInstructions] = useState(project.customInstructions || '');
  const [memoriesScope, setMemoriesScope] = useState<'project-only' | 'include-external'>(project.memoriesScope);

  const projectChats = chats.filter(chat => project.chatIds.includes(chat.id));

  const handleSaveSettings = () => {
    if (onUpdateProject) {
      onUpdateProject(project.id, {
        name: editName.trim() || project.name,
        customInstructions: editInstructions.trim(),
        memoriesScope,
      });
    }
    setSettingsOpen(false);
  };

  const handleFileUpload = () => {
    const mockFile = {
      id: Date.now().toString(),
      name: 'document.pdf',
      size: 1024 * 100,
      uploadedAt: new Date(),
    };
    if (onUpdateProject) {
      onUpdateProject(project.id, {
        files: [...(project.files || []), mockFile],
      });
    }
  };

  const handleRemoveFile = (fileId: string) => {
    if (onUpdateProject) {
      onUpdateProject(project.id, {
        files: (project.files || []).filter(f => f.id !== fileId),
      });
    }
  };

  return (
    <Box className={cls.page}>
      {/* Header */}
      <Box className={cls.header}>
        <button onClick={onBack} className={cls.backButton}>
          <ArrowLeft size={20} />
        </button>
        <Box className={cls.headerTitle}>
          <ProjectIcon size={20} color="var(--mantine-color-gray-6)" />
          <Title order={3} size="h4">{project.name}</Title>
        </Box>
        <Button
          variant="subtle"
          color="gray"
          size="sm"
          onClick={() => onStartNewChatInProject?.(project.id)}
          leftSection={<SquarePen size={16} />}
        >
          New Chat
        </Button>
        <Menu position="bottom-end" withinPortal>
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" size="lg">
              <MoreHorizontal size={16} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<Settings size={16} />}
              onClick={() => setSettingsOpen(true)}
            >
              Settings
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<Trash2 size={16} />}
              onClick={() => onDeleteProject(project.id)}
            >
              Delete Project
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Box>

      {/* Content - Two Column Layout */}
      <Box className={cls.contentArea}>
        {/* Left Column - Chats */}
        <Box className={cls.chatColumn}>
          <Box className={cls.chatColumnInner}>
            {/* Project isolation info */}
            <Box className={cls.infoBox}>
              <Text size="sm" c="gray.7">
                Chats within this project will only reference files, custom instructions, and memories from within this project.
              </Text>
            </Box>

            <Box className={cls.chatList}>
              {projectChats.length > 0 ? (
                projectChats.map((chat) => (
                  <ListItemRow
                    key={chat.id}
                    icon={MessageSquare}
                    title={chat.title}
                    subtitle={
                      chat.messages.length > 0
                        ? chat.messages[chat.messages.length - 1].content.slice(0, 60) + '...'
                        : 'No messages yet'
                    }
                    onClick={() => onSelectChat(chat.id)}
                    className={cls.rowHover}
                    rightContent={
                      <Menu position="bottom-end" withinPortal>
                        <Menu.Target>
                          <ActionIcon
                            variant="subtle"
                            color="gray"
                            size="sm"
                            className={cls.menuButton}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreHorizontal size={16} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            leftSection={<Trash2 size={16} />}
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveChatFromProject(project.id, chat.id);
                            }}
                          >
                            Remove from project
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    }
                  />
                ))
              ) : (
                <EmptyState
                  icon={ProjectIcon}
                  title="This project is empty"
                  description="Start a new chat or drag existing chats here to organize them"
                  action={
                    <Button onClick={() => onStartNewChatInProject?.(project.id)} leftSection={<SquarePen size={16} />}>
                      Start New Chat
                    </Button>
                  }
                />
              )}
            </Box>
          </Box>
        </Box>

        {/* Right Column - Custom Instructions and Files */}
        <Box className={cls.sideColumn}>
          <Stack gap="lg">
            {/* Custom Instructions */}
            <Box className={cls.sideSection}>
              <Box className={cls.sideSectionHeader}>
                <Text size="sm" fw={600} c="gray.9">Custom instructions</Text>
                <button onClick={() => setSettingsOpen(true)} className={cls.editLink}>
                  Edit
                </button>
              </Box>
              {project.customInstructions ? (
                <button onClick={() => setSettingsOpen(true)} className={cls.instructionsBox} style={{ color: 'var(--mantine-color-gray-7)' }}>
                  <Text size="sm" lineClamp={3}>{project.customInstructions}</Text>
                </button>
              ) : (
                <button onClick={() => setSettingsOpen(true)} className={cls.instructionsBox} style={{ color: 'var(--mantine-color-gray-5)' }}>
                  No custom instructions set. Click to add.
                </button>
              )}
            </Box>

            <Divider />

            {/* Files */}
            <Box className={cls.sideSection}>
              <Text size="sm" fw={600} c="gray.9">Files</Text>
              <Stack gap="xs">
                {(project.files || []).length > 0 ? (
                  (project.files || []).map(file => (
                    <Box key={file.id} className={cls.fileRow}>
                      <FileText size={16} color="var(--mantine-color-gray-5)" style={{ flexShrink: 0 }} />
                      <Text size="sm" c="gray.7" style={{ flex: 1 }} lineClamp={1}>{file.name}</Text>
                      <button onClick={() => handleRemoveFile(file.id)} className={cls.removeFileButton}>
                        <X size={12} color="var(--mantine-color-gray-5)" />
                      </button>
                    </Box>
                  ))
                ) : (
                  <Text size="sm" c="gray.5" ta="center" py="md">No files uploaded</Text>
                )}
                <Button variant="outline" size="sm" fullWidth leftSection={<Upload size={16} />} mt="xs" onClick={handleFileUpload}>
                  Upload File
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* Project Settings Dialog */}
      <Modal
        opened={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title={<Text fw={600} size="lg" c="gray.9">Project Settings</Text>}
        size="md"
      >
        <Stack gap="lg">
          {/* Project Name */}
          <Box>
            <Input.Label>Project Name</Input.Label>
            <TextInput
              value={editName}
              onChange={(e) => setEditName(e.currentTarget.value)}
              mt="xs"
            />
          </Box>

          {/* Custom Instructions */}
          <Box>
            <Input.Label>Custom Instructions</Input.Label>
            <Textarea
              placeholder="Add custom instructions for chats in this project..."
              value={editInstructions}
              onChange={(e) => setEditInstructions(e.currentTarget.value)}
              minRows={4}
              mt="xs"
            />
            <Text size="xs" c="gray.5" mt="xs">
              These instructions will apply to all chats within this project.
            </Text>
          </Box>

          {/* Files */}
          <Box>
            <Input.Label>Files</Input.Label>
            <Box mt="xs" style={{ border: '1px solid var(--mantine-color-gray-2)', borderRadius: 'var(--mantine-radius-md)', padding: 'var(--mantine-spacing-sm)' }}>
              <Stack gap="xs">
                {(project.files || []).length > 0 ? (
                  (project.files || []).map(file => (
                    <Box key={file.id} className={cls.dialogFileRow}>
                      <FileText size={16} color="var(--mantine-color-gray-5)" />
                      <Text size="sm" c="gray.7" style={{ flex: 1 }} lineClamp={1}>{file.name}</Text>
                      <button onClick={() => handleRemoveFile(file.id)} className={cls.removeFileButton} style={{ opacity: 1 }}>
                        <X size={12} color="var(--mantine-color-gray-5)" />
                      </button>
                    </Box>
                  ))
                ) : (
                  <Text size="sm" c="gray.5" ta="center" py="xs">No files uploaded</Text>
                )}
                <Button variant="outline" size="sm" fullWidth leftSection={<Upload size={16} />} onClick={handleFileUpload}>
                  Upload File
                </Button>
              </Stack>
            </Box>
            <Text size="xs" c="gray.5" mt="xs">
              Files uploaded here will be referenced by chats in this project.
            </Text>
          </Box>

          {/* Memories Scope */}
          <Box>
            <Input.Label>Memories Scope</Input.Label>
            <Stack gap="xs" mt="xs">
              <label className={cls.radioOption}>
                <input
                  type="radio"
                  name="memories-scope"
                  checked={memoriesScope === 'project-only'}
                  onChange={() => setMemoriesScope('project-only')}
                  style={{ marginTop: 2 }}
                />
                <Box>
                  <Text size="sm" fw={500} c="gray.9">Project only</Text>
                  <Text size="xs" c="gray.5">
                    Chats will only reference files and memories from within this project
                  </Text>
                </Box>
              </label>
              <label className={cls.radioOption}>
                <input
                  type="radio"
                  name="memories-scope"
                  checked={memoriesScope === 'include-external'}
                  onChange={() => setMemoriesScope('include-external')}
                  style={{ marginTop: 2 }}
                />
                <Box>
                  <Text size="sm" fw={500} c="gray.9">Include external</Text>
                  <Text size="xs" c="gray.5">
                    Chats can also reference memories and files from outside this project
                  </Text>
                </Box>
              </label>
            </Stack>
          </Box>

          {/* Footer */}
          <Group justify="flex-end" pt="md">
            <Button variant="outline" onClick={() => setSettingsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveSettings}>
              Save Changes
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Box>
  );
}
