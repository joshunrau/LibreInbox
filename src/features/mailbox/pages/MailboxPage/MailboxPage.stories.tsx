import type { Meta, StoryObj } from '@storybook/react';

import { MailboxPage } from './MailboxPage';

type Story = StoryObj<typeof MailboxPage>;

export default { component: MailboxPage } as Meta<typeof MailboxPage>;

export const Default: Story = {};
