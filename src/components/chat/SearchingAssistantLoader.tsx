import { Box, Loader, Text } from '@mantine/core';
import classes from './SearchingAssistantLoader.module.css';

export function SearchingAssistantLoader() {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.badge}>
        <Loader size={16} color="gray.5" />
        <Text span size="xs">Searching assistants...</Text>
      </Box>
    </Box>
  );
}
