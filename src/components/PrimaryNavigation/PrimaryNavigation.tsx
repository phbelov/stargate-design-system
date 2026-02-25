import React from 'react';
import { Settings } from '@carbon/icons-react';
import styles from './PrimaryNavigation.module.css';

/**
 * PrimaryNavigation – Stargate Design System
 * Figma: Stargate Components → Primary Navigation
 * Desktop header: 1440px × 72px, white-to-transparent gradient bg
 * Leading: "(In)Media" logo, Trailing: language selector + settings icon
 */
export interface PrimaryNavigationProps {
  logo?: string;
  language?: string;
  showActions?: boolean;
  onLanguageClick?: () => void;
  onSettingsClick?: () => void;
  className?: string;
}

export function PrimaryNavigation({
  logo = '(In)Media',
  language = 'En',
  showActions = true,
  onLanguageClick,
  onSettingsClick,
  className,
}: PrimaryNavigationProps) {
  return (
    <nav className={[styles.nav, className].filter(Boolean).join(' ')}>
      {/* Logo */}
      <div className={styles.logo}>
        <p className={styles.logoText}>{logo}</p>
      </div>

      {/* Action row */}
      {showActions && (
        <div className={styles.actions}>
          {/* Language button */}
          <button
            className={styles.iconButton}
            onClick={onLanguageClick}
            aria-label={`Switch language, current: ${language}`}
          >
            <span className={styles.languageText}>{language}</span>
          </button>

          {/* Settings button */}
          <button
            className={styles.iconButton}
            onClick={onSettingsClick}
            aria-label="Settings"
          >
            <Settings size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default PrimaryNavigation;
