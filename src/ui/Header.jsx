import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useDarkMode } from '../context/DarkModeContext';
import styles from '../styles/Header.module.css';
import Button from './Button';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const src = isDarkMode ? '/todo-list-react-dark.png' : '/todo-list-react-light.png';

  return (
    <div className={styles.header}>
      <img src={src} alt='logo' className={styles.logo} />
      <h1 className={styles.title}>Todo List</h1>
      <Button type='secondary' size='medium' onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
}

export default Header;
