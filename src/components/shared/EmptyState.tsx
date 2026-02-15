import type { LucideIcon } from 'lucide-react';
import { Stack, Text, Title } from '@mantine/core';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  compact?: boolean;
}

export function EmptyState({ icon: Icon, title, description, action, compact }: EmptyStateProps) {
  if (compact) {
    return (
      <Stack align="center" justify="center" py="xl" gap={4}>
        <Text size="sm" c="gray.5">{title}</Text>
        {description && <Text size="xs" c="gray.4">{description}</Text>}
        {action}
      </Stack>
    );
  }

  return (
    <Stack align="center" py="xl" gap="sm">
      {Icon && <Icon size={48} color="var(--mantine-color-gray-3)" />}
      <Title order={3} size="lg" fw={500} c="gray.9">{title}</Title>
      {description && <Text size="sm" c="gray.5">{description}</Text>}
      {action}
    </Stack>
  );
}
