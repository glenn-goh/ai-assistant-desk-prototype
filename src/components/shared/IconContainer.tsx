import type { LucideIcon } from 'lucide-react';

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
} as const;

const iconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

interface IconContainerProps {
  icon: LucideIcon;
  size?: keyof typeof sizeClasses;
  className?: string;
  iconClassName?: string;
}

export function IconContainer({ icon: Icon, size = 'md', className = '', iconClassName = '' }: IconContainerProps) {
  return (
    <div className={`${sizeClasses[size]} rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 ${className}`}>
      <Icon className={`${iconSizeClasses[size]} text-gray-700 ${iconClassName}`} />
    </div>
  );
}
