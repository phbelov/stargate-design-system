import React from 'react';
import styles from './Switch.module.css';

export interface SwitchProps {
  /** Whether the switch is toggled on */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Label text displayed next to the switch */
  label?: string;
  /** onChange callback */
  onChange?: (checked: boolean) => void;
  /** Accessible id */
  id?: string;
  /** Optional extra className */
  className?: string;
}

export function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  id,
  className,
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = React.useState(checked);

  React.useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (disabled) return;
    const next = e.target.checked;
    setInternalChecked(next);
    onChange?.(next);
  }

  const wrapperClasses = [
    styles.wrapper,
    internalChecked ? styles.checked : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClasses} htmlFor={id}>
      <input
        type="checkbox"
        role="switch"
        id={id}
        className={styles.nativeInput}
        checked={internalChecked}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={internalChecked}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

export default Switch;
