import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface TooltipIconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  tooltip: string;
  onClick?: (e: React.MouseEvent) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delayDuration?: number;
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
}

export function TooltipIconButton({
  icon: Icon,
  tooltip,
  onClick,
  side = 'top',
  delayDuration,
  className = 'p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700',
  iconClassName = 'w-5 h-5',
  disabled,
}: TooltipIconButtonProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={onClick} className={className} disabled={disabled}>
            <Icon className={iconClassName} />
          </button>
        </TooltipTrigger>
        <TooltipContent side={side}>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
