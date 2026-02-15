import React from 'react';
import { Folder, Cloud, Database, HardDrive, Trash2, Pencil, FolderOpen, Upload, FileText, X } from 'lucide-react';
import { Button, TextInput, Select, Stack, Box, Group, Text, ActionIcon, Input } from '@mantine/core';
import type { DataSource, UploadedFile } from './LibraryManager';
import cls from './LibraryCard.module.css';

interface LibraryCardProps {
  source: DataSource;
  showDelete: boolean;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: 'name' | 'type' | 'path', value: string) => void;
}

export function LibraryCard({ source, showDelete, onRemove, onUpdate }: LibraryCardProps) {
  const [isEditingName, setIsEditingName] = React.useState(false);
  const [editedName, setEditedName] = React.useState(source.name);
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>(source.files || []);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleNameClick = () => {
    setIsEditingName(true);
    setEditedName(source.name);
  };

  const handleNameBlur = () => {
    setIsEditingName(false);
    if (editedName.trim()) {
      onUpdate(source.id, 'name', editedName.trim());
    } else {
      setEditedName(source.name);
    }
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setEditedName(source.name);
      setIsEditingName(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 30) {
      setEditedName(value);
    }
  };

  React.useEffect(() => {
    if (isEditingName && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingName]);

  const getInputWidth = () => {
    const length = editedName.length || 1;
    const charWidth = 8;
    const padding = 24;
    return Math.max(160, Math.min(length * charWidth + padding, 30 * charWidth + padding));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles: UploadedFile[] = Array.from(files).map(file => ({
        id: Date.now().toString() + Math.random().toString(),
        name: file.name,
        size: file.size,
        uploadedAt: new Date()
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    const newFiles = uploadedFiles.filter(f => f.id !== fileId);
    setUploadedFiles(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const typeOptions = [
    { value: 'sharepoint', label: 'SharePoint' },
    { value: 'gdrive', label: 'Google Drive' },
    { value: 'aws', label: 'AWS S3' },
    { value: 'local', label: 'Local' },
    { value: 'upload', label: 'Upload' },
  ];

  return (
    <Stack gap="lg" className={cls.card}>
      <Group justify="space-between" align="flex-start">
        <Box style={{ flexShrink: 0, minWidth: 160 }}>
          {isEditingName ? (
            <TextInput
              ref={inputRef}
              value={editedName}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              onKeyDown={handleNameKeyDown}
              maxLength={30}
              size="xs"
              style={{ width: `${getInputWidth()}px` }}
            />
          ) : (
            <button onClick={handleNameClick} className={cls.nameButton}>
              <FolderOpen size={16} color="var(--mantine-color-gray-5)" style={{ flexShrink: 0 }} />
              <Text size="sm" lineClamp={1}>{source.name}</Text>
              <Pencil size={14} color="var(--mantine-color-gray-5)" className={cls.editIcon} />
            </button>
          )}
        </Box>
        {showDelete && (
          <ActionIcon
            variant="subtle"
            color="red"
            size="sm"
            onClick={() => onRemove(source.id)}
          >
            <Trash2 size={16} />
          </ActionIcon>
        )}
      </Group>

      <Box className={cls.grid}>
        <Box>
          <Input.Label size="sm">Type</Input.Label>
          <Select
            value={source.type}
            onChange={(value) => value && onUpdate(source.id, 'type', value)}
            data={typeOptions}
            mt="sm"
            size="sm"
          />
        </Box>

        <Box>
          {source.type === 'upload' ? (
            <Box>
              <Input.Label size="sm">Files</Input.Label>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                mt="sm"
                fullWidth
                leftSection={<Upload size={16} />}
                size="sm"
              >
                Upload Files
              </Button>
            </Box>
          ) : (
            <Box>
              <Input.Label size="sm" htmlFor={`path-${source.id}`}>
                URL or Connection
              </Input.Label>
              <TextInput
                id={`path-${source.id}`}
                value={source.path}
                onChange={(e) => onUpdate(source.id, 'path', e.currentTarget.value)}
                placeholder={
                  source.type === 'sharepoint' ? 'https://yourorg.sharepoint.com' :
                    source.type === 'gdrive' ? 'https://drive.google.com/...' :
                      source.type === 'aws' ? 's3://bucket-name/path' :
                        '/Users/username/documents'
                }
                mt="sm"
                size="sm"
              />
            </Box>
          )}
        </Box>
      </Box>

      {source.type === 'upload' && (
        <Box mt="lg">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          {uploadedFiles.length > 0 ? (
            <Stack gap="sm">
              {uploadedFiles.map((file) => (
                <Box key={file.id} className={cls.fileRow}>
                  <Box className={cls.fileInfo}>
                    <FileText size={16} color="var(--mantine-color-gray-5)" style={{ flexShrink: 0 }} />
                    <Box className={cls.fileDetails}>
                      <Text size="sm" lineClamp={1}>{file.name}</Text>
                      <Text size="xs" c="gray.5">{formatFileSize(file.size)}</Text>
                    </Box>
                  </Box>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="sm"
                    onClick={() => handleRemoveFile(file.id)}
                  >
                    <X size={16} />
                  </ActionIcon>
                </Box>
              ))}
            </Stack>
          ) : (
            <Text size="sm" c="gray.5" fs="italic" py="sm">
              No files uploaded yet
            </Text>
          )}
        </Box>
      )}
    </Stack>
  );
}
