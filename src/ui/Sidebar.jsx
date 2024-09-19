import { NavLink } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';
import { HiOutlineChartBar, HiOutlineListBullet } from 'react-icons/hi2';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink className={styles.navLink} to='/lists'>
              <HiOutlineListBullet />
              <span>Lists</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to='/'>
              <HiOutlineChartBar />
              <span>Charts</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
