import styles from "./Graduations.module.css";
import Graduation from "../../components/Graduation";
import graduationsData from "../../data/graduations.json";

export default function Graduations() {
  return (
    <section className={styles.graduationsWrapper}>
      <h2 className={styles.title}>Formação</h2>
      <div className={styles.graduationList}>
        {graduationsData.map((grad) => (
          <Graduation
            key={grad.id}
            image={grad.image}
            name={grad.name}
            date={grad.date}
            title={grad.title}
            resume={grad.resume}
          />
        ))}
      </div>
    </section>
  );
}
