import React from 'react';
import styles from './Button.module.css';

/**
 * Button priorities – mapped from Figma "Priority" property.
 * Figma source: Stargate Components → Buttons → Button frame
 */
export type ButtonPriority =
  | 'primary'               // Dark pill
  | 'primary-brand'         // Purple pill (#a964f7)
  | 'secondary'             // Light grey pill
  | 'secondary-alternative' // White pill
  | 'destructive'           // Red pill (#b5231b)
  | 'tertiary'              // Text-only, secondary colour
  | 'tertiary-underlined'   // Underlined text, secondary colour
  | 'quaternary'            // Text-only, primary colour
  | 'quaternary-underlined'; // Underlined text, primary colour

/** Button sizes – M = 44px height, L = 60px height */
export type ButtonSize = 'M' | 'L';

export interface ButtonProps {
  /** Visual priority (style variant) */
  priority?: ButtonPriority;
  /** Size – M (44px) or L (60px) */
  size?: ButtonSize;
  /** Disable interaction and apply reduced-opacity styling */
  disabled?: boolean;
  /** Show loading spinner instead of label */
  loading?: boolean;
  /** Render as an icon-only button (square, no label) */
  iconOnly?: boolean;
  /** Button content – text or icon */
  children?: React.ReactNode;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Optional extra className for one-off overrides */
  className?: string;
  /** Optional leading icon (left of label) */
  leadingIcon?: React.ReactNode;
  /** Inline style overrides (e.g. width: '100%') */
  style?: React.CSSProperties;
}

const priorityClassMap: Record<ButtonPriority, string> = {
  'primary':               styles.primary,
  'primary-brand':         styles.primaryBrand,
  'secondary':             styles.secondary,
  'secondary-alternative': styles.secondaryAlternative,
  'destructive':           styles.destructive,
  'tertiary':              styles.tertiary,
  'tertiary-underlined':   styles.tertiaryUnderlined,
  'quaternary':            styles.quaternary,
  'quaternary-underlined': styles.quaternaryUnderlined,
};

const sizeClassMap: Record<ButtonSize, string> = {
  M: styles.sizeM,
  L: styles.sizeL,
};

export function Button({
  priority = 'primary',
  size = 'M',
  disabled = false,
  loading = false,
  iconOnly = false,
  children,
  type = 'button',
  onClick,
  className,
  leadingIcon,
  style,
}: ButtonProps) {
  const classes = [
    styles.button,
    priorityClassMap[priority],
    sizeClassMap[size],
    iconOnly ? styles.iconOnly : '',
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      style={style}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden="true">
          <span className={styles.spinnerRing} />
        </span>
      )}
      <span className={[styles.inner, loading ? styles.labelHidden : ''].filter(Boolean).join(' ')}>
        {leadingIcon && <span className={styles.leadingIcon}>{leadingIcon}</span>}
        {children}
      </span>
    </button>
  );
}

export default Button;
