import React from 'react';
import { Checkmark } from '@carbon/icons-react';
import { ListItem } from '../ListItem/ListItem';
import styles from './Dropdown.module.css';

/**
 * Dropdown – Stargate Design System
 * Figma: Stargate Components → Dropdown
 * White bg, 2px outlined border, border-radius --radius-l (24px), px-20 py-8
 * Uses ListItem for each row — consistent padding + hover states
 */
export interface DropdownItem {
  label: string;
  value: string;
  selected?: boolean;
}

export interface DropdownProps {
  items?: DropdownItem[];
  onSelect?: (value: string) => void;
  className?: string;
}

const defaultItems: DropdownItem[] = [
  { label: 'Last 7 days',   value: '7d',  selected: true },
  { label: 'Last 30 days',  value: '30d' },
  { label: 'Last 90 days',  value: '90d' },
  { label: 'Last 6 months', value: '6m' },
  { label: 'Last year',     value: '1y' },
];

export function Dropdown({ items = defaultItems, onSelect, className }: DropdownProps) {
  return (
    <div className={[styles.dropdown, className].filter(Boolean).join(' ')}>
      <ul className={styles.list} role="listbox">
        {items.map(item => (
          <li key={item.value} role="none">
            <ListItem
              label={item.label}
              state={item.selected ? 'active' : 'default'}
              trailingElement={
                item.selected
                  ? <Checkmark size={16} aria-hidden="true" />
                  : undefined
              }
              onClick={() => onSelect?.(item.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
