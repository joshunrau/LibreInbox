import { createContext } from 'react';

import type { FormState, FormTextChangeHandler, ValidateFunction } from '@/components/Form';

type FormContextType = {
  errors: Zod.ZodFormattedError<FormState> | null;
  isSubmitted: boolean;
  onInputChange: FormTextChangeHandler;
  readonly?: boolean;
  state: FormState;
  validate: ValidateFunction;
  validateBeforeSubmit?: boolean;
};

export const FormContext = createContext<FormContextType>(null!);
