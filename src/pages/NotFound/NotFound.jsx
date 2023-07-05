import styles from "./NotFound.module.css";

import NotFoundSvg from "../../assets/icons/notFound.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className={styles.NotWrapper}>
      <div className={styles.div}>
        <img src={NotFoundSvg} className={styles.notSvg} />
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
      </div>
      <Link to="/" className={styles.link}>
        Voltar para o inicio!
      </Link>
    </section>
  );
}
