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
      <IconsSocials/>
    </header>
  );
}
