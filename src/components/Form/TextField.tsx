import { useFormField } from '@/hooks/useFormField';

import { FieldContainer } from './FieldContainer';
import { Input } from './Input';
import { Label } from './Label';

import type { FormFieldProps, FormState } from './types';

export type TextFieldProps<TState extends FormState> = FormFieldProps<
  TState,
  string,
  {
    maxWidth?: number;
    type?: Extract<React.HTMLInputTypeAttribute, 'password' | 'text'>;
  }
>;

export const TextField = <TState extends FormState>({
  colSpan,
  label,
  maxWidth,
  name,
  type = 'text'
}: TextFieldProps<TState>) => {
  const { error, formId, onBlur, readonly, setValue, value } = useFormField<string>(name);
  const id = `${formId}-${name}`;
  return (
    <FieldContainer colSpan={colSpan} error={error} name={name}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        disabled={readonly}
        id={id}
        name={name}
        style={{ maxWidth: maxWidth ?? 'none' }}
        type={type}
        value={value ?? ''}
        onBlur={onBlur}
        onChange={(event) => setValue(event.target.value)}
      />
    </FieldContainer>
  );
};
