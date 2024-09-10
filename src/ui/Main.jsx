import styles from '../styles/Main.module.css';

function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
