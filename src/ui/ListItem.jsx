import { HiOutlineCheck, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from '../styles/ListItem.module.css';
import { useTasks } from '../context/TasksContext';

function ListItem({ task }) {
  const { setTasks } = useTasks();

  // Toggle the task completed or not
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

  // Delete the task
  function handleDelete() {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  return (
    <li className={styles['list__item']}>
      <button
        className={`${styles['list__item-checkbox']} ${
          task.isCompleted ? styles['list__item-checkbox--completed'] : ''
        }`}
        onClick={handleComplete}
      >
        {task.isCompleted ? <HiOutlineCheck /> : ''}
      </button>

      <span className={`${styles['list__item-text']} ${task.isCompleted ? styles['list__item-text--completed'] : ''}`}>
        {task.text}
      </span>
      <Button size='small' type='secondary' onClick={handleDelete}>
        <HiOutlineTrash />
      </Button>
    </li>
  );
}

export default ListItem;
