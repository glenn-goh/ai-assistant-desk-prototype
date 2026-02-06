import { useState } from 'react';
import { Settings, Trash2, FolderOpen, Compass, SquarePen, MoreHorizontal, Users, Info, PanelLeft, ChevronDown, ChevronRight, Search, FolderPlus, Folder, Pin, Pencil } from 'lucide-react';
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
  bookmarkedAssistants?: string[];
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
  bookmarkedAssistants = [],
}: ChatSidebarProps) {
  const [recentChatsOpen, setRecentChatsOpen] = useState(true);
  const [customAssistantsOpen, setCustomAssistantsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [createProjectOpen, setCreateProjectOpen] = useState(false);
  const [dragOverProjectId, setDragOverProjectId] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [editingChatId, setEditingChatId] = useState<string | null>(null);
  const [editChatName, setEditChatName] = useState('');
  const [chatToDelete, setChatToDelete] = useState<string | null>(null);

  // Get bookmarked assistants
  const allRoleAssistants = Object.values(roleBasedAssistants).flat();
  const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];
  const uniqueAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );

  // Always show 3 assistants in sidebar
  // If user has bookmarked assistants, show those (up to 3)
  // Otherwise, show default assistants (PQ and HR)
  const defaultAssistants = uniqueAssistants.filter(
    assistant =>
      assistant.assistantType === 'parliamentary-question' ||
      assistant.assistantType === 'workday-shortlister'
  );

  let recommendedAssistants;
  if (bookmarkedAssistants.length > 0) {
    // User has bookmarks - show up to 3 bookmarked assistants
    recommendedAssistants = bookmarkedAssistants
      .map(id => uniqueAssistants.find(a => a.id === id))
      .filter((a): a is import('../data/assistants').Assistant => a !== undefined)
      .slice(0, 3); // Take only first 3 bookmarks

    // If less than 3 bookmarks, fill with defaults
    if (recommendedAssistants.length < 3) {
      const bookmarkedIds = new Set(bookmarkedAssistants);
      const additionalDefaults = defaultAssistants
        .filter(a => !bookmarkedIds.has(a.id))
        .slice(0, 3 - recommendedAssistants.length);
      recommendedAssistants = [...recommendedAssistants, ...additionalDefaults];
    }
  } else {
    // No bookmarks - show defaults, ensuring we have 3
    recommendedAssistants = defaultAssistants.slice(0, 3);

    // If we don't have 3 defaults, add more from unique assistants
    if (recommendedAssistants.length < 3) {
      const defaultIds = new Set(recommendedAssistants.map(a => a.id));
      const additionalAssistants = uniqueAssistants
        .filter(a => !defaultIds.has(a.id))
        .slice(0, 3 - recommendedAssistants.length);
      recommendedAssistants = [...recommendedAssistants, ...additionalAssistants];
    }
  }

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
            AI Assistant Desk (MVP)
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
              <TooltipContent side="right">
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

                  {/* Custom Assistants Section */}
                  <Collapsible open={customAssistantsOpen} onOpenChange={setCustomAssistantsOpen} className="mt-3" data-tour="custom-assistants">
                    <CollapsibleTrigger className="w-full">
                      <SectionHeader
                        label="Custom Assistants"
                        isOpen={customAssistantsOpen}
                        sectionId="assistants"
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-0.5 mt-0.5">
                        {recommendedAssistants.map(assistant => {
                          const IconComponent = assistant.icon;
                          return (
                            <button
                              key={assistant.id}
                              onClick={() => onStartAssistantChat?.(assistant.name, assistant.assistantType)}
                              className="w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-normal hover:bg-gray-200 text-left"
                            >
                              <IconComponent className="w-4 h-4 text-gray-500" />
                              <span className="truncate">{assistant.name}</span>
                            </button>
                          );
                        })}
                        <button
                          onClick={onExploreClick}
                          className="w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left"
                        >
                          <Compass className="w-4 h-4 text-gray-500" />
                          <span>Explore Assistants</span>
                        </button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Projects Section */}
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
                        <button
                          onClick={() => setCreateProjectOpen(true)}
                          className="w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-colors text-sm font-semibold hover:bg-gray-200 text-left text-gray-700"
                        >
                          <FolderPlus className="w-4 h-4" />
                          <span>New Project</span>
                        </button>
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

                  {/* Recent Chats Section */}
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
                        {/* Demo Simulations - Show only if viewed */}
                        {[
                          { id: 'hr-candidate-shortlisting', title: 'HR Candidate Shortlisting', assistantName: 'HR Recruitment Assistant', classification: 'rsn' as const },
                          { id: 'pq-response-mnd-v2', title: 'PQ Response - MND Housing', assistantName: 'Parliamentary Question Assistant', classification: 'rsn' as const },
                          { id: 'canvas-demo', title: 'Canvas Generation Demo', assistantName: undefined as string | undefined, classification: 'rsn' as const },
                        ].filter(sim => viewedSimulations.includes(sim.id)).map(sim => {
                          const displayTitle = sim.title.length > 24 ? sim.title.substring(0, 24) + '...' : sim.title;

                          return (
                            <div
                              key={sim.id}
                              className={`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${activeChatId === `sim-${sim.id}` ? 'bg-gray-200' : 'hover:bg-gray-200'
                                }`}
                              onClick={() => onSelectSimulation?.(sim.id)}
                              title={sim.title}
                            >
                              <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                                <span className="truncate text-gray-900">{displayTitle}</span>
                                <span className="text-xs text-gray-500 truncate">
                                  {sim.assistantName || 'My AI Assistant'}
                                </span>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <MoreHorizontal className="w-3 h-3" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                                  <DropdownMenuItem
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // Note: Simulations can't be renamed as they're read-only demos
                                    }}
                                    className="hover:bg-gray-100 opacity-50 cursor-not-allowed"
                                    disabled
                                  >
                                    <Pencil className="w-4 h-4 mr-2" />
                                    Rename
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // Note: Simulations can't be pinned
                                    }}
                                    className="hover:bg-gray-100 opacity-50 cursor-not-allowed"
                                    disabled
                                  >
                                    <Pin className="w-4 h-4 mr-2" />
                                    Pin
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // Note: Simulations can't be deleted
                                    }}
                                    className="text-red-500 hover:bg-gray-100 opacity-50 cursor-not-allowed"
                                    disabled
                                  >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          );
                        })}

                        {/* Regular Chats - draggable with ellipsis on hover */}
                        {/* Filter out CCE/SN and CCE/SH chats (ephemeral, don't save to history) */}
                        {/* Also filter out chats that are in projects */}
                        {chats
                          .filter(chat => chat.classificationType !== 'cce-sn' && chat.classificationType !== 'cce-sh')
                          .filter(chat => !projects?.some(project => project.chatIds.includes(chat.id)))
                          .map(chat => {
                            const displayTitle = chat.title.length > 24 ? chat.title.substring(0, 24) + '...' : chat.title;
                            const isEditing = editingChatId === chat.id;

                            return (
                              <div
                                key={chat.id}
                                draggable={!isEditing}
                                onDragStart={(e) => handleDragStart(e, chat.id)}
                                className={`group flex items-center px-2 py-1 rounded-lg cursor-pointer transition-colors text-sm font-normal ${chat.id === activeChatId ? 'bg-gray-200' : 'hover:bg-gray-200'
                                  }`}
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
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="opacity-0 group-hover:opacity-100 h-5 w-5 p-0 ml-auto flex-shrink-0"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <MoreHorizontal className="w-3 h-3" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                                    <DropdownMenuItem
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setEditChatName(chat.title);
                                        setEditingChatId(chat.id);
                                      }}
                                      className="hover:bg-gray-100"
                                    >
                                      <Pencil className="w-4 h-4 mr-2" />
                                      Rename
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onPinChat?.(chat.id);
                                      }}
                                      className="hover:bg-gray-100"
                                    >
                                      <Pin className="w-4 h-4 mr-2" />
                                      Pin
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setChatToDelete(chat.id);
                                      }}
                                      className="text-red-500 hover:bg-gray-100"
                                    >
                                      <Trash2 className="w-4 h-4 mr-2" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            );
                          })}

                        {/* Empty state placeholder */}
                        {viewedSimulations.length === 0 &&
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
