import React from 'react';
import styles from './ListItemAdvanced.module.css';

/**
 * ListItemAdvanced – Stargate Design System
 * Figma: Stargate Components → List Item Advanced (node 6111:6757)
 *
 * Flexible list row used in SideBar, news feeds, etc.
 * Supports: source header, title, meta footer, leading & trailing slots.
 * Hover extends background 12px beyond container on each side.
 */

export type ListItemAdvancedState = 'default' | 'hover' | 'pressed';

export interface ListItemAdvancedProps {
  /** Main title text (Body/M primary) */
  title: string;
  /** Visual state */
  state?: ListItemAdvancedState;
  /** Remove bottom border (use on last item in list) */
  isLast?: boolean;
  /** Top row: source name */
  topSource?: string;
  /** Top row: date string */
  topDate?: string;
  /** Show top source/date row */
  showTop?: boolean;
  /** Bottom meta text (e.g. "1 high risk narrative") */
  bottomMeta?: string;
  /** Bottom secondary text after bullet (e.g. "80% neutral sentiment") */
  bottomMetaSecondary?: string;
  /** Show bottom meta row */
  showBottom?: boolean;
  /** Optional leading element (24px, e.g. checkbox) */
  leadingElement?: React.ReactNode;
  /** Optional trailing element (e.g. icon button) */
  trailingElement?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Extra class name */
  className?: string;
}

export function ListItemAdvanced({
  title,
  state = 'default',
  isLast = false,
  topSource,
  topDate,
  showTop = false,
  bottomMeta,
  bottomMetaSecondary,
  showBottom = false,
  leadingElement,
  trailingElement,
  onClick,
  className,
}: ListItemAdvancedProps) {
  const isHover   = state === 'hover';
  const isPressed = state === 'pressed';

  const rootClasses = [
    styles.item,
    isLast    ? styles.last    : '',
    isHover   ? styles.hover   : '',
    isPressed ? styles.pressed : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} onClick={onClick}>
      {/* Hover/pressed background overlay (extends -12px on each side) */}
      <div className={styles.bg} aria-hidden="true" />

      {leadingElement && (
        <div className={styles.leading}>{leadingElement}</div>
      )}

      <div className={styles.content}>
        {/* Top row: source + date */}
        {showTop && (topSource || topDate) && (
          <div className={styles.topRow}>
            {topSource && (
              <span className={styles.topSource}>{topSource}</span>
            )}
            {topDate && (
              <>
                <span className={styles.topDot}>·</span>
                <span className={styles.topDate}>{topDate}</span>
              </>
            )}
          </div>
        )}

        {/* Title */}
        <p className={styles.title}>{title}</p>

        {/* Bottom meta row */}
        {showBottom && bottomMeta && (
          <div className={styles.bottomRow}>
            <span className={styles.bottomMeta}>{bottomMeta}</span>
            {bottomMetaSecondary && (
              <>
                <span className={styles.bottomDot}>·</span>
                <span className={styles.bottomMeta}>{bottomMetaSecondary}</span>
              </>
            )}
          </div>
        )}
      </div>

      {trailingElement && (
        <div className={styles.trailing}>{trailingElement}</div>
      )}
    </div>
  );
}

export default ListItemAdvanced;
