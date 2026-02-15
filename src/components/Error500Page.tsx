import { Button, Card, Stack, Title, Text } from '@mantine/core';
import classes from './ErrorPage.module.css';

interface Error500PageProps {
  onBackToLogin?: () => void;
}

export function Error500Page({ onBackToLogin }: Error500PageProps) {
  return (
    <div className={classes.page}>
      <Card className={classes.card} withBorder shadow="md">
        <Stack gap="xl" className={classes.cardContent}>
          <Stack gap="xs" align="center">
            <Title order={1} fz={60} fw={700} c="gray.9">500</Title>
            <Title order={2} size="xl" fw={600} c="gray.9">
              Internal Server Error
            </Title>
            <Text size="sm" c="gray.5">
              Something went wrong on our end. Please try again later or contact support if the problem persists.
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
