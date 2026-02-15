import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { ArrowUp, Paperclip, SlidersHorizontal, Shield, ChevronDown, ChevronRight, Globe, Bot, Check, Workflow } from 'lucide-react';
import { ActionIcon, Tooltip, Text, Box, Menu } from '@mantine/core';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { essentialAssistants, topRatedAssistants, roleBasedAssistants } from '../data/assistants';
import cls from './MessageInput.module.css';

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
  toolAssistants?: string[];
  assistantType?: string;
  onNavigateToExplore?: () => void;
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
  toolAssistants = [],
  assistantType,
  onNavigateToExplore
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
  const [selectedAssistants, setSelectedAssistants] = useState<string[]>(toolAssistants);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [isToolsPopoverOpen, setIsToolsPopoverOpen] = useState(false);
  const [isClassificationOpen, setIsClassificationOpen] = useState(false);
  const [classificationType, setClassificationType] = useState<ClassificationType>(defaultClassification);
  const [typedLength, setTypedLength] = useState(0);

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
  const uniqueAssistants = Array.from(
    new Map(allAvailableAssistants.map(a => [a.id, a])).values()
  );
  const assistants = uniqueAssistants
    .filter(a => toolAssistants.includes(a.id))
    .map(a => ({ id: a.id, name: a.name }));

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

  // Focus input on mount if autoTypeText or autoFocus is present
  useEffect(() => {
    if (autoTypeText || autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoTypeText, autoFocus]);

  // Sync selectedAssistants with toolAssistants
  useEffect(() => {
    setSelectedAssistants(toolAssistants);
  }, [toolAssistants]);

  // Handle typing animation like ChatSimulator
  const handleTypingKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!autoTypeText) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
      return;
    }

    e.preventDefault();

    if (e.key === 'Enter') {
      setInput(autoTypeText);
      setTypedLength(autoTypeText.length);

      setTimeout(() => {
        onSend(autoTypeText, showClassification ? classificationType : undefined);
        setInput('');
        setTypedLength(0);
      }, 100);
    } else if (e.key === 'Backspace') {
      if (typedLength > 0) {
        const newLength = typedLength - 1;
        setTypedLength(newLength);
        setInput(autoTypeText.substring(0, newLength));
      }
    } else if (e.key.length === 1) {
      if (typedLength < autoTypeText.length) {
        const newLength = typedLength + 1;
        setTypedLength(newLength);
        setInput(autoTypeText.substring(0, newLength));
      }
    }
  };

  return (
    <Box className={cls.wrapper}>
      {/* Text input */}
      <Box className={cls.textareaWrapper}>
        <textarea
          ref={inputRef}
          value={input}
          onChange={autoTypeText ? undefined : (e) => setInput(e.target.value)}
          onKeyDown={handleTypingKeyDown}
          placeholder={placeholder || (autoTypeText ? "Type to continue..." : isInputDisabled ? "Waiting for response..." : "Ask me anything...")}
          className={cls.textarea}
          rows={1}
          disabled={isInputDisabled}
        />
      </Box>

      {/* File Attach, Library, Tools, and Send buttons */}
      <Box className={cls.toolbar}>
        <Box className={cls.toolbarLeft}>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          <Tooltip label="Add files" position="top" withArrow>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="sm"
              className={`${cls.iconButton} ${isInputDisabled ? cls.iconButtonDisabled : ''}`}
              onClick={() => fileInputRef.current?.click()}
              disabled={isInputDisabled}
            >
              <Paperclip size={16} />
            </ActionIcon>
          </Tooltip>

          {/* Tools Button - Only show for personal assistant, not custom assistants */}
          {!assistantType && (
            <Menu
              opened={isInputDisabled ? false : isToolsPopoverOpen}
              onChange={setIsToolsPopoverOpen}
              position="top-start"
              offset={8}
              withinPortal
              closeOnItemClick={false}
            >
              <Tooltip label="Add tools" position="top" withArrow>
                <Menu.Target>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="sm"
                    className={`${cls.iconButton} ${isInputDisabled ? cls.iconButtonDisabled : ''}`}
                    disabled={isInputDisabled}
                    style={{ position: 'relative' }}
                  >
                    <SlidersHorizontal size={14} />
                    {(selectedTools.length + selectedAssistants.length) > 0 && (
                      <Box className={cls.toolsBadge}>
                        {selectedTools.length + selectedAssistants.length}
                      </Box>
                    )}
                  </ActionIcon>
                </Menu.Target>
              </Tooltip>
              <Menu.Dropdown style={{ width: 256, padding: 0 }}>
                <Box className={cls.toolsMenuHeader}>
                  <Text size="xs" fw={500}>Available Tools</Text>
                  <Text size="xs" c="gray.5">Select tools you would like the assistant to use if needed.</Text>
                </Box>
                <Box className={cls.toolsMenuBody}>
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
                        className={cls.toolItem}
                      >
                        <Icon size={20} color="var(--mantine-color-gray-7)" style={{ flexShrink: 0 }} />
                        <Text size="xs" c="gray.9" style={{ flex: 1, textAlign: 'left' }}>{tool.name}</Text>
                        {isSelected && <Check size={16} color="var(--mantine-color-gray-9)" />}
                      </button>
                    );
                  })}

                  {/* Custom Assistants Submenu */}
                  <Box className={cls.assistantsSection}>
                    <button type="button" className={cls.assistantsTrigger}>
                      <Bot size={20} color="var(--mantine-color-gray-7)" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="gray.9" style={{ flex: 1, textAlign: 'left' }}>Custom Assistants</Text>
                      <Text size="xs" c="gray.4">({selectedAssistants.length}/3)</Text>
                      <ChevronRight size={16} color="var(--mantine-color-gray-4)" />
                    </button>
                    <Box className={cls.submenu}>
                      <Box className={cls.submenuBody}>
                        {assistants.length === 0 ? (
                          <Box style={{ padding: 'var(--mantine-spacing-sm) var(--mantine-spacing-md)', textAlign: 'center' }}>
                            <Text size="xs" c="gray.5">
                              Add an assistant from{' '}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setIsToolsPopoverOpen(false);
                                  onNavigateToExplore?.();
                                }}
                                className={cls.exploreLink}
                              >
                                Explore Assistants
                              </button>{' '}
                              to your tools to see it here
                            </Text>
                          </Box>
                        ) : (
                          assistants.map((assistant) => {
                            const isSelected = selectedAssistants.includes(assistant.id);
                            const isDisabled = !isSelected && selectedAssistants.length >= 3;
                            return (
                              <button
                                key={assistant.id}
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (!isDisabled) {
                                    toggleAssistant(assistant.id);
                                  }
                                }}
                                disabled={isDisabled}
                                className={`${cls.assistantItem} ${isDisabled ? cls.assistantItemDisabled : ''}`}
                              >
                                <Text size="xs" c="gray.9" style={{ flex: 1 }}>{assistant.name}</Text>
                                {isSelected && <Check size={16} color="var(--mantine-color-gray-9)" />}
                              </button>
                            );
                          })
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Menu.Dropdown>
            </Menu>
          )}
        </Box>

        <Box className={cls.toolbarRight}>
          {/* Classification Dropdown */}
          {showClassification && (
            <Menu
              opened={isClassificationOpen}
              onChange={setIsClassificationOpen}
              position="top-end"
              offset={8}
              withinPortal
            >
              <Tooltip label={classificationOptions.find(c => c.id === classificationType)?.fullName} position="top" withArrow>
                <Menu.Target>
                  <button
                    type="button"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      height: 28,
                      padding: '0 8px',
                      fontSize: 'var(--mantine-font-size-xs)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: 'var(--mantine-radius-sm)',
                      flexShrink: 0,
                    }}
                  >
                    <Shield size={14} />
                    <span>{classificationOptions.find(c => c.id === classificationType)?.label}</span>
                    <ChevronDown size={12} style={{ opacity: 0.5 }} />
                  </button>
                </Menu.Target>
              </Tooltip>
              <Menu.Dropdown style={{ width: 256, padding: 0 }}>
                <Box className={cls.classMenuHeader}>
                  <Text size="xs" fw={500}>Data Classification</Text>
                  <Text size="xs" c="gray.5">Select the classification level</Text>
                </Box>
                <Box className={cls.classMenuBody}>
                  {classificationOptions.map((option) => {
                    const isSelected = classificationType === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => {
                          setClassificationType(option.id);
                          setIsClassificationOpen(false);
                        }}
                        className={`${cls.classOption} ${isSelected ? cls.classOptionSelected : ''}`}
                      >
                        <Shield size={16} color="var(--mantine-color-gray-7)" style={{ flexShrink: 0 }} />
                        <Box style={{ flex: 1 }}>
                          <Text size="xs" fw={500} c="gray.9">{option.label}</Text>
                          <Text size="xs" c="gray.5" style={{ fontSize: 10 }}>{option.fullName}</Text>
                        </Box>
                        {isSelected && <Box className={cls.classOptionDot} />}
                      </button>
                    );
                  })}
                </Box>
              </Menu.Dropdown>
            </Menu>
          )}

          <ActionIcon
            onClick={handleSend}
            disabled={!input.trim() || isInputDisabled}
            size="sm"
            className={`${cls.sendButton} ${(!input.trim() || isInputDisabled) ? cls.sendButtonDisabled : ''}`}
          >
            <ArrowUp size={14} />
          </ActionIcon>
        </Box>
      </Box>
    </Box>
  );
}
