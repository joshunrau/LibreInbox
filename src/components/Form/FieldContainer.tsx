import { cn } from '@/lib/utils';

import { ErrorMessage } from './ErrorMessage';

import type { FormColumnSpan } from './types';

export type FieldContainerProps = {
  children: React.ReactNode;
  colSpan?: FormColumnSpan;
  error?: null | string;
  name: string;
};

export const FieldContainer = ({ children, colSpan, error, name }: FieldContainerProps) => {
  return (
    <div
      className={cn('space-y-2', {
        'lg:col-span-2': colSpan === 2,
        'lg:col-span-3': colSpan === 3,
        'lg:col-span-6': colSpan === 6,
        'lg:col-span-9': colSpan === 9,
        'lg:col-span-12': colSpan === 12
      })}
      id={`${name}Container`}
    >
      <div className="space-y-1">{children}</div>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};
