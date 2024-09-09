import styles from './ListItem.module.css';

function ListItem({ task }) {
  console.log(task);
  return <div>{task.text}</div>;
}

export default ListItem;
