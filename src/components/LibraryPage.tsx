import { FolderOpen, FileText, Bot, Rocket, Gift, File, Upload, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import { LibraryManager, type DataSource } from './LibraryManager';
import { useState } from 'react';

interface Library {
  id: string;
  name: string;
  description: string;
  documentCount: number;
  lastModified: string;
  emoji: string;
  color: string;
}

const libraries: Library[] = [
  {
    id: 'ai-bots',
    name: 'AI Bots 🤖',
    description: 'Documentation for custom AI assistants and automation workflows',
    documentCount: 12,
    lastModified: '1 week ago',
    emoji: '🤖',
    color: 'bg-purple-500',
  },
  {
    id: 'ai-programme',
    name: 'AI Programme 🚀',
    description: 'AI implementation roadmaps, training materials, and guidelines',
    documentCount: 18,
    lastModified: '3 days ago',
    emoji: '🚀',
    color: 'bg-green-500',
  },
  {
    id: 'christmas-party',
    name: 'Christmas Party 🎄',
    description: 'Event planning documents, vendor contacts, and schedules',
    documentCount: 8,
    lastModified: '5 days ago',
    emoji: '🎄',
    color: 'bg-red-500',
  },
  {
    id: 'transcribe',
    name: 'Transcribe 📝',
    description: 'Meeting transcriptions, audio files, and related documents',
    documentCount: 24,
    lastModified: '2 days ago',
    emoji: '📝',
    color: 'bg-blue-500',
  },
];

interface LibraryPageProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
}

export function LibraryPage({ colorTheme, fontStyle }: LibraryPageProps) {
  const theme = getThemeClasses(colorTheme);
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
    <div className={`flex-1 flex flex-col bg-gray-100 ${font.base}`}>
      {/* Header */}
      <div className="flex items-center gap-2 p-4 bg-gray-100">
        <h1 className="font-semibold text-gray-900" style={{ fontSize: '18px' }}>Library</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <LibraryManager
            dataSources={dataSources}
            onAdd={handleAddDataSource}
            onRemove={handleRemoveDataSource}
            onUpdate={handleUpdateDataSource}
            showDescription={true}
          />
        </div>
      </div>
    </div>
  );
}