import styles from "./Menu.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import IconsSocials from "../IconsSocials";

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
        <Link className={styles.link} to="/projects">
          Projetos
        </Link>
        <Link className={styles.link} to="/graduations">
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
            <Link className={styles.linkMenu} to="/projects">
              Projetos
            </Link>
          </li>
          <li className={styles.sliderLi}>
            <Link className={styles.linkMenu} to="/graduations">
              Formação
            </Link>
          </li>
        </ul>
      </nav>
      <IconsSocials/>
    </header>
  );
}
