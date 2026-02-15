import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Tooltip, ActionIcon, Group } from '@mantine/core';
import classes from './MessageActions.module.css';

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
    <Group className={classes.actions} gap="xs">
      <Tooltip label="Copy">
        <ActionIcon
          onClick={() => onCopy(messageId, content)}
          variant="subtle"
          color="gray"
          size="sm"
        >
          <Copy size={16} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Good response">
        <ActionIcon
          onClick={() => onFeedback(messageId, 'up')}
          variant="subtle"
          color={feedbackState[messageId] === 'up' ? 'green' : 'gray'}
          size="sm"
        >
          <ThumbsUp size={16} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Bad response">
        <ActionIcon
          onClick={() => onFeedback(messageId, 'down')}
          variant="subtle"
          color={feedbackState[messageId] === 'down' ? 'red' : 'gray'}
          size="sm"
        >
          <ThumbsDown size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
