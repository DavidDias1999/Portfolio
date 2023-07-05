import styles from "./GraduationPreview.module.css";

import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Graduation from "../Graduation";

import alura from "../../assets/images/Alura.png";
import unicid from "../../assets/images/unicid.jpg";

export default function GraduationPreview() {
  return (
    <>
      <section className={styles.graduationWrapper}>
        <h2 className={styles.title}>Formação</h2>
        <Graduation
          image={alura}
          name={"Alura + Oracle - ONE"}
          date={"2022 - 2023"}
          title={"Programa Oracle One + Alura"}
          resume={
            " - Curso com carga horaria de 6 meses (mais de 560h), com cursos de  Javascript (Logica de programação),HTML5, CSS3, GIT, GITHub,  Manipulação de DOM, CRUD e Programação Orientada a Objetos; Além da metologia Agility."
          }
        />
        <Graduation
          image={unicid}
          name={"UNICID"}
          date={"2022 - 2026(Cursando)"}
          title={"Bacharelado em Ciências da Computação"}
          resume={"- O curso de Ciência da Computação tem como objetivo preparar os estudantes com habilidades técnicas e interpessoais necessárias para atender às demandas do mercado de trabalho. A grade curricular abrange disciplinas como Cálculo, Álgebra Linear, Programação, Inteligência Artificial, Redes de Computadores e Ética, visando proporcionar uma formação abrangente na área."}
        />

        <Link to="/graduations" className={styles.ButtonMore}>
          Ver
          <AddIcon />
        </Link>
      </section>
    </>
  );
}
