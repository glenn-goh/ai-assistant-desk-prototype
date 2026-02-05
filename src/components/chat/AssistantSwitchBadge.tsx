interface AssistantSwitchBadgeProps {
  message: string;
}

export function AssistantSwitchBadge({ message }: AssistantSwitchBadgeProps) {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2 text-xs text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
        <span className="text-gray-500">Switched to</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="font-semibold text-gray-900">{message}</span>
      </div>
    </div>
  );
}
