import { useState } from 'react';
import { Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { Assistant } from '../data/assistants';

interface ReplaceToolModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentTools: Assistant[];
  newAssistant: Assistant;
  onReplace: (oldAssistantId: string, newAssistantId: string) => void;
}

export function ReplaceToolModal({
  open,
  onOpenChange,
  currentTools,
  newAssistant,
  onReplace,
}: ReplaceToolModalProps) {
  const [selectedToReplace, setSelectedToReplace] = useState<string | null>(null);

  const handleConfirmReplace = () => {
    if (selectedToReplace) {
      onReplace(selectedToReplace, newAssistant.id);
      onOpenChange(false);
      setSelectedToReplace(null);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    setSelectedToReplace(null);
  };

  const NewAssistantIcon = newAssistant.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white border-2 border-gray-900 rounded-lg p-0">
        <DialogHeader className="px-6 py-4 border-b border-gray-200">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Replace a tool
          </DialogTitle>
          <p className="text-sm text-gray-500 mt-1">
            You can only have 3 assistants in your tools. Select which assistant to replace with <span className="font-semibold">{newAssistant.name}</span>.
          </p>
        </DialogHeader>

        {/* New Assistant Preview */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
          <p className="text-xs font-medium text-gray-700 mb-2">Adding:</p>
          <Card className="border-2 border-gray-900 bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <NewAssistantIcon className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {newAssistant.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {newAssistant.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Tools to Replace */}
        <div className="px-6 py-4">
          <p className="text-xs font-medium text-gray-700 mb-3">Select one to replace:</p>
          <div className="space-y-2">
            {currentTools.map(assistant => {
              const IconComponent = assistant.icon;
              const isSelected = selectedToReplace === assistant.id;
              return (
                <Card
                  key={assistant.id}
                  className={`cursor-pointer transition-all border-2 ${
                    isSelected
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}
                  onClick={() => setSelectedToReplace(assistant.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                          {assistant.name}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {assistant.description}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
          <Button variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmReplace}
            disabled={!selectedToReplace}
            className="bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Replace
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
