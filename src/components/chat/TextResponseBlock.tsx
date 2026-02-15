import { useMemo } from 'react';
import { Box } from '@mantine/core';
import { MessageActions } from './MessageActions';
import { renderSimpleMarkdown } from '../../utils/simple-markdown';
import classes from './TextResponseBlock.module.css';

interface TextResponseBlockProps {
  messageId: string;
  content: string;
  copiedMessageId: string | null;
  feedbackState: { [key: string]: 'up' | 'down' | null };
  onCopy: (messageId: string, content: string) => void;
  onFeedback: (messageId: string, feedback: 'up' | 'down') => void;
}

export function TextResponseBlock({
  messageId,
  content,
  copiedMessageId,
  feedbackState,
  onCopy,
  onFeedback,
}: TextResponseBlockProps) {
  const html = useMemo(() => renderSimpleMarkdown(content), [content]);

  return (
    <Box className={classes.wrapper}>
      <div
        className={`prose-lofi ${classes.content}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <MessageActions
        messageId={messageId}
        content={content}
        copiedMessageId={copiedMessageId}
        feedbackState={feedbackState}
        onCopy={onCopy}
        onFeedback={onFeedback}
      />
    </Box>
  );
}
