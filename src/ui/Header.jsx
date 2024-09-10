import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img src='/public/todo-list-react-dark.png' alt='logo' className={styles.logo} />
      <span className={styles.title}>Todo List</span>
    </div>
  );
}

export default Header;
