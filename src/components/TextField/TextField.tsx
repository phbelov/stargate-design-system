import React from 'react';
import styles from './TextField.module.css';

/**
 * TextField state – maps to Figma "State" property in the Text Field section.
 * Figma source: Stargate Components → Text Field
 */
export type TextFieldState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focus'
  | 'typing'
  | 'typing-multiline'
  | 'error'
  | 'success'
  | 'filled'
  | 'disabled';

export interface TextFieldProps {
  /** Floating label shown above the value */
  label?: string;
  /** Placeholder text shown when field is empty */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Visual state override (Storybook / Figma parity) */
  state?: TextFieldState;
  /** Caption / helper text shown below the field */
  caption?: string;
  /** Leading icon element (24×24) */
  leadingIcon?: React.ReactNode;
  /** Trailing action element (e.g. send button) */
  trailingAction?: React.ReactNode;
  /** Whether the field expands to multi-line */
  multiLine?: boolean;
  /** onChange handler */
  onChange?: (value: string) => void;
  /** Optional extra className */
  className?: string;
  /** Accessible id */
  id?: string;
}

export function TextField({
  label,
  placeholder = 'Ask anything',
  value = '',
  state = 'default',
  caption,
  leadingIcon,
  trailingAction,
  multiLine = false,
  onChange,
  className,
  id,
}: TextFieldProps) {
  const [internalValue, setInternalValue] = React.useState(value);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const isDisabled        = state === 'disabled';
  const isError           = state === 'error';
  const isSuccess         = state === 'success';
  const isPressed         = state === 'pressed';
  const isFocus           = state === 'focus' || state === 'typing' || state === 'typing-multiline' || focused;
  const isTypingMultiLine = state === 'typing-multiline' || multiLine;

  const fieldClasses = [
    styles.field,
    isTypingMultiLine ? styles.multiLine : '',
    isPressed  ? styles.pressed  : '',
    isFocus    ? styles.focus    : '',
    isError    ? styles.error    : '',
    isSuccess  ? styles.success  : '',
    isDisabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const captionClass = [
    styles.caption,
    isError   ? styles.captionError   : '',
    isSuccess ? styles.captionSuccess : '',
  ]
    .filter(Boolean)
    .join(' ');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  }

  const sharedInputProps = {
    id,
    value: internalValue,
    disabled: isDisabled,
    placeholder,
    onChange: handleChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: styles.nativeInput,
    'aria-label': label ?? placeholder,
    'aria-invalid': isError,
  };

  return (
    <div className={styles.wrapper}>
      <div className={fieldClasses}>
        {/* Leading icon */}
        {leadingIcon && (
          <span className={styles.leading}>
            <span className={styles.leadingIcon}>{leadingIcon}</span>
          </span>
        )}

        {/* Content: floating label + real native input */}
        <div className={styles.content}>
          {label && <span className={styles.label}>{label}</span>}

          {isTypingMultiLine ? (
            <textarea
              {...(sharedInputProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
              style={{ resize: 'none' }}
            />
          ) : (
            <input type="text" {...sharedInputProps} />
          )}
        </div>

        {/* Trailing action */}
        {trailingAction && (
          <span className={styles.trailing}>{trailingAction}</span>
        )}
      </div>

      {/* Caption / helper text */}
      {caption && (
        <span className={captionClass}>{caption}</span>
      )}
    </div>
  );
}

export default TextField;
