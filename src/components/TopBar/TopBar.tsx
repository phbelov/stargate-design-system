import React from 'react';
import { ArrowLeft, Settings } from '@carbon/icons-react';
import styles from './TopBar.module.css';

/**
 * TopBar – Stargate Design System
 * Figma: Stargate Components → Top Bar
 * Mobile-first nav bar: 72px height, white-to-transparent gradient bg
 * Leading: back arrow button, trailing: settings icon, title: centered body/m
 */
export interface TopBarProps {
  title?: string;
  subtitle?: string;
  showLeading?: boolean;
  showTrailing?: boolean;
  showSubtitle?: boolean;
  onBack?: () => void;
  onSettings?: () => void;
  className?: string;
}

export function TopBar({
  title = 'Title',
  subtitle,
  showLeading = true,
  showTrailing = true,
  showSubtitle = false,
  onBack,
  onSettings,
  className,
}: TopBarProps) {
  return (
    <div className={[styles.topBar, className].filter(Boolean).join(' ')}>
      {/* Title (centred) */}
      {title && (
        <div className={styles.titleBlock}>
          <p className={styles.title}>{title}</p>
          {showSubtitle && subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </div>
      )}

      {/* Leading – back button */}
      {showLeading && (
        <button className={styles.iconButton} onClick={onBack} aria-label="Go back">
          <ArrowLeft size={24} aria-hidden="true" />
        </button>
      )}

      {/* Trailing – settings */}
      {showTrailing && (
        <div className={styles.trailingRow}>
          <button className={styles.iconButton} onClick={onSettings} aria-label="Settings">
            <Settings size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TopBar;
