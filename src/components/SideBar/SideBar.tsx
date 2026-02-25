import React from 'react';
import { Settings, Add } from '@carbon/icons-react';
import styles from './SideBar.module.css';
import { Button } from '../Button/Button';

/**
 * SideBar – Stargate Design System
 * Figma: Stargate Components → Side Bar (State=Default)
 * Width: 352px, height: 800px, white bg
 * Header (gradient overlay): logo + language/settings icons
 * "New report" secondary-L button
 * List of report items: title + subtitle (narrative count + sentiment %)
 */

export interface SideBarListItem {
  title: string;
  narratives?: string;
  sentiment?: string;
  active?: boolean;
}

export interface SideBarProps {
  logo?: string;
  language?: string;
  items?: SideBarListItem[];
  onNewReport?: () => void;
  onItemClick?: (index: number) => void;
  className?: string;
}

const defaultItems: SideBarListItem[] = [
  { title: "Inception's Board Observer Strategy",   narratives: '1 high risk narrative', sentiment: '80% neutral sentiment', active: true },
  { title: 'XML Response Format Anomaly',           narratives: '1 high risk narrative', sentiment: '80% neutral sentiment' },
  { title: 'XML Extraction Format Issues',          narratives: '1 high risk narrative', sentiment: '80% neutral sentiment' },
  { title: 'Unverified Claim Detection Failure',    narratives: '1 high risk narrative', sentiment: '80% neutral sentiment' },
  { title: 'XML Response Extraction Anomaly',       narratives: '1 high risk narrative', sentiment: '80% neutral sentiment' },
  { title: 'Claim Verification Formatting Anomalies', narratives: '1 high risk narrative', sentiment: '80% neutral sentiment' },
];

export function SideBar({
  logo = '(In)Media',
  language = 'En',
  items = defaultItems,
  onNewReport,
  onItemClick,
  className,
}: SideBarProps) {
  return (
    <div className={[styles.sidebar, className].filter(Boolean).join(' ')}>
      {/* Header with gradient */}
      <div className={styles.header}>
        <span className={styles.logoText}>{logo}</span>
        <div className={styles.headerActions}>
          <button className={styles.headerBtn} aria-label={`Language: ${language}`}>
            <span className={styles.languageText}>{language}</span>
          </button>
          <button className={styles.headerBtn} aria-label="Settings">
            <Settings size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* New Report button */}
      <div className={styles.newReportRow}>
        <Button
          priority="secondary"
          size="L"
          leadingIcon={<Add size={24} aria-hidden="true" />}
          onClick={onNewReport}
          style={{ width: '100%' }}
        >
          New report
        </Button>
      </div>

      {/* List */}
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li
            key={i}
            className={[styles.listItem, item.active ? styles.listItemActive : ''].filter(Boolean).join(' ')}
            onClick={() => onItemClick?.(i)}
          >
            <div className={styles.listItemContent}>
              <p className={styles.listItemTitle}>{item.title}</p>
              <div className={styles.listItemMeta}>
                {item.narratives && <span className={styles.metaText}>{item.narratives}</span>}
                {item.narratives && item.sentiment && (
                  <span className={styles.metaDot}>·</span>
                )}
                {item.sentiment && <span className={styles.metaText}>{item.sentiment}</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
