import React from 'react';
import styles from './Island.module.css';

/**
 * Island – Stargate Design System
 * Figma: Stargate Components → Island (With Background=Yes)
 * bg: --background-secondary-plain (#ededed), px-24 pt-20 pb-24
 * border-radius: --radius-l (24px), gap: 16px
 * Heading: heading/m, subtitle: body/m, content: white rounded-16px area
 */
export interface IslandProps {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  children?: React.ReactNode;
  showBackground?: boolean;
  className?: string;
}

export function Island({
  title = 'Overview',
  subtitle = "This campaign explores the influence of Trump Tariffs on the web in regards to UAE, and outlines a report of potential actions to be taken",
  showSubtitle = true,
  children,
  showBackground = true,
  className,
}: IslandProps) {
  return (
    <div
      className={[
        styles.island,
        showBackground ? styles.withBg : styles.noBg,
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Heading block */}
      <div className={styles.heading}>
        <p className={styles.title}>{title}</p>
        {showSubtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {/* Content area */}
      {children ? (
        <div className={styles.content}>{children}</div>
      ) : (
        <div className={styles.contentPlaceholder}>
          <span className={styles.contentLabel}>Content</span>
        </div>
      )}
    </div>
  );
}

export default Island;
