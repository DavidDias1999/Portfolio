import styles from "./Projects.module.css";
import Project from "../../components/Project";

import challenge from "../../assets/images/challenge1.png";
import js from "../../assets/icons/js.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";

export default function Projects() {
  return (
    <section className={styles.projectsWrapper}>
      <h2 className={styles.title}>Projetos</h2>
      <Project
        image={challenge}
        name={"Encriptador"}
        github={"https://github.com/DavidDias1999/encriptador-alura"}
        pageOn={"https://daviddias1999.github.io/encriptador-alura/"}
        title="Encriptador de Texto"
        resume={
          " - Projeto Challenge ONE Oracle + Alura, construção de um encriptador de texto. A versão atual não possui responsividade para mobile."
        }
        icon1={js}
        icon2={html}
        icon3={css}
      />
    </section>
  );
}
