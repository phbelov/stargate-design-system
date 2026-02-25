import React from 'react';
import styles from './Tag.module.css';

/**
 * Tag priority — maps to Figma "Priority" property.
 * Figma source: Stargate Components → Tag
 */
export type TagPriority =
  | 'default'               // White bg, primary text
  | 'alternative'           // Grey bg, primary text
  | 'alternative-brand'     // Purple-tinted bg, primary text
  | 'negative'              // White bg, red text
  | 'negative-alternative'  // Grey bg, red text
  | 'positive'              // White bg, green text
  | 'positive-alternative'; // Grey bg, green text

export interface TagProps {
  /** Text label */
  children: React.ReactNode;
  /** Visual priority variant */
  priority?: TagPriority;
  /** Optional leading icon (16×16) */
  icon?: React.ReactNode;
  /** Optional extra className */
  className?: string;
}

const priorityClassMap: Record<TagPriority, string> = {
  'default':               styles.default,
  'alternative':           styles.alternative,
  'alternative-brand':     styles.alternativeBrand,
  'negative':              styles.negative,
  'negative-alternative':  styles.negativeAlternative,
  'positive':              styles.positive,
  'positive-alternative':  styles.positiveAlternative,
};

export function Tag({
  children,
  priority = 'default',
  icon,
  className,
}: TagProps) {
  const classes = [
    styles.tag,
    priorityClassMap[priority],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

export default Tag;
