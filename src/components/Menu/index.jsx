import styles from "./Menu.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";

export default function Menu() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HiMenu size={20} className={styles.Menu} onClick={showMenu}/>

        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/">
          Projetos
        </Link>
        <Link className={styles.link} to="/">
          Formação
        </Link>
      </nav>


      <nav className={ active ? styles.sliderActive : styles.slider }>
        <ul className={styles.sliderUl}>

          <div className={styles.closed}>
            <HiMenuAlt1 size={20} className={styles.close} onClick={showMenu} />
          </div>

          <li className={styles.sliderLi}>
            <Link className={styles.linkMenu} to="/">
              Home
            </Link>
          </li>
          <li className={styles.sliderLi}>
            <Link className={styles.linkMenu} to="/">
              Projetos
            </Link>
          </li>
          <li className={styles.sliderLi}>
            <Link className={styles.linkMenu} to="/">
              Formação
            </Link>
          </li>
        </ul>
      </nav>
      <section className={styles.icon__Wrapper}>
        <a href="https://github.com/DavidDias1999" target="_blank">
          <GitHubIcon sx={{ color: grey[50] }} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/daviddias99/" target="_blank">
          <LinkedInIcon sx={{ color: grey[50] }} className={styles.icon} />
        </a>
        <a href="https://bit.ly/3NoDpLa" target="_blank">
          <WhatsAppIcon sx={{ color: grey[50] }} className={styles.icon} />
        </a>
      </section>
    </header>
  );
}
