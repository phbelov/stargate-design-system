import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Foundations/Text Styles',
  parameters: {
    docs: {
      description: {
        component:
          'Typography scale from Stargate Base. Uses the **Typography** collection tokens — switch font family via the toolbar.\n\nFigma: [**Stargate Base → Text Styles**](https://www.figma.com/design/5fsUmsJcZztFCbly6bziM9/Stargate-Base).',
      },
    },
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj;

const Divider = () => (
  <hr style={{ border: 'none', borderBottom: '1px solid var(--base-charcoal-8)', margin: 0 }} />
);

const TypeRow = ({
  label, cssLabel, sizeVar, lineHeightVar, weightVar, letterSpacingVar, sample,
}: {
  label: string;
  cssLabel: string;
  sizeVar: string;
  lineHeightVar: string;
  weightVar: string;
  letterSpacingVar: string;
  sample: string;
}) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '20px 0' }}>
    <div style={{ width: 200, flexShrink: 0 }}>
      <div style={{ fontFamily: 'var(--font-family)', fontSize: 11, fontWeight: 600, color: 'var(--base-brand-100)', marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--content-tertiary)', marginBottom: 2 }}>
        {cssLabel}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--content-disabled)' }}>
        var({sizeVar}) / var({lineHeightVar})
      </div>
    </div>
    <div style={{
      fontFamily: 'var(--font-family)',
      fontSize: `var(${sizeVar})`,
      lineHeight: `var(${lineHeightVar})`,
      fontWeight: `var(${weightVar})` as any,
      letterSpacing: `var(${letterSpacingVar})`,
      color: 'var(--content-primary)',
      flex: 1,
    }}>
      {sample}
    </div>
    <Divider />
  </div>
);

export const AllTextStyles: Story = {
  name: 'All Text Styles',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'var(--font-family)', background: 'var(--background-primary)', maxWidth: 1200 }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8, color: 'var(--content-primary)' }}>Text Styles</h1>
      <p style={{ fontSize: 14, color: 'var(--content-secondary)', marginBottom: 40 }}>
        Typography scale — currently using <strong style={{ color: 'var(--base-brand-100)' }}>var(--font-family)</strong>.
        Switch the typography mode in the toolbar to preview other fonts.
      </p>

      <h2 style={{
        fontSize: 16, fontWeight: 600, marginBottom: 0,
        color: 'var(--content-primary)',
        borderBottom: '2px solid var(--base-charcoal-8)',
        paddingBottom: 12, letterSpacing: '-0.02px',
      }}>
        Heading — SemiBold (600)
      </h2>
      <TypeRow label="Heading / XL" cssLabel="--size-heading-xl"
        sizeVar="--size-heading-xl" lineHeightVar="--line-height-heading-xl"
        weightVar="--font-weight-heading" letterSpacingVar="--letter-spacing-heading-xl"
        sample="Report Generation Started" />
      <TypeRow label="Heading / L" cssLabel="--size-heading-l"
        sizeVar="--size-heading-l" lineHeightVar="--line-height-heading-l"
        weightVar="--font-weight-heading" letterSpacingVar="--letter-spacing-heading-l"
        sample="Report Generation Started" />
      <TypeRow label="Heading / M" cssLabel="--size-heading-m"
        sizeVar="--size-heading-m" lineHeightVar="--line-height-heading-m"
        weightVar="--font-weight-heading" letterSpacingVar="--letter-spacing-heading-m"
        sample="Report Generation Started" />
      <TypeRow label="Heading / S" cssLabel="--size-heading-s"
        sizeVar="--size-heading-s" lineHeightVar="--line-height-heading-s"
        weightVar="--font-weight-heading" letterSpacingVar="--letter-spacing-heading-m"
        sample="Report Generation Started" />
      <TypeRow label="Heading / XS" cssLabel="--size-heading-xs"
        sizeVar="--size-heading-xs" lineHeightVar="--line-height-heading-xs"
        weightVar="--font-weight-heading" letterSpacingVar="--letter-spacing-heading-m"
        sample="Report Generation Started" />

      <h2 style={{
        fontSize: 16, fontWeight: 600, marginBottom: 0,
        color: 'var(--content-primary)',
        borderBottom: '2px solid var(--base-charcoal-8)',
        paddingBottom: 12, marginTop: 40, letterSpacing: '-0.02px',
      }}>
        Body — Medium (500)
      </h2>
      <TypeRow label="Body / L" cssLabel="--size-body-l"
        sizeVar="--size-body-l" lineHeightVar="--line-height-body-l"
        weightVar="--font-weight-body" letterSpacingVar="--letter-spacing-body-l"
        sample="The quick brown fox jumps over the lazy dog" />
      <TypeRow label="Body / M" cssLabel="--size-body-m"
        sizeVar="--size-body-m" lineHeightVar="--line-height-body-m"
        weightVar="--font-weight-body" letterSpacingVar="--letter-spacing-body-m"
        sample="The quick brown fox jumps over the lazy dog" />
      <TypeRow label="Body / S" cssLabel="--size-body-s"
        sizeVar="--size-body-s" lineHeightVar="--line-height-body-s"
        weightVar="--font-weight-body" letterSpacingVar="--letter-spacing-body-s"
        sample="The quick brown fox jumps over the lazy dog" />
      <TypeRow label="Body / XS" cssLabel="--size-body-xs"
        sizeVar="--size-body-xs" lineHeightVar="--line-height-body-xs"
        weightVar="--font-weight-body" letterSpacingVar="--letter-spacing-body-xs"
        sample="The quick brown fox jumps over the lazy dog" />

      <h2 style={{
        fontSize: 16, fontWeight: 600, marginBottom: 16,
        color: 'var(--content-primary)',
        borderBottom: '2px solid var(--base-charcoal-8)',
        paddingBottom: 12, marginTop: 40, letterSpacing: '-0.02px',
      }}>
        Colour Pairings
      </h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {[
          { bg: 'var(--background-primary)', text: 'var(--content-primary)', label: 'Primary on surface' },
          { bg: 'var(--background-primary)', text: 'var(--content-secondary)', label: 'Secondary on surface' },
          { bg: 'var(--interactive-filled-primary-default)', text: 'var(--content-inverted-primary)', label: 'Inverted on primary' },
          { bg: 'var(--interactive-filled-primary-brand-default)', text: '#fff', label: 'On brand' },
        ].map(({ bg, text, label }) => (
          <div key={label} style={{ background: bg, border: '1px solid var(--base-charcoal-8)', borderRadius: 12, padding: '12px 16px', minWidth: 160 }}>
            <div style={{ fontFamily: 'var(--font-family)', fontSize: 16, fontWeight: 500, color: text, lineHeight: '24px' }}>Aa</div>
            <div style={{ fontFamily: 'var(--font-family)', fontSize: 11, color: text, opacity: 0.6, marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};
