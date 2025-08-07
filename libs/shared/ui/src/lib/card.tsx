import styles from './card.module.css';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

export function Card({
  children,
  title,
  footer,
  variant = 'default',
  padding = 'medium',
  className = '',
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[padding]} ${className}`}>
      {title && <div className={styles.header}><h3>{title}</h3></div>}
      <div className={styles.content}>
        {children}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

export default Card;
