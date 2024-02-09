import type { Meta, StoryObj } from '@storybook/react';

import { FormErrorMessage } from './FormErrorMessage';

type Story = StoryObj<typeof FormErrorMessage>;

export default { component: FormErrorMessage } as Meta<typeof FormErrorMessage>;

export const Default: Story = {
  args: {
    error: 'Invalid Input'
  }
};
