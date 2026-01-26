import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { Send, Paperclip, Wrench, Search, ImagePlus, Mic, FolderOpen, ScanLine } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';

interface MessageInputProps {
  onSend: (content: string) => void;
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  showFileUpload?: boolean;
  autoTypeText?: string;
}

export function MessageInput({ onSend, colorTheme, fontStyle, showFileUpload = false, autoTypeText }: MessageInputProps) {
  const [input, setInput] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [isLibraryPopoverOpen, setIsLibraryPopoverOpen] = useState(false);
  const [isToolsPopoverOpen, setIsToolsPopoverOpen] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const tools = [
    { id: 'internet-search', name: 'Internet Search', icon: Search },
    { id: 'audio-transcription', name: 'Audio Transcription', icon: Mic },
    { id: 'key-info-extraction', name: 'Key Info Extraction (KIE)', icon: ScanLine },
  ];

  const libraries = [
    { id: 'govtech-branding', name: 'GovTech branding guidelines', type: 'SharePoint' },
    { id: 'procurement-guidelines', name: 'Procurement Guidelines', type: 'SharePoint' },
    { id: 'ai-programme', name: 'AI Programme Resources', type: 'Google Drive' },
    { id: 'policy-documents', name: 'Policy Documents', type: 'AWS S3' },
  ];

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSend(`[Uploaded file: ${file.name}]`);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const toggleTool = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const toggleLibrary = (libraryId: string) => {
    setSelectedLibraries(prev => 
      prev.includes(libraryId) 
        ? prev.filter(id => id !== libraryId)
        : [...prev, libraryId]
    );
  };

  // Focus input on mount if autoTypeText is present
  useEffect(() => {
    if (autoTypeText) {
      inputRef.current?.focus();
    }
  }, [autoTypeText]);

  // Handle typing animation like ChatSimulator
  const handleTypingKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!autoTypeText) {
      // Normal behavior when no autoTypeText
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
      return;
    }

    // ChatSimulator-style typing behavior
    e.preventDefault();

    if (e.key === 'Enter') {
      // Complete the text immediately and send
      setInput(autoTypeText);
      setTypedLength(autoTypeText.length);
      
      setTimeout(() => {
        onSend(autoTypeText);
        setInput('');
        setTypedLength(0);
      }, 100);
    } else if (e.key === 'Backspace') {
      // Allow backspace to go backwards
      if (typedLength > 0) {
        const newLength = typedLength - 1;
        setTypedLength(newLength);
        setInput(autoTypeText.substring(0, newLength));
      }
    } else if (e.key.length === 1) {
      // Type next character on any key press (letters, numbers, punctuation, space)
      if (typedLength < autoTypeText.length) {
        const newLength = typedLength + 1;
        setTypedLength(newLength);
        setInput(autoTypeText.substring(0, newLength));
      }
    }
  };

  return (
    <div className={`rounded-lg border ${theme.inputBorder} p-2 focus-within:ring-2 focus-within:ring-blue-500/20`}>
      {/* Text input */}
      <div className="mb-2">
        <Textarea
          ref={inputRef}
          value={input}
          onChange={autoTypeText ? undefined : (e => setInput(e.target.value))}
          onKeyDown={handleTypingKeyDown}
          placeholder={autoTypeText ? "Type to continue..." : "Message AI Assistant..."}
          className={`w-full min-h-[36px] max-h-[200px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent ${font.input}`}
          rows={1}
          readOnly={!!autoTypeText}
        />
      </div>

      {/* File Attach, Library, Tools, and Send buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            size="icon"
            variant="ghost"
            className="h-7 w-7 flex-shrink-0"
          >
            <Paperclip className="w-3.5 h-3.5" />
          </Button>

          {/* Library Button */}
          <DropdownMenu open={isLibraryPopoverOpen} onOpenChange={setIsLibraryPopoverOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-7 w-7 flex-shrink-0 relative"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                {selectedLibraries.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {selectedLibraries.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-64 p-0 z-50" 
              align="start" 
              side="top" 
              sideOffset={8}
            >
              <div className="p-3 border-b">
                <h3 className="font-medium text-xs">Select Libraries</h3>
                <p className="text-xs text-muted-foreground">Connect this chat to libraries</p>
              </div>
              <div className="p-2">
                {libraries.map((library) => {
                  const isSelected = selectedLibraries.includes(library.id);
                  return (
                    <button
                      key={library.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleLibrary(library.id);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isSelected ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
                    >
                      <FolderOpen className="w-5 h-5 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="text-xs">{library.name}</div>
                        <div className="text-[10px] text-muted-foreground">{library.type}</div>
                      </div>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tools Button */}
          <DropdownMenu open={isToolsPopoverOpen} onOpenChange={setIsToolsPopoverOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-7 w-7 flex-shrink-0 relative"
              >
                <Wrench className="w-3.5 h-3.5" />
                {selectedTools.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {selectedTools.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-64 p-0 z-50" 
              align="start" 
              side="top" 
              sideOffset={8}
            >
              <div className="p-3 border-b">
                <h3 className="font-medium text-xs">Available Tools</h3>
                <p className="text-xs text-muted-foreground">Select tools to enable</p>
              </div>
              <div className="p-2">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  const isSelected = selectedTools.includes(tool.id);
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleTool(tool.id);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="flex-1 text-left text-xs">{tool.name}</span>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </button>
                  );
                })}
                
                {/* Explore AI Common Tools link */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // TODO: Navigate to AI Common Tools page
                    console.log('Navigate to AI Common Tools');
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-1 border-t border-gray-200 pt-3"
                >
                  <span className="flex-1 text-left text-xs text-blue-600 font-medium">Explore AI Common Tools</span>
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button
          onClick={handleSend}
          disabled={!input.trim()}
          size="icon"
          className={`h-7 w-7 flex-shrink-0 ${theme.sendButton}`}
        >
          <Send className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}