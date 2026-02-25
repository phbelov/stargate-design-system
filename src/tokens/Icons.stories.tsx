import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  // Navigation
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown,
  Home, Menu, Close,
  // Actions
  Add, Subtract, Edit, TrashCan, Copy, Download, Upload,
  Search, Filter, OverflowMenuHorizontal,
  // Status & Feedback
  Checkmark, Warning, WarningAlt, Information, ErrorFilled,
  Notification, NotificationNew,
  // Content
  Document, Folder, FolderOpen, Image, Link, Tag,
  // Communication
  Chat, ChatLaunch, Email, Phone,
  // Time & Date
  Time, Calendar, CalendarAdd,
  // Settings & System
  Settings, SettingsAdjust, User, UserAvatar, UserMultiple,
  // Media
  Play, Pause, Stop, VolumeUp, VolumeMute,
} from '@carbon/icons-react';

const meta: Meta = {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'IBM Carbon Design System icons (`@carbon/icons-react`). All icons accept a `size` prop (16, 20, 24, 32) and inherit `color` from CSS. Source: **https://www.ibm.com/design/language/iconography/ui-icons/library/**',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

interface IconEntry {
  name: string;
  component: React.FC<{ size?: number; 'aria-hidden'?: boolean }>;
}

const ICON_CATEGORIES: { title: string; icons: IconEntry[] }[] = [
  {
    title: 'Navigation',
    icons: [
      { name: 'ArrowLeft',    component: ArrowLeft },
      { name: 'ArrowRight',   component: ArrowRight },
      { name: 'ArrowUp',      component: ArrowUp },
      { name: 'ArrowDown',    component: ArrowDown },
      { name: 'ChevronLeft',  component: ChevronLeft },
      { name: 'ChevronRight', component: ChevronRight },
      { name: 'ChevronUp',    component: ChevronUp },
      { name: 'ChevronDown',  component: ChevronDown },
      { name: 'Home',         component: Home },
      { name: 'Menu',         component: Menu },
      { name: 'Close',        component: Close },
    ],
  },
  {
    title: 'Actions',
    icons: [
      { name: 'Add',       component: Add },
      { name: 'Subtract',  component: Subtract },
      { name: 'Edit',      component: Edit },
      { name: 'TrashCan',  component: TrashCan },
      { name: 'Copy',      component: Copy },
      { name: 'Download',  component: Download },
      { name: 'Upload',    component: Upload },
      { name: 'Search',    component: Search },
      { name: 'Filter',    component: Filter },
      { name: 'OverflowMenuHorizontal',  component: OverflowMenuHorizontal },
    ],
  },
  {
    title: 'Status & Feedback',
    icons: [
      { name: 'Checkmark',        component: Checkmark },
      { name: 'Warning',          component: Warning },
      { name: 'WarningAlt',       component: WarningAlt },
      { name: 'Information',      component: Information },
      { name: 'ErrorFilled',      component: ErrorFilled },
      { name: 'Notification',     component: Notification },
      { name: 'NotificationNew',  component: NotificationNew },
    ],
  },
  {
    title: 'Content',
    icons: [
      { name: 'Document',    component: Document },
      { name: 'Folder',      component: Folder },
      { name: 'FolderOpen',  component: FolderOpen },
      { name: 'Image',       component: Image },
      { name: 'Link',        component: Link },
      { name: 'Tag',         component: Tag },
    ],
  },
  {
    title: 'Communication',
    icons: [
      { name: 'Chat',        component: Chat },
      { name: 'ChatLaunch',  component: ChatLaunch },
      { name: 'Email',       component: Email },
      { name: 'Phone',       component: Phone },
    ],
  },
  {
    title: 'Time & Date',
    icons: [
      { name: 'Time',         component: Time },
      { name: 'Calendar',     component: Calendar },
      { name: 'CalendarAdd',  component: CalendarAdd },
    ],
  },
  {
    title: 'Settings & People',
    icons: [
      { name: 'Settings',        component: Settings },
      { name: 'SettingsAdjust',  component: SettingsAdjust },
      { name: 'User',            component: User },
      { name: 'UserAvatar',      component: UserAvatar },
      { name: 'UserMultiple',    component: UserMultiple },
    ],
  },
  {
    title: 'Media',
    icons: [
      { name: 'Play',        component: Play },
      { name: 'Pause',       component: Pause },
      { name: 'Stop',        component: Stop },
      { name: 'VolumeUp',    component: VolumeUp },
      { name: 'VolumeMute',  component: VolumeMute },
    ],
  },
];

const IconCard = ({ name, Icon }: { name: string; Icon: React.FC<{ size?: number; 'aria-hidden'?: boolean }> }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    padding: '16px 12px',
    width: 96,
    borderRadius: 12,
    background: 'rgba(41,41,41,0.04)',
    cursor: 'default',
  }}>
    <Icon size={24} aria-hidden={true} />
    <span style={{
      fontFamily: 'monospace',
      fontSize: 10,
      color: 'rgba(41,41,41,0.6)',
      textAlign: 'center',
      wordBreak: 'break-word',
      lineHeight: 1.3,
    }}>
      {name}
    </span>
  </div>
);

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif', background: '#fff' }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8, color: '#292929' }}>Icons</h1>
      <p style={{ fontSize: 14, color: 'rgba(41,41,41,0.6)', marginBottom: 8 }}>
        IBM Carbon Design System — <code style={{ fontFamily: 'monospace', fontSize: 13 }}>@carbon/icons-react</code>
      </p>
      <p style={{ fontSize: 13, color: 'rgba(41,41,41,0.6)', marginBottom: 40 }}>
        Usage: <code style={{ fontFamily: 'monospace' }}>{'import { Add } from \'@carbon/icons-react\''}</code> &nbsp;·&nbsp;
        Sizes: 16, 20, 24, 32 &nbsp;·&nbsp; Color: inherits from CSS <code style={{ fontFamily: 'monospace' }}>color</code>
      </p>

      {ICON_CATEGORIES.map(cat => (
        <div key={cat.title} style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#292929',
            marginBottom: 16,
            borderBottom: '1px solid rgba(41,41,41,0.12)',
            paddingBottom: 8,
          }}>
            {cat.title}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cat.icons.map(({ name, component: Icon }) => (
              <IconCard key={name} name={name} Icon={Icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const SizeComparison: Story = {
  name: 'Size Comparison',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif', background: '#fff' }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 32, color: '#292929' }}>Icon Sizes</h1>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-end' }}>
        {([16, 20, 24, 32] as const).map(size => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Settings size={size} aria-hidden={true} />
            <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(41,41,41,0.6)' }}>{size}px</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
