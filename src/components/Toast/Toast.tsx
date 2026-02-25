import React from 'react';
import { Checkmark, Close } from '@carbon/icons-react';
import styles from './Toast.module.css';

/**
 * Toast – Stargate Design System
 * Figma: Stargate Components → Toast
 * Tones: positive (green), negative (red), neutral (dark)
 */
export type ToastTone = 'positive' | 'negative' | 'neutral';

export interface ToastProps {
  /** Visual tone of the toast */
  tone?: ToastTone;
  /** Message content */
  children?: React.ReactNode;
  /** Whether to show the leading icon */
  showIcon?: boolean;
  className?: string;
}

export function Toast({
  tone = 'neutral',
  children = 'Report generation started',
  showIcon = true,
  className,
}: ToastProps) {
  const toneClass = {
    positive: styles.positive,
    negative: styles.negative,
    neutral:  styles.neutral,
  }[tone];

  return (
    <div
      className={[styles.toast, toneClass, className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
    >
      {showIcon && (
        <span className={styles.icon}>
          {tone === 'negative'
            ? <Close size={24} aria-hidden="true" />
            : <Checkmark size={24} aria-hidden="true" />
          }
        </span>
      )}
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default Toast;
