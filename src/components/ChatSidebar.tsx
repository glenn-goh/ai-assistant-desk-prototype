import React, { useState } from 'react';
import { Settings, Trash2, Compass, SquarePen, MoreHorizontal, Users, Info, PanelLeft, ChevronDown, ChevronRight, Search, FolderPlus, Folder, Heart, Pencil, Bookmark } from 'lucide-react';
import { ScrollArea, Tooltip, Menu, Modal, Text, Box, Button, Collapse } from '@mantine/core';
import { TooltipIconButton, EditableText } from './shared';
import { SearchChatsModal } from './SearchChatsModal';
import { CreateProjectDialog } from './CreateProjectDialog';
import type { Chat, View } from '../App';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import type { Project as ProjectType } from '../types/project';
import { roleBasedAssistants, topRatedAssistants, essentialAssistants } from '../data/assistants';
import cls from './ChatSidebar.module.css';

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
    isOpen: isSectionOpen,
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
        className={cls.sectionHeader}
        onMouseEnter={() => setHoveredSection(sectionId)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <span className={cls.sectionLabel}>
          {label}
        </span>
        {/* Info icon - before arrow */}
        {showInfo && (
          <Tooltip label={infoText} position="right" withArrow>
            <div className={cls.infoIcon} onClick={(e) => e.stopPropagation()}>
              <Info size={12} />
            </div>
          </Tooltip>
        )}
        {/* Arrow - after info icon */}
        {!isSectionOpen ? (
          <ChevronRight size={12} className={cls.sectionChevron} />
        ) : (
          <ChevronDown size={12} className={`${cls.sectionChevron} ${cls.sectionChevronOpen}`} />
        )}
      </div>
    );
  };

  // Collapsed sidebar view
  if (!isOpen) {
    return (
      <Box className={`${cls.sidebar} ${cls.collapsed}`}>
        {/* Expand button */}
        <Box className={cls.collapsedHeader}>
          <TooltipIconButton icon={PanelLeft} tooltip="Expand sidebar" onClick={onClose} side="right" />
        </Box>

        {/* Collapsed icons */}
        <Box className={cls.collapsedIcons}>
          <TooltipIconButton icon={SquarePen} tooltip="New Chat (⇧⌘O)" onClick={onNewChat} side="right" />
        </Box>

        {/* Settings at bottom */}
        <Box className={cls.collapsedFooter}>
          <TooltipIconButton icon={Settings} tooltip="Settings" onClick={onSettingsOpen} side="right" />
        </Box>

        {/* Search Modal */}
        <SearchChatsModal
          open={searchModalOpen}
          onOpenChange={onSearchModalChange}
          chats={chats}
          onSelectChat={(chatId) => {
            onSelectChat(chatId);
            onSearchModalChange?.(false);
          }}
          onSelectSimulation={(simId) => {
            onSelectSimulation?.(simId);
            onSearchModalChange?.(false);
          }}
        />
      </Box>
    );
  }

  return (
    <>
      <Box className={cls.sidebar}>
        {/* App Title */}
        <Box className={cls.appTitle}>
          <Text size="lg" fw={700} c="gray.9">
            AI Assistant Desk (MVP)
          </Text>
          <TooltipIconButton icon={PanelLeft} tooltip="Collapse sidebar" onClick={onClose} side="bottom" />
        </Box>

        {/* Scrollable Content Area */}
        <Box className={cls.scrollContent}>
          <ScrollArea h="100%">
            <Box className={cls.innerPadding}>
              {mode === 'desk' ? (
                <>
                  {/* New Chat Button with shortcut on hover */}
                  <Tooltip label="Start a new chat (⇧⌘O)" position="right" withArrow>
                    <button
                      data-tour="new-chat"
                      className={cls.navButton}
                      onClick={onNewChat}
                    >
                      <SquarePen size={16} />
                      <span style={{ flex: 1, textAlign: 'left' }}>New Chat</span>
                      <span className={cls.shortcutHint}>⇧⌘O</span>
                    </button>
                  </Tooltip>

                  {/* New Project Button */}
                  <button
                    data-tour="new-project"
                    className={cls.navButton}
                    onClick={() => setCreateProjectOpen(true)}
                    style={{ marginTop: 4 }}
                  >
                    <FolderPlus size={16} />
                    <span style={{ flex: 1, textAlign: 'left' }}>New Project</span>
                  </button>

                  {/* Explore Assistants Button */}
                  <button
                    data-tour="explore-assistants"
                    className={cls.navButton}
                    onClick={onExploreClick}
                    style={{ marginTop: 4 }}
                  >
                    <Compass size={16} />
                    <span style={{ flex: 1, textAlign: 'left' }}>Explore Assistants</span>
                  </button>

                  {/* Projects Section - Only show if there are projects */}
                  {projects.length > 0 && (
                    <Box style={{ marginTop: 'var(--mantine-spacing-xs)' }} data-tour="projects">
                      <button
                        type="button"
                        className={cls.sectionHeader}
                        onClick={() => setProjectsOpen(!projectsOpen)}
                        style={{ width: '100%' }}
                      >
                        <SectionHeader
                          label="Projects"
                          isOpen={projectsOpen}
                          sectionId="projects"
                        />
                      </button>
                      <Collapse in={projectsOpen}>
                        <Box className={cls.sectionItems}>
                          {projects.map(project => (
                            <button
                              key={project.id}
                              onClick={() => onSelectProject?.(project.id)}
                              onDragOver={(e) => handleDragOver(e, project.id)}
                              onDragLeave={handleDragLeave}
                              onDrop={(e) => handleDrop(e, project.id)}
                              className={`${cls.projectItem} ${dragOverProjectId === project.id ? cls.projectItemDragOver : ''}`}
                            >
                              <Folder size={16} color="var(--mantine-color-gray-5)" />
                              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{project.name}</span>
                              <Text size="xs" c="gray.4">{project.chatIds.length}</Text>
                            </button>
                          ))}
                        </Box>
                      </Collapse>
                    </Box>
                  )}

                  {/* Custom Assistants Section - Only show if user has bookmarked or chatted with assistants */}
                  {hasCustomAssistants && (
                    <Box style={{ marginTop: 'var(--mantine-spacing-xs)' }} data-tour="custom-assistants">
                      <button
                        type="button"
                        className={cls.sectionHeader}
                        onClick={() => setCustomAssistantsOpen(!customAssistantsOpen)}
                        style={{ width: '100%' }}
                      >
                        <SectionHeader
                          label="Custom Assistants"
                          isOpen={customAssistantsOpen}
                          sectionId="assistants"
                        />
                      </button>
                      <Collapse in={customAssistantsOpen}>
                        <Box className={cls.sectionItems}>
                          {displayedAssistants.map((assistant, index) => {
                            const IconComponent = assistant.icon;
                            const isFavorited = favoritedAssistants?.includes(assistant.id);
                            const favoritedCount = favoritedAssistants?.length ?? 0;
                            const showDivider = index === favoritedCount - 1
                              && index < displayedAssistants.length - 1
                              && favoritedCount > 0;

                            return (
                              <React.Fragment key={assistant.id}>
                                <Box className={cls.assistantRow}>
                                  <IconComponent size={16} color="var(--mantine-color-gray-5)" />
                                  <span
                                    style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, marginLeft: 'var(--mantine-spacing-xs)', cursor: 'pointer' }}
                                    onClick={() => onStartAssistantChat?.(assistant.name, assistant.assistantType)}
                                  >
                                    {assistant.name}
                                  </span>

                                  {/* Ellipsis menu - only for favourited */}
                                  {isFavorited && (
                                    <Menu position="bottom-end" withinPortal>
                                      <Menu.Target>
                                        <button
                                          onClick={(e) => e.stopPropagation()}
                                          className={cls.menuTrigger}
                                          style={{ padding: 4, borderRadius: 'var(--mantine-radius-sm)', background: 'none', border: 'none', cursor: 'pointer' }}
                                        >
                                          <MoreHorizontal size={14} color="var(--mantine-color-gray-5)" />
                                        </button>
                                      </Menu.Target>
                                      <Menu.Dropdown>
                                        <Menu.Item
                                          leftSection={<Heart size={16} />}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleFavorite?.(assistant.id);
                                          }}
                                        >
                                          Unfavourite
                                        </Menu.Item>
                                      </Menu.Dropdown>
                                    </Menu>
                                  )}
                                </Box>

                                {/* Visual divider between favourited and recently used */}
                                {showDivider && (
                                  <Box className={cls.divider} />
                                )}
                              </React.Fragment>
                            );
                          })}
                        </Box>
                      </Collapse>
                    </Box>
                  )}

                  {/* Recent Chats Section - Always at the bottom */}
                  <Box style={{ marginTop: 'var(--mantine-spacing-xs)' }} data-tour="recent-chats">
                    <button
                      type="button"
                      className={cls.sectionHeader}
                      onClick={() => setRecentChatsOpen(!recentChatsOpen)}
                      style={{ width: '100%' }}
                    >
                      <SectionHeader
                        label="Recent Chats"
                        isOpen={recentChatsOpen}
                        sectionId="recent"
                        showInfo
                        infoText="Chats are cleared after 90 days. Drag to projects to organize."
                      />
                    </button>
                    <Collapse in={recentChatsOpen}>
                      <Box className={cls.sectionItems}>
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
                              const inst = simulationInstances.find(i => i.instanceId === entry.key);
                              const simId = inst?.simulationId || entry.key;
                              const meta = simMeta[simId];
                              if (!meta) return null;
                              const activeChatKey = inst ? inst.instanceId : `sim-${simId}`;
                              const displayTitle = meta.title.length > 24 ? meta.title.substring(0, 24) + '...' : meta.title;

                              return (
                                <Box
                                  key={entry.key}
                                  className={`${cls.chatRow} ${activeChatId === activeChatKey ? cls.chatRowActive : ''}`}
                                  onClick={() => onSelectSimulation?.(inst ? inst.instanceId : simId)}
                                  title={meta.title}
                                >
                                  <Box className={cls.chatInfo}>
                                    <span className={cls.chatTitle}>{displayTitle}</span>
                                    <span className={cls.chatSubtitle}>{meta.assistantName || 'My AI Assistant'}</span>
                                  </Box>
                                  <Menu position="bottom-end" withinPortal>
                                    <Menu.Target>
                                      <button
                                        className={cls.menuTrigger}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ padding: 0, background: 'none', border: 'none', cursor: 'pointer', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                      >
                                        <MoreHorizontal size={12} />
                                      </button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                      <Menu.Item
                                        leftSection={<Pencil size={16} />}
                                        disabled
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        Rename
                                      </Menu.Item>
                                      <Menu.Item
                                        leftSection={<Trash2 size={16} />}
                                        color="red"
                                        disabled
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        Delete
                                      </Menu.Item>
                                    </Menu.Dropdown>
                                  </Menu>
                                </Box>
                              );
                            }

                            // --- Regular chat entry ---
                            if (entry.type === 'chat') {
                              const filteredChats = chats
                                .filter(c => c.classificationType !== 'cce-sn' && c.classificationType !== 'cce-sh')
                                .filter(c => !projects?.some(p => p.chatIds.includes(c.id)));
                              const chat = filteredChats.find(c => c.id === entry.key);
                              if (!chat) return null;
                              const isEditing = editingChatId === chat.id;

                              return (
                                <Box
                                  key={chat.id}
                                  draggable={!isEditing}
                                  onDragStart={(e) => handleDragStart(e, chat.id)}
                                  className={`${cls.chatRow} ${chat.id === activeChatId ? cls.chatRowActive : ''}`}
                                  onClick={() => !isEditing && onSelectChat(chat.id)}
                                  title={chat.title}
                                >
                                  <EditableText
                                    value={chat.title}
                                    onSave={(newName) => onRenameChat?.(chat.id, newName)}
                                    editing={editingChatId === chat.id}
                                    onEditingChange={(editing) => {
                                      if (editing) setEditingChatId(chat.id);
                                      else setEditingChatId(null);
                                    }}
                                    inputClassName="flex-1 bg-white border border-gray-300 rounded px-1 py-0.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                    renderDisplay={({ value: title, onDoubleClick }) => (
                                      <Box className={cls.chatInfo}>
                                        <span
                                          className={cls.chatTitle}
                                          onDoubleClick={(e) => {
                                            e.stopPropagation();
                                            onDoubleClick();
                                          }}
                                          title="Double-click to rename"
                                        >
                                          {title.length > 24 ? title.substring(0, 24) + '...' : title}
                                        </span>
                                        <span className={cls.chatSubtitle}>
                                          {chat.assistantName || 'My AI Assistant'}
                                        </span>
                                      </Box>
                                    )}
                                  />
                                  <Menu position="bottom-end" withinPortal>
                                    <Menu.Target>
                                      <button
                                        className={cls.menuTrigger}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ padding: 0, background: 'none', border: 'none', cursor: 'pointer', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                      >
                                        <MoreHorizontal size={12} />
                                      </button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                      <Menu.Item
                                        leftSection={<Pencil size={16} />}
                                        onClick={(e) => { e.stopPropagation(); setEditingChatId(chat.id); }}
                                      >
                                        Rename
                                      </Menu.Item>
                                      <Menu.Item
                                        leftSection={<Trash2 size={16} />}
                                        color="red"
                                        onClick={(e) => { e.stopPropagation(); setChatToDelete(chat.id); }}
                                      >
                                        Delete
                                      </Menu.Item>
                                    </Menu.Dropdown>
                                  </Menu>
                                </Box>
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
                            <Box className={cls.emptyState}>
                              <Box className={cls.emptyStateContent}>
                                <SquarePen size={16} color="var(--mantine-color-gray-4)" />
                                <Text size="sm" c="gray.5">
                                  Start a{' '}
                                  <button
                                    onClick={onNewChat}
                                    className={cls.emptyLink}
                                    style={{ fontWeight: 600 }}
                                  >
                                    new chat
                                  </button>
                                  {' '}to begin
                                </Text>
                              </Box>
                            </Box>
                          )}
                      </Box>
                    </Collapse>
                  </Box>
                </>
              ) : (
                <>
                  {/* Studio Mode Sidebar */}
                  <Button
                    onClick={onStudioClick}
                    variant={activeView === 'studio' ? 'filled' : 'outline'}
                    color="gray"
                    fullWidth
                    justify="flex-start"
                    leftSection={<SquarePen size={16} />}
                    size="sm"
                  >
                    New Assistant
                  </Button>
                  <button
                    className={cls.navButton}
                    style={{ marginTop: 4 }}
                  >
                    <Users size={16} />
                    <span style={{ flex: 1, textAlign: 'left' }}>My Assistants</span>
                  </button>
                </>
              )}
            </Box>
          </ScrollArea>
        </Box>

        {/* User Profile Section at Bottom */}
        <Box className={cls.profileSection}>
          <Box className={cls.profileInfo}>
            {/* Dark grey solid color avatar */}
            <Box className={cls.avatar} />
            <Box style={{ textAlign: 'left', overflow: 'hidden' }}>
              <Text size="sm" fw={500} c="gray.9">{userProfile.name}</Text>
            </Box>
          </Box>
          <Menu position="top-end" withinPortal>
            <Menu.Target>
              <button data-tour="settings" className={cls.settingsButton}>
                <Settings size={16} />
              </button>
            </Menu.Target>
            <Menu.Dropdown style={{ width: 192 }}>
              <Menu.Item onClick={(e) => {
                e.stopPropagation();
                onSettingsOpen();
              }}>
                Settings
              </Menu.Item>
              <Menu.Item onClick={(e) => {
                e.stopPropagation();
                onWalkthroughStart?.();
              }}>
                Walkthrough Tour
              </Menu.Item>
              <Menu.Item onClick={(e) => {
                e.stopPropagation();
                onSignOut();
              }}>
                Sign Out
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item>
                <Text size="xs" c="gray.4">Privacy Settings</Text>
              </Menu.Item>
              <Menu.Item>
                <Text size="xs" c="gray.4">Terms of Use</Text>
              </Menu.Item>
              <Menu.Item>
                <Text size="xs" c="gray.4">Report Vulnerability</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Box>

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
      <Modal
        opened={chatToDelete !== null}
        onClose={() => setChatToDelete(null)}
        title="Delete chat?"
        centered
      >
        <Text size="sm" c="gray.6" mb="md">
          This will permanently delete this chat and all its messages. This action cannot be undone.
        </Text>
        <Box style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--mantine-spacing-xs)' }}>
          <Button variant="default" onClick={() => setChatToDelete(null)}>
            Cancel
          </Button>
          <Button
            color="red"
            onClick={() => {
              if (chatToDelete) {
                onDeleteChat(chatToDelete);
                setChatToDelete(null);
              }
            }}
          >
            Delete
          </Button>
        </Box>
      </Modal>
    </>
  );
}
