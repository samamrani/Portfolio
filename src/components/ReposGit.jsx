import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import { fetchReposGit } from '../services/fetchGithubRepos';
import Spinner from './Spinner';
import projet from '../data/projet.json'



const ReposGit = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true)
      try {
      
        const data = await fetchReposGit();

        // Trier les dépôts par date de création (du plus récent au plus ancien)
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
      } catch (error) {
        setError('Impossible de récupérer les projets GitHub.');
      } finally{
        setLoading(false)
      }
    };
    getRepos();
  }, []);
if(loading){return <Spinner />}
  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="container github-repos">
      
      {projet.length > 0 ? (
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

export default ReposGit;
