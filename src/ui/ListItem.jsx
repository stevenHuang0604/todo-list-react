import { useEffect, useRef, useState } from 'react';
import {
  HiOutlineCheck,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { useMediaQuery } from 'react-responsive';

import { useTasks } from '../hooks/useTasks';
import Button from './Button';
import { formatDate } from '../helpers/formatDate';

import styles from '../styles/ListItem.module.css';

function ListItem({ task }) {
  const { setTasks } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setupdatedTaskName] = useState(task.text);
  const [isOpening, setIsOpening] = useState(false);
  const isTablet = useMediaQuery({ query: '(max-width: 40em)' });

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
        return t.id === task.id
          ? {
              ...t,
              isCompleted: !t.isCompleted,
            }
          : t;
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
        return t.id === task.id
          ? {
              ...t,
              text: updatedTaskName,
            }
          : t;
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

  function handleShowDetail() {
    setIsOpening((open) => !open);
  }

  // Delete the task
  function handleDelete() {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  return (
    <>
      <li className={styles['list__item']}>
        <button
          className={`${styles['list__item-checkbox']} ${task.isCompleted && styles['list__item-checkbox--completed']}`}
          onClick={handleComplete}
          aria-label='complete button'
        >
          {task.isCompleted && <HiOutlineCheck />}
        </button>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={updatedTaskName}
              onChange={handleChangeTask}
              onBlur={handleBlur}
              ref={ref}
              className={`${styles['list__item-input']} ${task.isCompleted && styles['list__item-text--completed']}`}
            />
          </form>
        ) : (
          <span
            onDoubleClick={handleEdit}
            className={`${styles['list__item-text']} ${task.isCompleted && styles['list__item-text--completed']}`}
          >
            {task.text}
          </span>
        )}

        {!isTablet && (
          <>
            <span className={`${styles.category} ${styles[`category--${task.category}`]}`}>{task.category}</span>

            <span>{formatDate(task.createdAt)}</span>
          </>
        )}

        <span className={styles['list__item-operation']}>
          {isTablet ? (
            <Button
              size='small'
              type='secondary'
              onClick={handleShowDetail}
              ref={editRef}
              ariaLabel='toggle detail button'
            >
              {isOpening ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
            </Button>
          ) : (
            <>
              <Button size='small' type='secondary' onClick={handleEdit} ref={editRef} ariaLabel='edit button'>
                <HiOutlinePencil />
              </Button>

              <Button size='small' type='secondary' onClick={handleDelete} ariaLabel='delete button'>
                <HiOutlineTrash />
              </Button>
            </>
          )}
        </span>
      </li>
      {isTablet && isOpening && (
        <div className={styles.modal}>
          <div className={styles.card}>
            <div className={styles['card__row']}>
              <span className={styles['card__label']}>Task</span>
              <span>{task.text}</span>
            </div>

            <div className={styles['card__row']}>
              <span className={styles['card__label']}>Category</span>
              <span className={`${styles.category} ${styles[`category--${task.category}`]}`}>{task.category}</span>
            </div>

            <div className={styles['card__row']}>
              <span className={styles['card__label']}>Created Date</span>
              <span>{formatDate(task.createdAt)}</span>
            </div>

            <div className={styles['card__row']}>
              <span className={styles['card__label']}>Status</span>
              <span>{task.isCompleted ? 'completed' : 'active'}</span>
            </div>

            <div className={styles['card__row']}>
              <Button size='small' type='secondary' onClick={handleEdit} ref={editRef} ariaLabel='edit button'>
                <HiOutlinePencil />
              </Button>

              <Button size='small' type='secondary' onClick={handleDelete} ariaLabel='delete button'>
                <HiOutlineTrash />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListItem;
