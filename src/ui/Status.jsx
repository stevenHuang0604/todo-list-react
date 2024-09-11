import { useTasks } from '../context/TasksContext';
import styles from '../styles/Status.module.css';
import Filter from './Filter';

function Status() {
  const { tasks } = useTasks();
  const tasksLength = tasks.length;

  return (
    <div className={styles.status}>
      <p className={styles.detail}>Total {tasksLength} tasks</p>
      <Filter
        options={[
          { value: 'all', label: 'All' },
          { value: 'active', label: 'Active' },
          { value: 'completed', label: 'Completed' },
        ]}
      />
    </div>
  );
}

export default Status;
