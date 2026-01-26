import React from 'react';
import { Plus, Folder, Cloud, Database, HardDrive, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LibraryCard } from './LibraryCard';

export interface DataSource {
  id: string;
  name: string;
  type: 'sharepoint' | 'local' | 'aws' | 'gdrive' | 'upload';
  path: string;
  enabled: boolean;
  files?: UploadedFile[];
}

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  uploadedAt: Date;
}

interface LibraryManagerProps {
  dataSources: DataSource[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: 'name' | 'type' | 'path', value: string) => void;
  showDescription?: boolean;
}

export function LibraryManager({ 
  dataSources, 
  onAdd, 
  onRemove, 
  onUpdate,
  showDescription = true 
}: LibraryManagerProps) {
  const getIconForType = (type: string) => {
    switch (type) {
      case 'sharepoint': return <Database className="w-4 h-4" />;
      case 'local': return <Folder className="w-4 h-4" />;
      case 'aws': return <Cloud className="w-4 h-4" />;
      case 'gdrive': return <HardDrive className="w-4 h-4" />;
      default: return <Folder className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {showDescription && (
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Create a library to organize documents by topic or project. Your AI assistant will reference these documents to provide contextual responses. You can connect cloud sources or upload files directly.
        </p>
      )}

      <div className="space-y-4">
        {dataSources.map((source) => (
          <LibraryCard
            key={source.id}
            source={source}
            showDelete={dataSources.length > 1}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        ))}

        <Button
          variant="outline"
          onClick={onAdd}
          className="w-full border-dashed border-2 hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-600 dark:text-slate-400"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Another Library
        </Button>
      </div>
    </div>
  );
}