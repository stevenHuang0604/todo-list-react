import ListItem from './ListItem';
import styles from './List.module.css';

function List({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <ListItem task={task} key={task.id} />
      ))}
    </div>
  );
}

export default List;
