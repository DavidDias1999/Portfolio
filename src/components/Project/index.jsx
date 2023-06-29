import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

export default function Project(props) {
  return (
    <section className={styles.projectWrapper}>
      <div>
        <img src={props.image} alt="" className={styles.thumbnail} />
        <div className={styles.legend}>
          <h3>{props.name}</h3>
            <div className={styles.iconsLinkWrapper}>
              <Link className={styles.iconsLink} to={props.github} target="_blank">
                <GitHubIcon />{"github.com/"}
              </Link>
              <Link className={styles.iconsLink} to={props.pageOn} target="_blank">
                <WebIcon />{"Teste aqui"}
              </Link>
            </div>
        </div>
      </div>
      <div className={styles.resume}>
        <p><strong className={styles.strong}>{props.title}</strong>{props.resume}</p>
        <div className={styles.iconsWrapperResume}>
          <img src={props.icon1} className={styles.iconResume} />
          <img src={props.icon2} className={styles.iconResume} />
          <img src={props.icon3} className={styles.iconResume} />
          <img src={props.icon4} className={styles.iconResume} />
        </div>
      </div>
    </section>
  );
}
