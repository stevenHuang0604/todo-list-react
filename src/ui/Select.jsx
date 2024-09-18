import styles from '../styles/Select.module.css';

function Select({ options, value, onChange }) {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
