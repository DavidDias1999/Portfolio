import styles from "./Graduation.module.css";

export default function Graduation(props) {
  return (
    <section className={styles.graduationWrapper}>
      <div className={styles.header}>
        <h3 className={styles.name}>{props.name}</h3>
        <span className={styles.date}>{props.date}</span>
      </div>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.resume}>{props.resume}</p>
    </section>
  );
}