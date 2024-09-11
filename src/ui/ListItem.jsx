import { HiTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from '../styles/ListItem.module.css';

function ListItem({ task, setTasks }) {
  function handleComplete() {
    setTasks((tasks) => {
      const newTasks = tasks.map((t) => {
        if (t.id !== task.id) return t;

        return {
          ...t,
          isCompleted: !t.isCompleted,
        };
      });
      return newTasks;
    });
  }

  function handleDelete() {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div className={styles['list__item']}>
      <button
        className={`${styles['list__item-checkbox']} ${
          task.isCompleted ? styles['list__item-checkbox--completed'] : ''
        }`}
        onClick={handleComplete}
      ></button>

      <span className={`${styles['list__item-text']} ${task.isCompleted ? styles['list__item-text--completed'] : ''}`}>
        {task.text}
      </span>
      <Button size='medium' type='secondary' onClick={handleDelete}>
        <HiTrash />
      </Button>
    </div>
  );
}

export default ListItem;
