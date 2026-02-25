import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma: [**Stargate Components → Tab**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2455)\n\n' +
          'Single tab item used inside `TopTabBar`. Height 44px, `padding: 4px 0 12px`. Four states: Default, Hover, Active, Pressed.',
      },
    },
  },
  argTypes: {
    label:    { control: 'text' },
    isActive: { control: 'boolean' },
    state:    { control: 'select', options: ['default', 'hover', 'active', 'pressed'] },
  },
  args: { label: 'Chat' },
};
export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: { label: 'Chat', state: 'default' },
};

export const Hover: Story = {
  args: { label: 'Chat', state: 'hover' },
};

export const Active: Story = {
  args: { label: 'Chat', state: 'active' },
};

export const Pressed: Story = {
  args: { label: 'Chat', state: 'pressed' },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{
      display: 'flex',
      gap: 32,
      alignItems: 'flex-end',
      padding: '16px 24px',
      borderBottom: '1px solid rgba(41,41,41,0.12)',
    }}>
      {(['default', 'hover', 'active', 'pressed'] as const).map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Tab label="Chat" state={s} />
          <span style={{ fontSize: 11, color: 'rgba(41,41,41,0.4)', fontFamily: 'monospace' }}>{s}</span>
        </div>
      ))}
    </div>
  ),
};
