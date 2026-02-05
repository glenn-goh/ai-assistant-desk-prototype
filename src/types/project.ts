export interface ProjectFile {
  id: string;
  name: string;
  size: number;
  uploadedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  chatIds: string[];
  customInstructions?: string;
  files?: ProjectFile[];
  memoriesScope: 'project-only' | 'include-external';
}
