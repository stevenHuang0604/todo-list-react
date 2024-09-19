import styles from '../styles/ChartLayout.module.css';
import Stats from './Stats';

function ChartLayout() {
  return (
    <div className={styles.charts}>
      <Stats />
    </div>
  );
}

export default ChartLayout;
