import styles from "./GraduationPreview.module.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Graduation from "../Graduation";
import graduationsData from "../../data/graduations.json";

export default function GraduationPreview() {
  const previewGraduations = graduationsData.slice(0, 2);

  return (
    <>
      <section className={styles.graduationWrapper}>
        <h2 className={styles.title}>Formação</h2>
        <div className={styles.graduationList}>
          {previewGraduations.map((grad) => (
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

        <Link to="/graduations" className={styles.ButtonMore}>
          Ver
          <AddIcon />
        </Link>
      </section>
    </>
  );
}
