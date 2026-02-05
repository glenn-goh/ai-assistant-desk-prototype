import type { UserProfile } from '../App';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

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
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <CardContent className="p-8 pb-10 space-y-6 text-center">
                    <div className="space-y-2">
                        <p className="text-gray-500 text-sm">
                            Welcome to the
                        </p>
                        <h1 className="text-gray-900 text-2xl font-bold leading-tight">
                            AI Assistant Desk (MVP)
                        </h1>
                    </div>

                    <Button
                        className="w-full h-12"
                        onClick={handleWOGLogin}
                    >
                        Log In with TechPass
                    </Button>

                    <p className="text-sm text-gray-500">
                        Having trouble logging in?{' '}
                        <a
                            href="#"
                            className="text-gray-900 hover:text-gray-700 underline"
                            onClick={(e) => e.preventDefault()}
                        >
                            Contact support
                        </a>
                    </p>
                </CardContent>
            </Card>

            {/* Security Warning */}
            <div className="w-full max-w-md mt-6">
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                    This is an internal system used by the Singapore Government. Unauthorised use is strictly prohibited. If you are not authorised, please exit from the system immediately. The use of this system is subject to the Computer Misuse Act.
                </p>
            </div>

            {/* Error/Maintenance Page Links */}
            <div className="absolute bottom-4 left-4 flex gap-3">
                <a
                    href="#/404"
                    className="text-gray-300 hover:text-gray-500 underline transition-colors"
                    style={{ fontSize: '8px' }}
                >
                    404
                </a>
                <a
                    href="#/500"
                    className="text-gray-300 hover:text-gray-500 underline transition-colors"
                    style={{ fontSize: '8px' }}
                >
                    500
                </a>
                <a
                    href="#/maintenance"
                    className="text-gray-300 hover:text-gray-500 underline transition-colors"
                    style={{ fontSize: '8px' }}
                >
                    Maintenance
                </a>
            </div>
        </div>
    );
}
