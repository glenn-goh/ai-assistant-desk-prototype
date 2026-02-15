import { FileText, Code, BarChart3, ClipboardList } from 'lucide-react';
import { Box, Text, UnstyledButton } from '@mantine/core';
import classes from './ArtifactCard.module.css';

interface ArtifactCardProps {
  title: string;
  description: string;
  fileType: string;
  onSelect: () => void;
}

function getFileIcon(fileType: string) {
  const size = 20;
  switch (fileType.toLowerCase()) {
    case 'document':
      return <FileText size={size} />;
    case 'code':
      return <Code size={size} />;
    case 'chart':
      return <BarChart3 size={size} />;
    case 'form':
      return <ClipboardList size={size} />;
    default:
      return <FileText size={size} />;
  }
}

export function ArtifactCard({ title, description, fileType, onSelect }: ArtifactCardProps) {
  return (
    <Box>
      <UnstyledButton onClick={onSelect} className={classes.card}>
        <Text c="gray.5">{getFileIcon(fileType)}</Text>
        <Box>
          <Text size="sm" fw={500} c="gray.9">{title}</Text>
          <Text size="xs" c="gray.5" mt={2}>{description}</Text>
        </Box>
      </UnstyledButton>
    </Box>
  );
}

// Re-export for use in canvas panel
export { getFileIcon };
