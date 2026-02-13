const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
} as const;

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  size?: keyof typeof sizeClasses;
  className?: string;
}

export function FilterTabs({ tabs, activeTab, onTabChange, size = 'md', className = '' }: FilterTabsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`${sizeClasses[size]} rounded-lg font-medium transition-colors ${
            activeTab === tab
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
