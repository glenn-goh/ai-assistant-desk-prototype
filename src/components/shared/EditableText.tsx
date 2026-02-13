import React, { useState, useEffect } from 'react';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  className?: string;
  inputClassName?: string;
  as?: 'span' | 'h2';
  /** Custom display render. Receives value and onDoubleClick to trigger editing. */
  renderDisplay?: (props: { value: string; onDoubleClick: () => void }) => React.ReactNode;
  /** External editing control — set true to programmatically start editing. */
  editing?: boolean;
  onEditingChange?: (editing: boolean) => void;
}

export function EditableText({
  value,
  onSave,
  className = 'text-sm font-medium text-gray-900 cursor-pointer',
  inputClassName = 'text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400',
  as: Tag = 'span',
  renderDisplay,
  editing: externalEditing,
  onEditingChange,
}: EditableTextProps) {
  const [internalEditing, setInternalEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const isEditing = externalEditing !== undefined ? externalEditing : internalEditing;

  const setIsEditing = (val: boolean) => {
    setInternalEditing(val);
    onEditingChange?.(val);
  };

  // Sync editValue when external editing starts
  useEffect(() => {
    if (externalEditing && !internalEditing) {
      setEditValue(value);
      setInternalEditing(true);
    } else if (!externalEditing && internalEditing && externalEditing !== undefined) {
      setInternalEditing(false);
    }
  }, [externalEditing]);

  const startEditing = () => {
    setEditValue(value);
    setIsEditing(true);
  };

  const save = () => {
    if (editValue.trim()) {
      onSave(editValue.trim());
    }
    setIsEditing(false);
  };

  const cancel = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === 'Enter') save();
          else if (e.key === 'Escape') cancel();
        }}
        onClick={(e) => e.stopPropagation()}
        className={inputClassName}
        autoFocus
      />
    );
  }

  if (renderDisplay) {
    return <>{renderDisplay({ value, onDoubleClick: startEditing })}</>;
  }

  return (
    <Tag
      className={className}
      onDoubleClick={startEditing}
      title="Double-click to rename"
    >
      {value}
    </Tag>
  );
}
