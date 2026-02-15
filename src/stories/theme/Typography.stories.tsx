import { Box, Stack, Text, Title, Group, Code } from '@mantine/core';

export default { title: 'Theme / Typography' };

export const Headings = () => (
  <Stack p="xl">
    <Title order={2}>Headings</Title>
    <Text c="gray.5" size="sm" mb="md">
      Source Sans 3. Heading weights and sizes from the theme.
    </Text>
    <Stack gap="lg">
      {[
        { order: 1 as const, detail: '30px / bold (700) / lh 1.2' },
        { order: 2 as const, detail: '24px / semibold (600) / lh 1.3' },
        { order: 3 as const, detail: '20px / semibold (600) / lh 1.4' },
        { order: 4 as const, detail: '18px / semibold (600) / lh 1.4' },
      ].map(({ order, detail }) => (
        <Group key={order} align="baseline" gap="xl">
          <Box w={50}>
            <Code>h{order}</Code>
          </Box>
          <Stack gap={0}>
            <Title order={order}>Heading {order}</Title>
            <Text size="xs" c="gray.5">{detail}</Text>
          </Stack>
        </Group>
      ))}
    </Stack>
  </Stack>
);

export const FontSizes = () => (
  <Stack p="xl">
    <Title order={2}>Font Sizes</Title>
    <Text c="gray.5" size="sm" mb="md">
      Available via the size prop on Text and other components.
    </Text>
    <Stack gap="md">
      {[
        { size: 'xs' as const, px: '12px', usage: '<small>, Badge' },
        { size: 'sm' as const, px: '14px', usage: '<label>, <button>' },
        { size: 'md' as const, px: '16px', usage: '<p>, <input>, body default' },
        { size: 'lg' as const, px: '18px', usage: '<h4> equivalent' },
        { size: 'xl' as const, px: '20px', usage: '<h3> equivalent' },
      ].map(({ size, px, usage }) => (
        <Group key={size} gap="xl" align="center" wrap="nowrap">
          <Box w={40}>
            <Code>{size}</Code>
          </Box>
          <Box w={40}>
            <Text size="xs" c="gray.5">{px}</Text>
          </Box>
          <Box style={{ flex: 1 }}>
            <Text size={size}>The quick brown fox jumps over the lazy dog</Text>
          </Box>
          <Text size="xs" c="gray.5" w={160}>{usage}</Text>
        </Group>
      ))}
    </Stack>
  </Stack>
);

export const FontWeights = () => (
  <Stack p="xl">
    <Title order={2}>Font Weights</Title>
    <Stack gap="md">
      {[
        { weight: 300, name: 'Light', usage: 'rarely used' },
        { weight: 400, name: 'Normal', usage: 'body text, inputs' },
        { weight: 600, name: 'Semibold', usage: 'labels, buttons, h2-h4' },
        { weight: 700, name: 'Bold', usage: 'h1' },
      ].map(({ weight, name, usage }) => (
        <Group key={weight} gap="xl" align="center">
          <Box w={50}>
            <Code>{weight}</Code>
          </Box>
          <Text fw={weight} size="md" style={{ flex: 1 }}>
            {name} — The quick brown fox jumps over the lazy dog
          </Text>
          <Text size="xs" c="gray.5" w={160}>{usage}</Text>
        </Group>
      ))}
    </Stack>
  </Stack>
);

export const LineHeights = () => (
  <Stack p="xl">
    <Title order={2}>Line Heights</Title>
    <Stack gap="lg">
      {[
        { name: 'xs' as const, value: '1.2', usage: 'headings (h1)' },
        { name: 'sm' as const, value: '1.3', usage: 'headings (h2)' },
        { name: 'md' as const, value: '1.5', usage: 'default body' },
        { name: 'lg' as const, value: '1.7', usage: 'chat messages' },
      ].map(({ name, value, usage }) => (
        <Group key={name} gap="xl" align="flex-start" wrap="nowrap">
          <Box w={40}>
            <Code>{name}</Code>
          </Box>
          <Box w={30}>
            <Text size="xs" c="gray.5">{value}</Text>
          </Box>
          <Box
            maw={500}
            p="sm"
            style={{
              border: '1px solid var(--mantine-color-gray-3)',
              borderRadius: 'var(--mantine-radius-md)',
            }}
          >
            <Text size="sm" lh={name}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Text>
          </Box>
          <Text size="xs" c="gray.5">{usage}</Text>
        </Group>
      ))}
    </Stack>
  </Stack>
);
