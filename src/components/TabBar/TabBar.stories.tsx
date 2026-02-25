import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TopTabBar, BottomTabBar } from './TabBar';

const meta: Meta = {
  title: 'Components/TabBar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Tab Bar. Figma: [**Stargate Components → Tab Bar**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7235-5640).\n\nTwo variants:\n- **Top Tab Bar** — horizontal text tabs with bottom-border active indicator, `gap-24`\n- **Bottom Tab Bar** — pill container with icon + label tabs',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const TopDefault: Story = {
  name: 'Top Tab Bar – Default',
  render: () => <TopTabBar />,
};

export const TopInteractive: Story = {
  name: 'Top Tab Bar – Interactive',
  render: () => {
    const [active, setActive] = useState('chat');
    return (
      <TopTabBar
        activeTab={active}
        onTabChange={setActive}
        tabs={[
          { label: 'Chat',       value: 'chat' },
          { label: 'Insights',   value: 'insights' },
          { label: 'Agenda',     value: 'agenda' },
          { label: 'Transcript', value: 'transcript' },
        ]}
      />
    );
  },
};

export const BottomDefault: Story = {
  name: 'Bottom Tab Bar – Default',
  render: () => <BottomTabBar />,
};

export const BottomInteractive: Story = {
  name: 'Bottom Tab Bar – Interactive',
  render: () => {
    const [active, setActive] = useState('home');
    return <BottomTabBar activeTab={active} onTabChange={setActive} />;
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 32, alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(41,41,41,0.5)', marginBottom: 12 }}>Top Tab Bar</div>
        <TopTabBar />
      </div>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(41,41,41,0.5)', marginBottom: 12 }}>Bottom Tab Bar</div>
        <BottomTabBar />
      </div>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
