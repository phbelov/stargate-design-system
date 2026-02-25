import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Stargate Tooltip. Figma: [**Stargate Components → Tooltip**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2676).\n\nDark background informational tooltip. Max-width 280px, body/s (14px) text.",
      },
    },
  },
  argTypes: { children: { control: 'text' } },
  args: { children: "You'll be able to generate a new report once the ongoing report generation process is done" },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
export const Short:   Story = { args: { children: 'Save progress first' } };
export const Long:    Story = {
  args: { children: "You'll be able to generate a new report once the ongoing report generation process is done. Please wait for the current report to finish before starting a new one." },
};
