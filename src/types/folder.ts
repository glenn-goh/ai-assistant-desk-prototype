export interface FolderFile {
  id: string;
  name: string;
  size: number;
  uploadedAt: Date;
}

export interface Folder {
  id: string;
  name: string;
  createdAt: Date;
  chatIds: string[];
  customInstructions?: string;
  files?: FolderFile[];
  memoriesScope: 'folder-only' | 'include-external';
}
