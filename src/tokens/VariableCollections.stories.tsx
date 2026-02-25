import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useEffect, useState } from 'react';

const meta: Meta = {
  title: 'Foundations/Variable Collections',
  parameters: {
    docs: {
      description: {
        component:
          'All CSS custom properties from the Stargate design tokens, split into three Figma-aligned collections: **Base**, **Interface**, and **Typography**. Use the toolbar to switch modes and see live token values update.\n\nFigma: [**Stargate Base → Variable Collections**](https://www.figma.com/design/5fsUmsJcZztFCbly6bziM9/Stargate-Base).',
      },
    },
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

/* ── Helpers ── */

const fontBase: React.CSSProperties = { fontFamily: 'var(--font-family)', WebkitFontSmoothing: 'antialiased' };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ ...fontBase, fontSize: 18, fontWeight: 600, marginBottom: 16, color: 'var(--content-primary)', borderBottom: '1px solid var(--base-charcoal-8)', paddingBottom: 8 }}>
      {title}
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>{children}</div>
  </div>
);

/** Reads a CSS custom property's computed value from the nearest ancestor with data-base-mode. */
function useComputedVar(varName: string): string {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = el.closest('[data-base-mode]') || document.documentElement;
    const raw = getComputedStyle(root).getPropertyValue(varName).trim();
    setValue(raw);
  });
  return value;
}

const ColorSwatch = ({ name, cssVar }: { name: string; cssVar: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [resolved, setResolved] = useState('');
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = el.closest('[data-base-mode]') || document.documentElement;
    setResolved(getComputedStyle(root).getPropertyValue(cssVar).trim());
  });
  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 110 }}>
      <div style={{ width: 64, height: 64, borderRadius: 12, background: `var(${cssVar})`, border: '1px solid var(--base-charcoal-8)' }} />
      <span style={{ ...fontBase, fontSize: 11, fontWeight: 500, color: 'var(--content-primary)', textAlign: 'center', wordBreak: 'break-all' }}>{name}</span>
      <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'var(--content-secondary)', textAlign: 'center', wordBreak: 'break-all', maxWidth: 110 }}>{resolved || cssVar}</span>
    </div>
  );
};

const TokenRow = ({ name, cssVar }: { name: string; cssVar: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [resolved, setResolved] = useState('');
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = el.closest('[data-base-mode]') || document.documentElement;
    setResolved(getComputedStyle(root).getPropertyValue(cssVar).trim());
  });
  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', background: 'var(--background-secondary, rgba(41,41,41,0.04))', borderRadius: 8, width: 320 }}>
      <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--content-primary)', flex: 1 }}>{name}</span>
      <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--content-secondary)' }}>{resolved || '—'}</span>
    </div>
  );
};

const RadiusSwatch = ({ name, value, px }: { name: string; value: string; px: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <div style={{ width: 80, height: 80, borderRadius: px === 9999 ? 9999 : px, background: 'var(--base-brand-24)', border: '2px solid var(--base-brand-100)' }} />
    <span style={{ ...fontBase, fontSize: 11, fontWeight: 500, color: 'var(--content-primary)' }}>{name}</span>
    <span style={{ ...fontBase, fontSize: 10, color: 'var(--content-secondary)' }}>{value}</span>
  </div>
);

/* ── Base collection token list ── */
const BASE_COLORS: { section: string; tokens: { name: string; cssVar: string }[] }[] = [
  {
    section: 'Brand',
    tokens: [
      { name: '100', cssVar: '--base-brand-100' },
      { name: '40',  cssVar: '--base-brand-40' },
      { name: '24',  cssVar: '--base-brand-24' },
    ],
  },
  {
    section: 'Brand Light',
    tokens: [
      { name: '100', cssVar: '--base-brand-light-100' },
      { name: '0',   cssVar: '--base-brand-light-0' },
    ],
  },
  {
    section: 'Grey',
    tokens: [
      { name: '100', cssVar: '--base-grey-100' },
      { name: '48',  cssVar: '--base-grey-48' },
      { name: '20',  cssVar: '--base-grey-20' },
      { name: '12',  cssVar: '--base-grey-12' },
      { name: '8',   cssVar: '--base-grey-8' },
      { name: '4',   cssVar: '--base-grey-4' },
      { name: '0',   cssVar: '--base-grey-0' },
    ],
  },
  {
    section: 'Charcoal',
    tokens: [
      { name: '100', cssVar: '--base-charcoal-100' },
      { name: '60',  cssVar: '--base-charcoal-60' },
      { name: '32',  cssVar: '--base-charcoal-32' },
      { name: '24',  cssVar: '--base-charcoal-24' },
      { name: '16',  cssVar: '--base-charcoal-16' },
      { name: '8',   cssVar: '--base-charcoal-8' },
      { name: '4',   cssVar: '--base-charcoal-4' },
      { name: '0',   cssVar: '--base-charcoal-0' },
    ],
  },
  {
    section: 'White / Black',
    tokens: [
      { name: 'white', cssVar: '--base-white' },
      { name: 'black', cssVar: '--base-black' },
    ],
  },
  {
    section: 'Status',
    tokens: [
      { name: 'red',    cssVar: '--base-red' },
      { name: 'green',  cssVar: '--base-green' },
      { name: 'orange', cssVar: '--base-orange' },
    ],
  },
];

/* ── Interface collection token list ── */
const INTERFACE_COLORS: { section: string; tokens: { name: string; cssVar: string }[] }[] = [
  {
    section: 'Background',
    tokens: [
      { name: 'primary',           cssVar: '--background-primary' },
      { name: 'secondary-plain',   cssVar: '--background-secondary-plain' },
      { name: 'secondary',         cssVar: '--background-secondary' },
      { name: 'tertiary',          cssVar: '--background-tertiary' },
      { name: 'secondary-brand',   cssVar: '--background-secondary-brand' },
      { name: 'status-negative',   cssVar: '--background-status-negative' },
      { name: 'status-positive',   cssVar: '--background-status-positive' },
      { name: 'status-warning',    cssVar: '--background-status-warning' },
      { name: 'status-neutral',    cssVar: '--background-status-neutral' },
    ],
  },
  {
    section: 'Content',
    tokens: [
      { name: 'primary',           cssVar: '--content-primary' },
      { name: 'secondary',         cssVar: '--content-secondary' },
      { name: 'tertiary',          cssVar: '--content-tertiary' },
      { name: 'disabled',          cssVar: '--content-disabled' },
      { name: 'inverted-primary',  cssVar: '--content-inverted-primary' },
      { name: 'inverted-secondary', cssVar: '--content-inverted-secondary' },
      { name: 'status-negative',   cssVar: '--content-status-negative' },
      { name: 'status-positive',   cssVar: '--content-status-positive' },
      { name: 'status-warning',    cssVar: '--content-status-warning' },
    ],
  },
  {
    section: 'Interactive – Filled',
    tokens: [
      { name: 'primary-default',   cssVar: '--interactive-filled-primary-default' },
      { name: 'primary-hover',     cssVar: '--interactive-filled-primary-hover' },
      { name: 'primary-pressed',   cssVar: '--interactive-filled-primary-pressed' },
      { name: 'brand-default',     cssVar: '--interactive-filled-primary-brand-default' },
      { name: 'brand-hover',       cssVar: '--interactive-filled-primary-brand-hover' },
      { name: 'brand-pressed',     cssVar: '--interactive-filled-primary-brand-pressed' },
      { name: 'secondary-default', cssVar: '--interactive-filled-secondary-default' },
      { name: 'secondary-hover',   cssVar: '--interactive-filled-secondary-hover' },
      { name: 'secondary-pressed', cssVar: '--interactive-filled-secondary-pressed' },
      { name: 'destructive-default', cssVar: '--interactive-filled-destructive-default' },
      { name: 'destructive-hover',   cssVar: '--interactive-filled-destructive-hover' },
      { name: 'destructive-pressed', cssVar: '--interactive-filled-destructive-pressed' },
    ],
  },
  {
    section: 'Interactive – Outlined',
    tokens: [
      { name: 'default',  cssVar: '--interactive-outlined-default' },
      { name: 'hover',    cssVar: '--interactive-outlined-hover' },
      { name: 'pressed',  cssVar: '--interactive-outlined-pressed' },
      { name: 'focus',    cssVar: '--interactive-outlined-focus' },
    ],
  },
];

/* ── Story ── */

export const AllCollections: Story = {
  name: 'All Variable Collections',
  render: () => (
    <div style={{ padding: 32, background: 'var(--background-primary)', color: 'var(--content-primary)', ...fontBase }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Variable Collections</h1>
      <p style={{ fontSize: 14, color: 'var(--content-secondary)', marginBottom: 48 }}>
        Three-tier token architecture: <strong>Base</strong> → <strong>Interface</strong> → <strong>Typography</strong>.
        Use the toolbar to switch modes.
      </p>

      {/* ────────────────────────────── BASE COLLECTION ────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 4, color: 'var(--content-primary)' }}>
          Base Collection
        </h2>
        <p style={{ fontSize: 13, color: 'var(--content-secondary)', marginBottom: 24 }}>
          Raw colour primitives. 5 modes: Light, Dark, G42 Light, G42 Dark, PMO.
        </p>

        {BASE_COLORS.map(group => (
          <Section key={group.section} title={group.section}>
            {group.tokens.map(t => (
              <ColorSwatch key={t.cssVar} name={t.name} cssVar={t.cssVar} />
            ))}
          </Section>
        ))}
      </div>

      {/* ────────────────────────────── INTERFACE COLLECTION ────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 4, color: 'var(--content-primary)' }}>
          Interface Collection
        </h2>
        <p style={{ fontSize: 13, color: 'var(--content-secondary)', marginBottom: 24 }}>
          Semantic tokens referencing Base. 2 modes: Light, Dark.
        </p>

        {INTERFACE_COLORS.map(group => (
          <Section key={group.section} title={group.section}>
            {group.tokens.map(t => (
              <ColorSwatch key={t.cssVar} name={t.name} cssVar={t.cssVar} />
            ))}
          </Section>
        ))}

        <Section title="Border Radius">
          <RadiusSwatch name="--radius-xxs" value="4px" px={4} />
          <RadiusSwatch name="--radius-xs" value="8px" px={8} />
          <RadiusSwatch name="--radius-s" value="12px" px={12} />
          <RadiusSwatch name="--radius-m" value="16px" px={16} />
          <RadiusSwatch name="--radius-l" value="24px" px={24} />
          <RadiusSwatch name="--radius-xl" value="32px" px={32} />
          <RadiusSwatch name="--radius-infinite" value="9999px" px={9999} />
        </Section>

        <Section title="Spacing">
          {[2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48].map(n => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: n, height: n, background: 'var(--base-brand-100)', borderRadius: 2, minWidth: 2, minHeight: 2 }} />
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--content-primary)' }}>{n}px</span>
            </div>
          ))}
        </Section>

        <Section title="Transition">
          <TokenRow name="--transition-fast" cssVar="--transition-fast" />
          <TokenRow name="--transition-base" cssVar="--transition-base" />
          <TokenRow name="--transition-slow" cssVar="--transition-slow" />
        </Section>
      </div>

      {/* ────────────────────────────── TYPOGRAPHY COLLECTION ────────────────────────────── */}
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 4, color: 'var(--content-primary)' }}>
          Typography Collection
        </h2>
        <p style={{ fontSize: 13, color: 'var(--content-secondary)', marginBottom: 24 }}>
          Font tokens. 4 modes: Inter, Noto Sans, SF Pro, Diatype.
        </p>

        <Section title="Font Family">
          <TokenRow name="--font-family" cssVar="--font-family" />
        </Section>

        <Section title="Font Weights">
          <TokenRow name="--font-weight-body" cssVar="--font-weight-body" />
          <TokenRow name="--font-weight-heading" cssVar="--font-weight-heading" />
        </Section>

        <Section title="Body Sizes">
          <TokenRow name="--size-body-xs" cssVar="--size-body-xs" />
          <TokenRow name="--size-body-s" cssVar="--size-body-s" />
          <TokenRow name="--size-body-m" cssVar="--size-body-m" />
          <TokenRow name="--size-body-l" cssVar="--size-body-l" />
        </Section>

        <Section title="Heading Sizes">
          <TokenRow name="--size-heading-xs" cssVar="--size-heading-xs" />
          <TokenRow name="--size-heading-s" cssVar="--size-heading-s" />
          <TokenRow name="--size-heading-m" cssVar="--size-heading-m" />
          <TokenRow name="--size-heading-l" cssVar="--size-heading-l" />
          <TokenRow name="--size-heading-xl" cssVar="--size-heading-xl" />
        </Section>

        <Section title="Line Heights (Body)">
          <TokenRow name="--line-height-body-xs" cssVar="--line-height-body-xs" />
          <TokenRow name="--line-height-body-s" cssVar="--line-height-body-s" />
          <TokenRow name="--line-height-body-m" cssVar="--line-height-body-m" />
          <TokenRow name="--line-height-body-l" cssVar="--line-height-body-l" />
        </Section>

        <Section title="Line Heights (Heading)">
          <TokenRow name="--line-height-heading-xs" cssVar="--line-height-heading-xs" />
          <TokenRow name="--line-height-heading-s" cssVar="--line-height-heading-s" />
          <TokenRow name="--line-height-heading-m" cssVar="--line-height-heading-m" />
          <TokenRow name="--line-height-heading-l" cssVar="--line-height-heading-l" />
          <TokenRow name="--line-height-heading-xl" cssVar="--line-height-heading-xl" />
        </Section>

        <Section title="Letter Spacing">
          <TokenRow name="--letter-spacing-body-xs" cssVar="--letter-spacing-body-xs" />
          <TokenRow name="--letter-spacing-body-s" cssVar="--letter-spacing-body-s" />
          <TokenRow name="--letter-spacing-body-m" cssVar="--letter-spacing-body-m" />
          <TokenRow name="--letter-spacing-body-l" cssVar="--letter-spacing-body-l" />
          <TokenRow name="--letter-spacing-heading-m" cssVar="--letter-spacing-heading-m" />
          <TokenRow name="--letter-spacing-heading-l" cssVar="--letter-spacing-heading-l" />
          <TokenRow name="--letter-spacing-heading-xl" cssVar="--letter-spacing-heading-xl" />
        </Section>

        <Section title="Type Sample">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 600 }}>
            <div style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--size-heading-xl)', fontWeight: 'var(--font-weight-heading)' as any, lineHeight: 'var(--line-height-heading-xl)', letterSpacing: 'var(--letter-spacing-heading-xl)' }}>
              Heading XL
            </div>
            <div style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--size-heading-m)', fontWeight: 'var(--font-weight-heading)' as any, lineHeight: 'var(--line-height-heading-m)', letterSpacing: 'var(--letter-spacing-heading-m)' }}>
              Heading M — The quick brown fox
            </div>
            <div style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--size-body-m)', fontWeight: 'var(--font-weight-body)' as any, lineHeight: 'var(--line-height-body-m)', letterSpacing: 'var(--letter-spacing-body-m)' }}>
              Body M — The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--size-body-s)', fontWeight: 'var(--font-weight-body)' as any, lineHeight: 'var(--line-height-body-s)', letterSpacing: 'var(--letter-spacing-body-s)', color: 'var(--content-secondary)' }}>
              Body S — Secondary text sample with smaller size and muted colour.
            </div>
          </div>
        </Section>
      </div>
    </div>
  ),
};
