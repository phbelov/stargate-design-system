import styles from './ProgressBar.module.css';

/**
 * ProgressBar variant – maps to Figma component names.
 * Figma source: Stargate Components → Progress Bar
 */
export type ProgressBarVariant = 'line' | 'circle';

/** Visual style (standard vs inverted for dark backgrounds) */
export type ProgressBarStyle = 'default' | 'inverted';

export interface ProgressBarProps {
  /** Progress value from 0 to 100 */
  value?: number;
  /** Line or circle variant */
  variant?: ProgressBarVariant;
  /** Visual style */
  progressStyle?: ProgressBarStyle;
  /** Show percentage label (line variant only) */
  showLabel?: boolean;
  /** Label text override (defaults to "X%") */
  label?: string;
  /** Circle diameter in px (circle variant, default 24) */
  size?: number;
  /** Stroke width for circle (default 2) */
  strokeWidth?: number;
  /** Optional extra className */
  className?: string;
}

export function ProgressBar({
  value = 0,
  variant = 'line',
  progressStyle = 'default',
  showLabel = false,
  label,
  size = 24,
  strokeWidth = 2,
  className,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const isInverted = progressStyle === 'inverted';

  if (variant === 'circle') {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashoffset = circumference - (clampedValue / 100) * circumference;
    const center = size / 2;

    return (
      <span
        className={[
          styles.circle,
          isInverted ? styles.circleInverted : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${clampedValue}%`}
      >
        <svg
          className={styles.circleSvg}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Track */}
          <circle
            className={styles.circleTrack}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          {/* Indicator */}
          {clampedValue > 0 && (
            <circle
              className={styles.circleIndicator}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
            />
          )}
        </svg>
      </span>
    );
  }

  /* Line variant */
  return (
    <div
      className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}
    >
      {showLabel && (
        <div className={styles.label}>
          <span>{label ?? `${clampedValue}%`}</span>
        </div>
      )}
      <div
        className={[
          styles.line,
          isInverted ? styles.lineInverted : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${clampedValue}%`}
      >
        <div
          className={styles.lineIndicator}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
