import type { ConditionalKeys, Merge, Promisable } from 'type-fest';

export type FormColumnSpan = 1 | 2 | 3 | 6 | 9 | 12;

export type PrimitiveFormFieldValue = boolean | number | string | undefined;

export type ArrayFieldsetValue = Record<string, PrimitiveFormFieldValue>;

export type ArrayFormFieldValue = ArrayFieldsetValue[] | undefined;

export type FormFieldValue = ArrayFormFieldValue | PrimitiveFormFieldValue;

export type FormFieldName<TState extends FormState, TValue extends FormFieldValue> = TState extends any
  ? ConditionalKeys<TState, TValue> extends infer N extends string
    ? N
    : never
  : never;

export type FormState = Record<string, FormFieldValue>;

export type IncompleteFormState<T extends FormState> = {
  [K in keyof T]?: NonNullable<T[K]> extends PrimitiveFormFieldValue
    ? T[K]
    : NonNullable<T[K]> extends ArrayFormFieldValue
      ? {
          [P in keyof NonNullable<T[K]>[number]]?: NonNullable<T[K]>[number][P];
        }[]
      : never;
};

export type FormTextChangeHandler<
  TState extends FormState = FormState,
  TKey extends Extract<keyof TState, string> = Extract<keyof TState, string>
> = (key: TKey, value: FormFieldValue) => void;

export type FormFieldProps<
  TState extends FormState = FormState,
  TValue extends FormFieldValue = FormFieldValue,
  TProps extends object = object
> = Merge<
  {
    colSpan?: FormColumnSpan;
    label: string;
    name: FormFieldName<TState, TValue | undefined>;
    subfield?: boolean;
  },
  TProps
>;

export type ExtractFormKeys<T extends FormState, Key = keyof T> = Key extends string
  ? T[Key] extends FormFieldValue
    ? T[Key] extends PrimitiveFormFieldValue
      ? Key
      : NonNullable<T[Key]> extends (infer U extends ArrayFieldsetValue)[]
        ? `${Key}.${0 | 1 | 2}.${ExtractFormKeys<U>}`
        : never
    : `${Key}`
  : never;

export type ValidateFunction<T extends Record<string, unknown> = Record<string, unknown>> = (handlers?: {
  onFailure?: () => Promisable<void>;
  onSuccess?: ((data: T) => Promisable<void>) | undefined;
}) => Promise<void>;
