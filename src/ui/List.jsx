import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useTasks } from '../context/TasksContext';

import ListItem from './ListItem';

import styles from '../styles/List.module.css';

function List() {
  const { tasks } = useTasks();
  const [searchParams] = useSearchParams();
  const isTablet = useMediaQuery({ query: '(max-width: 40em)' });

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
  const currentFilter = searchParams.get('status');

  let filteredTasks = tasks;
  if (currentFilter === 'active') filteredTasks = tasks.filter((task) => task.isCompleted === false);
  if (currentFilter === 'completed') filteredTasks = tasks.filter((task) => task.isCompleted === true);

  // Sort tasks by current sort status
  const sort = searchParams.get('sort') || 'createdAt-asc';
  const [field, direction] = sort.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (field === 'createdAt') {
      return (new Date(a[field]) - new Date(b[field])) * modifier;
    } else return a[field].localeCompare(b[field]) * modifier;
  });

  // Display filtered tasks through mapping ListItem.
  return (
    <div className={styles['list-wrap']}>
      <header className={styles['list-header']}>
        <div>Status</div>
        <div>Task</div>
        {isTablet ? (
          ''
        ) : (
          <>
            <div>Category</div>
            <div>Created Date</div>{' '}
          </>
        )}

        <div></div>
      </header>
      <ul className={styles.list}>
        {sortedTasks.map((task) => (
          <ListItem task={task} key={task.id} />
        ))}
        <div className={styles['cover-bar']}></div>
      </ul>
    </div>
  );
}

export default List;
