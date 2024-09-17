import styles from '../styles/Select.module.css';

function Select({ options }) {
  return (
    <select className={styles.select}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
