import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Error500PageProps {
  onBackToLogin?: () => void;
}

export function Error500Page({ onBackToLogin }: Error500PageProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 pb-10 space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-gray-900">500</h1>
            <h2 className="text-gray-900 text-xl font-semibold">
              Internal Server Error
            </h2>
            <p className="text-gray-500 text-sm">
              Something went wrong on our end. Please try again later or contact support if the problem persists.
            </p>
          </div>

          <Button
            className="w-full h-12"
            onClick={onBackToLogin || (() => window.location.href = '/')}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
