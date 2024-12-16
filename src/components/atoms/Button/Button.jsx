import styles from './styles.module.scss';

function Button({ children, className }) {
  return (
    <button type="button" className={`${styles.button} ${className || ''}`}>
      {children}
    </button>
  );
}

export default Button;
