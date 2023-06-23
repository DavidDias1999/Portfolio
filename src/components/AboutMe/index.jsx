import React from "react";
import styles from "./AboutMe.module.css";
import picture from "../../assets/images/Picture.jpeg";
import react from "../../assets/icons/react.svg";
import npm from "../../assets/icons/npm.svg";
import js from "../../assets/icons/js.svg";
import python from "../../assets/icons/python.svg";
import git from "../../assets/icons/git.svg";

export default function AboutMe() {
  return (
    <div>
      <section className={styles.about__wrapper}>
        <img src={picture} className={styles.picture} />
        <section className={styles.info}>
          <h2>Olá, me chamo David Dias e sou um Desenvolvedor Front-End </h2>
          <span>
            Eu sou estudante de Ciências da Computação na UNICID, participei do
            projeto ONE da Oracle.
          </span>
          <div className={styles.icons}>
            <img src={react} className={styles.svg} />
            <img src={js} className={styles.svg} />
            <img src={python} className={styles.svg} />
            <img src={git} className={styles.svg} />
            <img src={npm} className={styles.svg} />
          </div>
        </section>
      </section>
    </div>
  );
}
