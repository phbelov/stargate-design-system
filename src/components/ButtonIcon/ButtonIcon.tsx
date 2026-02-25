import React from 'react';
import styles from './ButtonIcon.module.css';
import { Loader } from '../Loader/Loader';

/**
 * ButtonIcon – Stargate Design System
 * Figma: Stargate Components → Button Icon (node 2001:18065)
 *
 * Square icon-only button in 6 priority variants × 2 sizes.
 *
 * Size M: 44×44px  (padding 10px, icon 24px, border-radius --radius-l  24px)
 * Size L: 60×60px  (padding 16px, icon 28px, border-radius --radius-xl 32px)
 *
 * Priorities:
 *   primary             – dark fill, white icon
 *   primary-brand       – purple fill, white icon
 *   secondary           – grey fill, dark icon
 *   secondary-alternative – white fill, dark icon
 *   tertiary            – transparent, dark icon, hover bg via absolute element
 *   destructive         – red fill, white icon
 */

export type ButtonIconPriority =
  | 'primary'
  | 'primary-brand'
  | 'secondary'
  | 'secondary-alternative'
  | 'tertiary'
  | 'destructive';

export type ButtonIconSize = 'M' | 'L';

export interface ButtonIconProps {
  /** Carbon icon element (or any 24/28px SVG) */
  icon: React.ReactNode;
  priority?: ButtonIconPriority;
  size?: ButtonIconSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  className?: string;
}

const PRIORITY_CLASS: Record<ButtonIconPriority, string> = {
  'primary':               styles.primary,
  'primary-brand':         styles.primaryBrand,
  'secondary':             styles.secondary,
  'secondary-alternative': styles.secondaryAlternative,
  'tertiary':              styles.tertiary,
  'destructive':           styles.destructive,
};

export function ButtonIcon({
  icon,
  priority = 'tertiary',
  size = 'M',
  disabled = false,
  loading = false,
  onClick,
  'aria-label': ariaLabel,
  className,
}: ButtonIconProps) {
  const rootClasses = [
    styles.btn,
    size === 'L' ? styles.sizeL : styles.sizeM,
    PRIORITY_CLASS[priority],
    disabled ? styles.disabled : '',
    loading  ? styles.loading  : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const loaderStyle = priority === 'primary' || priority === 'primary-brand' || priority === 'destructive'
    ? 'inverted'
    : 'default';

  return (
    <button
      className={rootClasses}
      onClick={!disabled && !loading ? onClick : undefined}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      type="button"
    >
      {/* Tertiary hover background (absolutely positioned, same radius as btn) */}
      {priority === 'tertiary' && (
        <div className={styles.tertiaryBg} aria-hidden="true" />
      )}

      {loading ? (
        <span className={styles.loaderWrap}>
          <Loader size={size === 'L' ? 'L' : 'M'} style={loaderStyle} />
        </span>
      ) : (
        <span className={styles.iconWrap} aria-hidden={!ariaLabel}>
          {icon}
        </span>
      )}
    </button>
  );
}

export default ButtonIcon;
