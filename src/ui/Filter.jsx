import { useSearchParams } from 'react-router-dom';

import styles from '../styles/Filter.module.css';

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get('status') || options[0].value;

  function handleClick(value) {
    searchParams.set('status', value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <button
          className={`${styles['filter__button']} ${
            currentFilter === option.value ? styles['filter__button--active'] : ''
          }`}
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
