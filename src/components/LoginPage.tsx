import type { UserProfile } from '../App';
import { Button, Card, Stack, Title, Text } from '@mantine/core';
import classes from './LoginPage.module.css';

interface LoginPageProps {
    onLogin: (profile: UserProfile, skipOnboarding: boolean) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
    const handleWOGLogin = () => {
        const defaultProfile: UserProfile = {
            name: 'John Doe',
            email: 'john.doe@tech.gov.sg',
            role: 'Product Manager',
            agency: 'GovTech'
        };
        onLogin(defaultProfile, true);
    };

    return (
        <div className={classes.page}>
            <Card className={classes.card} withBorder shadow="md">
                <Stack gap="xl" className={classes.cardContent}>
                    <Stack gap="xs" align="center">
                        <Text size="sm" c="gray.5">
                            Welcome to the
                        </Text>
                        <Title order={1} fz={24} fw={700} c="gray.9" lh="tight">
                            AI Assistant Desk (MVP)
                        </Title>
                    </Stack>

                    <Button
                        fullWidth
                        size="lg"
                        onClick={handleWOGLogin}
                    >
                        Log In with TechPass
                    </Button>

                    <Text size="sm" c="gray.5">
                        Having trouble logging in?{' '}
                        <a
                            href="#"
                            className={classes.supportLink}
                            onClick={(e) => e.preventDefault()}
                        >
                            Contact support
                        </a>
                    </Text>
                </Stack>
            </Card>

            {/* Security Warning */}
            <div className={classes.securityWarning}>
                <Text size="xs" c="gray.4" ta="center" lh="relaxed">
                    This is an internal system used by the Singapore Government. Unauthorised use is strictly prohibited. If you are not authorised, please exit from the system immediately. The use of this system is subject to the Computer Misuse Act.
                </Text>
            </div>

            {/* Error/Maintenance Page Links */}
            <div className={classes.debugLinks}>
                <a href="#/404" className={classes.debugLink}>404</a>
                <a href="#/500" className={classes.debugLink}>500</a>
                <a href="#/maintenance" className={classes.debugLink}>Maintenance</a>
            </div>
        </div>
    );
}
