import { Box, Stack, Text, Title, Code, Group } from '@mantine/core';

export default { title: 'Theme / Radius' };

const RADII = [
  { name: 'xs', px: '2px' },
  { name: 'sm', px: '4px' },
  { name: 'md', px: '6px' },
  { name: 'lg', px: '8px (default)' },
  { name: 'xl', px: '12px' },
] as const;

export const RadiusScale = () => (
  <Stack p="xl">
    <Title order={2}>Border Radius</Title>
    <Text c="gray.5" size="sm" mb="md">
      Default radius is "lg" (8px) — matches the app's rounded-lg standard.
    </Text>
    <Group gap="xl" align="flex-start">
      {RADII.map(({ name, px }) => (
        <Stack key={name} gap={4} align="center">
          <Box
            bg="gray.9"
            h={64}
            w={64}
            style={{ borderRadius: `var(--mantine-radius-${name})` }}
          />
          <Code>{name}</Code>
          <Text size="xs" c="gray.5">{px}</Text>
        </Stack>
      ))}
    </Group>
  </Stack>
);

export const RadiusWithBorder = () => (
  <Stack p="xl">
    <Title order={2}>Radius with Borders</Title>
    <Text c="gray.5" size="sm" mb="md">
      Lo-fi style uses thick borders (2px) with radius.
    </Text>
    <Group gap="xl" align="flex-start">
      {RADII.map(({ name, px }) => (
        <Stack key={name} gap={4} align="center">
          <Box
            bg="white"
            h={64}
            w={64}
            style={{
              borderRadius: `var(--mantine-radius-${name})`,
              border: '2px solid var(--mantine-color-gray-9)',
            }}
          />
          <Code>{name}</Code>
          <Text size="xs" c="gray.5">{px}</Text>
        </Stack>
      ))}
    </Group>
  </Stack>
);
