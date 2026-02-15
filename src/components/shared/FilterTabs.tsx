import { SegmentedControl } from '@mantine/core';

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  size?: 'sm' | 'md';
  className?: string;
}

export function FilterTabs({ tabs, activeTab, onTabChange, size = 'md', className }: FilterTabsProps) {
  return (
    <SegmentedControl
      value={activeTab}
      onChange={onTabChange}
      data={tabs}
      size={size === 'sm' ? 'xs' : 'sm'}
      className={className}
    />
  );
}
