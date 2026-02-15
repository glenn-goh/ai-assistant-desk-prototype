import { Box, Text, Group, Button } from '@mantine/core';
import classes from './DecisionCard.module.css';

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
    <Box className={classes.card}>
      <Text size="sm" c="gray.9" mb="md">{question}</Text>
      <Group gap="sm">
        {options.map((option) => (
          <Button
            key={option.value}
            onClick={() => !disabled && onSelect(option.value)}
            disabled={disabled}
            variant={option.variant === 'primary' ? 'filled' : 'default'}
            color={option.variant === 'primary' ? 'gray.9' : undefined}
            size="xs"
          >
            {option.label}
          </Button>
        ))}
      </Group>
    </Box>
  );
}
