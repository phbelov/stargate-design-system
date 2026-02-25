import React from 'react';
import styles from './Tooltip.module.css';

/**
 * Tooltip – Stargate Design System
 * Figma: Stargate Components → Tooltip
 * Dark bg (#292929), body/s text, px-20 py-16, border-radius --radius-m
 */
export interface TooltipProps {
  children?: React.ReactNode;
  className?: string;
}

export function Tooltip({
  children = "You'll be able to generate a new report once the ongoing report generation process is done",
  className,
}: TooltipProps) {
  return (
    <div className={[styles.tooltip, className].filter(Boolean).join(' ')} role="tooltip">
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default Tooltip;
