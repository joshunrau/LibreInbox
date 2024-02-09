import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

type Story = StoryObj<typeof Heading>;

const exampleText = 'Whereas disregard and contempt for human rights have resulted';

export default { component: Heading } as Meta<typeof Heading>;

export const H1: Story = {
  args: {
    children: exampleText,
    variant: 'h1'
  }
};

export const H2: Story = {
  args: {
    children: exampleText,
    variant: 'h2'
  }
};

export const H3: Story = {
  args: {
    children: exampleText,
    variant: 'h3'
  }
};

export const H4: Story = {
  args: {
    children: exampleText,
    variant: 'h4'
  }
};
