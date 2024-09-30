import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import { fetchGithubRepos } from '../services/fetchGithubRepos';

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchGithubRepos();

        // Trier les dépôts par date de création (du plus récent au plus ancien)
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
      } catch (error) {
        setError('Impossible de récupérer les projets GitHub.');
      }
    };
    getRepos();
  }, []);

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="container github-repos">
      {repos.length > 0 ? (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <p>{repo.description}</p>
              <a  href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
              </a>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun projet trouvé pour l'instant.</p>
      )}
    </div>
  );
};

export default GithubRepos;
