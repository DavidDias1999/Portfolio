import styles from "./Projects.module.css";
import Project from "../../components/Project";
import { useState, useEffect } from "react";

const GITHUB_API_URL = "https://api.github.com/users/DavidDias1999/repos";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
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
        setRepos(sortedRepos);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className={styles.projectsWrapper}>
        <h2 className={styles.title}>Projetos</h2>
        <p className={styles.loadingText}>Carregando projetos do GitHub...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.projectsWrapper}>
        <h2 className={styles.title}>Projetos</h2>
        <p className={styles.errorText}>
          Ocorreu um erro ao buscar os projetos: {error}
        </p>
      </section>
    );
  }

  return (
    <section className={styles.projectsWrapper}>
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.projectsList}>
        {repos.length > 0 ? (
          repos.map((repo) => <Project key={repo.id} repo={repo} />)
        ) : (
          <p>Nenhum projeto público encontrado.</p>
        )}
      </div>
    </section>
  );
}
