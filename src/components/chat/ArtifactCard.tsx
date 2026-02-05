import { FileText, Code, BarChart3, ClipboardList } from 'lucide-react';

interface ArtifactCardProps {
  title: string;
  description: string;
  fileType: string;
  onSelect: () => void;
}

function getFileIcon(fileType: string) {
  switch (fileType.toLowerCase()) {
    case 'document':
      return <FileText className="w-5 h-5" />;
    case 'code':
      return <Code className="w-5 h-5" />;
    case 'chart':
      return <BarChart3 className="w-5 h-5" />;
    case 'form':
      return <ClipboardList className="w-5 h-5" />;
    default:
      return <FileText className="w-5 h-5" />;
  }
}

export function ArtifactCard({ title, description, fileType, onSelect }: ArtifactCardProps) {
  return (
    <div>
      <button
        onClick={onSelect}
        className="inline-flex bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 hover:border-gray-400 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <div className="text-gray-500">
            {getFileIcon(fileType)}
          </div>
          <div>
            <div className="font-medium text-gray-900 text-sm">{title}</div>
            <div className="text-xs text-gray-500 mt-0.5">{description}</div>
          </div>
        </div>
      </button>
    </div>
  );
}

// Re-export for use in canvas panel
export { getFileIcon };
