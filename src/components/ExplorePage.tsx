import { Search, Target, Sparkles, Star, Users, Database, ShieldCheck, Code, Bookmark } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
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

const categories = ['All', 'Meeting', 'Slides', 'Productivity', 'Creative'];

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

  // Filter to show only PQ Assistant and HR Recruitment Assistant
  // Gather all assistants from all sources
  const allRoleAssistants = Object.values(roleBasedAssistants).flat();
  const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];

  // Remove duplicates based on id
  const uniqueAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );

  const filteredAssistants = uniqueAssistants.filter(
    assistant =>
      assistant.assistantType === 'parliamentary-question' ||
      assistant.assistantType === 'workday-shortlister'
  );

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
          {/* Bookmark Icon - Top Right */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark?.(assistant.id);
                  }}
                  className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
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

          {/* Classification */}
          <div className="flex items-center text-xs text-gray-500">
            <Database className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
            <span className="truncate">{getClassificationText(assistant.classification)}</span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={`flex-1 flex flex-col bg-gray-100 ${font.base}`}>
      {/* Header */}
      <div className="flex items-center gap-2 p-4 bg-gray-100">
        <h1 className="font-semibold text-gray-900" style={{ fontSize: '18px' }}>Explore Assistants</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
          {/* Assistants Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredAssistants.map(renderAssistantCard)}
          </div>
        </div>
      </div>
    </div>
  );
}