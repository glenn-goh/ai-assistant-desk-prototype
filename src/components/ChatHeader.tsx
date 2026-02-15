import React, { useState } from 'react';
import { FileText, EyeOff, MoreHorizontal, FolderPlus, ChevronDown } from 'lucide-react';
import { Popover, Text, Box, Menu } from '@mantine/core';
import { TooltipIconButton, EditableText, ClassificationBadge } from './shared';
import { AssistantCard } from './AssistantCard';
import { ReplaceToolModal } from './ReplaceToolModal';
import type { Assistant } from '../data/assistants';
import { topRatedAssistants, essentialAssistants, roleBasedAssistants } from '../data/assistants';
import type { Project } from '../types/project';
import { IncognitoIcon } from './IncognitoIcon';
import cls from './ChatHeader.module.css';

interface ChatHeaderProps {
  // Mode
  isInteractive: boolean;
  isIncognito: boolean;
  isNewChat: boolean;

  // Title & subtitle
  interactiveTitle?: string;
  simulatorTitle?: string;
  assistantName?: string;
  classificationType?: 'rsn' | 'cce-sn' | 'cce-sh';

  // For determining title display (before/after first user message)
  hasUserMessage: boolean;

  // Rename
  chatId?: string;
  onRenameChat?: (chatId: string, newTitle: string) => void;

  // Temporary chat
  onSendTemporaryToggle?: (isTemporary: boolean) => void;

  // Projects menu
  projects: Project[];
  onMoveToProject?: (chatId: string, projectId: string) => void;

  // Assistant card popover
  assistant?: Assistant;
  isFavorited?: boolean;
  onToggleFavorite?: (assistantId: string) => void;
  toolAssistants?: string[];
  onAddToTools?: (assistantId: string) => void;
  onRemoveFromTools?: (assistantId: string) => void;
  onReplaceToolAssistant?: (oldAssistantId: string, newAssistantId: string) => void;

  // Canvas toggle
  showOutputPanel: boolean;
  onShowOutputPanel: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  isInteractive,
  isIncognito,
  isNewChat,
  interactiveTitle,
  simulatorTitle,
  assistantName,
  classificationType,
  hasUserMessage,
  chatId,
  onRenameChat,
  onSendTemporaryToggle,
  projects,
  onMoveToProject,
  assistant,
  isFavorited = false,
  onToggleFavorite,
  toolAssistants = [],
  onAddToTools,
  onRemoveFromTools,
  onReplaceToolAssistant,
  showOutputPanel,
  onShowOutputPanel,
}) => {
  const [isTemporaryChat, setIsTemporaryChat] = useState(false);
  const [replaceModalOpen, setReplaceModalOpen] = useState(false);

  const isInTools = assistant ? toolAssistants.includes(assistant.id) : false;

  const handleToggleTools = (assistantId: string) => {
    if (toolAssistants.includes(assistantId)) {
      onRemoveFromTools?.(assistantId);
    } else if (toolAssistants.length >= 3) {
      setReplaceModalOpen(true);
    } else {
      onAddToTools?.(assistantId);
    }
  };

  const handleTemporaryToggle = () => {
    const newValue = !isTemporaryChat;
    setIsTemporaryChat(newValue);
    onSendTemporaryToggle?.(newValue);
  };

  const displayTitle = isInteractive
    ? (assistantName && !hasUserMessage ? 'Untitled' : (interactiveTitle || 'New Chat'))
    : (assistantName && !hasUserMessage ? 'Untitled' : simulatorTitle);

  const subtitle = isInteractive
    ? (assistantName
        ? assistantName
        : (!isNewChat ? 'My AI Assistant' : null))
    : (assistantName || null);

  const classificationLabel = classificationType === 'cce-sn'
    ? 'C(CE) + SN'
    : classificationType === 'cce-sh'
      ? 'C(CE) + SH'
      : 'RSN';

  return (
    <Box className={cls.header}>
      <Box className={cls.titleArea}>
        {isIncognito ? (
          <Box className={cls.incognitoLabel}>
            <IncognitoIcon className="w-4 h-4 text-gray-600" />
            <Text size="sm" fw={500} c="gray.9">
              Incognito chat
            </Text>
          </Box>
        ) : (
          <EditableText
            value={displayTitle || 'New Chat'}
            onSave={(newTitle) => {
              if (chatId && onRenameChat) onRenameChat(chatId, newTitle);
            }}
            renderDisplay={({ value: title, onDoubleClick }) => (
              <Box className={cls.titleColumn}>
                <Text
                  size="sm"
                  fw={500}
                  c="gray.9"
                  style={{ cursor: 'pointer' }}
                  onDoubleClick={() => {
                    if (isInteractive && onRenameChat) onDoubleClick();
                  }}
                  title="Double-click to rename"
                >
                  {title}
                </Text>
                {subtitle && (
                  assistant ? (
                    <Popover position="bottom-start" offset={12} withinPortal>
                      <Popover.Target>
                        <button className={cls.subtitleButton}>
                          {subtitle}
                          <ChevronDown size={12} />
                        </button>
                      </Popover.Target>
                      <Popover.Dropdown p={0} style={{ width: '20rem', border: '1px solid var(--mantine-color-gray-3)', borderRadius: 'var(--mantine-radius-md)' }}>
                        <AssistantCard
                          assistant={assistant}
                          isFavorited={isFavorited}
                          onToggleFavorite={onToggleFavorite || (() => {})}
                          onStartChat={() => {}}
                          viewOnly
                          isInTools={isInTools}
                          onToggleTools={handleToggleTools}
                        />
                      </Popover.Dropdown>
                    </Popover>
                  ) : (
                    <Text size="xs" c="gray.5">{subtitle}</Text>
                  )
                )}
              </Box>
            )}
          />
        )}
        {classificationType && (
          <ClassificationBadge
            classification={classificationType}
            label={classificationLabel}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg border border-gray-300"
          />
        )}
      </Box>
      <Box className={cls.actions}>
        {/* Temporary Chat Toggle - only show when new chat and no messages */}
        {!isIncognito && isInteractive && isNewChat && !hasUserMessage && (
          <TooltipIconButton
            icon={EyeOff}
            tooltip={isTemporaryChat ? 'Temporary chat enabled - no memory, not saved' : 'Enable temporary chat'}
            onClick={handleTemporaryToggle}
            className={`p-1.5 rounded-lg transition-colors ${isTemporaryChat ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
            iconClassName="w-4 h-4"
          />
        )}
        {/* Show indicator when temporary chat is active */}
        {isTemporaryChat && hasUserMessage && (
          <Box className={cls.tempIndicator}>
            <EyeOff size={12} />
            Temporary
          </Box>
        )}
        {/* Ellipsis Menu - only show for existing chats, non-incognito, and non-CCE */}
        {isInteractive && !isNewChat && chatId && !isIncognito && classificationType !== 'cce-sn' && classificationType !== 'cce-sh' && (
          <Menu position="bottom-end" withinPortal>
            <Menu.Target>
              <button className={cls.ellipsisButton}>
                <MoreHorizontal size={20} />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              {!isIncognito && classificationType !== 'cce-sn' && classificationType !== 'cce-sh' && (
                <>
                  <Menu.Label>
                    <Box style={{ display: 'flex', alignItems: 'center', gap: 'var(--mantine-spacing-xs)' }}>
                      <FolderPlus size={14} />
                      Move to project
                    </Box>
                  </Menu.Label>
                  {projects.length === 0 ? (
                    <Menu.Item disabled>
                      <Text size="sm" c="gray.4">No projects available</Text>
                    </Menu.Item>
                  ) : (
                    projects.map(project => (
                      <Menu.Item
                        key={project.id}
                        onClick={() => onMoveToProject?.(chatId, project.id)}
                      >
                        {project.name}
                      </Menu.Item>
                    ))
                  )}
                </>
              )}
            </Menu.Dropdown>
          </Menu>
        )}
        {!showOutputPanel && (
          <TooltipIconButton
            icon={FileText}
            tooltip="Expand canvas"
            onClick={onShowOutputPanel}
            className="text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors"
          />
        )}
      </Box>
      {assistant && (
        <ReplaceToolModal
          open={replaceModalOpen}
          onOpenChange={setReplaceModalOpen}
          currentTools={toolAssistants
            .map(id => [...topRatedAssistants, ...essentialAssistants, ...Object.values(roleBasedAssistants).flat()]
              .find(a => a.id === id))
            .filter(Boolean) as Assistant[]}
          newAssistant={assistant}
          onReplace={(oldId, newId) => {
            onReplaceToolAssistant?.(oldId, newId);
            setReplaceModalOpen(false);
          }}
        />
      )}
    </Box>
  );
};
