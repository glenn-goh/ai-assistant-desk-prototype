import { Button, Card, Stack, Title, Text } from '@mantine/core';
import classes from './ErrorPage.module.css';

interface Error404PageProps {
  onBackToLogin?: () => void;
}

export function Error404Page({ onBackToLogin }: Error404PageProps) {
  return (
    <div className={classes.page}>
      <Card className={classes.card} withBorder shadow="md">
        <Stack gap="xl" className={classes.cardContent}>
          <Stack gap="xs" align="center">
            <Title order={1} fz={60} fw={700} c="gray.9">404</Title>
            <Title order={2} size="xl" fw={600} c="gray.9">
              Page Not Found
            </Title>
            <Text size="sm" c="gray.5">
              The page you're looking for doesn't exist or has been moved.
            </Text>
          </Stack>

          <Button
            fullWidth
            size="lg"
            onClick={onBackToLogin || (() => window.location.hash = '')}
          >
            Back to Home
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
