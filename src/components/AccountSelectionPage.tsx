import type { UserProfile } from '../App';
import { Card, CardContent } from './ui/card';

interface AccountSelectionPageProps {
  onAccountSelected: (profile: UserProfile) => void;
}

export function AccountSelectionPage({ onAccountSelected }: AccountSelectionPageProps) {
  const handleAccountClick = () => {
    const johnDoeProfile: UserProfile = {
      name: 'John Doe',
      email: 'john.doe@tech.gov.sg',
      role: 'Product Manager',
      agency: 'GovTech'
    };
    onAccountSelected(johnDoeProfile);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* TechPass Logo/Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-red-600 rounded"></div>
          <span className="text-base font-semibold text-gray-900">TechPass</span>
        </div>

        <Card className="w-full">
          <CardContent className="p-8 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Pick an account</h1>

            {/* John Doe Account */}
            <button
              onClick={handleAccountClick}
              className="w-full flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all text-left"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 font-semibold text-lg">JD</span>
              </div>

              {/* Account Info */}
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-gray-900">John Doe (GOVTECH)</p>
                <p className="text-sm text-gray-500 mt-0.5">john.doe@tech.gov.sg</p>
                <p className="text-xs text-gray-400 mt-1">Signed in</p>
              </div>

              {/* More options icon */}
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="18" r="2"/>
                </svg>
              </div>
            </button>

            {/* Use another account option */}
            <button
              className="w-full flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all text-left"
              onClick={(e) => e.preventDefault()}
            >
              {/* Plus icon */}
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>

              {/* Text */}
              <p className="text-base text-gray-900">Use another account</p>
            </button>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={(e) => e.preventDefault()}>
            Terms of use
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={(e) => e.preventDefault()}>
            Privacy & cookies
          </a>
        </div>
      </div>
    </div>
  );
}
