import * as React from 'react';

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2
} from 'lucide-react';

import { Input } from '@/components/base/Input';
import { Resizable } from '@/components/base/Resizable';
import { Separator } from '@/components/base/Separator';
import { Tabs } from '@/components/base/Tabs';
import { Tooltip } from '@/components/base/Tooltip';
import type { Email } from '@/models/email';
import { useEmailStore } from '@/stores/email-store';
import { cn } from '@/utils/cn';

import { AccountSwitcher } from '../AccountSwitcher';
import { MailDisplay } from '../MailDisplay';
import { MailList } from '../MailList';
import { Nav } from '../Nav';

interface MailProps {
  accounts: {
    email: string;
    icon: React.ReactNode;
    label: string;
  }[];
  defaultCollapsed?: boolean;
  defaultLayout: number[] | undefined;
  mails: Email[];
  navCollapsedSize: number;
}

export const Mail = ({
  accounts,
  defaultCollapsed = false,
  defaultLayout = [265, 440, 655],
  mails,
  navCollapsedSize
}: MailProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const { selectedEmail } = useEmailStore();

  return (
    <Tooltip.Provider delayDuration={0}>
      <Resizable.PanelGroup
        className="h-full max-h-[800px] items-stretch"
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
        }}
      >
        <Resizable.Panel
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          defaultSize={defaultLayout[0]}
          maxSize={20}
          minSize={15}
          onCollapse={() => {
            setIsCollapsed(!isCollapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(!isCollapsed)}`;
          }}
        >
          <div className={cn('flex h-[52px] items-center justify-center', isCollapsed ? 'h-[52px]' : 'px-2')}>
            <AccountSwitcher accounts={accounts} isCollapsed={isCollapsed} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                icon: Inbox,
                label: '128',
                title: 'Inbox',
                variant: 'default'
              },
              {
                icon: File,
                label: '9',
                title: 'Drafts',
                variant: 'ghost'
              },
              {
                icon: Send,
                label: '',
                title: 'Sent',
                variant: 'ghost'
              },
              {
                icon: ArchiveX,
                label: '23',
                title: 'Junk',
                variant: 'ghost'
              },
              {
                icon: Trash2,
                label: '',
                title: 'Trash',
                variant: 'ghost'
              },
              {
                icon: Archive,
                label: '',
                title: 'Archive',
                variant: 'ghost'
              }
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                icon: Users2,
                label: '972',
                title: 'Social',
                variant: 'ghost'
              },
              {
                icon: AlertCircle,
                label: '342',
                title: 'Updates',
                variant: 'ghost'
              },
              {
                icon: MessagesSquare,
                label: '128',
                title: 'Forums',
                variant: 'ghost'
              },
              {
                icon: ShoppingCart,
                label: '8',
                title: 'Shopping',
                variant: 'ghost'
              },
              {
                icon: Archive,
                label: '21',
                title: 'Promotions',
                variant: 'ghost'
              }
            ]}
          />
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <Tabs.List className="ml-auto">
                <Tabs.Trigger className="text-zinc-600 dark:text-zinc-200" value="all">
                  All mail
                </Tabs.Trigger>
                <Tabs.Trigger className="text-zinc-600 dark:text-zinc-200" value="unread">
                  Unread
                </Tabs.Trigger>
              </Tabs.List>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-8" placeholder="Search" />
                </div>
              </form>
            </div>
            <Tabs.Content className="m-0" value="all">
              <MailList items={mails} />
            </Tabs.Content>
            <Tabs.Content className="m-0" value="unread">
              <MailList items={mails.filter((item) => !item.read)} />
            </Tabs.Content>
          </Tabs>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={defaultLayout[2]}>
          <MailDisplay mail={selectedEmail} />
        </Resizable.Panel>
      </Resizable.PanelGroup>
    </Tooltip.Provider>
  );
};
