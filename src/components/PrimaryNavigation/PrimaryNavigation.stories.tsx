import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PrimaryNavigation } from './PrimaryNavigation';

const meta: Meta<typeof PrimaryNavigation> = {
  title: 'Components/PrimaryNavigation',
  component: PrimaryNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Primary Navigation. Figma: [**Stargate Components → Primary Navigation**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7235-5281).\n\nDesktop header: 1440px × 72px, gradient background. Logo on the left, language + settings icons on the right.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    logo:        { control: 'text' },
    language:    { control: 'text' },
    showActions: { control: 'boolean' },
  },
  args: { logo: '(In)Media', language: 'En', showActions: true },
};
export default meta;
type Story = StoryObj<typeof PrimaryNavigation>;

export const Default:       Story = {};
export const Arabic:        Story = { args: { language: 'Ar' } };
export const LogoOnly:      Story = { name: 'Logo Only', args: { showActions: false } };

export const OnDarkBg: Story = {
  name: 'On Page (with gradient visible)',
  render: () => (
    <div style={{ background: 'linear-gradient(180deg, #fff 0%, #f5f5f5 100%)', minHeight: 200 }}>
      <PrimaryNavigation />
    </div>
  ),
};
