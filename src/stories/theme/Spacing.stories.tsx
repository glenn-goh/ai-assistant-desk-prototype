import { Box, Group, Stack, Text, Title, Code } from '@mantine/core';

export default { title: 'Theme / Spacing' };

const SPACINGS = [
  { name: 'xs' as const, px: '4px', tailwind: 'gap-1, p-1' },
  { name: 'sm' as const, px: '8px', tailwind: 'gap-2, p-2' },
  { name: 'md' as const, px: '12px', tailwind: 'gap-3, p-3' },
  { name: 'lg' as const, px: '16px', tailwind: 'gap-4, p-4' },
  { name: 'xl' as const, px: '24px', tailwind: 'gap-6, p-6' },
] as const;

export const SpacingScale = () => (
  <Stack p="xl">
    <Title order={2}>Spacing Scale</Title>
    <Text c="gray.5" size="sm" mb="md">
      Used for padding, margin, and gap. Based on 4px multiples.
    </Text>
    <Stack gap="lg">
      {SPACINGS.map(({ name, px, tailwind }) => (
        <Group key={name} gap="xl" align="center">
          <Box w={40}>
            <Code>{name}</Code>
          </Box>
          <Box w={40}>
            <Text size="xs" c="gray.5">{px}</Text>
          </Box>
          <Box
            bg="gray.9"
            h={20}
            w={name}
            style={{ borderRadius: 'var(--mantine-radius-sm)' }}
          />
          <Text size="xs" c="gray.5">Tailwind: {tailwind}</Text>
        </Group>
      ))}
    </Stack>
  </Stack>
);

export const PaddingDemo = () => (
  <Stack p="xl">
    <Title order={2}>Padding in Context</Title>
    <Text c="gray.5" size="sm" mb="md">
      Boxes with different padding values applied.
    </Text>
    <Group gap="xl" align="flex-start">
      {SPACINGS.map(({ name, px }) => (
        <Stack key={name} gap={4} align="center">
          <Box
            p={name}
            bg="gray.1"
            style={{
              border: '1px dashed var(--mantine-color-gray-5)',
              borderRadius: 'var(--mantine-radius-md)',
            }}
          >
            <Box
              bg="gray.9"
              h={24}
              w={24}
              style={{ borderRadius: 2 }}
            />
          </Box>
          <Code>{name}</Code>
          <Text size="xs" c="gray.5">{px}</Text>
        </Stack>
      ))}
    </Group>
  </Stack>
);

export const GapDemo = () => (
  <Stack p="xl">
    <Title order={2}>Gap in Context</Title>
    <Text c="gray.5" size="sm" mb="md">
      Groups with different gap values.
    </Text>
    <Stack gap="xl">
      {SPACINGS.map(({ name, px }) => (
        <Group key={name} gap="md" align="center">
          <Box w={80}>
            <Code>gap="{name}"</Code>
            <Text size="xs" c="gray.5">{px}</Text>
          </Box>
          <Group
            gap={name}
            p="sm"
            style={{
              border: '1px solid var(--mantine-color-gray-3)',
              borderRadius: 'var(--mantine-radius-md)',
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                bg="gray.9"
                h={24}
                w={24}
                style={{ borderRadius: 2 }}
              />
            ))}
          </Group>
        </Group>
      ))}
    </Stack>
  </Stack>
);
