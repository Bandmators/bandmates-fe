import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/common/button';
import { InputDesc, InputGroup } from '@/components/common/input';
import Label from '@/components/common/label';
import Textarea from '@/components/common/textarea';

const meta = {
  title: 'common/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Type something...',
  },
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Base Textarea',
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
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
          <Label htmlFor="bio">Bio</Label>
          <Story />
        </InputGroup>
      );
    },
  ],
  args: {
    id: 'bio',
    placeholder: 'bio',
  },
};

export const WithText: Story = {
  decorators: [
    Story => {
      return (
        <InputGroup>
          <Label htmlFor="bio">Bio</Label>
          <Story />
          <InputDesc>You can @mention other users to link to them.</InputDesc>
        </InputGroup>
      );
    },
  ],
  args: {
    id: 'bio',
    placeholder: 'bio',
  },
};

export const WithButton: Story = {
  decorators: [
    Story => {
      return (
        <InputGroup>
          <Label htmlFor="bio">Bio</Label>
          <Story />
          <InputDesc>You can @mention other users to link to them.</InputDesc>
          <Button>Save</Button>
        </InputGroup>
      );
    },
  ],
  args: {
    id: 'bio',
    placeholder: 'bio',
  },
};
