import { PanelLeft, Search, Target, Sparkles, Star, Users, Database, ShieldCheck, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import { 
  type Assistant,
  essentialAssistants, 
  topRatedAssistants, 
  getAssistantsForRole,
  getClassificationText,
  getTypeBadgeStyles
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
  onToggleSidebar: () => void;
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  onStartAssistantChat: (assistantName: string, assistantType: string) => void;
  userRole?: string;
}

export function ExplorePage({ onToggleSidebar, colorTheme, fontStyle, onStartAssistantChat, userRole }: ExplorePageProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  // Get role-specific assistants based on user role
  const tailoredAssistants = getAssistantsForRole(userRole);

  // Component to render assistant cards
  const renderAssistantCard = (assistant: Assistant) => {
    const IconComponent = assistant.icon;
    
    // Special styling for HR Workday Shortlister
    const isWorkdayShortlister = assistant.id === 'workday-shortlister';
    const iconBgColor = isWorkdayShortlister ? 'bg-indigo-50' : 'bg-blue-50';
    const iconColor = isWorkdayShortlister ? 'text-indigo-600' : 'text-blue-600';
    
    return (
      <Card
        key={assistant.id}
        className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-sm bg-white overflow-hidden"
        onClick={() => onStartAssistantChat(assistant.name, assistant.assistantType)}
      >
        <CardContent className="p-6">
          {/* Header Row */}
          <div className="flex justify-between items-start mb-4">
            {/* Icon Container */}
            <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
              <IconComponent className={`w-6 h-6 ${iconColor}`} />
            </div>
            
            {/* Top Right Info */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Users className="w-3 h-3 mr-1" />
                {assistant.uses}
              </div>
              <Badge 
                variant="outline" 
                className={`text-[10px] px-2 py-0.5 h-6 rounded-full border ${getTypeBadgeStyles(assistant.type)}`}
              >
                {getTypeIcon(assistant.type)}
                {assistant.type}
              </Badge>
            </div>
          </div>
          
          {/* Content */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
              {assistant.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 h-10">
              {assistant.description}
            </p>
          </div>
          
          {/* Metadata */}
          <div className="space-y-3">
            {/* Author */}
            <div className="text-xs text-gray-500">
              By <span className="font-medium text-gray-700">{assistant.owner}</span>
            </div>
            
            {/* Classification */}
            <div className="flex items-center text-xs text-gray-500">
              <Database className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
              <span className="truncate">{getClassificationText(assistant.classification)}</span>
            </div>
          </div>

          {/* Footer Tags */}
          <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-50">
            {assistant.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-[10px] px-3 py-1 h-6 bg-gray-100 hover:bg-gray-200 text-gray-600 font-normal rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={`flex-1 flex flex-col ${theme.mainBg} ${font.base}`}>
      {/* Header */}
      <div className={`flex items-center gap-2 p-4 border-b ${theme.header}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
        >
          <PanelLeft className="w-5 h-5" />
        </Button>
        <h1 className={theme.title + ' ' + font.title}>Explore Assistants</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search assistants..."
              className={`pl-10 text-sm py-6 rounded-xl ${theme.inputBorder} ${font.input} bg-white shadow-sm`}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={`cursor-pointer px-5 py-2 text-xs rounded-full transition-all ${
                  category === 'All' 
                    ? 'bg-gray-900 hover:bg-gray-800' 
                    : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-600'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Tailored to Your Work Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <h2 className={`text-lg font-semibold ${theme.chatItemText} ${font.title}`}>Tailored to your work</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tailoredAssistants.map(renderAssistantCard)}
            </div>
          </div>

          {/* Essential Productivity Tools Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h2 className={`text-lg font-semibold ${theme.chatItemText} ${font.title}`}>Essential productivity tools</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {essentialAssistants.map(renderAssistantCard)}
            </div>
          </div>

          {/* Top-rated by Public Officers Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              <h2 className={`text-lg font-semibold ${theme.chatItemText} ${font.title}`}>Top-rated by public officers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRatedAssistants.map(renderAssistantCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}