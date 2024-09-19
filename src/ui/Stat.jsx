import styles from '../styles/Stat.module.css';

function Stat({ title, color, icon, value }) {
  return (
    <div className={styles.stat}>
      <div className={`${styles.icon} ${color}`}>{icon}</div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.value}>{value}</p>
    </div>
  );
}

export default Stat;
