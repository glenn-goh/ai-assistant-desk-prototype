import type { LucideIcon } from 'lucide-react';
import { Box, Text, Title } from '@mantine/core';
import { IconContainer } from './IconContainer';
import classes from './ListItemRow.module.css';

interface ListItemRowProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
  rightContent?: React.ReactNode;
  className?: string;
}

export function ListItemRow({ icon, title, subtitle, onClick, rightContent, className }: ListItemRowProps) {
  return (
    <Box
      onClick={onClick}
      className={`${classes.row}${className ? ` ${className}` : ''}`}
    >
      <IconContainer icon={icon} size="md" />
      <Box className={classes.content}>
        <Title order={3} size="md" fw={500} c="gray.9" lineClamp={1}>{title}</Title>
        <Text size="sm" c="gray.5" lineClamp={1}>{subtitle}</Text>
      </Box>
      {rightContent}
    </Box>
  );
}
