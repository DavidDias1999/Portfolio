import styles from "./ProjectsPreview.module.css";
import Project from "../Project";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GITHUB_API_URL = "https://api.github.com/users/DavidDias1999/repos";

export default function ProjectsPreview() {
  const [latestRepos, setLatestRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLatestRepos() {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredRepos = data.filter((repo) => !repo.fork);
        const sortedRepos = filteredRepos.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setLatestRepos(sortedRepos.slice(0, 2));
        setError(null);
      } catch (err) {
        setError(err.message);
        setLatestRepos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestRepos();
  }, []);

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
