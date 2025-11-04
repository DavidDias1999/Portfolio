import styles from "./Projects.module.css";
import Project from "../../components/Project";
import { useGithubRepos } from "../../hooks/useGithubRepos";

export default function Projects() {
  const { repos, loading, error } = useGithubRepos();

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
        {repos && repos.length > 0 ? (
          repos.map((repo) => <Project key={repo.id} repo={repo} />)
        ) : (
          <p>Nenhum projeto público encontrado.</p>
        )}
      </div>
    </section>
  );
}
