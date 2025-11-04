import IconsSocials from "../IconsSocials";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <IconsSocials />
      <p className={styles.text}>Desenvolvido por David Dias - 2025</p>
    </footer>
  );
}
