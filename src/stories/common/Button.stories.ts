import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/common/button';

const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'Base Button',
    docs: {
      description: {
        component: `Base Button of Everything.`,
      },
    },
  },
} satisfies Meta<React.ComponentProps<'button'>>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
  },
};
