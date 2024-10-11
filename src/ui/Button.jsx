import { forwardRef } from 'react';

import styles from '../styles/Button.module.css';

const Button = forwardRef(function Button({ size, type, ariaLabel, onClick, children }, ref) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
      onClick={onClick}
      ref={ref}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
});

export default Button;
