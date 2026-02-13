import { Heart, ExternalLink, MoreHorizontal, Share2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { IconContainer } from './shared';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import type { Assistant } from '../data/assistants';

interface AssistantCardProps {
  assistant: Assistant;
  isFavorited: boolean;
  onToggleFavorite: (assistantId: string) => void;
  onStartChat: (assistantName: string, assistantType: string) => void;
  viewOnly?: boolean;
  isInTools?: boolean;
  onToggleTools?: (assistantId: string) => void;
}

export function AssistantCard({ assistant, isFavorited, onToggleFavorite, onStartChat, viewOnly, isInTools, onToggleTools }: AssistantCardProps) {
  const IconComponent = assistant.icon;
  const hasToolsButton = !!onToggleTools;

  return (
    <Card
      key={assistant.id}
      className={`transition-all duration-300 group border border-gray-300 shadow-sm bg-white overflow-hidden relative ${hasToolsButton ? 'flex flex-col' : ''} ${viewOnly ? '' : 'hover:shadow-md'}`}
    >
      <CardContent className={`p-6 ${hasToolsButton ? 'flex flex-col flex-1' : ''}`}>
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
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(assistant.id);
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
              <DropdownMenuItem disabled onClick={(e) => e.stopPropagation()}>
                <Share2 className="w-4 h-4 mr-1.5" />
                Share
                <span className="ml-auto text-xs text-gray-400">Coming soon</span>
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
        <IconContainer icon={IconComponent} size="lg" className="mb-4" />

        {/* Content */}
        <div
          className={hasToolsButton ? 'flex-1 cursor-pointer' : 'mb-4'}
          onClick={viewOnly ? undefined : () => onStartChat(assistant.name, assistant.assistantType)}
        >
          <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {assistant.name}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {assistant.description}
          </p>
        </div>

        {/* Add to tools button */}
        {onToggleTools && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onToggleTools(assistant.id);
            }}
            variant={isInTools ? "default" : "outline"}
            size="sm"
            className={`mt-4 self-start ${isInTools ? 'bg-gray-900 text-white hover:bg-gray-700' : 'border-gray-300'}`}
          >
            {isInTools ? 'Remove from tools' : 'Add to tools'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
