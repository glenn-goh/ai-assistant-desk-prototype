import { Box, Group, Stack, Text, Title, SimpleGrid } from '@mantine/core';

export default { title: 'Theme / Colors' };

const GRAY_LABELS: Record<number, string> = {
  0: 'neutral-50',
  1: 'gray-100: backgrounds, muted',
  2: 'neutral-200',
  3: 'gray-300: borders, dividers',
  4: 'neutral-400',
  5: 'gray-500: secondary text, placeholders',
  6: 'neutral-600',
  7: 'gray-700: body text',
  8: 'neutral-800',
  9: 'gray-900: headings, buttons, bold borders',
};

function ColorSwatch({
  color,
  shade,
  label,
}: {
  color: string;
  shade: number;
  label?: string;
}) {
  const isDark = shade >= 5;
  return (
    <Stack gap={4}>
      <Box
        bg={`${color}.${shade}`}
        h={60}
        style={{
          borderRadius: 'var(--mantine-radius-md)',
          border: '1px solid var(--mantine-color-gray-3)',
        }}
      >
        <Text c={isDark ? 'white' : 'gray.9'} size="xs" p={4}>
          {color}.{shade}
        </Text>
      </Box>
      {label && (
        <Text size="xs" c="gray.5">
          {label}
        </Text>
      )}
    </Stack>
  );
}

export const GrayPalette = () => (
  <Stack p="xl">
    <Title order={2}>Gray Palette</Title>
    <Text c="gray.5" size="sm">
      Lo-fi wireframe grayscale. Primary shade: 9 (#171717).
    </Text>
    <SimpleGrid cols={5} spacing="md">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
        <ColorSwatch
          key={shade}
          color="gray"
          shade={shade}
          label={GRAY_LABELS[shade]}
        />
      ))}
    </SimpleGrid>
  </Stack>
);

export const RedPalette = () => (
  <Stack p="xl">
    <Title order={2}>Red Palette</Title>
    <Text c="gray.5" size="sm">
      Error and destructive actions. red.5 = #ef4444, red.6 = #dc2626.
    </Text>
    <SimpleGrid cols={5} spacing="md">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
        <ColorSwatch key={shade} color="red" shade={shade} />
      ))}
    </SimpleGrid>
  </Stack>
);

export const SemanticColors = () => (
  <Stack p="xl">
    <Title order={2}>Semantic Color Mapping</Title>
    <Text c="gray.5" size="sm" mb="md">
      How colors map to UI roles in the lo-fi aesthetic.
    </Text>
    <Stack gap="md">
      {[
        { role: 'Primary (filled buttons)', bg: 'gray.9', fg: 'white' },
        { role: 'Background', bg: 'white', fg: 'gray.9' },
        { role: 'Muted / Sidebar', bg: 'gray.1', fg: 'gray.5' },
        { role: 'Border (lo-fi bold)', bg: 'white', fg: 'gray.9', border: 'gray.9' },
        { role: 'Border (light)', bg: 'white', fg: 'gray.3', border: 'gray.3' },
        { role: 'Destructive', bg: 'red.5', fg: 'white' },
        { role: 'Destructive hover', bg: 'red.6', fg: 'white' },
      ].map(({ role, bg, fg, border }) => (
        <Group key={role} gap="md" align="center">
          <Box
            bg={bg}
            h={40}
            w={40}
            style={{
              borderRadius: 'var(--mantine-radius-md)',
              border: border
                ? `2px solid var(--mantine-color-${border.replace('.', '-')})`
                : '1px solid var(--mantine-color-gray-3)',
            }}
          />
          <Text size="sm" c="gray.7">{role}</Text>
        </Group>
      ))}
    </Stack>
  </Stack>
);
