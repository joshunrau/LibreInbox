import { Form as FormComponent, type FormProps } from './Form';
import { FormText, type FormTextProps } from './FormText';

import type { FormState } from './types';

export type FormType<TState extends FormState> = React.ForwardRefExoticComponent<
  FormProps<TState> & React.RefAttributes<HTMLFormElement>
> & {
  Array: FormArrayType<TState>;
  Boolean: React.FC<FormBooleanProps<TState>>;
  ButtonGroup: React.FC<FormButtonGroupProps>;
  Group: React.FC<FormGroupProps>;
  Number: React.FC<FormNumberProps<TState>>;
  Options: React.FC<FormOptionsProps<TState>>;
  Subgroup: React.FC<FormSubgroupProps>;
  SubmitButton: React.FC<FormSubmitButtonProps>;
  Text: React.FC<FormTextProps<TState>>;
  TextArea: React.FC<FormTextAreaProps<TState>>;
};

export const Form = Object.assign(FormComponent, {});

export * from './types';
