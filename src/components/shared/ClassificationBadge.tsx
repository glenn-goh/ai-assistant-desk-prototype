interface ClassificationBadgeProps {
  classification: string;
  size?: 'sm' | 'md';
  className?: string;
  /** Override the displayed label (e.g. when source data uses a different format). */
  label?: string;
}

export function ClassificationBadge({
  classification,
  size = 'md',
  className,
  label,
}: ClassificationBadgeProps) {
  const isDark = classification.includes('C(CE)') || classification.includes('CCE');
  const displayLabel = label || classification.replace('C(CE)/SN', 'CCE/SN');

  const sizeClasses = size === 'sm'
    ? 'text-[10px] py-0.5'
    : 'text-xs py-1';

  const colorClasses = isDark
    ? 'bg-gray-100 text-gray-900 border-gray-300'
    : 'bg-gray-50 text-gray-900 border-gray-200';

  return (
    <span
      className={className || `inline-block px-2 rounded-full font-medium border ${sizeClasses} ${colorClasses}`}
    >
      {displayLabel}
    </span>
  );
}
