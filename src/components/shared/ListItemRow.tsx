import type { LucideIcon } from 'lucide-react';
import { IconContainer } from './IconContainer';

interface ListItemRowProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
  rightContent?: React.ReactNode;
  className?: string;
}

export function ListItemRow({ icon, title, subtitle, onClick, rightContent, className = '' }: ListItemRowProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200 ${className}`}
    >
      <IconContainer icon={icon} size="md" />
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-gray-900 truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">{subtitle}</p>
      </div>
      {rightContent}
    </div>
  );
}
