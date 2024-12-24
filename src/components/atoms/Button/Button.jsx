import styles from './styles.module.scss';

export function Button({ children, className }) {
  return (
    <button type="button" className={`${styles.button} ${className || ''}`}>
      {children}
    </button>
  );
}
