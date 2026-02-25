import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DateTimeInput } from './DateTimeInput';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Components/DateTimeInput',
  component: DateTimeInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Date & Time Input. Figma: [**Stargate Components → Date and Time Input**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7419-4993).\n\nShares TextField visual language. Two variants: `date` (calendar icon) and `time` (clock icon).',
      },
    },
  },
  argTypes: {
    type:     { control: 'select', options: ['date', 'time'] },
    label:    { control: 'text' },
    caption:  { control: 'text' },
    disabled: { control: 'boolean' },
    error:    { control: 'boolean' },
  },
  args: { type: 'date', label: 'Date', caption: '' },
};
export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const DateDefault: Story = {
  name: 'Date – Default',
  args: { type: 'date', label: 'Start date' },
};

export const DateWithCaption: Story = {
  name: 'Date – With Caption',
  args: { type: 'date', label: 'Start date', caption: 'Pick a date in the future' },
};

export const DateError: Story = {
  name: 'Date – Error',
  args: { type: 'date', label: 'Start date', error: true, caption: 'Date cannot be in the past' },
};

export const DateDisabled: Story = {
  name: 'Date – Disabled',
  args: { type: 'date', label: 'Start date', disabled: true },
};

export const TimeDefault: Story = {
  name: 'Time – Default',
  args: { type: 'time', label: 'Start time' },
};

export const TimeWithValue: Story = {
  name: 'Time – With Value',
  args: { type: 'time', label: 'Start time', value: '09:30 AM' },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 340 }}>
      <DateTimeInput type="date" label="Start date" />
      <DateTimeInput type="date" label="End date"   value="24 / 02 / 2026" />
      <DateTimeInput type="date" label="Date"       error   caption="Date is required" />
      <DateTimeInput type="date" label="Date"       disabled />
      <DateTimeInput type="time" label="Start time" />
      <DateTimeInput type="time" label="Start time" value="09:30 AM" />
    </div>
  ),
};
