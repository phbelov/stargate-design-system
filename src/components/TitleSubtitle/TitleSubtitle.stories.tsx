import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TitleSubtitle } from './TitleSubtitle';

const meta: Meta<typeof TitleSubtitle> = {
  title: 'Components/TitleSubtitle',
  component: TitleSubtitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Title + Subtitle. Figma: [**Stargate Components → Title + Subtitle**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7235-5295).\n\nPage heading block. Size **L** = 40px heading, Size **M** = 24px heading. Both use Inter SemiBold.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    size: { control: 'select', options: ['L', 'M'] },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showSubtitle: { control: 'boolean' },
  },
  args: {
    title: 'Overview',
    subtitle: "This is a campaign to explore effects of Trump-imposed tariffs onto the UAE's economy",
    size: 'L',
    showSubtitle: true,
  },
};
export default meta;
type Story = StoryObj<typeof TitleSubtitle>;

export const SizeLarge:  Story = { name: 'Size L (40px)', args: { size: 'L' } };
export const SizeMedium: Story = { name: 'Size M (24px)', args: { size: 'M' } };
export const TitleOnly:  Story = { name: 'Title Only',    args: { showSubtitle: false } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 32, maxWidth: 720 }}>
      <TitleSubtitle size="L" title="Overview" subtitle="This is a campaign to explore effects of Trump-imposed tariffs onto the UAE's economy" />
      <TitleSubtitle size="M" title="Overview" subtitle="This is a campaign to explore effects of Trump-imposed tariffs onto the UAE's economy" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
