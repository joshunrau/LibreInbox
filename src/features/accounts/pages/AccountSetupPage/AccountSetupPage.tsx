/* eslint-disable jsx-a11y/anchor-is-valid */

import icon from '@/assets/icon.png';
import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';

export const AccountSetupPage = () => {
  return (
    <div className="grid h-full bg-muted">
      <div className="flex flex-col items-center justify-center gap-3">
        <img alt="LibreInbox Icon" className="h-24 w-24" src={icon} />
        <Heading className="mb-3" variant="h1">
          Welcome to LibreInbox
        </Heading>
        <Button className="w-full max-w-64">Add Account</Button>
      </div>
      <div className="absolute bottom-2 right-2 flex gap-1">
        <ThemeToggle align="start" />
        <LanguageToggle align="start" />
      </div>
    </div>
  );
};
