import { useTasks } from '../context/TasksContext';

import Button from './Button';
import Filter from './Filter';

import styles from '../styles/Status.module.css';
import Sort from './Sort';

function Status() {
  const { setTasks } = useTasks();

  function handleClear() {
    setTasks([]);
  }

  return (
    <div className={styles.status}>
      <Filter
        options={[
          { value: 'all', label: 'All' },
          { value: 'active', label: 'Active' },
          { value: 'completed', label: 'Completed' },
        ]}
      />

      <Sort
        options={[
          { value: 'createdAt-desc', label: 'Sort by date (recent first)' },
          { value: 'createdAt-asc', label: 'Sort by date (earlier first)' },
        ]}
      />

      <Button type='primary' size='small' onClick={handleClear}>
        Clear All
      </Button>
    </div>
  );
}

export default Status;
