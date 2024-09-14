import ListItem from './ListItem';
import styles from '../styles/List.module.css';
import { useTasks } from '../context/TasksContext';
import { useFilter } from '../context/FilterContext';

function List() {
  const { tasks } = useTasks();
  const { currentFilter } = useFilter();

  const taskLength = tasks?.length;

  let filteredTasks;
  if (currentFilter === 'all') filteredTasks = tasks;
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
