import { Copy, Check, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface MessageActionsProps {
  messageId: string;
  content: string;
  copiedMessageId: string | null;
  feedbackState: { [key: string]: 'up' | 'down' | null };
  onCopy: (messageId: string, content: string) => void;
  onFeedback: (messageId: string, feedback: 'up' | 'down') => void;
}

export function MessageActions({
  messageId,
  content,
  copiedMessageId,
  feedbackState,
  onCopy,
  onFeedback,
}: MessageActionsProps) {
  return (
    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onCopy(messageId, content)}
              className="p-1.5 hover:bg-gray-100 rounded"
            >
              {copiedMessageId === messageId ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copiedMessageId === messageId ? 'Copied' : 'Copy'}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onFeedback(messageId, 'up')}
              className={`p-1.5 hover:bg-gray-100 rounded ${feedbackState[messageId] === 'up' ? 'text-green-600' : 'text-gray-400'}`}
            >
              <ThumbsUp className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Good response</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => onFeedback(messageId, 'down')}
              className={`p-1.5 hover:bg-gray-100 rounded ${feedbackState[messageId] === 'down' ? 'text-red-600' : 'text-gray-400'}`}
            >
              <ThumbsDown className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Bad response</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
