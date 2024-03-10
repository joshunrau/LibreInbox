import { addDays } from 'date-fns/addDays';
import { addHours } from 'date-fns/addHours';
import { format } from 'date-fns/format';
import { nextSaturday } from 'date-fns/nextSaturday';
import { Archive, ArchiveX, Clock, Forward, MoreVertical, Reply, ReplyAll, Trash2 } from 'lucide-react';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { DatePicker } from '@/components/DatePicker';
import { DropdownMenu } from '@/components/DropdownMenu';
import { Label } from '@/components/Label';
import { Popover } from '@/components/Popover';
import { Separator } from '@/components/Separator';
import { Switch } from '@/components/Switch';
import { TextArea } from '@/components/TextArea';
import { Tooltip } from '@/components/Tooltip';
import type { Email } from '@/models/email';

interface MailDisplayProps {
  mail: Email | null;
}

export const MailDisplay = ({ mail }: MailDisplayProps) => {
  const today = new Date();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button disabled={!mail} size="icon" variant="ghost">
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Archive</Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button disabled={!mail} size="icon" variant="ghost">
                <ArchiveX className="h-4 w-4" />
                <span className="sr-only">Move to junk</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Move to junk</Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button disabled={!mail} size="icon" variant="ghost">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Move to trash</Tooltip.Content>
          </Tooltip>
          <Separator className="mx-1 h-6" orientation="vertical" />
          <Tooltip>
            <Popover>
              <Popover.Trigger asChild>
                <Tooltip.Trigger asChild>
                  <Button disabled={!mail} size="icon" variant="ghost">
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Snooze</span>
                  </Button>
                </Tooltip.Trigger>
              </Popover.Trigger>
              <Popover.Content className="flex w-[535px] p-0">
                <div className="flex flex-col gap-2 border-r px-2 py-4">
                  <div className="px-4 text-sm font-medium">Snooze until</div>
                  <div className="grid min-w-[250px] gap-1">
                    <Button className="justify-start font-normal" variant="ghost">
                      Later today{' '}
                      <span className="ml-auto text-muted-foreground">{format(addHours(today, 4), 'E, h:m b')}</span>
                    </Button>
                    <Button className="justify-start font-normal" variant="ghost">
                      Tomorrow
                      <span className="ml-auto text-muted-foreground">{format(addDays(today, 1), 'E, h:m b')}</span>
                    </Button>
                    <Button className="justify-start font-normal" variant="ghost">
                      This weekend
                      <span className="ml-auto text-muted-foreground">{format(nextSaturday(today), 'E, h:m b')}</span>
                    </Button>
                    <Button className="justify-start font-normal" variant="ghost">
                      Next week
                      <span className="ml-auto text-muted-foreground">{format(addDays(today, 7), 'E, h:m b')}</span>
                    </Button>
                  </div>
                </div>
                <div className="p-2">
                  <DatePicker
                    onSelection={(date) => {
                      // eslint-disable-next-line no-alert
                      alert(date);
                    }}
                  />
                </div>
              </Popover.Content>
            </Popover>
            <Tooltip.Content>Snooze</Tooltip.Content>
          </Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button disabled={!mail} size="icon" variant="ghost">
                <Reply className="h-4 w-4" />
                <span className="sr-only">Reply</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Reply</Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button disabled={!mail} size="icon" variant="ghost">
                <ReplyAll className="h-4 w-4" />
                <span className="sr-only">Reply all</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Reply all</Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button disabled={!mail} size="icon" variant="ghost">
                <Forward className="h-4 w-4" />
                <span className="sr-only">Forward</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Forward</Tooltip.Content>
          </Tooltip>
        </div>
        <Separator className="mx-2 h-6" orientation="vertical" />
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button disabled={!mail} size="icon" variant="ghost">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Item>Mark as unread</DropdownMenu.Item>
            <DropdownMenu.Item>Star thread</DropdownMenu.Item>
            <DropdownMenu.Item>Add label</DropdownMenu.Item>
            <DropdownMenu.Item>Mute thread</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
      <Separator />
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <Avatar.Image alt={mail.name} />
                <Avatar.Fallback>
                  {mail.name
                    .split(' ')
                    .map((chunk) => chunk[0])
                    .join('')}
                </Avatar.Fallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">{mail.subject}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span> {mail.email}
                </div>
              </div>
            </div>
            {mail.date && (
              <div className="ml-auto text-xs text-muted-foreground">{format(new Date(mail.date), 'PPpp')}</div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">{mail.text}</div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <TextArea className="p-4" placeholder={`Reply ${mail.name}...`} />
                <div className="flex items-center">
                  <Label className="flex items-center gap-2 text-xs font-normal" htmlFor="mute">
                    <Switch aria-label="Mute thread" id="mute" /> Mute this thread
                  </Label>
                  <Button className="ml-auto" size="sm" onClick={(e) => e.preventDefault()}>
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">No message selected</div>
      )}
    </div>
  );
};
