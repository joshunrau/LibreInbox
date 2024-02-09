import { Form as FormComponent, type FormProps } from './Form';
import { TextField, type TextFieldProps } from './TextField';

import type { FormState } from './types';

export type FormType<TState extends FormState> = React.ForwardRefExoticComponent<
  FormProps<TState> & React.RefAttributes<HTMLFormElement>
> & {
  TextField: React.FC<TextFieldProps<TState>>;
};

export const Form = Object.assign(FormComponent, {
  TextField
}) satisfies FormType<FormState>;

export * from './types';
