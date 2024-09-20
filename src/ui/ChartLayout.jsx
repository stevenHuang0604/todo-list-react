import Stats from './Stats';
import TasksChart from './TasksChart';

import styles from '../styles/ChartLayout.module.css';

function ChartLayout() {
  return (
    <div className={styles.charts}>
      <Stats />
      <TasksChart />
    </div>
  );
}

export default ChartLayout;
