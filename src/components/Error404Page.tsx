import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Error404PageProps {
  onBackToLogin?: () => void;
}

export function Error404Page({ onBackToLogin }: Error404PageProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 pb-10 space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <h2 className="text-gray-900 text-xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-gray-500 text-sm">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <Button
            className="w-full h-12"
            onClick={onBackToLogin || (() => window.location.hash = '')}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
