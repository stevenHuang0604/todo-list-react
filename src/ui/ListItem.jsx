import { HiOutlineCheck, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import Button from './Button';
import styles from '../styles/ListItem.module.css';
import { useTasks } from '../context/TasksContext';
import { useEffect, useRef, useState } from 'react';

function ListItem({ task }) {
  const { setTasks } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setupdatedTaskName] = useState(task.text);
  const ref = useRef();
  const editRef = useRef();

  // Focus the input field when it first show in the browser
  useEffect(() => {
    if (isEditing && ref.current) {
      ref.current.focus();
    }
  }, [isEditing]);

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

  // Edit the task
  function handleEdit() {
    setIsEditing((isEdit) => !isEdit);
  }

  // Update task name
  function handleChangeTask(e) {
    setupdatedTaskName(e.target.value);
  }

  // Submit updated task
  function handleSubmit(e) {
    e.preventDefault();

    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id !== task.id) return t;
        return {
          ...t,
          text: updatedTaskName,
        };
      })
    );

    setIsEditing(false);
  }

  // Cancel editing mode
  function handleBlur(e) {
    // Check if the click is on the edit button
    if (e.relatedTarget !== editRef.current) {
      setIsEditing(false);
    }
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

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={updatedTaskName}
            onChange={handleChangeTask}
            onBlur={handleBlur}
            ref={ref}
            className={`${styles['list__item-input']} ${task.isCompleted ? styles['list__item-text--completed'] : ''}`}
          />
        </form>
      ) : (
        <span
          onDoubleClick={handleEdit}
          className={`${styles['list__item-text']} ${task.isCompleted ? styles['list__item-text--completed'] : ''}`}
        >
          {task.text}
        </span>
      )}

      <span className={`${styles.category} ${styles[`category--${task.category}`]}`}>{task.category}</span>

      <div className={styles['list__item-operation']}>
        <Button size='small' type='secondary' onClick={handleEdit} ref={editRef}>
          <HiOutlinePencil />
        </Button>

        <Button size='small' type='secondary' onClick={handleDelete}>
          <HiOutlineTrash />
        </Button>
      </div>
    </li>
  );
}

export default ListItem;
