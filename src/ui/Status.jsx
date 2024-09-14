import { useTasks } from '../context/TasksContext';
import styles from '../styles/Status.module.css';
import Button from './Button';
import Filter from './Filter';

function Status() {
  const { tasks, setTasks } = useTasks();
  const leftTasksLength = tasks.filter((task) => !task.isCompleted).length;

  function handleClear() {
    setTasks([]);
  }

  return (
    <div className={styles.status}>
      <span className={styles.detail}>{leftTasksLength} tasks left</span>

      <Filter
        options={[
          { value: 'all', label: 'All' },
          { value: 'active', label: 'Active' },
          { value: 'completed', label: 'Completed' },
        ]}
      />

      <Button type='primary' size='small' onClick={handleClear}>
        Clear All
      </Button>
    </div>
  );
}

export default Status;
