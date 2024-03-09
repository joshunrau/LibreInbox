import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ArrowToggle } from './ArrowToggle';

type Story = StoryObj<typeof ArrowToggle>;

export default { component: ArrowToggle } as Meta<typeof ArrowToggle>;

export const UpToDown: Story = {
  decorators: [
    (Story) => {
      const [isToggled, setIsToggled] = useState(false);
      return <Story args={{ isToggled, onClick: () => setIsToggled(!isToggled), position: 'up', rotation: 180 }} />;
    }
  ]
};

export const LeftToDown: Story = {
  decorators: [
    (Story) => {
      const [isToggled, setIsToggled] = useState(false);
      return <Story args={{ isToggled, onClick: () => setIsToggled(!isToggled), position: 'left', rotation: -90 }} />;
    }
  ]
};
