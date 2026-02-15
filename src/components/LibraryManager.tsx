import { Plus } from 'lucide-react';
import { Button, Stack, Text } from '@mantine/core';
import { LibraryCard } from './LibraryCard';
import cls from './LibraryManager.module.css';

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
  return (
    <Stack gap="xl">
      {showDescription && (
        <Text size="sm" c="gray.5">
          Create a library to organize documents by topic or project. Your AI assistant will reference these documents to provide contextual responses. You can connect cloud sources or upload files directly.
        </Text>
      )}

      <Stack gap="lg">
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
          className={cls.addButton}
          leftSection={<Plus size={16} />}
        >
          Add Another Library
        </Button>
      </Stack>
    </Stack>
  );
}
