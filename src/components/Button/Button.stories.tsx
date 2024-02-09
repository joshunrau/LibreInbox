import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

export default { component: Button } as Meta<typeof Button>;

export const Default: Story = {
  args: {
    children: 'My Button'
  }
};
