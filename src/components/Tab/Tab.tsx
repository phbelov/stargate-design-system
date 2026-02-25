import React from 'react';
import styles from './Tab.module.css';

/**
 * Tab – Stargate Design System
 * Figma: Stargate Components → Tab (node 6911:2455)
 *
 * Single tab item used inside TopTabBar.
 * height: 44px, padding: 4px 0 12px (bottom underline area)
 * Active:  2px solid border-bottom (--interactive-outlined-focus), text primary
 * Hover:   2px solid border-bottom (--interactive-outlined-hover), text secondary
 * Default: no border, text secondary
 */

export type TabState = 'default' | 'hover' | 'active' | 'pressed';

export interface TabProps {
  /** Tab label text */
  label: string;
  /** Whether this tab is the active/selected one */
  isActive?: boolean;
  /** Forced visual state for Storybook previews (runtime uses CSS :hover) */
  state?: TabState;
  onClick?: () => void;
  className?: string;
}

export function Tab({ label, isActive, state, onClick, className }: TabProps) {
  const effectiveActive = isActive || state === 'active';
  const effectiveHover  = state === 'hover';
  const effectivePressed = state === 'pressed';

  const rootClasses = [
    styles.tab,
    effectiveActive  ? styles.active  : '',
    effectiveHover   ? styles.hover   : '',
    effectivePressed ? styles.pressed : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      role="tab"
      aria-selected={effectiveActive}
      className={rootClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Tab;
