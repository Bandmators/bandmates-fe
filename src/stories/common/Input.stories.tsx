import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputGroup } from '@/components/common/input';
import Label from '@/components/common/label';

const meta = {
  title: 'common/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'E-mail',
  },
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Base Input',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { type: 'email' },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  decorators: [
    Story => {
      return (
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Story />
        </InputGroup>
      );
    },
  ],
  args: {
    id: 'email',
    placeholder: 'Email',
  },
};
