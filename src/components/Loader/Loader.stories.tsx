import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Loader spinner. Figma: [**Stargate Components → Loader**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2753).\n\nAnimated ring in M (20px) and L (24px) sizes with 4 style variants.',
      },
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['M', 'L'] },
    style: {
      control: 'select',
      options: ['default', 'static', 'inverted', 'static-inverted'],
    },
  },
  args: {
    size: 'M',
    style: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const DefaultM: Story = {
  name: 'Default – M',
  args: { size: 'M', style: 'default' },
};

export const DefaultL: Story = {
  name: 'Default – L',
  args: { size: 'L', style: 'default' },
};

export const Static: Story = {
  args: { style: 'static' },
};

export const Inverted: Story = {
  args: { style: 'inverted' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const StaticInverted: Story = {
  name: 'Static Inverted',
  args: { style: 'static-inverted' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Size M</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Loader size="M" style="default" />
          <Loader size="M" style="static" />
          <span style={{ background: '#292929', padding: 8, borderRadius: 8, display: 'inline-flex', gap: 16 }}>
            <Loader size="M" style="inverted" />
            <Loader size="M" style="static-inverted" />
          </span>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Size L</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Loader size="L" style="default" />
          <Loader size="L" style="static" />
          <span style={{ background: '#292929', padding: 8, borderRadius: 8, display: 'inline-flex', gap: 16 }}>
            <Loader size="L" style="inverted" />
            <Loader size="L" style="static-inverted" />
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
