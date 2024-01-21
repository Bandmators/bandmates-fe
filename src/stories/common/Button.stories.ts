import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/common/button';

const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Base Button',
    docs: {
      description: {
        component: `Base Button of Everything.`,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    ...Primary.args,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    ...Primary.args,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    ...Primary.args,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    ...Primary.args,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    ...Primary.args,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ...Primary.args,
  },
};
