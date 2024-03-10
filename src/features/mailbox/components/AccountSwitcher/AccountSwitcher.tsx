import { useState } from 'react';

import { Select } from '@/components/base/Select';
import { cn } from '@/utils/cn';

interface AccountSwitcherProps {
  accounts: {
    email: string;
    icon: React.ReactNode;
    label: string;
  }[];
  isCollapsed: boolean;
}

export const AccountSwitcher = ({ accounts, isCollapsed }: AccountSwitcherProps) => {
  const [selectedAccount, setSelectedAccount] = useState<string>(accounts[0].email);

  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <Select.Trigger
        className={cn(
          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
          isCollapsed && 'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
        )}
      >
        <Select.Value placeholder="Select an account">
          {accounts.find((account) => account.email === selectedAccount)?.icon}
          <span className={cn('ml-2', isCollapsed && 'hidden')}>
            {accounts.find((account) => account.email === selectedAccount)?.label}
          </span>
        </Select.Value>
      </Select.Trigger>
      <Select.Content>
        {accounts.map((account) => (
          <Select.Item key={account.email} value={account.email}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {account.icon}
              {account.email}
            </div>
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  );
};
