import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps {
  /** Whether this radio is selected */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Value used in radio group */
  value?: string;
  /** Name groups radio buttons together */
  name?: string;
  /** onChange callback */
  onChange?: (value: string) => void;
  /** Accessible id */
  id?: string;
  /** Optional extra className */
  className?: string;
}

export function Radio({
  checked = false,
  disabled = false,
  label,
  value = '',
  name,
  onChange,
  id,
  className,
}: RadioProps) {
  const [internalChecked, setInternalChecked] = React.useState(checked);

  React.useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (disabled) return;
    setInternalChecked(e.target.checked);
    onChange?.(value);
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
        type="radio"
        id={id}
        name={name}
        value={value}
        className={styles.nativeInput}
        checked={internalChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={styles.circle} aria-hidden="true">
        <span className={styles.dot} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

export default Radio;
