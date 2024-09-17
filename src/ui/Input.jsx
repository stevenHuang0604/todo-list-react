import { useRef, useState } from 'react';

import Button from './Button';

import styles from '../styles/Input.module.css';
import { useTasks } from '../context/TasksContext';
import { HiOutlinePlus } from 'react-icons/hi2';
import Select from './Select';

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
      createdAt: new Date().toISOString(),
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
        placeholder='New Task ...'
        value={input}
        onChange={handleInput}
        ref={ref}
      />

      <Select
        options={[
          { value: 'personal', label: 'Personal' },
          { value: 'work', label: 'Work' },
          { value: 'study', label: 'Study' },
          { value: 'health', label: 'Health' },
          { value: 'family', label: 'Family' },
          { value: 'entertainment', label: 'Entertainment' },
          { value: 'finance', label: 'Finance' },
          { value: 'social', label: 'Social' },
          { value: 'projects', label: 'Projects' },
          { value: 'shopping', label: 'Shopping' },
        ]}
      />
      <Button size='medium' type='primary'>
        <HiOutlinePlus />
      </Button>
    </form>
  );
}

export default Input;
