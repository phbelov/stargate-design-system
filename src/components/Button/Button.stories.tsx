import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Button component. Figma: [**Stargate Components → Buttons**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=4087-3788).\n\nSupports 9 priority variants, 2 sizes, loading and disabled states.',
      },
    },
  },
  argTypes: {
    priority: {
      control: 'select',
      options: [
        'primary',
        'primary-brand',
        'secondary',
        'secondary-alternative',
        'destructive',
        'tertiary',
        'tertiary-underlined',
        'quaternary',
        'quaternary-underlined',
      ],
      description: 'Visual priority variant (maps to Figma "Priority" property)',
    },
    size: {
      control: 'radio',
      options: ['M', 'L'],
      description: 'Size: M = 44px height, L = 60px height',
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Discuss',
    priority: 'primary',
    size: 'M',
    disabled: false,
    loading: false,
    iconOnly: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ── Single stories ─────────────────────────────────────────── */

export const Primary: Story = {
  args: { priority: 'primary', children: 'Discuss' },
};

export const PrimaryBrand: Story = {
  args: { priority: 'primary-brand', children: 'Discuss' },
};

export const Secondary: Story = {
  args: { priority: 'secondary', children: 'Discuss' },
};

export const SecondaryAlternative: Story = {
  args: { priority: 'secondary-alternative', children: 'Discuss' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Destructive: Story = {
  args: { priority: 'destructive', children: 'Delete' },
};

export const Tertiary: Story = {
  args: { priority: 'tertiary', children: 'Discuss' },
};

export const TertiaryUnderlined: Story = {
  args: { priority: 'tertiary-underlined', children: 'Discuss' },
};

export const Quaternary: Story = {
  args: { priority: 'quaternary', children: 'Discuss' },
};

export const QuaternaryUnderlined: Story = {
  args: { priority: 'quaternary-underlined', children: 'Discuss' },
};

export const Loading: Story = {
  args: { priority: 'primary-brand', loading: true, children: 'Discuss' },
};

export const Disabled: Story = {
  args: { priority: 'primary', disabled: true, children: 'Discuss' },
};

export const SizeLarge: Story = {
  args: { priority: 'primary', size: 'L', children: 'Discuss' },
};

/* ── All priorities overview ────────────────────────────────── */

export const AllPrioritiesM: Story = {
  name: 'All Priorities – Size M',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', padding: '24px', background: '#c5a3f5' }}>
      <Button priority="quaternary" size="M">Discuss</Button>
      <Button priority="quaternary-underlined" size="M">Discuss</Button>
      <Button priority="tertiary" size="M">Discuss</Button>
      <Button priority="tertiary-underlined" size="M">Discuss</Button>
      <Button priority="secondary" size="M">Discuss</Button>
      <Button priority="primary-brand" size="M">Discuss</Button>
      <Button priority="primary" size="M">Discuss</Button>
      <Button priority="destructive" size="M">Discuss</Button>
      <Button priority="secondary-alternative" size="M">Discuss</Button>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

export const AllPrioritiesL: Story = {
  name: 'All Priorities – Size L',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', padding: '24px', background: '#c5a3f5' }}>
      <Button priority="quaternary" size="L">Discuss</Button>
      <Button priority="quaternary-underlined" size="L">Discuss</Button>
      <Button priority="tertiary" size="L">Discuss</Button>
      <Button priority="tertiary-underlined" size="L">Discuss</Button>
      <Button priority="secondary" size="L">Discuss</Button>
      <Button priority="primary-brand" size="L">Discuss</Button>
      <Button priority="primary" size="L">Discuss</Button>
      <Button priority="destructive" size="L">Discuss</Button>
      <Button priority="secondary-alternative" size="L">Discuss</Button>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

export const AllStates: Story = {
  name: 'All States – Primary Brand',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', padding: '24px' }}>
      <Button priority="primary-brand">Default</Button>
      <Button priority="primary-brand" loading>Loading</Button>
      <Button priority="primary-brand" disabled>Disabled</Button>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

export const DisabledAll: Story = {
  name: 'All Priorities – Disabled',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', padding: '24px', background: '#c5a3f5' }}>
      <Button priority="quaternary" disabled>Discuss</Button>
      <Button priority="quaternary-underlined" disabled>Discuss</Button>
      <Button priority="tertiary" disabled>Discuss</Button>
      <Button priority="tertiary-underlined" disabled>Discuss</Button>
      <Button priority="secondary" disabled>Discuss</Button>
      <Button priority="primary-brand" disabled>Discuss</Button>
      <Button priority="primary" disabled>Discuss</Button>
      <Button priority="destructive" disabled>Discuss</Button>
      <Button priority="secondary-alternative" disabled>Discuss</Button>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
