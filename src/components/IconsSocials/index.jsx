import styles from "./IconsSocials.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { grey } from "@mui/material/colors";

export default function IconsSocials() {
  return (
    <section className={styles.icon__Wrapper}>
      <a
        href="https://github.com/DavidDias1999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver perfil no GitHub"
      >
        <GitHubIcon sx={{ color: grey[50] }} className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/daviddias99/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver perfil no LinkedIn"
      >
        <LinkedInIcon sx={{ color: grey[50] }} className={styles.icon} />
      </a>
      <a
        href="https://bit.ly/3NoDpLa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <WhatsAppIcon sx={{ color: grey[50] }} className={styles.icon} />
      </a>
    </section>
  );
}
