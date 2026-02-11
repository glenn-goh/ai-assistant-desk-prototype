import { useState } from 'react';
import { Search, Target, Sparkles, Star, Users, Database, ShieldCheck, Code, Bookmark, Plus, Heart, Pin, ExternalLink, MoreHorizontal, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
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

  // Component to render assistant cards - simplified
  const renderAssistantCard = (assistant: Assistant) => {
    const IconComponent = assistant.icon;
    const isFavorited = favoritedAssistants.includes(assistant.id);
    const isPinned = pinnedAssistants.includes(assistant.id);
    const isInTools = toolAssistants.includes(assistant.id);

    // Lo-fi grayscale styling
    const iconBgColor = 'bg-gray-100';
    const iconColor = 'text-gray-700';

    return (
      <Card
        key={assistant.id}
        className="hover:shadow-md transition-all duration-300 group border border-gray-300 shadow-sm bg-white overflow-hidden relative flex flex-col"
      >
        <CardContent className="p-6 flex flex-col flex-1">
          {/* Top Right: Classification Pill, Heart Icon, and Ellipsis Menu */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            {/* Classification Pill */}
            <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
              assistant.classification.includes('C(CE)') || assistant.classification.includes('CCE')
                ? 'bg-gray-100 text-gray-900 border-gray-300'
                : 'bg-gray-50 text-gray-900 border-gray-200'
              }`}>
              {assistant.classification.replace('C(CE)/SN', 'CCE/SN')}
            </div>

            {/* Heart Icon (Favorite) with Tooltip */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFavorite(assistant.id);
                    }}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorited
                          ? 'fill-gray-900 text-gray-900'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isFavorited ? 'Unfavourite' : 'Favourite'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Ellipsis Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border-2 border-gray-900 rounded-lg">
                <DropdownMenuItem onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin?.(assistant.id);
                }}>
                  <Pin className="w-4 h-4 mr-1.5" />
                  {isPinned ? 'Unpin from sidebar' : 'Pin to sidebar'}
                </DropdownMenuItem>
                {assistant.canEdit && (
                  <DropdownMenuItem onClick={(e) => {
                    e.stopPropagation();
                    // TODO: Navigate to studio with assistant
                  }}>
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Edit on Studio
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Icon Container */}
          <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center flex-shrink-0 mb-4`}>
            <IconComponent className={`w-6 h-6 ${iconColor}`} />
          </div>

          {/* Content - grows to push button to bottom */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => onStartAssistantChat(assistant.name, assistant.assistantType)}
          >
            <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {assistant.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {assistant.description}
            </p>
          </div>

          {/* Add to tools button - stays at bottom */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToTools(assistant);
            }}
            variant={isInTools ? "default" : "outline"}
            size="sm"
            className={`mt-4 self-start ${isInTools ? 'bg-gray-900 text-white hover:bg-gray-700' : 'border-gray-300'}`}
          >
            {isInTools ? 'Remove from tools' : 'Add to tools'}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={`flex-1 flex flex-col bg-gray-100 ${font.base}`}>
      {/* Header */}
      <div className="flex flex-col gap-4 p-4 bg-gray-100 border-b border-gray-200">
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

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search assistants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
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
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-6">
            {/* Assistants Grid - Responsive columns, max 3, min 250px */}
            <div className="flex-1 space-y-12 min-w-0">
              {filteredAssistants.length > 0 ? (
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fill, minmax(max(250px, calc((100% - 3rem) / 3)), 1fr))',
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