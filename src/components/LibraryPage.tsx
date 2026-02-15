import { useState } from 'react';
import { Title, Box } from '@mantine/core';
import { LibraryManager, type DataSource } from './LibraryManager';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getFontClasses } from '../lib/theme-utils';
import cls from './LibraryPage.module.css';

interface LibraryPageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function LibraryPage({ colorTheme, fontStyle }: LibraryPageProps) {
  const font = getFontClasses(fontStyle);

  // Initialize with some example data sources
  const [dataSources, setDataSources] = useState<DataSource[]>([
    {
      id: '1',
      name: 'GovTech branding guidelines',
      type: 'upload',
      path: '',
      enabled: true,
      files: [
        {
          id: 'file-1',
          name: 'GovTech_Brand_Guidelines_2024.pdf',
          size: 2458624, // 2.4 MB
          uploadedAt: new Date(Date.now() - 86400000 * 3) // 3 days ago
        },
        {
          id: 'file-2',
          name: 'Logo_Usage_Guidelines.pdf',
          size: 1536000, // 1.5 MB
          uploadedAt: new Date(Date.now() - 86400000 * 7) // 7 days ago
        }
      ]
    },
    {
      id: '2',
      name: 'Procurement Guidelines',
      type: 'sharepoint',
      path: '',
      enabled: true
    },
    {
      id: '3',
      name: 'AI Programme Resources',
      type: 'gdrive',
      path: 'https://drive.google.com/drive/folders/ai-programme',
      enabled: true
    },
    {
      id: '4',
      name: 'Policy Documents',
      type: 'aws',
      path: 's3://gov-docs/policy',
      enabled: true
    }
  ]);

  const handleAddDataSource = () => {
    setDataSources([
      ...dataSources,
      {
        id: Date.now().toString(),
        name: 'New Library',
        type: 'sharepoint',
        path: '',
        enabled: true
      }
    ]);
  };

  const handleRemoveDataSource = (id: string) => {
    setDataSources(dataSources.filter(ds => ds.id !== id));
  };

  const handleUpdateDataSource = (id: string, field: 'name' | 'type' | 'path', value: string) => {
    setDataSources(dataSources.map(ds =>
      ds.id === id ? { ...ds, [field]: value } : ds
    ));
  };

  return (
    <Box className={cls.page} style={font.base}>
      {/* Header */}
      <Box className={cls.header}>
        <Title order={3} size="h4">Library</Title>
      </Box>

      {/* Content */}
      <Box className={cls.scrollArea}>
        <Box className={cls.content}>
          <LibraryManager
            dataSources={dataSources}
            onAdd={handleAddDataSource}
            onRemove={handleRemoveDataSource}
            onUpdate={handleUpdateDataSource}
            showDescription={true}
          />
        </Box>
      </Box>
    </Box>
  );
}
