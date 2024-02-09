import { cn } from '@/lib/utils';

import { Input } from '../Input';
import { Label } from '../Label';

export type TextBoxProps = {
  className?: string;
  label: string;
  name: string;
  type?: Extract<React.HTMLInputTypeAttribute, 'password' | 'text'>;
};

export const TextBox = ({ className, label, name, type }: TextBoxProps) => {
  const id = `text-box-${name}`;
  return (
    <div className={cn('space-y-1', className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} />
    </div>
  );
};
