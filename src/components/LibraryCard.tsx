import React from 'react';
import { Folder, Cloud, Database, HardDrive, Trash2, Pencil, FolderOpen, Upload, FileText, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import type { DataSource, UploadedFile } from './LibraryManager';

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

  // Calculate width based on text content
  const getInputWidth = () => {
    const length = editedName.length || 1;
    const charWidth = 8; // approximate character width in pixels
    const padding = 24; // padding
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

  return (
    <div className="space-y-4 p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50/50 dark:bg-slate-900/20">
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0" style={{ minWidth: '160px' }}>
          {isEditingName ? (
            <Input
              ref={inputRef}
              value={editedName}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              onKeyDown={handleNameKeyDown}
              maxLength={30}
              className="h-8 px-2 bg-transparent border-slate-300 dark:border-slate-700"
              style={{ width: `${getInputWidth()}px` }}
            />
          ) : (
            <button
              onClick={handleNameClick}
              className="flex items-center gap-2 group hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded transition-colors"
              style={{ minWidth: '160px' }}
            >
              <FolderOpen className="w-4 h-4 text-slate-600 dark:text-slate-400 flex-shrink-0" />
              <span className="truncate">{source.name}</span>
              <Pencil className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </button>
          )}
        </div>
        {showDelete && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(source.id)}
            className="ml-2 h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
          <Label htmlFor={`type-${source.id}`} className="text-sm">Type</Label>
          <Select
            value={source.type}
            onValueChange={(value: 'sharepoint' | 'local' | 'aws' | 'gdrive' | 'upload') => onUpdate(source.id, 'type', value)}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sharepoint">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  SharePoint
                </div>
              </SelectItem>
              <SelectItem value="gdrive">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4" />
                  Google Drive
                </div>
              </SelectItem>
              <SelectItem value="aws">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  AWS S3
                </div>
              </SelectItem>
              <SelectItem value="local">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" />
                  Local
                </div>
              </SelectItem>
              <SelectItem value="upload">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-7">
          {source.type === 'upload' ? (
            <div>
              <Label className="text-sm">Files</Label>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="mt-2 w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
              </Button>
            </div>
          ) : (
            <>
              <Label htmlFor={`path-${source.id}`} className="text-sm">
                URL or Connection
              </Label>
              <Input
                id={`path-${source.id}`}
                value={source.path}
                onChange={(e) => onUpdate(source.id, 'path', e.target.value)}
                placeholder={
                  source.type === 'sharepoint' ? 'https://yourorg.sharepoint.com' :
                    source.type === 'gdrive' ? 'https://drive.google.com/...' :
                      source.type === 'aws' ? 's3://bucket-name/path' :
                        '/Users/username/documents'
                }
                className="mt-2 bg-transparent border-slate-300 dark:border-slate-700"
              />
            </>
          )}
        </div>
      </div>

      {source.type === 'upload' && (
        <div className="mt-4">
          <Input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
          {uploadedFiles.length > 0 ? (
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between gap-3 bg-white dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{file.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {formatFileSize(file.size)}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveFile(file.id)}
                    className="h-8 w-8 p-0 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-slate-500 dark:text-slate-400 italic py-2">
              No files uploaded yet
            </div>
          )}
        </div>
      )}
    </div>
  );
}