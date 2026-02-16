import { Chip, Group } from '@mantine/core';
import classes from './FilterTabs.module.css';

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  size?: 'sm' | 'md';
  className?: string;
}

export function FilterTabs({ tabs, activeTab, onTabChange, size = 'md', className }: FilterTabsProps) {
  return (
    <Chip.Group value={activeTab} onChange={(value) => value && onTabChange(value as string)}>
      <Group gap="sm" className={className}>
        {tabs.map((tab) => (
          <Chip
            key={tab}
            value={tab}
            variant="outline"
            size={size === 'sm' ? 'sm' : 'md'}
            icon={<></>}
            classNames={{
              label: classes.chip,
              iconWrapper: classes.iconWrapper,
            }}
          >
            {tab}
          </Chip>
        ))}
      </Group>
    </Chip.Group>
  );
}
