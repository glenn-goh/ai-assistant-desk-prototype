import { Box, Text } from '@mantine/core';
import classes from './AssistantSwitchBadge.module.css';

interface AssistantSwitchBadgeProps {
  message: string;
}

export function AssistantSwitchBadge({ message }: AssistantSwitchBadgeProps) {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.badge}>
        <Text span c="gray.5" size="xs">Switched to</Text>
        <svg className={classes.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <Text span fw={600} c="gray.9" size="xs">{message}</Text>
      </Box>
    </Box>
  );
}
