import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from './ErrorMessage';

type Story = StoryObj<typeof ErrorMessage>;

export default { component: ErrorMessage } as Meta<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    error: 'Invalid Input'
  }
};
