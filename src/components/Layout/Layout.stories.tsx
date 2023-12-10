import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';

type Story = StoryObj<typeof Layout>;

export default { component: Layout } as Meta<typeof Layout>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="h-screen bg-gradient-to-r from-cyan-300 to-blue-600">
          <Story />
        </div>
      );
    }
  ]
};
