interface MultiDecisionOption {
  label: string;
  value: string;
}

interface MultiDecisionCardProps {
  question: string;
  options: MultiDecisionOption[];
  onSelect: (value: string) => void;
  disabled?: boolean;
}

export function MultiDecisionCard({ question, options, onSelect, disabled = false }: MultiDecisionCardProps) {
  return (
    <div className="inline-flex flex-col bg-white border border-gray-300 rounded-lg px-4 py-3" style={{ maxWidth: 420 }}>
      <p className="text-sm text-gray-900 mb-3">{question}</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => !disabled && onSelect(option.value)}
            disabled={disabled}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left
              bg-gray-900 text-white hover:bg-gray-700
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {option.label}
          </button>
        ))}
        <button
          onClick={() => !disabled && onSelect('cancel')}
          disabled={disabled}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left
            bg-white border border-gray-300 text-gray-500 hover:bg-gray-50
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
