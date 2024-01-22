import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/common/button';
import Card, { CardBody, CardDesc, CardFooter, CardHead, CardTitle } from '@/components/common/card';
import Input, { InputDesc, InputGroup } from '@/components/common/input';
import Label from '@/components/common/label';

const meta = {
  title: 'common/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    width: 100,
  },
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Base Card',
    docs: {
      description: {
        component: `Use with CardBody, CardDesc, CardFooter, CardHead, CardTitle`,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'card',
  },
};

export const CardForm: Story = {
  args: {
    width: 300,
    children: (
      <>
        <CardHead>
          <CardTitle>CardTitle</CardTitle>
          <CardDesc>CardDesc..</CardDesc>
        </CardHead>
        <CardBody>
          <InputGroup>
            <Label htmlFor="bio">Label</Label>
            <Input id="bio" />
            <InputDesc>You can @mention other users to link to them.</InputDesc>
          </InputGroup>
        </CardBody>
        <CardFooter>
          <Button full>CardFooter</Button>
        </CardFooter>
      </>
    ),
  },
};
