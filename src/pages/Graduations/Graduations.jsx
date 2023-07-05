import styles from "./Graduations.module.css";
import Graduation from "../../components/Graduation";

import alura from "../../assets/images/Alura.png";
import unicid from "../../assets/images/unicid.jpg";
import harvard from "../../assets/images/Harvard.png";
import etec from "../../assets/images/etec.jpg";

export default function Graduations() {
  return (
    <section className={styles.graduationsWrapper}>
      <h2 className={styles.title}>Formação</h2>
      <Graduation
        image={alura}
        name={"Alura + Oracle - ONE"}
        date={"2022 - 2023"}
        title={"Programa Oracle One + Alura"}
        resume={
          " - Curso com carga horaria de 6 meses (mais de 560h), com diversos cursos de  Javascript (Logica de programação),HTML5, CSS3, GIT, GITHub, Manipulação de DOM, CRUD e Programação Orientada a Objetos; Além da metologia Agility."
        }
      />
      <Graduation
        image={unicid}
        name={"UNICID"}
        date={"2022 - 2026(Cursando)"}
        title={"Bacharelado em Ciências da Computação"}
        resume={
          " - O curso de Ciência da Computação tem como objetivo preparar os estudantes com habilidades técnicas e interpessoais necessárias para atender às demandas do mercado de trabalho. A grade curricular abrange disciplinas como Cálculo, Álgebra Linear, Programação, Inteligência Artificial, Redes de Computadores e Ética, visando proporcionar uma formação abrangente na área."
        }
      />
      <Graduation
        image={harvard}
        name={"Harvard CS50"}
        date={"2022"}
        title={"Introdução a Ciências da Computação"}
        resume={
          " - O CS50 é curso de ciência da computação oferecido pela Universidade de Harvard. Projetado para estudantes de todos os níveis de experiência, o curso abrange desde os fundamentos da programação até tópicos avançados como algoritmos, estruturas de dados, desenvolvimento web e inteligência artificial. Reconhecido por sua abordagem prática e projetos significativos."
        }
      />
      <Graduation
        image={etec}
        name={"Técnico de Enfermagem"}
        date={"2017 - 2019"}
        title={"Técnico de Enfermagem"}
        resume={" - 3 anos de Experiencia no setor de Radiologia do IAMSPE."}
      />
      <Graduation
        image={etec}
        name={"Técnico de Administração"}
        date={"2015 - 2016"}
        title={"Técnico em Administração"}
        resume={
          " - Realizado em conjunto ao ensino médio, com atuação em empresa de pequeno porte"
        }
      />
    </section>
  );
}
