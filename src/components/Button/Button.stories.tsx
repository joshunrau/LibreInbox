import type { Meta, StoryObj } from '@storybook/react';
import { DownloadIcon } from 'lucide-react';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

export default {
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default'
  }
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive'
  }
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link'
  }
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
};

export const OutlineIcon: Story = {
  args: {
    children: <DownloadIcon />,
    size: 'icon',
    variant: 'outline'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
};
