import { FileText, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface FileDownloadProps {
  fileName: string;
  fileType?: string;
}

export function FileDownload({ fileName, fileType = 'doc' }: FileDownloadProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
      <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
      <span className="text-[10px] text-gray-700 dark:text-gray-300 truncate max-w-[150px]">{fileName}</span>
      <Download className="w-3 h-3 text-gray-500 dark:text-gray-400" />
    </div>
  );
}