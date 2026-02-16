import { useState } from 'react';
import { Plus, X, SlidersHorizontal } from 'lucide-react';
import { Button, Card, Text, Title, Box } from '@mantine/core';
import { IconContainer, SearchInput, FilterTabs, EmptyState } from './shared';
import { AssistantCard } from './AssistantCard';
import { ReplaceToolModal } from './ReplaceToolModal';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getFontClasses } from '../lib/theme-utils';
import {
  type Assistant,
  essentialAssistants,
  topRatedAssistants,
  getAssistantsForRole,
  getClassificationText,
  getTypeBadgeStyles,
  roleBasedAssistants
} from '../data/assistants';
import cls from './ExplorePage.module.css';

const allFilterTabs = ['All', 'Favourites', 'My Assistants', 'Shared with Me', 'Community'];

interface ExplorePageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onStartAssistantChat: (assistantName: string, assistantType: string) => void;
  userRole?: string;
  favoritedAssistants?: string[];
  pinnedAssistants?: string[];
  toolAssistants?: string[];
  onToggleFavorite?: (assistantId: string) => void;
  onTogglePin?: (assistantId: string) => void;
  onAddToTools?: (assistantId: string) => void;
  onRemoveFromTools?: (assistantId: string) => void;
  onReplaceToolAssistant?: (oldAssistantId: string, newAssistantId: string) => void;
  onNavigateToHome?: () => void;
}

export function ExplorePage({ colorTheme, fontStyle, onStartAssistantChat, userRole, favoritedAssistants = [], pinnedAssistants = [], toolAssistants = [], onToggleFavorite, onTogglePin, onAddToTools, onRemoveFromTools, onReplaceToolAssistant, onNavigateToHome }: ExplorePageProps) {
  const font = getFontClasses(fontStyle);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [replaceModalOpen, setReplaceModalOpen] = useState(false);
  const [pendingAssistantToAdd, setPendingAssistantToAdd] = useState<Assistant | null>(null);
  const [isToolsPanelCollapsed, setIsToolsPanelCollapsed] = useState(false);

  const filterTabs = allFilterTabs;

  const handleToggleFavorite = (assistantId: string) => {
    onToggleFavorite?.(assistantId);
  };

  const handleAddToTools = (assistant: Assistant) => {
    if (toolAssistants.includes(assistant.id)) {
      onRemoveFromTools?.(assistant.id);
    } else if (toolAssistants.length >= 3) {
      setPendingAssistantToAdd(assistant);
      setReplaceModalOpen(true);
    } else {
      onAddToTools?.(assistant.id);
    }
  };

  // Gather all assistants from all sources
  const allRoleAssistants = Object.values(roleBasedAssistants).flat();
  const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];

  // Remove duplicates based on id
  let filteredAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );

  // Apply filter tabs
  if (activeFilter === 'Favourites') {
    filteredAssistants = filteredAssistants.filter(a =>
      favoritedAssistants.includes(a.id)
    );
  } else if (activeFilter === 'My Assistants') {
    filteredAssistants = filteredAssistants.filter(a => a.isOwned === true);
  } else if (activeFilter === 'Shared with Me') {
    filteredAssistants = filteredAssistants.filter(a => a.isOwned === false || (a.isOwned === undefined && a.type !== 'Community'));
  } else if (activeFilter === 'Community') {
    filteredAssistants = filteredAssistants.filter(a => a.type === 'Community');
  }

  // Apply search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredAssistants = filteredAssistants.filter(a =>
      a.name.toLowerCase().includes(query) ||
      a.description.toLowerCase().includes(query) ||
      a.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  const renderAssistantCard = (assistant: Assistant) => (
    <AssistantCard
      key={assistant.id}
      assistant={assistant}
      isFavorited={favoritedAssistants.includes(assistant.id)}
      onToggleFavorite={handleToggleFavorite}
      onStartChat={onStartAssistantChat}
      isInTools={toolAssistants.includes(assistant.id)}
      onToggleTools={(id) => handleAddToTools(assistant)}
    />
  );

  return (
    <Box className={cls.page} style={font.base}>
      {/* Header */}
      <Box className={cls.header}>
        <Box className={cls.headerInner}>
          <Box className={cls.headerRow}>
            <Title order={3} size="h4">Explore Assistants</Title>
            <Button size="sm" leftSection={<Plus size={16} />}>
              Create new assistant
            </Button>
          </Box>

          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search assistants..."
          />

          <Box mt="lg">
            <FilterTabs
              tabs={filterTabs}
              activeTab={activeFilter}
              onTabChange={setActiveFilter}
            />
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box className={cls.scrollArea}>
        <Box className={cls.content}>
          <Box className={cls.flexLayout}>
            {/* Assistants Grid */}
            <Box className={cls.gridArea}>
              {filteredAssistants.length > 0 ? (
                <Box
                  className={cls.assistantsGrid}
                  style={{
                    maxWidth: `${filteredAssistants.length * 280 + (filteredAssistants.length - 1) * 24}px`
                  }}
                >
                  {filteredAssistants.map(renderAssistantCard)}
                </Box>
              ) : (
                <EmptyState
                  compact
                  title={activeFilter === 'Favourites' && favoritedAssistants.length === 0 ? 'Nothing here yet.' : 'No assistants found'}
                  description={activeFilter === 'Favourites' && favoritedAssistants.length === 0 ? 'Favorite an assistant to see it listed on this page.' : 'Try adjusting your search or filters'}
                />
              )}
            </Box>

            {/* My Tools Section */}
            <Box className={`${cls.toolsPanel} ${isToolsPanelCollapsed ? cls.toolsPanelCollapsed : cls.toolsPanelExpanded}`}>
              <Box className={cls.toolsPanelSticky}>
                <Card withBorder p="lg" style={{ borderWidth: 2, borderColor: 'var(--mantine-color-gray-9)' }}>
                  {isToolsPanelCollapsed ? (
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <button
                        onClick={() => setIsToolsPanelCollapsed(false)}
                        className={cls.collapseButton}
                        title="Expand My Tools"
                      >
                        <SlidersHorizontal size={16} color="var(--mantine-color-gray-7)" />
                        {toolAssistants.length > 0 && (
                          <Box className={cls.collapseBadge}>
                            <Text size="xs" c="white" fw={600}>{toolAssistants.length}</Text>
                          </Box>
                        )}
                      </button>
                    </Box>
                  ) : (
                    <>
                      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--mantine-spacing-xs)' }}>
                        <Title order={4}>My Tools</Title>
                        <button
                          onClick={() => setIsToolsPanelCollapsed(true)}
                          className={cls.collapseButton}
                          title="Collapse My Tools"
                        >
                          <SlidersHorizontal size={16} color="var(--mantine-color-gray-7)" />
                        </button>
                      </Box>
                      <Text size="sm" c="gray.5" mb="md">
                        Select up to 3 assistants to be callable as tools by your{' '}
                        <button
                          onClick={onNavigateToHome}
                          className={cls.homeLink}
                        >
                          Personal AI Assistant
                        </button>
                        .
                      </Text>

                      {/* Tool Slots */}
                      <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mantine-spacing-sm)' }}>
                        {[0, 1, 2].map((index) => {
                          const toolAssistantId = toolAssistants[index];
                          const toolAssistant = toolAssistantId
                            ? [...topRatedAssistants, ...essentialAssistants, ...Object.values(roleBasedAssistants).flat()]
                                .find(a => a.id === toolAssistantId)
                            : null;

                          if (toolAssistant) {
                            const IconComponent = toolAssistant.icon;
                            return (
                              <Card key={index} withBorder p="sm" style={{ borderWidth: 2 }}>
                                <Box className={cls.toolSlotFilled}>
                                  <IconContainer icon={IconComponent} size="sm" />
                                  <Box className={cls.toolSlotInfo}>
                                    <Text size="xs" fw={600} c="gray.9" lineClamp={1} mb={2}>
                                      {toolAssistant.name}
                                    </Text>
                                    <Text size="xs" c="gray.5" lineClamp={2} lh={1.3}>
                                      {toolAssistant.description}
                                    </Text>
                                  </Box>
                                  <button
                                    onClick={() => onRemoveFromTools?.(toolAssistantId)}
                                    className={cls.removeButton}
                                  >
                                    <X size={16} color="var(--mantine-color-gray-5)" />
                                  </button>
                                </Box>
                              </Card>
                            );
                          }

                          return (
                            <Card
                              key={index}
                              p="sm"
                              style={{ borderWidth: 2, borderStyle: 'dashed', borderColor: 'var(--mantine-color-gray-3)', backgroundColor: 'var(--mantine-color-gray-0)' }}
                            >
                              <Box className={cls.emptySlot}>
                                <Text size="xs" c="gray.4" ta="center" py="xs">
                                  Added assistant will appear here
                                </Text>
                              </Box>
                            </Card>
                          );
                        })}
                      </Box>
                    </>
                  )}
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Replace Tool Modal */}
      {pendingAssistantToAdd && (
        <ReplaceToolModal
          open={replaceModalOpen}
          onOpenChange={setReplaceModalOpen}
          currentTools={toolAssistants
            .map(id => [...topRatedAssistants, ...essentialAssistants, ...Object.values(roleBasedAssistants).flat()]
              .find(a => a.id === id))
            .filter(Boolean) as Assistant[]}
          newAssistant={pendingAssistantToAdd}
          onReplace={(oldId, newId) => {
            onReplaceToolAssistant?.(oldId, newId);
            setReplaceModalOpen(false);
            setPendingAssistantToAdd(null);
          }}
        />
      )}
    </Box>
  );
}
