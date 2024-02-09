import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

type Story = StoryObj<typeof Card>;

export default { component: Card } as Meta<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum enim eius fuga voluptatum tempore, recusandae
        dolorem nemo voluptatibus ullam, quae reiciendis vel assumenda nam asperiores pariatur, placeat dolores rem. Ut.
      </p>
    )
  }
};
