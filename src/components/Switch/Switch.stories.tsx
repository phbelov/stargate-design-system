import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Switch (Switcher). Figma: [**Stargate Components → Switcher**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7244-4758).\n\n52×24px toggle with active/inactive and disabled states.',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Toggle me',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Inactive: Story = {
  args: { checked: false, label: 'Inactive' },
};

export const Active: Story = {
  args: { checked: true, label: 'Active' },
};

export const DisabledInactive: Story = {
  name: 'Disabled – Inactive',
  args: { checked: false, disabled: true, label: 'Disabled' },
};

export const DisabledActive: Story = {
  name: 'Disabled – Active',
  args: { checked: true, disabled: true, label: 'Disabled Active' },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Switch label="Inactive (Default)" />
      <Switch checked label="Active" />
      <Switch disabled label="Disabled – Default" />
      <Switch checked disabled label="Disabled – Active" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
