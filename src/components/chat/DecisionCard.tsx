interface DecisionOption {
  label: string;
  value: string;
  variant?: 'primary' | 'secondary';
}

interface DecisionCardProps {
  question: string;
  options: DecisionOption[];
  onSelect: (value: string) => void;
  disabled?: boolean;
}

export function DecisionCard({ question, options, onSelect, disabled = false }: DecisionCardProps) {
  return (
    <div className="inline-flex flex-col bg-white border border-gray-300 rounded-lg px-4 py-3">
      <p className="text-sm text-gray-900 mb-3">{question}</p>
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => !disabled && onSelect(option.value)}
            disabled={disabled}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              option.variant === 'primary'
                ? 'bg-gray-900 text-white hover:bg-gray-700'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
