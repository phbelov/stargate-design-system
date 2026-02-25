import React from 'react';
import styles from './ListItem.module.css';

/**
 * ListItem – Stargate Design System
 * Figma: Stargate Components → List Item (node 4115:11722)
 *
 * Simple 44px row with optional leading icon and trailing element.
 * States: Default, Hover (bg highlight), Pressed, Active
 */

export type ListItemState = 'default' | 'hover' | 'pressed' | 'active';

export interface ListItemProps {
  /** Primary label text */
  label: string;
  /** Visual state (used in Storybook; runtime hover is CSS-driven) */
  state?: ListItemState;
  /** Optional 24px leading icon element */
  leadingIcon?: React.ReactNode;
  /** Optional trailing element (e.g. checkmark, action button) */
  trailingElement?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Extra class name */
  className?: string;
}

export function ListItem({
  label,
  state = 'default',
  leadingIcon,
  trailingElement,
  onClick,
  className,
}: ListItemProps) {
  const isHover   = state === 'hover';
  const isPressed = state === 'pressed';
  const isActive  = state === 'active';

  const rootClasses = [
    styles.item,
    isHover   ? styles.hover   : '',
    isPressed ? styles.pressed : '',
    isActive  ? styles.active  : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="option" onClick={onClick}>
      {/* Hover / active background — extends 12px beyond content padding */}
      <div className={styles.bg} aria-hidden="true" />
      {leadingIcon && (
        <span className={styles.leading}>{leadingIcon}</span>
      )}
      <span className={styles.label}>{label}</span>
      {trailingElement && (
        <span className={styles.trailing}>{trailingElement}</span>
      )}
    </div>
  );
}

export default ListItem;
