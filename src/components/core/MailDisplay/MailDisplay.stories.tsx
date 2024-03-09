import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@/components/base/Tooltip';

import { MailDisplay } from './MailDisplay';

type Story = StoryObj<typeof MailDisplay>;

export default { component: MailDisplay } as Meta<typeof MailDisplay>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Tooltip.Provider>
        <Story />
      </Tooltip.Provider>
    )
  ]
};
