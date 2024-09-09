import styles from './Button.module.css';

function Button({ size, type, children }) {
  return <button className={`${styles.button} ${styles[size]} ${styles[type]}`}>{children}</button>;
}

export default Button;
