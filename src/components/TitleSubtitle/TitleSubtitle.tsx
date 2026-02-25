import React from 'react';
import styles from './TitleSubtitle.module.css';

/**
 * TitleSubtitle – Stargate Design System
 * Figma: Stargate Components → Title + Subtitle
 * Size L: heading/xl 40px/48px semibold -0.5px
 * Size M: heading/m  24px/32px semibold -0.3px
 * Subtitle: body/m 16px/24px medium -0.02px
 */
export type TitleSubtitleSize = 'L' | 'M';

export interface TitleSubtitleProps {
  title?: string;
  subtitle?: string;
  size?: TitleSubtitleSize;
  showSubtitle?: boolean;
  className?: string;
}

export function TitleSubtitle({
  title = 'Overview',
  subtitle = "This is a campaign to explore effects of Trump-imposed tariffs onto the UAE's economy",
  size = 'L',
  showSubtitle = true,
  className,
}: TitleSubtitleProps) {
  return (
    <div
      className={[styles.wrapper, size === 'L' ? styles.sizeL : styles.sizeM, className]
        .filter(Boolean)
        .join(' ')}
    >
      <p className={styles.title}>{title}</p>
      {showSubtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default TitleSubtitle;
