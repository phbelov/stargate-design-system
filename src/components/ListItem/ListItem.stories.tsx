import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Settings, Checkmark } from '@carbon/icons-react';
import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Simple 44px list row. Figma: [**Stargate Components → List Item**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2677).',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'active'],
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: { label: 'Ayn Chat', state: 'default' },
};

export const Hover: Story = {
  args: { label: 'Ayn Chat', state: 'hover' },
};

export const Pressed: Story = {
  args: { label: 'Ayn Chat', state: 'pressed' },
};

export const Active: Story = {
  args: {
    label: 'Ayn Chat',
    state: 'active',
    trailingElement: <Checkmark size={16} />,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Settings',
    state: 'default',
    leadingIcon: <Settings size={24} />,
  },
};

export const WithTrailingElement: Story = {
  args: {
    label: 'Ayn Chat',
    state: 'default',
    trailingElement: <Checkmark size={16} />,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ width: 280, padding: '0 20px', fontFamily: 'Inter, sans-serif' }}>
      {(['default', 'hover', 'pressed', 'active'] as const).map(s => (
        <ListItem
          key={s}
          label={`Ayn Chat (${s})`}
          state={s}
          trailingElement={s === 'active' ? <Checkmark size={16} /> : undefined}
        />
      ))}
    </div>
  ),
};
