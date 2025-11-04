import { useState, useEffect } from "react";

const GITHUB_API_URL = "https://api.github.com/users/DavidDias1999/repos";
let cache = null;
let cacheStatus = { loading: false, error: null };

export function useGithubRepos() {
  const [repos, setRepos] = useState(cache);
  const [loading, setLoading] = useState(cacheStatus.loading);
  const [error, setError] = useState(cacheStatus.error);

  useEffect(() => {
    if (cache) {
      return;
    }

    if (cacheStatus.loading) {
      const interval = setInterval(() => {
        if (!cacheStatus.loading) {
          clearInterval(interval);
          setRepos(cache);
          setError(cacheStatus.error);
          setLoading(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    async function fetchRepos() {
      try {
        setLoading(true);
        cacheStatus.loading = true;

        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredRepos = data.filter((repo) => !repo.fork);
        const sortedRepos = filteredRepos.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        cache = sortedRepos;
        cacheStatus.error = null;
        setRepos(sortedRepos);
        setError(null);
      } catch (err) {
        cacheStatus.error = err.message;
        setError(err.message);
        setRepos([]);
        cache = [];
      } finally {
        setLoading(false);
        cacheStatus.loading = false;
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
