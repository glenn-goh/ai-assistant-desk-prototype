import { FileText, Download } from 'lucide-react';
import classes from './FileDownload.module.css';

interface FileDownloadProps {
  fileName: string;
  fileType?: string;
}

export function FileDownload({ fileName, fileType = 'doc' }: FileDownloadProps) {
  return (
    <div className={classes.wrapper}>
      <FileText size={14} color="var(--mantine-color-gray-5)" />
      <span className={classes.fileName}>{fileName}</span>
      <Download size={12} color="var(--mantine-color-gray-5)" />
    </div>
  );
}
