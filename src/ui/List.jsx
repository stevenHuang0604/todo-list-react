import ListItem from './ListItem';
import styles from '../styles/List.module.css';
import { useTasks } from '../context/TasksContext';
import { useFilter } from '../context/FilterContext';
import { useEffect } from 'react';

function List() {
  const { tasks } = useTasks();
  const { currentFilter } = useFilter();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const taskLength = tasks?.length;

  // Display empty hint if there is no tasks.
  if (!taskLength)
    return (
      <div className={styles['list-wrap']}>
        <ul className={styles.list}>
          <span className={styles['list__empty']}>No item now. Please add some list items!</span>
        </ul>
      </div>
    );

  // Filter tasks by current status.
  let filteredTasks = tasks;
  if (currentFilter === 'active') filteredTasks = tasks.filter((task) => task.isCompleted === false);
  if (currentFilter === 'completed') filteredTasks = tasks.filter((task) => task.isCompleted === true);

  // Display filtered tasks through mapping ListItem.
  return (
    <div className={styles['list-wrap']}>
      <header className={styles['list-header']}>
        <div>Status</div>
        <div>Task</div>
        <div>Category</div>
        <div></div>
      </header>
      <ul className={styles.list}>
        {filteredTasks.map((task) => (
          <ListItem task={task} key={task.id} />
        ))}
        <div className={styles['cover-bar']}></div>
      </ul>
    </div>
  );
}

export default List;
