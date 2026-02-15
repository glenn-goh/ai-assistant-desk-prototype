import { Badge } from '@mantine/core';
import classes from './ClassificationBadge.module.css';

interface ClassificationBadgeProps {
  classification: string;
  size?: 'sm' | 'md';
  className?: string;
  /** Override the displayed label (e.g. when source data uses a different format). */
  label?: string;
}

export function ClassificationBadge({
  classification,
  size = 'md',
  className,
  label,
}: ClassificationBadgeProps) {
  const isDark = classification.includes('C(CE)') || classification.includes('CCE');
  const displayLabel = label || classification.replace('C(CE)/SN', 'CCE/SN');

  return (
    <Badge
      size={size === 'sm' ? 'xs' : 'sm'}
      variant="outline"
      color={isDark ? 'gray.3' : 'gray.2'}
      radius="xl"
      className={`${classes.badge}${className ? ` ${className}` : ''}`}
      styles={{
        root: {
          color: 'var(--mantine-color-gray-9)',
          borderColor: isDark ? 'var(--mantine-color-gray-3)' : 'var(--mantine-color-gray-2)',
          backgroundColor: isDark ? 'var(--mantine-color-gray-1)' : 'var(--mantine-color-gray-0)',
        },
      }}
    >
      {displayLabel}
    </Badge>
  );
}
