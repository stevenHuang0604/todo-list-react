import ListItem from './ListItem';
import styles from '../styles/List.module.css';

function List({ tasks, setTasks }) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <ListItem task={task} key={task.id} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default List;
