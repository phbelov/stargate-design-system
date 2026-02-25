import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Add, Settings, Close, ArrowLeft, Edit, TrashCan,
  Notification, Chat, Home, Checkmark,
} from '@carbon/icons-react';
import { ButtonIcon } from './ButtonIcon';
import type { ButtonIconPriority } from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Figma: [**Stargate Components → Button Icon**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=2001-18065)\n\n' +
          'Square icon-only button. 6 priority variants × 2 sizes (M 44px / L 60px). Pass any `@carbon/icons-react` icon via the `icon` prop.\n\n' +
          '| Priority | Background | Icon colour |\n' +
          '|---|---|---|\n' +
          '| `primary` | Dark fill | White |\n' +
          '| `primary-brand` | Purple fill | White |\n' +
          '| `secondary` | Grey fill | Dark |\n' +
          '| `secondary-alternative` | White fill | Dark |\n' +
          '| `tertiary` | Transparent | Dark |\n' +
          '| `destructive` | Red fill | White |',
      },
    },
  },
  argTypes: {
    priority: {
      control: 'select',
      options: ['primary', 'primary-brand', 'secondary', 'secondary-alternative', 'tertiary', 'destructive'],
    },
    size:     { control: 'radio', options: ['M', 'L'] },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
  },
  args: {
    priority: 'secondary',
    size: 'M',
    disabled: false,
    loading: false,
  },
};
export default meta;
type Story = StoryObj<typeof ButtonIcon>;

/* ── Playground ─────────────────────────────────────────────────── */
export const Default: Story = {
  args: { icon: <Settings size={24} aria-hidden="true" />, 'aria-label': 'Settings' },
};

/* ── All Priorities (Size M) ─────────────────────────────────────── */
export const AllPrioritiesM: Story = {
  name: 'All Priorities – Size M',
  render: () => {
    const priorities: { p: ButtonIconPriority; icon: React.ReactNode; label: string }[] = [
      { p: 'primary',               icon: <Add size={24} aria-hidden="true" />,          label: 'primary' },
      { p: 'primary-brand',         icon: <Notification size={24} aria-hidden="true" />, label: 'primary-brand' },
      { p: 'secondary',             icon: <Settings size={24} aria-hidden="true" />,     label: 'secondary' },
      { p: 'secondary-alternative', icon: <Chat size={24} aria-hidden="true" />,         label: 'secondary-alternative' },
      { p: 'tertiary',              icon: <Edit size={24} aria-hidden="true" />,         label: 'tertiary' },
      { p: 'destructive',           icon: <TrashCan size={24} aria-hidden="true" />,     label: 'destructive' },
    ];
    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', padding: 16, background: 'rgba(169,100,247,0.06)', borderRadius: 16 }}>
        {priorities.map(({ p, icon, label }) => (
          <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <ButtonIcon priority={p} size="M" icon={icon} aria-label={label} />
            <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(41,41,41,0.5)', textAlign: 'center', maxWidth: 72, wordBreak: 'break-word' }}>{label}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ── All Priorities (Size L) ─────────────────────────────────────── */
export const AllPrioritiesL: Story = {
  name: 'All Priorities – Size L',
  render: () => {
    const priorities: { p: ButtonIconPriority; icon: React.ReactNode; label: string }[] = [
      { p: 'primary',               icon: <Add size={28} aria-hidden="true" />,          label: 'primary' },
      { p: 'primary-brand',         icon: <Notification size={28} aria-hidden="true" />, label: 'primary-brand' },
      { p: 'secondary',             icon: <Settings size={28} aria-hidden="true" />,     label: 'secondary' },
      { p: 'secondary-alternative', icon: <Chat size={28} aria-hidden="true" />,         label: 'secondary-alternative' },
      { p: 'tertiary',              icon: <Edit size={28} aria-hidden="true" />,         label: 'tertiary' },
      { p: 'destructive',           icon: <TrashCan size={28} aria-hidden="true" />,     label: 'destructive' },
    ];
    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', padding: 16, background: 'rgba(169,100,247,0.06)', borderRadius: 16 }}>
        {priorities.map(({ p, icon, label }) => (
          <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <ButtonIcon priority={p} size="L" icon={icon} aria-label={label} />
            <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(41,41,41,0.5)', textAlign: 'center', maxWidth: 72, wordBreak: 'break-word' }}>{label}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ── Loading ─────────────────────────────────────────────────────── */
export const Loading: Story = {
  name: 'Loading State',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary', 'primary-brand', 'secondary', 'tertiary', 'destructive'] as ButtonIconPriority[]).map(p => (
        <ButtonIcon key={p} priority={p} size="M" icon={<Settings size={24} />} loading aria-label={`Loading ${p}`} />
      ))}
    </div>
  ),
};

/* ── Disabled ─────────────────────────────────────────────────────── */
export const Disabled: Story = {
  name: 'Disabled State',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary', 'primary-brand', 'secondary', 'secondary-alternative', 'tertiary', 'destructive'] as ButtonIconPriority[]).map(p => (
        <ButtonIcon key={p} priority={p} size="M" icon={<Settings size={24} />} disabled aria-label={`Disabled ${p}`} />
      ))}
    </div>
  ),
};

/* ── Size Comparison ─────────────────────────────────────────────── */
export const SizeComparison: Story = {
  name: 'Size Comparison',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
      {(['M', 'L'] as const).map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ButtonIcon
            priority="primary"
            size={size}
            icon={<Home size={size === 'M' ? 24 : 28} aria-hidden="true" />}
            aria-label={`Size ${size}`}
          />
          <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'rgba(41,41,41,0.5)' }}>
            {size} ({size === 'M' ? '44' : '60'}px)
          </span>
        </div>
      ))}
    </div>
  ),
};
