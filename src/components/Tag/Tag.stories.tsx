import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const ThumbsUpIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16} aria-hidden="true">
    <path d="M1 7h2v7H1V7zM5 14V6.5L8.5 2a1 1 0 0 1 1.7.7V6h3.3a1 1 0 0 1 1 1.1l-1 6A1 1 0 0 1 12.5 14H5z" />
  </svg>
);

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Tag. Figma: [**Stargate Components → Tag**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=9247-7462).\n\n28px pill-shaped label with 7 priority variants and optional leading icon.',
      },
    },
  },
  argTypes: {
    priority: {
      control: 'select',
      options: [
        'default',
        'alternative',
        'alternative-brand',
        'negative',
        'negative-alternative',
        'positive',
        'positive-alternative',
      ],
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Recommendation for Approval',
    priority: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { priority: 'default', icon: <ThumbsUpIcon /> },
};

export const Alternative: Story = {
  args: { priority: 'alternative', icon: <ThumbsUpIcon /> },
};

export const AlternativeBrand: Story = {
  args: { priority: 'alternative-brand', icon: <ThumbsUpIcon /> },
};

export const Negative: Story = {
  args: { priority: 'negative', icon: <ThumbsUpIcon /> },
};

export const NegativeAlternative: Story = {
  args: { priority: 'negative-alternative', icon: <ThumbsUpIcon /> },
};

export const Positive: Story = {
  args: { priority: 'positive', icon: <ThumbsUpIcon /> },
};

export const PositiveAlternative: Story = {
  args: { priority: 'positive-alternative', icon: <ThumbsUpIcon /> },
};

export const AllPriorities: Story = {
  name: 'All Priorities',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px', background: '#c5a3f5', alignItems: 'flex-start' }}>
      <Tag priority="default" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
      <Tag priority="alternative" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
      <Tag priority="alternative-brand" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
      <Tag priority="negative" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
      <Tag priority="negative-alternative" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
      <Tag priority="positive" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
      <Tag priority="positive-alternative" icon={<ThumbsUpIcon />}>Recommendation for Approval</Tag>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

export const NoIcon: Story = {
  name: 'Without Icon',
  args: { priority: 'alternative-brand', children: 'Tag Label' },
};
