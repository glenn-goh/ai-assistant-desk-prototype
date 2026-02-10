import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { ArrowUp, Paperclip, SlidersHorizontal, Search, FolderOpen, Shield, ChevronDown, ChevronRight, Globe, Sparkles, PanelRight, Bot, Plus, Check, Workflow } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from './ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { essentialAssistants, topRatedAssistants, roleBasedAssistants } from '../data/assistants';

export type ClassificationType = 'r-sn' | 'cce-sn' | 'cce-sh';

interface MessageInputProps {
  onSend: (content: string, classificationType?: ClassificationType) => void;
  colorTheme?: ColorTheme;
  fontStyle?: FontStyle;
  showFileUpload?: boolean;
  autoTypeText?: string;
  showClassification?: boolean;
  defaultClassification?: ClassificationType;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  showTypingHint?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  bookmarkedAssistants?: string[];
  assistantType?: string;
}

export function MessageInput({
  onSend,
  colorTheme = 'light',
  fontStyle = 'modern',
  showFileUpload = false,
  autoTypeText,
  showClassification = false,
  defaultClassification = 'r-sn',
  value,
  onChange,
  disabled = false,
  showTypingHint = false,
  placeholder,
  autoFocus = false,
  bookmarkedAssistants = [],
  assistantType
}: MessageInputProps) {
  const [internalInput, setInternalInput] = useState('');

  // Support both controlled and uncontrolled modes
  const input = value !== undefined ? value : internalInput;
  const setInput = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
    setInternalInput(newValue);
  };

  const tools = [
    { id: 'web-search', name: 'Web Search', icon: Globe },
    { id: 'flowcharts-diagrams', name: 'Flowcharts and diagrams', icon: Workflow },
  ];

  const [selectedTools, setSelectedTools] = useState<string[]>(tools.map(t => t.id));
  const [selectedAssistants, setSelectedAssistants] = useState<string[]>(bookmarkedAssistants);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [isLibraryPopoverOpen, setIsLibraryPopoverOpen] = useState(false);
  const [isToolsPopoverOpen, setIsToolsPopoverOpen] = useState(false);
  const [isClassificationOpen, setIsClassificationOpen] = useState(false);
  const [classificationType, setClassificationType] = useState<ClassificationType>(defaultClassification);
  const [typedLength, setTypedLength] = useState(0);

  // Determine if input is disabled (either explicitly or waiting for response)
  const isInputDisabled = disabled;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const classificationOptions = [
    { id: 'r-sn' as ClassificationType, label: 'R/SN', fullName: 'Restricted / Sensitive Normal' },
    { id: 'cce-sn' as ClassificationType, label: 'C(CE)/SN', fullName: 'Confidential (Cloud-Eligible) / Sensitive Normal' },
  ];

  // Get all available assistants
  const allRoleAssistants = Object.values(roleBasedAssistants).flat();
  const allAvailableAssistants = [...topRatedAssistants, ...essentialAssistants, ...allRoleAssistants];

  // Remove duplicates by ID
  const uniqueAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );

  // Filter to only show bookmarked assistants
  const assistants = uniqueAssistants
    .filter(a => bookmarkedAssistants.includes(a.id))
    .map(a => ({ id: a.id, name: a.name }));

  const libraries = [
    { id: 'govtech-branding', name: 'GovTech branding guidelines', type: 'SharePoint' },
    { id: 'procurement-guidelines', name: 'Procurement Guidelines', type: 'SharePoint' },
    { id: 'ai-programme', name: 'AI Programme Resources', type: 'Google Drive' },
    { id: 'policy-documents', name: 'Policy Documents', type: 'AWS S3' },
  ];

  const handleSend = () => {
    if (input.trim()) {
      onSend(input, showClassification ? classificationType : undefined);
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

  const toggleAssistant = (assistantId: string) => {
    setSelectedAssistants(prev =>
      prev.includes(assistantId)
        ? prev.filter(id => id !== assistantId)
        : [...prev, assistantId]
    );
  };

  const toggleLibrary = (libraryId: string) => {
    setSelectedLibraries(prev =>
      prev.includes(libraryId)
        ? prev.filter(id => id !== libraryId)
        : [...prev, libraryId]
    );
  };

  // Focus input on mount if autoTypeText or autoFocus is present
  useEffect(() => {
    if (autoTypeText || autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoTypeText, autoFocus]);

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
        onSend(autoTypeText, showClassification ? classificationType : undefined);
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
    <div className="rounded-2xl border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-gray-500/20 bg-white">
      {/* Text input */}
      <div className="mb-2">
        <Textarea
          ref={inputRef}
          value={input}
          onChange={autoTypeText ? undefined : (e => setInput(e.target.value))}
          onKeyDown={handleTypingKeyDown}
          placeholder={placeholder || (autoTypeText ? "Type to continue..." : isInputDisabled ? "Waiting for response..." : "Ask me anything...")}
          className={`w-full min-h-[64px] max-h-[200px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-gray-900 text-base ${isInputDisabled ? 'text-gray-400' : ''}`}
          rows={1}
          disabled={isInputDisabled}
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="icon"
                  variant="ghost"
                  disabled={isInputDisabled}
                  className={`h-7 w-7 flex-shrink-0 ${isInputDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add files</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Tools Button - Only show for personal assistant, not custom assistants */}
          {!assistantType && (
            <TooltipProvider>
              <Tooltip>
                <DropdownMenu open={isInputDisabled ? false : isToolsPopoverOpen} onOpenChange={setIsToolsPopoverOpen}>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        disabled={isInputDisabled}
                        className={`h-7 w-7 flex-shrink-0 relative ${isInputDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        {(selectedTools.length + selectedAssistants.length) > 0 && (
                          <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                            {selectedTools.length + selectedAssistants.length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add tools</p>
                  </TooltipContent>
                  <DropdownMenuContent
                    className="w-64 p-0 z-50 bg-white dark:bg-gray-900 overflow-visible"
                    align="start"
                    side="top"
                    sideOffset={8}
                  >
                    <div className="p-3 border-b bg-white dark:bg-gray-900">
                      <h3 className="font-medium text-xs">Available Tools</h3>
                      <p className="text-xs text-muted-foreground">Select tools you would like the assistant to use if needed.</p>
                    </div>
                    <div className="p-2 bg-white dark:bg-gray-900">
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
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <Icon className="w-5 h-5 flex-shrink-0 text-gray-700" />
                            <span className="flex-1 text-left text-xs text-gray-900">{tool.name}</span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-gray-900" />
                            )}
                          </button>
                        );
                      })}

                      {/* Custom Assistants Submenu */}
                      <div className="relative group/assistants mt-1 border-t border-gray-200 pt-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Bot className="w-5 h-5 flex-shrink-0 text-gray-700" />
                          <span className="flex-1 text-left text-xs text-gray-900">Custom Assistants</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                        {/* Submenu */}
                        <div className="absolute left-full top-0 ml-1 w-56 bg-white border-2 border-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover/assistants:opacity-100 group-hover/assistants:visible transition-all z-[100]">
                          <div className="p-2">
                            {assistants.length === 0 ? (
                              <div className="px-3 py-4 text-center">
                                <p className="text-xs text-gray-500">
                                  Bookmark a custom assistant for it to appear here
                                </p>
                              </div>
                            ) : (
                              assistants.map((assistant) => {
                                const isSelected = selectedAssistants.includes(assistant.id);
                                return (
                                  <button
                                    key={assistant.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      toggleAssistant(assistant.id);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left"
                                  >
                                    <span className="flex-1 text-xs text-gray-900">{assistant.name}</span>
                                    {isSelected && (
                                      <Check className="w-4 h-4 text-gray-900" />
                                    )}
                                  </button>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Tooltip>
            </TooltipProvider>
          )
          }
        </div>

        <div className="flex items-center gap-1">
          {/* Classification Dropdown */}
          {showClassification && (
            <TooltipProvider>
              <DropdownMenu open={isClassificationOpen} onOpenChange={setIsClassificationOpen}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2 flex-shrink-0 gap-1 text-xs"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>{classificationOptions.find(c => c.id === classificationType)?.label}</span>
                        <ChevronDown className="w-3 h-3 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{classificationOptions.find(c => c.id === classificationType)?.fullName}</p>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent
                  className="w-64 p-0 z-50 bg-white dark:bg-gray-900"
                  align="end"
                  side="top"
                  sideOffset={8}
                >
                  <div className="p-3 border-b bg-white dark:bg-gray-900">
                    <h3 className="font-medium text-xs">Data Classification</h3>
                    <p className="text-xs text-muted-foreground">Select the classification level</p>
                  </div>
                  <div className="p-2 bg-white dark:bg-gray-900">
                    {classificationOptions.map((option) => {
                      const isSelected = classificationType === option.id;
                      return (
                        <DropdownMenuItem
                          key={option.id}
                          onClick={() => setClassificationType(option.id)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}
                        >
                          <Shield className="w-4 h-4 flex-shrink-0 text-gray-700" />
                          <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900">{option.label}</div>
                            <div className="text-[10px] text-gray-500">{option.fullName}</div>
                          </div>
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-gray-900" />
                          )}
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </TooltipProvider>
          )}

          <Button
            onClick={handleSend}
            disabled={!input.trim() || isInputDisabled}
            size="icon"
            className={`h-7 w-7 flex-shrink-0 rounded-full ${isInputDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300' : ''}`}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}