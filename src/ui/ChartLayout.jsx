import styles from '../styles/ChartLayout.module.css';
import Stats from './Stats';
import TasksChart from './TasksChart';

function ChartLayout() {
  return (
    <div className={styles.charts}>
      <Stats />
      <TasksChart />
    </div>
  );
}

export default ChartLayout;
