import ListItem from './ListItem';
import styles from '../styles/List.module.css';
import { useTasks } from '../context/TasksContext';

function List() {
  const { tasks, setTasks } = useTasks();

  const taskLength = tasks?.length;

  if (!taskLength)
    return (
      <div className={styles.list}>
        <span className={styles['list__empty']}>No item now. Please add some list items!</span>
      </div>
    );

  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <ListItem task={task} key={task.id} />
      ))}
    </div>
  );
}

export default List;
