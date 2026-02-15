import React from 'react';
import { Stack, Input, Text } from '@mantine/core';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
}

export function FormField({
  label,
  htmlFor,
  helperText,
  children,
  className,
  labelClassName,
}: FormFieldProps) {
  return (
    <Stack gap="xs" className={className}>
      <Input.Label htmlFor={htmlFor} className={labelClassName}>{label}</Input.Label>
      {helperText && (
        <Text size="sm" c="gray.5">{helperText}</Text>
      )}
      {children}
    </Stack>
  );
}
