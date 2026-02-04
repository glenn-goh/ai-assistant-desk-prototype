import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import type { Assistant } from '../data/assistants';

interface SwapBookmarkModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  newAssistant: Assistant | null;
  bookmarkedAssistants: Assistant[];
  onSwap: (oldAssistantId: string, newAssistantId: string) => void;
}

export function SwapBookmarkModal({
  open,
  onOpenChange,
  newAssistant,
  bookmarkedAssistants,
  onSwap,
}: SwapBookmarkModalProps) {
  const [selectedAssistantId, setSelectedAssistantId] = useState<string | null>(null);

  if (!newAssistant) return null;

  const handleConfirm = () => {
    if (selectedAssistantId) {
      onSwap(selectedAssistantId, newAssistant.id);
      onOpenChange(false);
      setSelectedAssistantId(null);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    setSelectedAssistantId(null);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) {
        setSelectedAssistantId(null);
      }
      onOpenChange(isOpen);
    }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Bookmark Limit Reached</DialogTitle>
          <DialogDescription>
            You can only bookmark up to 3 assistants. Select one to replace with "{newAssistant.name}".
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-4 overflow-y-auto max-h-[400px]">
          {bookmarkedAssistants.map((assistant) => {
            const IconComponent = assistant.icon;
            const isSelected = selectedAssistantId === assistant.id;
            return (
              <button
                key={assistant.id}
                onClick={() => setSelectedAssistantId(assistant.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors text-left ${
                  isSelected
                    ? 'border-gray-900 border-2 bg-gray-50'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">{assistant.name}</div>
                  <div className="text-sm text-gray-500 truncate">{assistant.description}</div>
                </div>
                {isSelected && (
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedAssistantId}
          >
            Replace Bookmark
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
