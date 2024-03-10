import type { Meta, StoryObj } from '@storybook/react';

import { emailGenerator } from '@/testing/data-generators';

import { MailList } from './MailList';

type Story = StoryObj<typeof MailList>;

export default { component: MailList } as Meta<typeof MailList>;

export const Default: Story = {
  args: {
    items: emailGenerator.generateMany(10)
  }
};
