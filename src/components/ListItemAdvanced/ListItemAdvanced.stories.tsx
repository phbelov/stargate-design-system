import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ListItemAdvanced } from './ListItemAdvanced';

const meta: Meta<typeof ListItemAdvanced> = {
  title: 'Components/ListItemAdvanced',
  component: ListItemAdvanced,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Rich list row with optional source header, title, and meta footer. Figma: [**Stargate Components → List Item Advanced**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2757).',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed'],
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ListItemAdvanced>;

const sampleTitle = "These Are the 12 Friends Taiwan Has Left in the Whole World";
const sampleMeta  = "1 high risk narrative";
const sampleMeta2 = "80% neutral sentiment";

export const Default: Story = {
  args: {
    title: sampleTitle,
    state: 'default',
    showBottom: true,
    bottomMeta: sampleMeta,
    bottomMetaSecondary: sampleMeta2,
  },
};

export const WithTopRow: Story = {
  args: {
    title: sampleTitle,
    state: 'default',
    showTop: true,
    topSource: 'Pinsent Masons',
    topDate: '30 May',
    showBottom: true,
    bottomMeta: sampleMeta,
    bottomMetaSecondary: sampleMeta2,
  },
};

export const Hover: Story = {
  args: {
    title: sampleTitle,
    state: 'hover',
    showTop: true,
    topSource: 'Gulf Business',
    topDate: '2 Mar 2025',
    showBottom: true,
    bottomMeta: sampleMeta,
    bottomMetaSecondary: sampleMeta2,
  },
};

export const IsLast: Story = {
  args: {
    title: sampleTitle,
    state: 'default',
    isLast: true,
    showBottom: true,
    bottomMeta: sampleMeta,
    bottomMetaSecondary: sampleMeta2,
  },
};

export const TitleOnly: Story = {
  args: {
    title: sampleTitle,
    state: 'default',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ width: 540, padding: '0 12px', fontFamily: 'Inter, sans-serif' }}>
      {(['default', 'hover', 'pressed'] as const).map((s, i) => (
        <ListItemAdvanced
          key={s}
          title={`[${s}] ${sampleTitle}`}
          state={s}
          isLast={i === 2}
          showTop={true}
          topSource="Pinsent Masons"
          topDate="30 May"
          showBottom={true}
          bottomMeta={sampleMeta}
          bottomMetaSecondary={sampleMeta2}
        />
      ))}
    </div>
  ),
};
