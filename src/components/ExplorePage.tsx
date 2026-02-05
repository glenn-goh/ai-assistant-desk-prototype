import { useState } from 'react';
import { Search, Target, Sparkles, Star, Users, Database, ShieldCheck, Code, Bookmark, Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
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

const filterTabs = ['All', 'My Assistants', 'Shared with Me', 'Community'];

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
  bookmarkedAssistants?: string[];
  onToggleBookmark?: (assistantId: string) => void;
}

export function ExplorePage({ colorTheme, fontStyle, onStartAssistantChat, userRole, bookmarkedAssistants = [], onToggleBookmark }: ExplorePageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Gather all assistants from all sources
  const allRoleAssistants = Object.values(roleBasedAssistants).flat();
  const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];

  // Remove duplicates based on id
  let filteredAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );

  // Apply filter tabs
  if (activeFilter === 'My Assistants') {
    filteredAssistants = filteredAssistants.filter(a => bookmarkedAssistants.includes(a.id));
  } else if (activeFilter === 'Shared with Me') {
    // Filter for shared assistants (placeholder - can be based on assistant owner or other criteria)
    filteredAssistants = filteredAssistants.filter(a => a.type === 'Developer');
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
    const isBookmarked = bookmarkedAssistants.includes(assistant.id);

    // Lo-fi grayscale styling
    const iconBgColor = 'bg-gray-100';
    const iconColor = 'text-gray-700';

    return (
      <Card
        key={assistant.id}
        className="hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-300 shadow-sm bg-white overflow-hidden relative"
        onClick={() => onStartAssistantChat(assistant.name, assistant.assistantType)}
      >
        <CardContent className="p-6">
          {/* Top Right: Classification Pill and Bookmark Icon */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {/* Classification Pill */}
            <div className={`px-2 py-1 rounded-full text-xs font-medium border ${
              assistant.classification.includes('C(CE)') || assistant.classification.includes('CCE')
                ? 'bg-gray-100 text-gray-900 border-gray-300'
                : 'bg-gray-50 text-gray-900 border-gray-200'
              }`}>
              {assistant.classification.replace('C(CE)/SN', 'CCE/SN')}
            </div>

            {/* Bookmark Icon */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark?.(assistant.id);
                    }}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Bookmark
                      className={`w-5 h-5 ${isBookmarked ? 'fill-gray-900 text-gray-900' : 'text-gray-400'}`}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bookmark</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Icon Container */}
          <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center flex-shrink-0 mb-4`}>
            <IconComponent className={`w-6 h-6 ${iconColor}`} />
          </div>

          {/* Content */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {assistant.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {assistant.description}
            </p>
          </div>
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
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
          {/* Assistants Section */}
          {filteredAssistants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssistants.map(renderAssistantCard)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-gray-500 text-sm">No assistants found</p>
              <p className="text-gray-400 text-xs mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}