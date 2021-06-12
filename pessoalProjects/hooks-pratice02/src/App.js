import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    const filtred = repositories.filter(repo => repo.favorite);

    document.title = `Voce tem ${filtred.length} favoritos`;
  }, [repositories]);

  async function handleFetchData() {
    const response  = await fetch('https://api.github.com/users/Naitwa-Alexandre/repos');
    const data = await response.json();
    setRepositories(data);
  }

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }

  return (
    <ul>
      { repositories.map((repo) => (
        <li
        key={repo.id}>
        {repo.name}
        {repo.favorite && <span>(favorito)</span>}
        <button onClick={() => handleFavorite(repo.id)}>
          Favoritar
        </button>
        </li>
      ))}
    </ul>
  )
}
