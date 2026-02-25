import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Toast. Figma: [**Stargate Components → Toast**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2675).\n\nStatus notification pill with 3 tone variants: `positive` (green), `negative` (red), `neutral` (dark).',
      },
    },
  },
  argTypes: {
    tone: { control: 'select', options: ['positive', 'negative', 'neutral'] },
    children: { control: 'text' },
    showIcon: { control: 'boolean' },
  },
  args: {
    children: 'Report generation started',
    tone: 'positive',
    showIcon: true,
  },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Positive: Story = { args: { tone: 'positive' } };
export const Negative: Story = { args: { tone: 'negative', children: 'Report generation failed' } };
export const Neutral:  Story = { args: { tone: 'neutral' } };
export const NoIcon:   Story = { name: 'Without Icon', args: { showIcon: false } };

export const AllTones: Story = {
  name: 'All Tones',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <Toast tone="positive">Report generation started</Toast>
      <Toast tone="negative">Report generation failed</Toast>
      <Toast tone="neutral">Report generation started</Toast>
    </div>
  ),
};
