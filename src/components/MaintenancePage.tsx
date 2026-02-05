import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface MaintenancePageProps {
  onBackToLogin?: () => void;
}

export function MaintenancePage({ onBackToLogin }: MaintenancePageProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 pb-10 space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">Under Maintenance</h1>
            <p className="text-gray-500 text-sm">
              We're currently performing scheduled maintenance to improve your experience.
              Please check back shortly.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Expected completion: TBD
            </p>
          </div>

          <Button
            className="w-full h-12"
            onClick={onBackToLogin || (() => window.location.href = '/')}
          >
            Refresh Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
