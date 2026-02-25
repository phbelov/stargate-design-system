import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate ProgressBar. Figma: [**Stargate Components → Progress Bar**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2734).\n\nLine and circle variants. Track is `rgba(41,41,41,0.08)`, indicator is brand purple `#a964f7`. Inverted style for dark backgrounds.',
      },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    variant: { control: 'radio', options: ['line', 'circle'] },
    progressStyle: { control: 'radio', options: ['default', 'inverted'] },
    showLabel: { control: 'boolean' },
    size: { control: { type: 'number', min: 16, max: 120, step: 4 } },
  },
  args: {
    value: 50,
    variant: 'line',
    progressStyle: 'default',
    showLabel: false,
    size: 24,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/* Line */
export const Line0: Story = { name: 'Line – 0%', args: { variant: 'line', value: 0 } };
export const Line20: Story = { name: 'Line – 20%', args: { variant: 'line', value: 20 } };
export const Line50: Story = { name: 'Line – 50%', args: { variant: 'line', value: 50 } };
export const Line80: Story = { name: 'Line – 80%', args: { variant: 'line', value: 80 } };
export const Line100: Story = { name: 'Line – 100%', args: { variant: 'line', value: 100 } };

export const LineWithLabel: Story = {
  name: 'Line – With Label',
  args: { variant: 'line', value: 65, showLabel: true },
};

export const LineInverted: Story = {
  name: 'Line – Inverted',
  args: { variant: 'line', value: 50, progressStyle: 'inverted' },
  parameters: { backgrounds: { default: 'dark' } },
};

/* Circle */
export const Circle0: Story = { name: 'Circle – 0%', args: { variant: 'circle', value: 0, size: 24 } };
export const Circle40: Story = { name: 'Circle – 40%', args: { variant: 'circle', value: 40, size: 24 } };
export const Circle90: Story = { name: 'Circle – 90%', args: { variant: 'circle', value: 90, size: 24 } };
export const Circle100: Story = { name: 'Circle – 100%', args: { variant: 'circle', value: 100, size: 24 } };

export const CircleInverted: Story = {
  name: 'Circle – Inverted',
  args: { variant: 'circle', value: 40, progressStyle: 'inverted', size: 24 },
  parameters: { backgrounds: { default: 'dark' } },
};

/* All Line states */
export const AllLineStates: Story = {
  name: 'Line – All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', width: 320 }}>
      <ProgressBar variant="line" value={0} showLabel label="0%" />
      <ProgressBar variant="line" value={20} showLabel label="20%" />
      <ProgressBar variant="line" value={50} showLabel label="50%" />
      <ProgressBar variant="line" value={80} showLabel label="80%" />
      <ProgressBar variant="line" value={100} showLabel label="100%" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

/* All Circle states */
export const AllCircleStates: Story = {
  name: 'Circle – All States',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', alignItems: 'center' }}>
      <ProgressBar variant="circle" value={0} size={24} />
      <ProgressBar variant="circle" value={10} size={24} />
      <ProgressBar variant="circle" value={40} size={24} />
      <ProgressBar variant="circle" value={90} size={24} />
      <ProgressBar variant="circle" value={100} size={24} />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
