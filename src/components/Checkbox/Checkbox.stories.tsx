import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Stargate Checkbox. Figma: [**Stargate Components → Checkbox**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2453).\n\n24×24px checkbox with checked, indeterminate, and disabled states.',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Inactive: Story = {
  args: { checked: false, label: 'Unchecked' },
};

export const Active: Story = {
  args: { checked: true, label: 'Checked' },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, label: 'Semi-active' },
};

export const DisabledInactive: Story = {
  name: 'Disabled – Inactive',
  args: { checked: false, disabled: true, label: 'Disabled unchecked' },
};

export const DisabledActive: Story = {
  name: 'Disabled – Active',
  args: { checked: true, disabled: true, label: 'Disabled checked' },
};

export const DisabledIndeterminate: Story = {
  name: 'Disabled – Indeterminate',
  args: { indeterminate: true, disabled: true, label: 'Disabled indeterminate' },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Checkbox checked={false} label="Inactive (Default)" />
      <Checkbox checked={true} label="Active" />
      <Checkbox indeterminate={true} label="Semi-Active" />
      <Checkbox checked={false} disabled={true} label="Disabled – Default" />
      <Checkbox checked={true} disabled={true} label="Disabled – Active" />
      <Checkbox indeterminate={true} disabled={true} label="Disabled – Semi-Active" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
