import React from 'react';

import { cn } from '@/utils/cn';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function Card(
  { children, className, ...props },
  ref
) {
  return (
    <div
      className={cn(
        'rounded-md bg-white shadow-sm ring-1 ring-gray-900/10 dark:bg-gray-800 dark:ring-gray-100/25',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
