import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

import styles from '../styles/AppLayout.module.css';

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
