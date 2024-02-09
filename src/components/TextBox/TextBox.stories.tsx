import type { Meta, StoryObj } from '@storybook/react';

import { TextBox } from './TextBox';

type Story = StoryObj<typeof TextBox>;

export default { component: TextBox } as Meta<typeof TextBox>;

export const Text: Story = {
  args: {
    label: 'Text',
    name: 'text',
    type: 'text'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
};
