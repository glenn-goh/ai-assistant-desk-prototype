import { Stack, Skeleton, Box } from '@mantine/core';

export function SkeletonLoader() {
  return (
    <Box maw="80%" py="md">
      <Stack gap="md">
        <Skeleton height={16} width="75%" />
        <Skeleton height={16} width="100%" />
        <Skeleton height={16} width="83%" />
      </Stack>
    </Box>
  );
}
