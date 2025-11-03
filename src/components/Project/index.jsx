import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

export default function Project({ repo }) {
  return (
    <section className={styles.projectWrapper}>
      <h3 className={styles.title}>{repo.name}</h3>

      <p className={styles.resume}>{repo.description}</p>

      {repo.language && (
        <span className={styles.language}>
          Linguagem principal: {repo.language}
        </span>
      )}

      <div className={styles.linksWrapper}>
        <Link className={styles.iconsLink} to={repo.html_url} target="_blank">
          <GitHubIcon /> github.com/{repo.name}
        </Link>

        {repo.homepage && (
          <Link className={styles.iconsLink} to={repo.homepage} target="_blank">
            <WebIcon /> Teste aqui
          </Link>
        )}
      </div>
    </section>
  );
}
