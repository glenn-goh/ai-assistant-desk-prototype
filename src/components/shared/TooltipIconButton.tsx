import React from 'react';
import { Tooltip, ActionIcon, type MantineSize } from '@mantine/core';

interface TooltipIconButtonProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  tooltip: string;
  onClick?: (e: React.MouseEvent) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delayDuration?: number;
  className?: string;
  disabled?: boolean;
  size?: MantineSize;
  iconSize?: number;
  active?: boolean;
  color?: string;
}

export function TooltipIconButton({
  icon: Icon,
  tooltip,
  onClick,
  side = 'top',
  delayDuration,
  className,
  disabled,
  size = 'md',
  iconSize = 18,
  active,
  color = 'gray',
}: TooltipIconButtonProps) {
  return (
    <Tooltip label={tooltip} position={side} openDelay={delayDuration}>
      <ActionIcon
        onClick={onClick}
        variant={active ? 'light' : 'subtle'}
        color={color}
        size={size}
        disabled={disabled}
        className={className}
      >
        <Icon size={iconSize} />
      </ActionIcon>
    </Tooltip>
  );
}
