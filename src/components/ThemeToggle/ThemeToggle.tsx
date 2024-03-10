import { MoonIcon, SunIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/hooks/useTheme';

import { Button } from '../Button';
import { DropdownMenu } from '../DropdownMenu';

export type ThemeToggleProps = {
  align?: 'center' | 'end' | 'start';
};

export const ThemeToggle = ({ align = 'start' }: ThemeToggleProps) => {
  const [_, setTheme] = useTheme();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button className="flex items-center justify-center" size="icon" variant="outline">
          <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align={align}>
        <DropdownMenu.Item onClick={() => setTheme('light')}>{t('theme.light')}</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>{t('theme.dark')}</DropdownMenu.Item>
        <DropdownMenu.Item disabled>{t('theme.system')}</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
