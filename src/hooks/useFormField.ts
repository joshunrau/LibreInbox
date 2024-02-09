import { useCallback, useContext, useState } from 'react';

import { get } from 'lodash-es';

import type { FormFieldValue } from '@/components/Form';
import { FormContext } from '@/context/FormContext';

export function useFormField<T extends FormFieldValue>(path: string) {
  const context = useContext(FormContext);
  const [isTouched, setIsTouched] = useState(false);

  const error = get(context.errors, path);
  const value = get(context.state, path) as T | undefined;

  const setValue = (value: T) => {
    context.onInputChange(path, value);
  };

  const onBlur = useCallback(() => {
    setIsTouched(true);
    if (context.validateBeforeSubmit ?? context.isSubmitted) {
      void context.validate?.();
    }
  }, [context.validate]);

  const showError = isTouched || context.isSubmitted;

  return {
    error: showError ? error?._errors.at(0) : undefined,
    formId: context.formId,
    onBlur,
    readonly: context.readonly,
    setValue,
    value
  } as const;
}
