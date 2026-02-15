import React from 'react';
import { Tooltip, ActionIcon } from '@mantine/core';

interface TooltipIconButtonProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
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
  className,
  iconClassName,
  disabled,
}: TooltipIconButtonProps) {
  return (
    <Tooltip label={tooltip} position={side} openDelay={delayDuration}>
      <ActionIcon
        onClick={onClick}
        variant="subtle"
        color="gray"
        size="lg"
        disabled={disabled}
        className={className}
      >
        <Icon size={20} className={iconClassName} />
      </ActionIcon>
    </Tooltip>
  );
}
