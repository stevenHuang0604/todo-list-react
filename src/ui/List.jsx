import ListItem from './ListItem';
import styles from '../styles/List.module.css';

function List({ tasks }) {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <ListItem task={task} key={task.id} />
      ))}
    </div>
  );
}

export default List;
