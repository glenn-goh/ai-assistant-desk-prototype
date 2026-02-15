import type { LucideIcon } from 'lucide-react';
import { Box } from '@mantine/core';
import classes from './IconContainer.module.css';

const iconPixels = { sm: 16, md: 20, lg: 24 } as const;

interface IconContainerProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  iconClassName?: string;
}

export function IconContainer({ icon: Icon, size = 'md', className, iconClassName }: IconContainerProps) {
  return (
    <Box className={`${classes.container} ${classes[size]}${className ? ` ${className}` : ''}`}>
      <Icon size={iconPixels[size]} color="var(--mantine-color-gray-7)" className={iconClassName} />
    </Box>
  );
}
