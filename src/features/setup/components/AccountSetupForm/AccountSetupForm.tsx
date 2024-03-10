import * as React from 'react';

import { Button } from '@/components/base/Button';
import { Input } from '@/components/base/Input';
import { Label } from '@/components/base/Label';
import { SpinnerIcon } from '@/components/base/SpinnerIcon';
import { cn } from '@/utils/cn';

interface AccountSetupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AccountSetupForm = ({ className, ...props }: AccountSetupFormProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              id="email"
              placeholder="name@example.com"
              type="email"
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  );
};
