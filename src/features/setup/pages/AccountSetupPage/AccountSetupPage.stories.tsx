import type { Meta, StoryObj } from '@storybook/react';

import { AccountSetupPage } from './AccountSetupPage';

type Story = StoryObj<typeof AccountSetupPage>;

export default { component: AccountSetupPage } as Meta<typeof AccountSetupPage>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen'
  }
};
