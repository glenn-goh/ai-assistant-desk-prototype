import { Button, Card, Stack, Title, Text } from '@mantine/core';
import classes from './ErrorPage.module.css';

interface MaintenancePageProps {
  onBackToLogin?: () => void;
}

export function MaintenancePage({ onBackToLogin }: MaintenancePageProps) {
  return (
    <div className={classes.page}>
      <Card className={classes.card} withBorder shadow="md">
        <Stack gap="xl" className={classes.cardContent}>
          <Stack gap="xs" align="center">
            <Title order={1} fz={36} fw={700} c="gray.9">Under Maintenance</Title>
            <Text size="sm" c="gray.5">
              We're currently performing scheduled maintenance to improve your experience.
              Please check back shortly.
            </Text>
            <Text size="xs" c="gray.4" mt="lg">
              Expected completion: TBD
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
