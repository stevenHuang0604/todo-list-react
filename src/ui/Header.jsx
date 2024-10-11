import { Link } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

import { useDarkMode } from '../hooks/useDarkMode';

import Button from './Button';

import styles from '../styles/Header.module.css';

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const src = isDarkMode ? '/todo-list-react-dark.png' : '/todo-list-react-light.png';

  return (
    <header className={styles.header}>
      <Link to='/lists' preventScrollReset={true}>
        <img src={src} alt='logo' className={styles.logo} />
      </Link>
      <h1 className={styles.title}>Todo List</h1>
      <Button type='secondary' size='medium' onClick={toggleDarkMode} ariaLabel='mode button'>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </header>
  );
}

export default Header;
