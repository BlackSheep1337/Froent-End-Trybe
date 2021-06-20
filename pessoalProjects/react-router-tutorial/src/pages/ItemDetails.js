
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ItemDetails({ match }) {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleFetch();
  }, [])

  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${match.params.id}`);
      setItem(data);
      setIsLoading(false);
    } catch (error) {
     console.log(error); 
    }
  }
  if (isLoading) {
    return 'Carregando...';
  }

  return (
    <div className="shop">
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
    </div>
  );
}
