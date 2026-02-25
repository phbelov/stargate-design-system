import React from 'react';
import { Home, Calendar, Notification, Chat } from '@carbon/icons-react';
import { Tab } from '../Tab/Tab';
import styles from './TabBar.module.css';

/**
 * TabBar – Stargate Design System
 * Figma: Stargate Components → Tab Bar
 * Two variants:
 *   Top Tab Bar  – horizontal tabs with bottom border indicator, gap-24
 *   Bottom Tab Bar – pill container with icon+label tabs, 435px wide
 */

/* ─────────────────────────── Top Tab Bar ─────────────────────────── */
export interface TabItem {
  label: string;
  value: string;
}

export interface TopTabBarProps {
  tabs?: TabItem[];
  activeTab?: string;
  onTabChange?: (value: string) => void;
  className?: string;
}

export function TopTabBar({
  tabs = [
    { label: 'Chat',       value: 'chat' },
    { label: 'Insights',   value: 'insights' },
    { label: 'Agenda',     value: 'agenda' },
    { label: 'Transcript', value: 'transcript' },
  ],
  activeTab,
  onTabChange,
  className,
}: TopTabBarProps) {
  const active = activeTab ?? tabs[0]?.value;
  return (
    <div className={[styles.topTabBar, className].filter(Boolean).join(' ')} role="tablist">
      {tabs.map(tab => (
        <Tab
          key={tab.value}
          label={tab.label}
          isActive={tab.value === active}
          onClick={() => onTabChange?.(tab.value)}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────── Bottom Tab Bar ─────────────────────────── */

export interface BottomTabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface BottomTabBarProps {
  tabs?: BottomTabItem[];
  activeTab?: string;
  onTabChange?: (value: string) => void;
  className?: string;
}

const defaultBottomTabs: BottomTabItem[] = [
  { label: 'Home',          value: 'home',          icon: <Home size={20} aria-hidden="true" /> },
  { label: 'Meetings',      value: 'meetings',      icon: <Calendar size={20} aria-hidden="true" /> },
  { label: 'Notifications', value: 'notifications', icon: <Notification size={20} aria-hidden="true" /> },
  { label: 'Messages',      value: 'messages',      icon: <Chat size={20} aria-hidden="true" /> },
];

export function BottomTabBar({
  tabs = defaultBottomTabs,
  activeTab,
  onTabChange,
  className,
}: BottomTabBarProps) {
  const active = activeTab ?? tabs[0]?.value;
  return (
    <div className={[styles.bottomTabBar, className].filter(Boolean).join(' ')} role="tablist">
      {tabs.map(tab => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={tab.value === active}
          className={[styles.bottomTab, tab.value === active ? styles.bottomTabActive : ''].filter(Boolean).join(' ')}
          onClick={() => onTabChange?.(tab.value)}
        >
          <span className={styles.bottomTabIcon}>{tab.icon}</span>
          <span className={styles.bottomTabLabel}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export default TopTabBar;
