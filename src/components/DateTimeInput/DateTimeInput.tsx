import React from 'react';
import { Calendar, Time } from '@carbon/icons-react';
import styles from './DateTimeInput.module.css';

/**
 * DateTimeInput – Stargate Design System
 * Figma: Stargate Components → Date and Time Input
 * Shares TextField styling: white bg, 2px border, --radius-s, pl-16 pr-8 py-16, 60px height
 * Two variants: 'date' (calendar icon, __ / __ / ____) and 'time' (clock icon, __:__)
 */
export type DateTimeInputType = 'date' | 'time';

export interface DateTimeInputProps {
  type?: DateTimeInputType;
  label?: string;
  caption?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export function DateTimeInput({
  type = 'date',
  label,
  caption,
  value,
  placeholder,
  disabled = false,
  error = false,
  onChange,
  className,
  id,
}: DateTimeInputProps) {
  const defaultPlaceholder = type === 'date' ? '__ / __ / ____' : '__:__ __';
  const displayPlaceholder = placeholder ?? defaultPlaceholder;

  const fieldClass = [
    styles.field,
    error    ? styles.error    : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={fieldClass}>
        <span className={styles.icon}>
          {type === 'date'
            ? <Calendar size={24} aria-hidden="true" />
            : <Time size={24} aria-hidden="true" />
          }
        </span>
        <input
          id={id}
          type="text"
          className={styles.input}
          value={value ?? ''}
          placeholder={displayPlaceholder}
          disabled={disabled}
          aria-label={label ?? displayPlaceholder}
          aria-invalid={error}
          onChange={e => onChange?.(e.target.value)}
        />
      </div>
      {caption && (
        <span className={[styles.caption, error ? styles.captionError : ''].filter(Boolean).join(' ')}>
          {caption}
        </span>
      )}
    </div>
  );
}

export default DateTimeInput;
