import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Foundations/Grid Styles',
  parameters: {
    docs: {
      description: {
        component: 'Layout grid specifications from Stargate Base. Figma: **Stargate Base → Grid Styles**.',
      },
    },
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

const GridPreview = ({ columns, margin, gutter }: { columns: number; margin: number; gutter: number }) => (
  <div style={{ width: '100%', position: 'relative', height: 56, overflow: 'hidden', borderRadius: 8, background: '#fafafa', border: '1px solid rgba(41,41,41,0.08)' }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', padding: `0 ${margin}px`, gap: gutter }}>
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} style={{ flex: 1, height: '100%', background: 'rgba(169,100,247,0.12)', border: '1px solid rgba(169,100,247,0.3)', borderRadius: 2 }} />
      ))}
    </div>
  </div>
);

const Stat = ({ label, value }: { label: string; value: string | number }) => (
  <div style={{ background: 'rgba(41,41,41,0.04)', borderRadius: 8, padding: '8px 14px', minWidth: 80 }}>
    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(41,41,41,0.5)', marginBottom: 2 }}>{label}</div>
    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: '#292929' }}>{value}</div>
  </div>
);

export const GridOverview: Story = {
  name: 'Grid Overview',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif', background: '#fff' }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8, color: '#292929' }}>Grid Styles</h1>
      <p style={{ fontSize: 14, color: 'rgba(41,41,41,0.6)', marginBottom: 40 }}>
        Layout grid specifications from Stargate Base. Figma: <strong>Stargate Base → Grid Styles</strong>
      </p>

      {[
        { name: 'Desktop',  maxWidth: 1440, columns: 12, margin: 32, gutter: 24, breakpoint: '≥ 1280px' },
        { name: 'Tablet',   maxWidth: 768,  columns: 8,  margin: 24, gutter: 16, breakpoint: '768px – 1279px' },
        { name: 'Mobile',   maxWidth: 375,  columns: 4,  margin: 20, gutter: 16, breakpoint: '< 768px' },
      ].map(grid => (
        <div key={grid.name} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: '#292929', margin: 0 }}>{grid.name}</h2>
            <span style={{ fontSize: 12, color: 'rgba(41,41,41,0.4)', fontFamily: 'monospace' }}>{grid.breakpoint}</span>
          </div>
          <div style={{ maxWidth: 900, marginBottom: 12 }}>
            <GridPreview columns={grid.columns} margin={grid.margin} gutter={grid.gutter} />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Stat label="Max width"    value={`${grid.maxWidth}px`} />
            <Stat label="Columns"      value={grid.columns} />
            <Stat label="Margin"       value={`${grid.margin}px`} />
            <Stat label="Gutter"       value={`${grid.gutter}px`} />
            <Stat label="Col width"    value={`~${Math.round((grid.maxWidth - grid.margin * 2 - grid.gutter * (grid.columns - 1)) / grid.columns)}px`} />
          </div>
        </div>
      ))}

      <h2 style={{ fontSize: 18, fontWeight: 600, color: '#292929', marginBottom: 16 }}>Spacing Scale</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end' }}>
        {[2,4,6,8,10,12,16,20,24,28,32,40,48].map(n => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: n > 48 ? 48 : n, height: n > 48 ? 48 : n, minWidth: 2, minHeight: 2, background: '#a964f7', borderRadius: 2 }} />
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#292929', whiteSpace: 'nowrap' }}>{n}px</span>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(41,41,41,0.4)' }}>--space-{n}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
