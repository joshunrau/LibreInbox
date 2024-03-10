/* eslint-disable jsx-a11y/anchor-is-valid */

import type { LucideIcon } from 'lucide-react';

import { buttonVariants } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';
import { cn } from '@/utils/cn';

interface NavProps {
  isCollapsed: boolean;
  links: {
    icon: LucideIcon;
    label?: string;
    title: string;
    variant: 'default' | 'ghost';
  }[];
}

export const Nav = ({ isCollapsed, links }: NavProps) => {
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2" data-collapsed={isCollapsed}>
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip delayDuration={0} key={index}>
              <Tooltip.Trigger asChild>
                <a
                  className={cn(
                    buttonVariants({ size: 'icon', variant: link.variant }),
                    'h-9 w-9',
                    link.variant === 'default' &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                  href="#"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content className="flex items-center gap-4" side="right">
                {link.title}
                {link.label && <span className="ml-auto text-muted-foreground">{link.label}</span>}
              </Tooltip.Content>
            </Tooltip>
          ) : (
            <a
              className={cn(
                buttonVariants({ size: 'sm', variant: link.variant }),
                link.variant === 'default' && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'justify-start'
              )}
              href="#"
              key={index}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span className={cn('ml-auto', link.variant === 'default' && 'text-background dark:text-white')}>
                  {link.label}
                </span>
              )}
            </a>
          )
        )}
      </nav>
    </div>
  );
};
