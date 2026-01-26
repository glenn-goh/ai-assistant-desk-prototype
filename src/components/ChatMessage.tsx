import { User, Bot } from 'lucide-react';
import type { Message } from '../App';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import { FileDownload } from './FileDownload';
import govtechLogo from 'figma:asset/4e2729d2a10d63bcdd1cf8140425fc9c5b89f532.png';

interface ChatMessageProps {
  message: Message;
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function ChatMessage({ message, colorTheme, fontStyle }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  return (
    <div
      className={`flex gap-4 ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className="max-w-[80%] space-y-3">
        <div
          className={`rounded-2xl px-4 py-3 ${ 
            isUser
              ? theme.userMessage
              : theme.aiMessage
          } ${font.message}`}
          style={{ fontSize: '14px' }}
        >
          <div className="whitespace-pre-wrap break-words">
            {message.content}
          </div>
        </div>
        
        {message.hasFile && message.fileName && (
          <FileDownload fileName={message.fileName} />
        )}
      </div>
    </div>
  );
}