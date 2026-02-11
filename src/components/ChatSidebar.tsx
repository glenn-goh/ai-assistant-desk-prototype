import React, { useState } from 'react';
import { Settings, Trash2, FolderOpen, Compass, SquarePen, MoreHorizontal, Users, Info, PanelLeft, ChevronDown, ChevronRight, Search, FolderPlus, Folder, Heart, Pencil, Bookmark } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { SearchChatsModal } from './SearchChatsModal';
import { CreateProjectDialog } from './CreateProjectDialog';
import type { Chat, View } from '../App';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import type { Project as ProjectType } from '../types/project';
import { getAssistantsForRole, roleBasedAssistants, topRatedAssistants, essentialAssistants } from '../data/assistants';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  onNewCCESNChat: () => void;
  onNewSHChat: () => void;
  onDeleteChat: (id: string) => void;
  onPinChat?: (id: string) => void;
  onRenameChat?: (id: string, newName: string) => void;
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onColorThemeChange: (theme: ColorTheme) => void;
  onFontStyleChange: (style: FontStyle) => void;
  onSettingsOpen: () => void;
  mode: 'desk' | 'studio';
  onModeChange: (mode: 'desk' | 'studio') => void;
  activeView: View;
  onExploreClick: () => void;
  onStudioClick: () => void;
  onHomeClick: () => void;
  onViewChange: (view: View) => void;
  userProfile: import('../App').UserProfile;
  onSignOut: () => void;
  onSelectSimulation?: (simulationId: string) => void;
  projects?: ProjectType[];
  onCreateProject?: (name: string) => void;
  onSelectProject?: (projectId: string) => void;
  onStartAssistantChat?: (assistantName: string, assistantType: string) => void;
  onAddChatToProject?: (chatId: string, projectId: string) => void;
  searchModalOpen?: boolean;
  onSearchModalChange?: (open: boolean) => void;
  onWalkthroughStart?: () => void;
  viewedSimulations?: string[];
  simulationInstances?: Array<{ instanceId: string; simulationId: string }>;
  startedSimulations?: string[];
  favoritedAssistants?: string[];
  onToggleFavorite?: (assistantId: string) => void;
  previewChat?: Chat | null;
}

export function ChatSidebar({
  isOpen,
  onClose,
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  onNewCCESNChat,
  onNewSHChat,
  onDeleteChat,
  onPinChat,
  onRenameChat,
  colorTheme,
  fontStyle,
  onColorThemeChange,
  onFontStyleChange,
  onSettingsOpen,
  mode,
  onModeChange,
  activeView,
  onExploreClick,
  onStudioClick,
  onHomeClick,
  onViewChange,
  userProfile,
  onSignOut,
  onSelectSimulation,
  projects = [],
  onCreateProject,
  onSelectProject,
  onStartAssistantChat,
  onAddChatToProject,
  searchModalOpen = false,
  onSearchModalChange,
  onWalkthroughStart,
  viewedSimulations = [],
  simulationInstances = [],
  startedSimulations = [],
  favoritedAssistants = [],
  onToggleFavorite,
  previewChat = null,
}: ChatSidebarProps) {
  const [recentChatsOpen, setRecentChatsOpen] = useState(true);
  const [customAssistantsOpen, setCustomAssistantsOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [createProjectOpen, setCreateProjectOpen] = useState(false);
  const [dragOverProjectId, setDragOverProjectId] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [editingChatId, setEditingChatId] = useState<string | null>(null);
  const [editChatName, setEditChatName] = useState('');
  const [chatToDelete, setChatToDelete] = useState<string | null>(null);

  // Get all available assistants
  const allRoleAssistants = Object.values(roleBasedAssistants).flat();
  const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];
  const uniqueAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );

  // Build the custom assistants list — only favourited assistants
  const displayedAssistants = (favoritedAssistants ?? [])
    .map(id => uniqueAssistants.find(a => a.id === id))
    .filter((a): a is import('../data/assistants').Assistant => a !== undefined);

  const hasCustomAssistants = displayedAssistants.length > 0;

  const handleDragStart = (e: React.DragEvent, chatId: string) => {
    e.dataTransfer.setData('chatId', chatId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, projectId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverProjectId(projectId);
  };

  const handleDragLeave = () => {
    setDragOverProjectId(null);
  };

  const handleDrop = (e: React.DragEvent, projectId: string) => {
    e.preventDefault();
    const chatId = e.dataTransfer.getData('chatId');
    if (chatId && onAddChatToProject) {
      onAddChatToProject(chatId, projectId);
    }
    setDragOverProjectId(null);
  };

  // Section header component with consistent styling
  const SectionHeader = ({
    label,
    isOpen,
    sectionId,
    showInfo,
    infoText
  }: {
    label: string;
    isOpen: boolean;
    sectionId: string;
    showInfo?: boolean;
    infoText?: string;
  }) => {
    const isHovered = hoveredSection === sectionId;

    return (
      <div
        className="flex items-center gap-1.5 w-full px-2 py-1.5 rounded-lg transition-colors cursor-pointer"
        onMouseEnter={() => setHoveredSection(sectionId)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span className={`text-xs font-semibold uppercase tracking-wide transition-colors ${isHovered ? 'text-gray-700' : 'text-gray-500'}`}>
          {label}
        </span>
        {/* Info icon - before arrow */}
        {showInfo && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>
                  <Info className="w-3 h-3" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{infoText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {/* Arrow - after info icon */}
        {!isOpen ? (
          <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-colors ${isHovered ? 'text-gray-800' : 'text-gray-500'}`} />
        ) : (
          <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-opacity ${isHovered ? 'opacity-100 text-gray-800' : 'opacity-0'}`} />
        )}
      </div>
    );
  };

  // Collapsed sidebar view
  if (!isOpen) {
    return (
      <div className="flex flex-col h-screen w-[52px] border-r border-gray-300 bg-gray-100 flex-shrink-0">
        {/* Expand button */}
        <div className="px-2 py-3 flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
                >
                  <PanelLeft className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Expand sidebar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Collapsed icons */}
        <div className="flex flex-col items-center gap-1 px-2 py-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={onNewChat}
                  className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
                >
                  <SquarePen className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>New Chat (⇧⌘O)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>

        {/* Settings at bottom */}
        <div className="mt-auto px-2 py-3 border-t border-gray-300 flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={onSettingsOpen}
                  className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Search Modal */}
        <SearchChatsModal
          open={searchModalOpen}
          onOpenChange={onSearchModalChange}
          chats={chats}
          onSelectChat={(chatId) => {
            onSelectChat(chatId);
            onSearchModalChange(false);
          }}
          onSelectSimulation={(simId) => {
            onSelectSimulation?.(simId);
            onSearchModalChange(false);
          }}
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col h-screen w-[280px] border-r border-gray-300 bg-gray-100 flex-shrink-0">
        {/* App Title */}
        <div className="px-4 py-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Desk (MVP-LITE)
          </h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
                >
                  <PanelLeft className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Collapse sidebar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="px-3 py-2">
              {mode === 'desk' ? (
                <>
                  {/* New Chat Button with shortcut on hover */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          data-tour="new-chat"
                          className="w-full justify-start gap-2 px-2 h-9 text-sm group"
                          variant="ghost"
                          onClick={onNewChat}
                        >
                          <SquarePen className="w-4 h-4" />
                          <span className="flex-1 text-left">New Chat</span>
                          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">⇧⌘O</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Start a new chat (⇧⌘O)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {/* New Project Button */}
                  <Button
                    data-tour="new-project"
                    className="w-full justify-start gap-2 px-2 h-9 text-sm mt-1"
                    variant="ghost"
                    onClick={() => setCreateProjectOpen(true)}
                  >
                    <FolderPlus className="w-4 h-4" />
                    <span className="flex-1 text-left">New Project</span>
                  </Button>

                  {/* Explore Assistants Button */}
                  <Button
                    data-tour="explore-assistants"
                    className="w-full justify-start gap-2 px-2 h-9 text-sm mt-1"
                    variant="ghost"
                    onClick={onExploreClick}
                  >
                    <Compass className="w-4 h-4" />
                    <span className="flex-1 text-left">Explore Assistants</span>
                  </Button>

                  {/* Projects Section - Only show if there are projects */}
                  {projects.length > 0 && (
                    <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen} className="mt-2" data-tour="projects">
                      <CollapsibleTrigger className="w-full">
                        <SectionHeader
                          label="Projects"
                          isOpen={projectsOpen}
                          sectionId="projects"
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="space-y-0.5 mt-0.5">
                          {projects.map(project => (
                            <button
                              key={project.id}
                              onClick={() => onSelectProject?.(project.id)}
                              onDragOver={(e) => handleDragOver(e, project.id)}
                              onDragLeave={handleDragLeave}
                              onDrop={(e) => handleDrop(e, project.id)}
                              className={`w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left ${dragOverProjectId === project.id ? 'bg-gray-300 border-2 border-gray-900 border-dashed' : ''
                                }`}
                            >
                              <Folder className="w-4 h-4 text-gray-500" />
                              <span className="truncate flex-1">{project.name}</span>
                              <span className="text-xs text-gray-400">{project.chatIds.length}</span>
                            </button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  {/* Custom Assistants Section - Only show if user has bookmarked or chatted with assistants */}
                  {hasCustomAssistants && (
                    <Collapsible open={customAssistantsOpen} onOpenChange={setCustomAssistantsOpen} className="mt-2" data-tour="custom-assistants">
                      <CollapsibleTrigger className="w-full">
                        <SectionHeader
                          label="Custom Assistants"
                          isOpen={customAssistantsOpen}
                          sectionId="assistants"
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="space-y-0.5 mt-0.5">
                          {displayedAssistants.map((assistant, index) => {
                            const IconComponent = assistant.icon;
                            const isFavorited = favoritedAssistants?.includes(assistant.id);
                            const favoritedCount = favoritedAssistants?.length ?? 0;
                            const showDivider = index === favoritedCount - 1
                              && index < displayedAssistants.length - 1
                              && favoritedCount > 0;

                            return (
                              <React.Fragment key={assistant.id}>
                                <div className="group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal hover:bg-gray-200">
                                  <IconComponent className="w-4 h-4 text-gray-500" />
                                  <span
                                    className="truncate flex-1 ml-2"
                                    onClick={() => onStartAssistantChat?.(assistant.name, assistant.assistantType)}
                                  >
                                    {assistant.name}
                                  </span>

                                  {/* Ellipsis menu - only for favourited */}
                                  {isFavorited && (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <button
                                          onClick={(e) => e.stopPropagation()}
                                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-300 rounded transition-colors"
                                        >
                                          <MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
                                        </button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                                        <DropdownMenuItem onClick={(e) => {
                                          e.stopPropagation();
                                          onToggleFavorite?.(assistant.id);
                                        }}>
                                          <Heart className="w-4 h-4 mr-1.5" />
                                          Unfavourite
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  )}
                                </div>

                                {/* Visual divider between favourited and recently used */}
                                {showDivider && (
                                  <div className="h-px bg-gray-200 mx-2 my-1" />
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  {/* Recent Chats Section - Always at the bottom */}
                  <Collapsible open={recentChatsOpen} onOpenChange={setRecentChatsOpen} className="mt-2" data-tour="recent-chats">
                    <CollapsibleTrigger className="w-full">
                      <SectionHeader
                        label="Recent Chats"
                        isOpen={recentChatsOpen}
                        sectionId="recent"
                        showInfo
                        infoText="Chats are cleared after 90 days. Drag to projects to organize."
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-0.5 mt-0.5">
                        {/* Unified Recent Chats list - all entries sorted by creation time (newest first) */}
                        {(() => {
                          const simMeta: Record<string, { title: string; assistantName?: string }> = {
                            'hr-candidate-shortlisting': { title: 'Screen candidates for GTA-2024-SE-089', assistantName: 'HR Recruitment Assistant' },
                            'pq-response-mnd-v2': { title: 'Draft PQ response on BTO flat waiting times', assistantName: 'Parliamentary Question Assistant' },
                            'canvas-demo': { title: 'Canvas Generation Demo' },
                          };

                          type EntryType = 'simulation' | 'preview' | 'chat';
                          interface UnifiedEntry { type: EntryType; key: string; timestamp: number; }

                          const entries: UnifiedEntry[] = [];

                          // Simulation instances - only show after first user message
                          for (const inst of simulationInstances) {
                            if (simMeta[inst.simulationId] && startedSimulations.includes(inst.instanceId)) {
                              const ts = parseInt(inst.instanceId.split('-').pop() || '0', 10);
                              entries.push({ type: 'simulation', key: inst.instanceId, timestamp: ts });
                            }
                          }

                          // Legacy simulations (non-instance) - only show after first user message
                          const instanceSimIds = new Set(simulationInstances.map(i => i.simulationId));
                          for (const simId of Object.keys(simMeta)) {
                            if (!instanceSimIds.has(simId) && viewedSimulations.includes(simId) && startedSimulations.includes(`sim-${simId}`)) {
                              entries.push({ type: 'simulation', key: simId, timestamp: 0 });
                            }
                          }

                          // Regular chats
                          const filteredChats = chats
                            .filter(c => c.classificationType !== 'cce-sn' && c.classificationType !== 'cce-sh')
                            .filter(c => !projects?.some(p => p.chatIds.includes(c.id)));
                          for (const chat of filteredChats) {
                            entries.push({ type: 'chat', key: chat.id, timestamp: chat.createdAt.getTime() });
                          }

                          // Sort by timestamp descending (newest first)
                          entries.sort((a, b) => b.timestamp - a.timestamp);

                          return entries.map(entry => {
                            // --- Simulation entry ---
                            if (entry.type === 'simulation') {
                              const isInstance = entry.key !== entry.key.replace(/^sim-/, '').replace(/-\d+$/, '');
                              const inst = simulationInstances.find(i => i.instanceId === entry.key);
                              const simId = inst?.simulationId || entry.key;
                              const meta = simMeta[simId];
                              if (!meta) return null;
                              const activeChatKey = inst ? inst.instanceId : `sim-${simId}`;
                              const displayTitle = meta.title.length > 24 ? meta.title.substring(0, 24) + '...' : meta.title;

                              return (
                                <div
                                  key={entry.key}
                                  className={`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${activeChatId === activeChatKey ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                                  onClick={() => onSelectSimulation?.(inst ? inst.instanceId : simId)}
                                  title={meta.title}
                                >
                                  <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                                    <span className="truncate text-gray-900">{displayTitle}</span>
                                    <span className="text-xs text-gray-500 truncate">{meta.assistantName || 'My AI Assistant'}</span>
                                  </div>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                        <MoreHorizontal className="w-3 h-3" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                                      <DropdownMenuItem onClick={(e) => e.stopPropagation()} className="hover:bg-gray-100 opacity-50 cursor-not-allowed" disabled>
                                        <Pencil className="w-4 h-4 mr-2" /> Rename
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={(e) => e.stopPropagation()} className="text-red-500 hover:bg-gray-100 opacity-50 cursor-not-allowed" disabled>
                                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              );
                            }

                            // --- Regular chat entry ---
                            if (entry.type === 'chat') {
                              const chat = filteredChats.find(c => c.id === entry.key);
                              if (!chat) return null;
                              const displayTitle = chat.title.length > 24 ? chat.title.substring(0, 24) + '...' : chat.title;
                              const isEditing = editingChatId === chat.id;

                              return (
                                <div
                                  key={chat.id}
                                  draggable={!isEditing}
                                  onDragStart={(e) => handleDragStart(e, chat.id)}
                                  className={`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${chat.id === activeChatId ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
                                  onClick={() => !isEditing && onSelectChat(chat.id)}
                                  title={chat.title}
                                >
                                  {isEditing ? (
                                    <input
                                      type="text"
                                      value={editChatName}
                                      onChange={(e) => setEditChatName(e.target.value)}
                                      onBlur={() => {
                                        if (editChatName.trim() && onRenameChat) {
                                          onRenameChat(chat.id, editChatName.trim());
                                        }
                                        setEditingChatId(null);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                          if (editChatName.trim() && onRenameChat) {
                                            onRenameChat(chat.id, editChatName.trim());
                                          }
                                          setEditingChatId(null);
                                        } else if (e.key === 'Escape') {
                                          setEditingChatId(null);
                                        }
                                      }}
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex-1 bg-white border border-gray-300 rounded px-1 py-0.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                      autoFocus
                                    />
                                  ) : (
                                    <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                                      <span
                                        className="truncate text-gray-900"
                                        onDoubleClick={(e) => {
                                          e.stopPropagation();
                                          setEditChatName(chat.title);
                                          setEditingChatId(chat.id);
                                        }}
                                        title="Double-click to rename"
                                      >
                                        {displayTitle}
                                      </span>
                                      <span className="text-xs text-gray-500 truncate">
                                        {chat.assistantName || 'My AI Assistant'}
                                      </span>
                                    </div>
                                  )}
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                        <MoreHorizontal className="w-3 h-3" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); setEditChatName(chat.title); setEditingChatId(chat.id); }} className="hover:bg-gray-100">
                                        <Pencil className="w-4 h-4 mr-2" /> Rename
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); setChatToDelete(chat.id); }} className="text-red-500 hover:bg-gray-100">
                                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              );
                            }

                            return null;
                          });
                        })()}

                        {/* Empty state placeholder */}
                        {viewedSimulations.length === 0 && simulationInstances.length === 0 && !previewChat &&
                          chats.filter(chat => chat.classificationType !== 'cce-sn' && chat.classificationType !== 'cce-sh')
                            .filter(chat => !projects?.some(project => project.chatIds.includes(chat.id)))
                            .length === 0 && (
                            <div className="px-2 py-4 text-center">
                              <div className="flex items-center gap-2 justify-center">
                                <SquarePen className="w-4 h-4 text-gray-400" />
                                <p className="text-sm text-gray-500">
                                  Start a{' '}
                                  <button
                                    onClick={onNewChat}
                                    className="text-gray-500 hover:text-gray-700 hover:underline cursor-pointer"
                                  >
                                    new chat
                                  </button>
                                  {' '}to begin
                                </p>
                              </div>
                            </div>
                          )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </>
              ) : (
                <>
                  {/* Studio Mode Sidebar */}
                  <Button
                    onClick={onStudioClick}
                    className={`w-full justify-start gap-2 px-2 h-9 text-sm ${activeView === 'studio' ? 'bg-gray-700' : ''}`}
                    variant="outline"
                  >
                    <SquarePen className="w-4 h-4" />
                    New Assistant
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 px-2 h-9 text-sm"
                  >
                    <Users className="w-4 h-4" />
                    My Assistants
                  </Button>
                </>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* User Profile Section at Bottom */}
        <div className="px-3 py-2 border-t border-gray-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Dark grey solid color avatar */}
            <div className="w-7 h-7 rounded-full bg-gray-600 flex-shrink-0" />
            <div className="text-left overflow-hidden">
              <div className="text-sm font-medium text-gray-900">{userProfile.name}</div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button data-tour="settings" className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-700">
                <Settings size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white border-2 border-gray-900 rounded-lg">
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                onSettingsOpen();
              }} className="hover:bg-gray-100">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                onWalkthroughStart?.();
              }} className="hover:bg-gray-100">
                Walkthrough Tour
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => {
                e.stopPropagation();
                onSignOut();
              }} className="hover:bg-gray-100">
                Sign Out
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xs text-gray-400 hover:bg-gray-100">
                Privacy Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs text-gray-400 hover:bg-gray-100">
                Terms of Use
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs text-gray-400 hover:bg-gray-100">
                Report Vulnerability
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Chats Modal */}
      <SearchChatsModal
        open={searchModalOpen}
        onOpenChange={onSearchModalChange}
        chats={chats}
        onSelectChat={onSelectChat}
        onSelectSimulation={onSelectSimulation || (() => { })}
      />

      {/* Create Project Dialog */}
      <CreateProjectDialog
        open={createProjectOpen}
        onOpenChange={setCreateProjectOpen}
        onCreateProject={onCreateProject || (() => { })}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={chatToDelete !== null} onOpenChange={(open) => !open && setChatToDelete(null)}>
        <AlertDialogContent className="bg-white border-2 border-gray-900">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete chat?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this chat and all its messages. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setChatToDelete(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (chatToDelete) {
                  onDeleteChat(chatToDelete);
                  setChatToDelete(null);
                }
              }}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
