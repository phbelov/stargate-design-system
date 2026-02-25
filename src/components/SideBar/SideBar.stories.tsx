import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'Components/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Side Bar. Figma: [**Stargate Components → Side Bar**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7400-4738).\n\n352px × 800px white panel. Header with gradient, "New report" button, and a scrollable list of report items.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    logo:     { control: 'text' },
    language: { control: 'text' },
  },
  args: { logo: '(In)Media', language: 'En' },
};
export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};

export const Arabic: Story = { args: { language: 'Ar' } };

export const EmptyList: Story = {
  name: 'Empty List',
  args: { items: [] },
};

export const OnCanvas: Story = {
  name: 'On Page Canvas',
  render: () => (
    <div style={{ display: 'flex', background: '#f5f5f5', minHeight: '100vh' }}>
      <SideBar />
      <div style={{ flex: 1, padding: 32, fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(41,41,41,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Main content area
      </div>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
