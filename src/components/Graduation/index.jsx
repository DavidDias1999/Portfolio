import styles from "./Graduation.module.css"


export default function Graduation(props) {
  return (
    <section className={styles.graduationWrapper}>
      <div className={styles.order}>
        <img src={props.image}  className={styles.thumbnail} />
        <div className={styles.legend}>
          <h3>{props.name}</h3>
          <p>{props.date}</p>
        </div>
      </div>
      <div className={styles.resume}>
        <p><strong className={styles.strong}>{props.title}</strong>{props.resume}</p>
      </div>
    </section>
  );
}