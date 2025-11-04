import styles from "./ProjectsPreview.module.css";
import Project from "../Project";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useGithubRepos } from "../../hooks/useGithubRepos";
import { useMemo } from "react";

export default function ProjectsPreview() {
  const { repos, loading, error } = useGithubRepos();

  const latestRepos = useMemo(() => {
    if (repos) {
      return repos.slice(0, 2);
    }
    return [];
  }, [repos]);

  return (
    <>
      <section className={styles.projectsWrapper}>
        <h2 className={styles.title}>Últimos Projetos</h2>

        {loading && <p>Carregando projetos...</p>}
        {error && <p>Erro ao carregar os projetos: {error}</p>}

        <div className={styles.projectsList}>
          {!loading &&
            !error &&
            latestRepos.length > 0 &&
            latestRepos.map((repo) => <Project key={repo.id} repo={repo} />)}
        </div>

        {!loading && !error && latestRepos.length === 0 && (
          <p>Nenhum projeto recente encontrado.</p>
        )}

        <Link to="/projects" className={styles.ButtonMore}>
          Ver Todos
          <AddIcon />
        </Link>
      </section>
    </>
  );
}
