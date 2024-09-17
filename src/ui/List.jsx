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

  let filteredTasks = tasks;
  if (currentFilter === 'active') filteredTasks = tasks.filter((task) => task.isCompleted === false);
  if (currentFilter === 'completed') filteredTasks = tasks.filter((task) => task.isCompleted === true);

  if (!taskLength)
    return (
      <div className={styles['list-wrap']}>
        <div className={styles.list}>
          <span className={styles['list__empty']}>No item now. Please add some list items!</span>
        </div>
      </div>
    );

  return (
    <div className={styles['list-wrap']}>
      <div className={styles.list}>
        {filteredTasks.map((task) => (
          <ListItem task={task} key={task.id} />
        ))}
      </div>
      <div className={styles['cover-bar']}></div>
    </div>
  );
}

export default List;
