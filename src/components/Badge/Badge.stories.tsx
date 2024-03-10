import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

type Story = StoryObj<typeof Badge>;

export default { component: Badge } as Meta<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge'
  }
};
