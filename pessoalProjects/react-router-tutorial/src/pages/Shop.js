
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [list, setList] = useState([]);

  useEffect(() => {
    handleFetch();
  }, [])

  const handleFetch = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(data);
    setList(data.results);
  }

  return (
    <div className="shop">
      {list.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}
