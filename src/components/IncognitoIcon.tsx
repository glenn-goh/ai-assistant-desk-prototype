// Custom Incognito Icon (Fedora Hat + Binoculars)
export function IncognitoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Fedora Hat */}
      <path d="M4 10c0-1.5 1.5-3 4-3h8c2.5 0 4 1.5 4 3" />
      <ellipse cx="12" cy="10" rx="8" ry="2" />
      <path d="M6 10v1c0 1 1 2 2 2h8c1 0 2-1 2-2v-1" />

      {/* Binoculars */}
      <circle cx="8" cy="18" r="2.5" />
      <circle cx="16" cy="18" r="2.5" />
      <path d="M10.5 18h3" />
      <path d="M8 15.5v-1" />
      <path d="M16 15.5v-1" />
    </svg>
  );
}
