import { useState } from 'react';
import { Search, Check, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import type { Assistant } from '../data/assistants';

interface SelectAssistantsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  assistants: Assistant[];
  selectedAssistantIds: string[];
  onSelectionChange: (assistantIds: string[]) => void;
  maxSelections?: number;
}

const filterTabs = ['All', 'Essential', 'My Assistants', 'Shared with Me', 'Community'];

export function SelectAssistantsModal({
  open,
  onOpenChange,
  assistants,
  selectedAssistantIds,
  onSelectionChange,
  maxSelections = 3,
}: SelectAssistantsModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);

  // Apply filters
  let filteredAssistants = assistants;

  // Apply tab filter
  if (activeFilter === 'Essential') {
    filteredAssistants = filteredAssistants.filter(a => a.tags?.includes('Essential'));
  } else if (activeFilter === 'My Assistants') {
    filteredAssistants = filteredAssistants.filter(a => a.type === 'Official');
  } else if (activeFilter === 'Shared with Me') {
    filteredAssistants = filteredAssistants.filter(a => a.type === 'Developer');
  } else if (activeFilter === 'Community') {
    filteredAssistants = filteredAssistants.filter(a => a.type === 'Community');
  }

  // Apply search
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredAssistants = filteredAssistants.filter(a =>
      a.name.toLowerCase().includes(query) ||
      a.description.toLowerCase().includes(query) ||
      a.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Apply "show selected" filter
  if (showSelectedOnly) {
    filteredAssistants = filteredAssistants.filter(a =>
      selectedAssistantIds.includes(a.id)
    );
  }

  const handleToggleAssistant = (assistantId: string) => {
    if (selectedAssistantIds.includes(assistantId)) {
      // Deselect
      onSelectionChange(selectedAssistantIds.filter(id => id !== assistantId));
    } else {
      // Select (if not at limit)
      if (selectedAssistantIds.length < maxSelections) {
        onSelectionChange([...selectedAssistantIds, assistantId]);
      }
    }
  };

  const handleDone = () => {
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const isAtLimit = selectedAssistantIds.length >= maxSelections;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col bg-white border-2 border-gray-900 rounded-lg p-0">
        <DialogHeader className="px-6 py-4 border-b border-gray-200">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Select Custom Assistants
          </DialogTitle>
          <p className="text-sm text-gray-500 mt-1">
            Choose up to {maxSelections} assistants to use as tools in this chat
          </p>
        </DialogHeader>

        {/* Search and Filters */}
        <div className="px-6 py-3 border-b border-gray-200 space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search assistants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Tabs and Show Selected Button */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeFilter === tab
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Show Selected Toggle */}
            <button
              onClick={() => setShowSelectedOnly(!showSelectedOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                showSelectedOnly
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              Show selected
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto px-6 py-4">
          {filteredAssistants.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredAssistants.map(assistant => {
                const IconComponent = assistant.icon;
                const isSelected = selectedAssistantIds.includes(assistant.id);
                const isDisabled = !isSelected && isAtLimit;

                return (
                  <div key={assistant.id} className="relative">
                    <Card
                      className={`cursor-pointer transition-all border-2 ${
                        isSelected
                          ? 'border-gray-900 bg-gray-50'
                          : isDisabled
                          ? 'border-gray-200 bg-gray-50 opacity-60'
                          : 'border-gray-300 hover:border-gray-400 bg-white'
                      }`}
                      onClick={() => !isDisabled && handleToggleAssistant(assistant.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-gray-700" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1 truncate">
                              {assistant.name}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-2">
                              {assistant.description}
                            </p>
                            {/* Classification Badge */}
                            <div className="mt-2">
                              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium border bg-gray-50 text-gray-900 border-gray-200">
                                {assistant.classification.replace('C(CE)/SN', 'CCE/SN')}
                              </span>
                            </div>
                          </div>

                          {/* Checkbox */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                isSelected
                                  ? 'bg-gray-900 border-gray-900'
                                  : 'bg-white border-gray-300'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Disabled Overlay with Tooltip */}
                    {isDisabled && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="absolute inset-0 cursor-not-allowed" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Limit reached (max {maxSelections})</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-gray-500 text-sm">No assistants found</p>
              <p className="text-gray-400 text-xs mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {selectedAssistantIds.length} of {maxSelections} selected
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleDone} className="bg-gray-900 text-white hover:bg-gray-700">
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
