import React from 'react';
import { Checkmark, Subtract } from '@carbon/icons-react';
import styles from './Checkbox.module.css';

export type CheckboxState = 'active' | 'inactive' | 'indeterminate' | 'disabled-inactive' | 'disabled-active' | 'disabled-indeterminate';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Indeterminate / semi-active state (partial selection) */
  indeterminate?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Label text displayed next to the checkbox */
  label?: string;
  /** onChange callback */
  onChange?: (checked: boolean) => void;
  /** Accessible id */
  id?: string;
  /** Optional extra className */
  className?: string;
}

export function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  id,
  className,
}: CheckboxProps) {
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

  const isChecked = internalChecked && !indeterminate;

  const wrapperClasses = [
    styles.wrapper,
    isChecked ? styles.checked : '',
    indeterminate ? styles.indeterminate : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClasses} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className={styles.nativeInput}
        checked={isChecked || indeterminate}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={indeterminate ? 'mixed' : isChecked}
      />
      <span className={styles.box} aria-hidden="true">
        {isChecked     && <Checkmark size={16} aria-hidden="true" />}
        {indeterminate && <Subtract  size={16} aria-hidden="true" />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

export default Checkbox;
