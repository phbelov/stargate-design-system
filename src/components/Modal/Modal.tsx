import React from 'react';
import styles from './Modal.module.css';
import { Button } from '../Button/Button';

/**
 * Modal – Stargate Design System
 * Figma: Stargate Components → Modal
 * Desktop: node 7235:5936 | Mobile: node 7235:6717
 *
 * Layout=Desktop: white bg, 467px wide, all-corners 32px radius, Heading/M title, horizontal button row
 * Layout=Mobile:  full-width, top-only 32px radius, Heading/XL title, vertical button row,
 *                 anchor drag handle (top) + Home Indicator (bottom)
 */
export interface ModalAction {
  label: string;
  priority?: 'primary' | 'secondary';
  onClick?: () => void;
}

export interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  actions?: ModalAction[];
  onClose?: () => void;
  open?: boolean;
  layout?: 'desktop' | 'mobile';
  className?: string;
}

export function Modal({
  title = 'Save progress?',
  children,
  actions = [
    { label: 'Cancel', priority: 'secondary' },
    { label: 'Save',   priority: 'primary'   },
  ],
  open = true,
  layout = 'desktop',
  className,
}: ModalProps) {
  if (!open) return null;

  const isMobile = layout === 'mobile';

  const rootClasses = [
    styles.modal,
    isMobile ? styles.mobile : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClasses}>
      {/* ── Drag anchor (mobile only) ── */}
      {isMobile && (
        <div className={styles.anchor} aria-hidden="true" />
      )}

      {/* ── Top gradient overlay ── */}
      <div className={styles.overlayTop} aria-hidden="true" />

      {/* ── Title ── */}
      {title && (
        <div className={styles.header}>
          <p className={isMobile ? styles.titleMobile : styles.title}>{title}</p>
        </div>
      )}

      {/* ── Content area ── */}
      {children ? (
        <div className={styles.content}>{children}</div>
      ) : (
        <div className={styles.contentPlaceholder}>
          <span className={styles.contentLabel}>Content</span>
        </div>
      )}

      {/* ── Bottom gradient overlay ── */}
      <div className={styles.overlayBottom} aria-hidden="true" />

      {/* ── Button row ── */}
      {actions.length > 0 && (
        <div className={isMobile ? styles.actionsMobile : styles.actions}>
          {actions.map(action => (
            <Button
              key={action.label}
              priority={action.priority === 'primary' ? 'primary' : 'secondary'}
              size="M"
              onClick={action.onClick}
              style={{ flex: isMobile ? undefined : 1, width: isMobile ? '100%' : undefined }}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}

      {/* ── Home Indicator (mobile only) ── */}
      {isMobile && (
        <div className={styles.homeIndicator} aria-hidden="true">
          <div className={styles.homeIndicatorPill} />
        </div>
      )}
    </div>
  );
}

export default Modal;
