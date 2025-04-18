import { useRef, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi2';

import { useTasks } from '../hooks/useTasks';
import Button from './Button';
import Select from './Select';
import { categoryOptions } from '../data/categoryOptions';

import styles from '../styles/Input.module.css';

function Input() {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState(categoryOptions[0].value);
  const { setTasks } = useTasks();
  const ref = useRef();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      text: input.trim(),
      category,
      isCompleted: false,

      createdAt: new Date().toISOString(),
      id: self.crypto.randomUUID(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setInput('');
    setCategory(categoryOptions[0].value);
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

      <Select options={categoryOptions} onChange={handleCategory} value={category} />

      <Button size='medium' type='primary' ariaLabel='add button'>
        <HiOutlinePlus />
      </Button>
    </form>
  );
}

export default Input;
