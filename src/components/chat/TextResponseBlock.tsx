import { useMemo } from 'react';
import { MessageActions } from './MessageActions';
import { renderSimpleMarkdown } from '../../utils/simple-markdown';

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
    <div className="flex flex-col gap-1 mb-2">
      <div
        className="w-full prose prose-sm max-w-none prose-lofi text-gray-900"
        style={{ fontSize: '16px', lineHeight: '1.7' }}
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
    </div>
  );
}
