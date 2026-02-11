import { useState } from 'react';
import { Search, Target, Sparkles, Star, Users, Database, ShieldCheck, Code, Bookmark, Plus, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { AssistantCard } from './AssistantCard';
import { ReplaceToolModal } from './ReplaceToolModal';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import {
  type Assistant,
  essentialAssistants,
  topRatedAssistants,
  getAssistantsForRole,
  getClassificationText,
  getTypeBadgeStyles,
  roleBasedAssistants
} from '../data/assistants';

const allFilterTabs = ['All', 'Favourites', 'My Assistants', 'Shared with Me', 'Community'];

// Helper to get type icon
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Official':
      return <ShieldCheck className="w-3 h-3 mr-1" />;
    case 'Community':
      return <Users className="w-3 h-3 mr-1" />;
    case 'Developer':
      return <Code className="w-3 h-3 mr-1" />;
    default:
      return null;
  }
};

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
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [replaceModalOpen, setReplaceModalOpen] = useState(false);
  const [pendingAssistantToAdd, setPendingAssistantToAdd] = useState<Assistant | null>(null);
  const [isToolsPanelCollapsed, setIsToolsPanelCollapsed] = useState(false);

  // Always show all filter tabs including Favourites
  const filterTabs = allFilterTabs;

  // Handle toggle favorite
  const handleToggleFavorite = (assistantId: string) => {
    onToggleFavorite?.(assistantId);
  };

  // Handle add to tools with replace modal if at limit
  const handleAddToTools = (assistant: Assistant) => {
    if (toolAssistants.includes(assistant.id)) {
      // Already in tools, remove it
      onRemoveFromTools?.(assistant.id);
    } else if (toolAssistants.length >= 3) {
      // At limit, show replace modal
      setPendingAssistantToAdd(assistant);
      setReplaceModalOpen(true);
    } else {
      // Add to tools
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
    // Filter for assistants owned by the user
    filteredAssistants = filteredAssistants.filter(a => a.isOwned === true);
  } else if (activeFilter === 'Shared with Me') {
    // Filter for shared assistants (not owned by user)
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

  // MVP-lite: Show only PQ and HR assistants
  const allowedAssistantIds = ['parliamentary-drafter', 'workday-shortlister'];
  filteredAssistants = filteredAssistants.filter(a => allowedAssistantIds.includes(a.id));

  // Render assistant card using shared component
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
    <div className={`flex-1 flex flex-col bg-gray-100 ${font.base}`}>
      {/* Header */}
      <div className="flex flex-col gap-4 p-4 bg-gray-100">{/* HIDDEN: border-b border-gray-200 */}
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-semibold text-gray-900" style={{ fontSize: '18px' }}>Explore Assistants</h1>
            <Button
              className="gap-2"
              size="sm"
            >
              <Plus className="w-4 h-4" />
              Create new assistant
            </Button>
          </div>

          {/* HIDDEN: Search Bar */}
          {/* <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search assistants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div> */}

          {/* HIDDEN: Filter Tabs */}
          {/* <div className="flex gap-2">
            {filterTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === tab
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-6">
            {/* Assistants Grid - MVP-lite: 2 columns */}
            {/* COMMENTED: 3-column layout for easy reversion */}
            {/* gridTemplateColumns: 'repeat(auto-fill, minmax(max(250px, calc((100% - 3rem) / 3)), 1fr))', */}
            <div className="flex-1 space-y-12 min-w-0">
              {filteredAssistants.length > 0 ? (
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fill, minmax(max(250px, calc((100% - 1.5rem) / 2)), 1fr))',
                    maxWidth: `${filteredAssistants.length * 280 + (filteredAssistants.length - 1) * 24}px`
                  }}
                >
                  {filteredAssistants.map(renderAssistantCard)}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  {activeFilter === 'Favourites' && favoritedAssistants.length === 0 ? (
                    <>
                      <p className="text-gray-500 text-sm">Nothing here yet.</p>
                      <p className="text-gray-400 text-xs mt-1">Favorite an assistant to see it listed on this page.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-500 text-sm">No assistants found</p>
                      <p className="text-gray-400 text-xs mt-1">Try adjusting your search or filters</p>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* My Tools Section - Sticky and Collapsible */}
            <div className={`flex-shrink-0 transition-all duration-300 ${isToolsPanelCollapsed ? 'w-20' : 'w-80'}`}>
              <div className="sticky top-8">
                <Card className="border-2 border-gray-900 bg-white">
                  <CardContent className="p-6">
                    {isToolsPanelCollapsed ? (
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => setIsToolsPanelCollapsed(false)}
                          className="relative w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                          title="Expand My Tools"
                        >
                          <SlidersHorizontal className="w-4 h-4 text-gray-700" />
                          {toolAssistants.length > 0 && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                              <span className="text-xs text-white font-semibold">{toolAssistants.length}</span>
                            </div>
                          )}
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-lg font-bold text-gray-900">My Tools</h2>
                          <button
                            onClick={() => setIsToolsPanelCollapsed(true)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                            title="Collapse My Tools"
                          >
                            <SlidersHorizontal className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          Select up to 3 assistants to be callable as tools by your{' '}
                          <button
                            onClick={onNavigateToHome}
                            className="text-gray-900 underline hover:text-gray-700"
                          >
                            Personal AI Assistant
                          </button>
                          .
                        </p>

                        {/* Tool Slots */}
                        <div className="space-y-3">
                          {[0, 1, 2].map((index) => {
                            const toolAssistantId = toolAssistants[index];
                            const toolAssistant = toolAssistantId
                              ? [...topRatedAssistants, ...essentialAssistants, ...Object.values(roleBasedAssistants).flat()]
                                  .find(a => a.id === toolAssistantId)
                              : null;

                            if (toolAssistant) {
                              const IconComponent = toolAssistant.icon;
                              return (
                                <Card
                                  key={index}
                                  className="border-2 border-gray-300 bg-white relative group"
                                >
                                  <CardContent className="!p-3">
                                    <div className="flex items-start gap-2">
                                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <IconComponent className="w-4 h-4 text-gray-700" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h3 className="text-xs font-semibold text-gray-900 truncate mb-0.5">
                                          {toolAssistant.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 line-clamp-2 leading-tight">
                                          {toolAssistant.description}
                                        </p>
                                      </div>
                                      <button
                                        onClick={() => onRemoveFromTools?.(toolAssistantId)}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded"
                                      >
                                        <X className="w-4 h-4 text-gray-500" />
                                      </button>
                                    </div>
                                  </CardContent>
                                </Card>
                              );
                            }

                            return (
                              <Card
                                key={index}
                                className="border-2 border-dashed border-gray-300 bg-gray-50"
                              >
                                <CardContent className="!p-3 flex items-center justify-center">
                                  <p className="text-xs text-gray-400 text-center py-2">
                                    Added assistant will appear here
                                  </p>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}