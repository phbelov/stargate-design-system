import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate Modal. Figma: [**Stargate Components → Modal**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=7235-6717)\n\n' +
          'Two layouts:\n' +
          '- **Desktop** — 467px wide, all-corner 32px radius, `Heading/M` title, horizontal button row\n' +
          '- **Mobile** — full-width bottom sheet, top-only 32px radius, `Heading/XL` title, vertical button stack, drag anchor + Home Indicator',
      },
    },
  },
  argTypes: {
    title:  { control: 'text' },
    open:   { control: 'boolean' },
    layout: { control: 'radio', options: ['desktop', 'mobile'] },
  },
  args: { title: 'Save progress?', open: true, layout: 'desktop' },
};
export default meta;
type Story = StoryObj<typeof Modal>;

/* ── Desktop ──────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Desktop – Default',
};

export const WithContent: Story = {
  name: 'Desktop – With Content',
  args: {
    title: 'Delete report?',
    children: (
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: '24px', color: 'rgba(41,41,41,0.6)', margin: 0 }}>
        This action cannot be undone. The report and all its data will be permanently removed.
      </p>
    ),
    actions: [
      { label: 'Cancel', priority: 'secondary' },
      { label: 'Delete', priority: 'primary'   },
    ],
  },
};

export const SingleAction: Story = {
  name: 'Desktop – Single Action',
  args: {
    title: 'Generation complete',
    actions: [{ label: 'View report', priority: 'primary' }],
  },
};

export const OnOverlay: Story = {
  name: 'Desktop – On Dark Overlay',
  render: () => (
    <div style={{
      position: 'relative', width: '100%', minHeight: 480,
      background: 'rgba(41,41,41,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 16, padding: 32,
    }}>
      <Modal title="Save progress?" layout="desktop" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

/* ── Mobile ───────────────────────────────────────────────────────── */

export const Mobile: Story = {
  name: 'Mobile – Default',
  args: { layout: 'mobile' },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      minHeight: '100vh', background: 'rgba(41,41,41,0.4)',
    }}>
      <Modal {...args} />
    </div>
  ),
};

export const MobileWithContent: Story = {
  name: 'Mobile – With Content',
  args: {
    layout: 'mobile',
    title: 'Delete report?',
    children: (
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: '24px', color: 'rgba(41,41,41,0.6)', margin: 0 }}>
        This action cannot be undone. The report and all its data will be permanently removed.
      </p>
    ),
    actions: [
      { label: 'Cancel', priority: 'secondary' },
      { label: 'Delete', priority: 'primary'   },
    ],
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      minHeight: '100vh', background: 'rgba(41,41,41,0.4)',
    }}>
      <Modal {...args} />
    </div>
  ),
};

export const MobileSingleAction: Story = {
  name: 'Mobile – Single Action',
  args: {
    layout: 'mobile',
    title: 'Generation complete',
    actions: [{ label: 'View report', priority: 'primary' }],
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      minHeight: '100vh', background: 'rgba(41,41,41,0.4)',
    }}>
      <Modal {...args} />
    </div>
  ),
};
