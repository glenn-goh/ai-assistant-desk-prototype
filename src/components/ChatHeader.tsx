import React, { useState } from 'react';
import { FileText, EyeOff, MoreHorizontal, FolderPlus, ChevronDown } from 'lucide-react';
import { TooltipIconButton, EditableText, ClassificationBadge } from './shared';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from './ui/dropdown-menu';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { AssistantCard } from './AssistantCard';
import { ReplaceToolModal } from './ReplaceToolModal';
import type { Assistant } from '../data/assistants';
import { topRatedAssistants, essentialAssistants, roleBasedAssistants } from '../data/assistants';
import type { Project } from '../types/project';
import { IncognitoIcon } from './IncognitoIcon';

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
    <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
      <div className="flex items-center gap-3 flex-1">
        {isIncognito ? (
          <div className="flex items-center gap-2">
            <IncognitoIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">
              Incognito chat
            </span>
          </div>
        ) : (
          <EditableText
            value={displayTitle || 'New Chat'}
            onSave={(newTitle) => {
              if (chatId && onRenameChat) onRenameChat(chatId, newTitle);
            }}
            renderDisplay={({ value: title, onDoubleClick }) => (
              <div className="flex flex-col gap-0.5 group/title">
                <span
                  className="text-sm font-medium text-gray-900 cursor-pointer"
                  onDoubleClick={() => {
                    if (isInteractive && onRenameChat) onDoubleClick();
                  }}
                  title="Double-click to rename"
                >
                  {title}
                </span>
                {subtitle && (
                  assistant ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="flex items-center gap-0.5 text-xs text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                          {subtitle}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent align="start" sideOffset={12} className="w-80 p-0 bg-white border border-gray-300 rounded-lg shadow-lg" onOpenAutoFocus={(e) => e.preventDefault()}>
                        <AssistantCard
                          assistant={assistant}
                          isFavorited={isFavorited}
                          onToggleFavorite={onToggleFavorite || (() => {})}
                          onStartChat={() => {}}
                          viewOnly
                          isInTools={isInTools}
                          onToggleTools={handleToggleTools}
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <span className="text-xs text-gray-500">{subtitle}</span>
                  )
                )}
              </div>
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
      </div>
      <div className="flex items-center gap-1">
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
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg flex items-center gap-1">
            <EyeOff className="w-3 h-3" />
            Temporary
          </span>
        )}
        {/* Ellipsis Menu - only show for existing chats, non-incognito, and non-CCE */}
        {isInteractive && !isNewChat && chatId && !isIncognito && classificationType !== 'cce-sn' && classificationType !== 'cce-sh' && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
              {!isIncognito && classificationType !== 'cce-sn' && classificationType !== 'cce-sh' && (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-gray-100">
                    <FolderPlus className="w-4 h-4 mr-2" />
                    Move to project
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white border-2 border-gray-900 rounded-lg">
                    {projects.length === 0 ? (
                      <DropdownMenuItem disabled className="text-gray-400 text-sm">
                        No projects available
                      </DropdownMenuItem>
                    ) : (
                      projects.map(project => (
                        <DropdownMenuItem
                          key={project.id}
                          onClick={() => onMoveToProject?.(chatId, project.id)}
                          className="hover:bg-gray-100"
                        >
                          {project.name}
                        </DropdownMenuItem>
                      ))
                    )}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {!showOutputPanel && (
          <TooltipIconButton
            icon={FileText}
            tooltip="Expand canvas"
            onClick={onShowOutputPanel}
            className="text-gray-700 hover:text-gray-900 rounded-lg p-1 transition-colors"
          />
        )}
      </div>
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
    </div>
  );
};
