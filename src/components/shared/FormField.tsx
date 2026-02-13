import React from 'react';
import { Label } from '../ui/label';

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
    <div className={className || 'space-y-2'}>
      <Label htmlFor={htmlFor} className={labelClassName}>{label}</Label>
      {helperText && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
      {children}
    </div>
  );
}
