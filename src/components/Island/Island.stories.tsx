import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Island } from './Island';

const meta: Meta<typeof Island> = {
  title: 'Components/Island',
  component: Island,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Island. Figma: [**Stargate Components → Island**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7235-5304).\n\nCard container with heading, optional subtitle, and a white content area. Grey background (`--background-secondary-plain`) variant is the Figma default.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    title:          { control: 'text' },
    subtitle:       { control: 'text' },
    showSubtitle:   { control: 'boolean' },
    showBackground: { control: 'boolean' },
  },
  args: {
    title: 'Overview',
    subtitle: "This campaign explores the influence of Trump Tariffs on the web in regards to UAE, and outlines a report of potential actions to be taken",
    showSubtitle: true,
    showBackground: true,
  },
};
export default meta;
type Story = StoryObj<typeof Island>;

export const WithBackground:    Story = { name: 'With Background (default)', args: { showBackground: true } };
export const WithoutBackground: Story = { name: 'Without Background',        args: { showBackground: false } };
export const TitleOnly:         Story = { name: 'Title Only',                args: { showSubtitle: false } };

export const WithCustomContent: Story = {
  name: 'With Custom Content',
  render: () => (
    <div style={{ maxWidth: 732 }}>
      <Island title="Performance" subtitle="Key metrics from the latest report">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: 'Total articles', value: '1,240' },
            { label: 'Risk narratives', value: '14' },
            { label: 'Neutral sentiment', value: '80%' },
            { label: 'Reports generated', value: '3' },
          ].map(m => (
            <div key={m.label} style={{ background: '#fff', borderRadius: 16, padding: '16px 20px' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(41,41,41,0.6)', marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 600, color: '#292929', letterSpacing: '-0.3px' }}>{m.value}</div>
            </div>
          ))}
        </div>
      </Island>
    </div>
  ),
  parameters: { layout: 'padded' },
};
