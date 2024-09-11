import { useEffect, useState } from 'react';
import styles from '../styles/Filter.module.css';
import { useFilter } from '../context/FilterContext';

function Filter({ options }) {
  const { currentFilter, setCurrentFilter } = useFilter();

  // only in first render
  useEffect(() => {
    setCurrentFilter(options[0].value);
  }, []);

  function handleClick(e) {
    const currentFilterId = options.findIndex((option) => option.label === e.target.textContent);
    setCurrentFilter(options[currentFilterId].value);
  }

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <button
          className={`${styles['filter__button']} ${
            currentFilter === option.value ? styles['filter__button--active'] : ''
          }`}
          key={option.value}
          onClick={handleClick}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
