import type { Meta, StoryObj } from '@storybook/react';

import { AddAccount } from './AddAccount';

type Story = StoryObj<typeof AddAccount>;

export default { component: AddAccount } as Meta<typeof AddAccount>;

export const Default: Story = {}
