import { useSearchParams } from 'react-router-dom';
import styles from '../styles/Sort.module.css';

function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sort') || options[0].value;

  function handleChange(e) {
    // searchParams.set('sort', e.target.value);
    // setSearchParams(searchParams);

    // Another method to udpate params.
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('sort', e.target.value);
      return newParams;
    });
  }

  return (
    <select className={styles.sort} value={sort} onChange={handleChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Sort;
