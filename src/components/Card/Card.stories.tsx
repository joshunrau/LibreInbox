import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = { component: Card };

export default meta;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="my-5 text-xl font-medium">Example</h3>
        <p className="text-muted">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatibus incidunt id. Minus cupiditate
          eveniet at quam provident saepe repellat maxime natus! Similique provident quia, praesentium reiciendis fugiat
          magnam dolorum?
        </p>
      </div>
    ),
    className: 'p-3 max-w-prose'
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
          <Story />
        </div>
      );
    }
  ]
};
