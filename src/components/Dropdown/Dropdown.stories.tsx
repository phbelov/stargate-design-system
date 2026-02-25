import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Dropdown. Figma: [**Stargate Components → Dropdown**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7406-8648).\n\nFloating list with selectable items. White bg, outlined border, `--radius-l` (24px) corners.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export const NoSelection: Story = {
  name: 'No Selection',
  args: {
    items: [
      { label: 'Last 7 days',   value: '7d' },
      { label: 'Last 30 days',  value: '30d' },
      { label: 'Last 90 days',  value: '90d' },
      { label: 'Last 6 months', value: '6m' },
      { label: 'Last year',     value: '1y' },
    ],
  },
};

export const FewItems: Story = {
  name: 'Few Items',
  args: {
    items: [
      { label: 'English', value: 'en', selected: true },
      { label: 'Arabic',  value: 'ar' },
    ],
  },
};
