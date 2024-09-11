import styles from '../styles/Button.module.css';

function Button({ size, type, onClick, children }) {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
