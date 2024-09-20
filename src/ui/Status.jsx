import { useTasks } from '../context/TasksContext';

import Button from './Button';
import Filter from './Filter';

import styles from '../styles/Status.module.css';
import Sort from './Sort';

function Status() {
  const { tasks, setTasks } = useTasks();

  const leftTasks = tasks.filter((task) => !task.isCompleted);
  const TasksLength = tasks.length;
  const leftTasksLength = leftTasks.length;

  function handleClear() {
    setTasks([]);
  }

  return (
    <div className={styles.status}>
      <span className={styles.detail}>
        {leftTasksLength} / {TasksLength} tasks left
      </span>

      <Filter
        options={[
          { value: 'all', label: 'All' },
          { value: 'active', label: 'Active' },
          { value: 'completed', label: 'Completed' },
        ]}
      />

      <Sort
        options={[
          { value: 'createdAt-asc', label: 'Sort by date (earlier first)' },
          { value: 'createdAt-desc', label: 'Sort by date (recent first)' },
        ]}
      />

      <Button type='primary' size='small' onClick={handleClear}>
        Clear All
      </Button>
    </div>
  );
}

export default Status;
