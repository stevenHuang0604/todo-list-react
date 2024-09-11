import { useRef, useState } from 'react';

import Button from './Button';
import styles from '../styles/Input.module.css';
import { useTasks } from '../context/TasksContext';

function Input() {
  const [input, setInput] = useState('');
  const { setTasks } = useTasks();
  const ref = useRef();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input === '') return;

    const newTask = {
      text: input,
      isCompleted: false,
      id: self.crypto.randomUUID(),
    };
    setTasks((tasks) => [...tasks, newTask]);
    setInput('');
    // unfocus the input element
    ref.current.blur();
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Type your task here.'
        value={input}
        onChange={handleInput}
        ref={ref}
      />
      <Button size='medium' type='primary'>
        Add
      </Button>
    </form>
  );
}

export default Input;
