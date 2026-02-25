import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Stargate Radio button. Figma: [**Stargate Components → Radio**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2454).\n\n24×24px radio with checked and disabled states.',
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
    label: 'Option',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

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

export const RadioGroup: Story = {
  name: 'Radio Group',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      <Radio name="demo" value="a" checked label="Option A" />
      <Radio name="demo" value="b" label="Option B" />
      <Radio name="demo" value="c" label="Option C" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Radio label="Inactive (Default)" />
      <Radio checked label="Active" />
      <Radio disabled label="Disabled – Default" />
      <Radio checked disabled label="Disabled – Active" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
