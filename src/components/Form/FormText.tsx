import { Input } from '../Input';
import { Label } from '../Label';

import type { FormFieldProps, FormState } from './types';

export type FormTextProps<TState extends FormState> = FormFieldProps<
  TState,
  string,
  {
    maxWidth?: number;
    type?: Extract<React.HTMLInputTypeAttribute, 'password' | 'text'>;
  }
>;

export const FormText = <TState extends FormState>({ label, name, type }: FormTextProps<TState>) => {
  const id = `text-box-${name}`;
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} />
    </div>
  );
};
