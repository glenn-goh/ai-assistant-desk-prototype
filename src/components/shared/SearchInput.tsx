import { Search } from 'lucide-react';
import { TextInput } from '@mantine/core';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  autoFocus?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className,
  inputClassName,
  autoFocus,
}: SearchInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      leftSection={<Search size={16} />}
      autoFocus={autoFocus}
      className={className}
      classNames={inputClassName ? { input: inputClassName } : undefined}
    />
  );
}
