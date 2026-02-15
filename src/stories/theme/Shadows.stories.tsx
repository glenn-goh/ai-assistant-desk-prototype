import { Box, Stack, Text, Title, Code, Group } from '@mantine/core';

export default { title: 'Theme / Shadows' };

const SHADOWS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const ShadowScale = () => (
  <Stack p="xl">
    <Title order={2}>Shadows</Title>
    <Text c="gray.5" size="sm" mb="md">
      Subtle shadows used sparingly in the lo-fi aesthetic.
    </Text>
    <Group gap="xl" align="flex-start">
      {SHADOWS.map((name) => (
        <Stack key={name} gap={4} align="center">
          <Box
            bg="white"
            h={80}
            w={80}
            shadow={name}
            style={{ borderRadius: 'var(--mantine-radius-lg)' }}
          />
          <Code>{name}</Code>
        </Stack>
      ))}
    </Group>
  </Stack>
);

export const ShadowsOnCards = () => (
  <Stack p="xl">
    <Title order={2}>Shadows on Cards</Title>
    <Text c="gray.5" size="sm" mb="md">
      How shadows look on card-like containers.
    </Text>
    <Group gap="xl" align="flex-start">
      {SHADOWS.map((name) => (
        <Stack key={name} gap={4} align="center">
          <Box
            bg="white"
            p="lg"
            w={140}
            shadow={name}
            style={{
              borderRadius: 'var(--mantine-radius-lg)',
              border: '1px solid var(--mantine-color-gray-3)',
            }}
          >
            <Text size="sm" fw={600} c="gray.9">Card title</Text>
            <Text size="xs" c="gray.5" mt={4}>Description text here</Text>
          </Box>
          <Code>{name}</Code>
        </Stack>
      ))}
    </Group>
  </Stack>
);
