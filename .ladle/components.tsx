import '@mantine/core/styles.css';
import type { GlobalProvider } from '@ladle/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';

export const Provider: GlobalProvider = ({ children }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
