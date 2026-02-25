import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TopBar } from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'Components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Top Bar. Figma: [**Stargate Components → Top Bar**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7235-5301).\n\nMobile navigation bar: 440px × 72px, gradient background, centred title, back arrow + settings icon buttons.',
      },
    },
  },
  argTypes: {
    title:        { control: 'text' },
    subtitle:     { control: 'text' },
    showLeading:  { control: 'boolean' },
    showTrailing: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
  },
  args: {
    title: 'Report Overview',
    showLeading: true,
    showTrailing: true,
    showSubtitle: false,
  },
};
export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default:        Story = {};
export const WithSubtitle:   Story = { name: 'With Subtitle',    args: { showSubtitle: true, subtitle: 'Trump Tariffs — UAE' } };
export const NoLeading:      Story = { name: 'No Back Button',   args: { showLeading: false } };
export const NoTrailing:     Story = { name: 'No Settings',      args: { showTrailing: false } };
export const TitleOnly:      Story = { name: 'Title Only',       args: { showLeading: false, showTrailing: false } };

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start', background: '#f5f5f5', padding: 24 }}>
      <TopBar title="Report Overview" />
      <TopBar title="Report Overview" showSubtitle subtitle="Trump Tariffs — UAE" />
      <TopBar title="Report Overview" showLeading={false} />
      <TopBar title="Report Overview" showLeading={false} showTrailing={false} />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
