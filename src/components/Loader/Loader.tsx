import styles from './Loader.module.css';

/**
 * Loader size – M = 20px, L = 24px.
 * Figma source: Stargate Components → Loader
 */
export type LoaderSize = 'M' | 'L';

/**
 * Loader style — maps to Figma "Style" property.
 * - default:         Animated, brand purple arc
 * - static:          Frozen frame, brand purple arc
 * - inverted:        Animated, white arc (for dark backgrounds)
 * - static-inverted: Frozen frame, white arc
 */
export type LoaderStyle = 'default' | 'static' | 'inverted' | 'static-inverted';

export interface LoaderProps {
  /** Size: M (20px) or L (24px) */
  size?: LoaderSize;
  /** Visual style */
  style?: LoaderStyle;
  /** Accessible label */
  label?: string;
  /** Optional extra className */
  className?: string;
}

const styleClassMap: Record<LoaderStyle, string> = {
  'default':        styles.default,
  'static':         styles.static,
  'inverted':       styles.inverted,
  'static-inverted': styles.staticInverted,
};

const sizeClassMap: Record<LoaderSize, string> = {
  M: styles.sizeM,
  L: styles.sizeL,
};

export function Loader({
  size = 'M',
  style = 'default',
  label = 'Loading…',
  className,
}: LoaderProps) {
  const classes = [
    styles.loader,
    sizeClassMap[size],
    styleClassMap[style],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      role="status"
      aria-label={label}
    >
      <span className={styles.ring} aria-hidden="true" />
    </span>
  );
}

export default Loader;
