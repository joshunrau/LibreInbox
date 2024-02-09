import React, { useState } from 'react';

import type { Promisable } from 'type-fest';
import type Zod from 'zod';

import { FormContext } from '@/context/FormContext';
import { cn } from '@/lib/utils';

import { FormErrorMessage } from './FormErrorMessage';

import type { FormState, FormTextChangeHandler, ValidateFunction } from './types';

type FormProps<TState extends FormState = FormState> = {
  children: React.ReactNode;
  className?: string;
  onError?: () => Promisable<void>;
  onInputChange: FormTextChangeHandler<TState>;
  onSubmit?: (state: TState) => Promisable<void>;
  readonly?: boolean;
  state: TState;
  tight?: boolean;
  title?: string;
  validateBeforeSubmit?: boolean;
  validationSchema: Zod.ZodType<TState>;
};

export const Form = React.forwardRef<HTMLFormElement, FormProps>(function Form(
  {
    children,
    className,
    onError,
    onInputChange,
    onSubmit,
    readonly,
    state,
    tight,
    title,
    validateBeforeSubmit,
    validationSchema
  },
  ref
) {
  const [errors, setErrors] = useState<Zod.ZodFormattedError<FormState> | null>(null);
  const [rootErrors, setRootErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate: ValidateFunction<FormState> = async ({ onFailure, onSuccess } = {}) => {
    const result = await validationSchema.safeParseAsync(state);
    if (result.success) {
      setErrors(null);
      await onSuccess?.(result.data);
    } else {
      console.error(result.error.issues);
      setErrors(result.error.format());
      setRootErrors(result.error.formErrors.formErrors);
      await onFailure?.();
    }
  };

  const handleReset: React.FormEventHandler = (event) => {
    event.preventDefault();
    setErrors(null);
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    void validate({ onFailure: onError, onSuccess: onSubmit });
  };

  return (
    <FormContext.Provider
      value={{
        errors,
        isSubmitted,
        onInputChange: onInputChange as FormTextChangeHandler,
        readonly,
        state,
        validate,
        validateBeforeSubmit
      }}
    >
      <form
        className={cn('my-6 space-y-6', tight && 'space-y-4', className)}
        ref={ref}
        onReset={handleReset}
        onSubmit={handleSubmit}
      >
        {title && <h5 className="text-base font-semibold text-slate-900">{title}</h5>}
        {children}
        {rootErrors.length > 0 && rootErrors.map((error, i) => <FormErrorMessage error={error} key={i} />)}
      </form>
    </FormContext.Provider>
  );
});
