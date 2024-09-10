import { useState } from 'react';

import Button from './Button';
import styles from '../styles/Input.module.css';

function Input({ setTasks }) {
  const [input, setInput] = useState('');

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
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Type your task here.'
        value={input}
        onChange={handleInput}
      />
      <Button size='small' type='primary'>
        Add
      </Button>
    </form>
  );
}

export default Input;
