import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className={styles['layout']}>
      <Header />
      <Sidebar />
      <Main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </Main>
    </div>
  );
}

export default AppLayout;
