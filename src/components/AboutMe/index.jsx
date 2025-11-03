import React, { useState, useEffect } from "react";
import styles from "./AboutMe.module.css";
import flutter from "../../assets/icons/flutter.svg";
import dart from "../../assets/icons/dart.svg";
import react from "../../assets/icons/react.svg";
import js from "../../assets/icons/js.svg";
import python from "../../assets/icons/python.svg";
import git from "../../assets/icons/git.svg";

const GITHUB_USER_API = "https://api.github.com/users/DavidDias1999";

export default function AboutMe() {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    async function fetchProfilePic() {
      try {
        const response = await fetch(GITHUB_USER_API);
        if (response.ok) {
          const data = await response.json();
          setAvatarUrl(data.avatar_url);
        }
      } catch (error) {
        console.error("Erro ao buscar foto do GitHub:", error);
      }
    }

    fetchProfilePic();
  }, []);

  return (
    <div>
      <section className={styles.about__wrapper}>
        <img
          src={avatarUrl}
          className={styles.picture}
          alt="Foto de Perfil do GitHub"
        />

        <section className={styles.info}>
          <h2>
            Olá, me chamo David Dias e sou um Desenvolvedor focado em Flutter.
          </h2>

          <div className={styles.resume}>
            <p>
              Eu sou estudante de Ciências da Computação na UNICID, mas já
              concluí:
            </p>
            <p> </p>
            <ul>
              <li>Santander Bootcamp 2023 - Mobile com Flutter</li>
              <li>Programa Oracle Next Education + Alura (ONE)</li>
              <li>CS50 de Harvard - Introdução à Ciência da Computação</li>
            </ul>
          </div>

          <div className={styles.icons}>
            <img src={flutter} className={styles.svg} alt="Ícone do Flutter" />
            <img src={dart} className={styles.svg} alt="Ícone do Dart" />
            <img src={react} className={styles.svg} alt="Ícone do React" />
            <img src={js} className={styles.svg} alt="Ícone do JavaScript" />
            <img src={python} className={styles.svg} alt="Ícone do Python" />
            <img src={git} className={styles.svg} alt="Ícone do Git" />
          </div>
        </section>
      </section>
    </div>
  );
}
