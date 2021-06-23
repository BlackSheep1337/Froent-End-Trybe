import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [joke, setJoke] = useState('');

  const handleFetch = async () => {
    const API_URL = 'https://icanhazdadjoke.com/';
    const { data } = await axios.get(API_URL, { headers: { Accept: 'application/json' } });
    setJoke(data.joke);
  }

  useEffect(() => {
    handleFetch();
  }, [])

  return (
    <div>
      <h1>{joke}</h1>
    </div>
  )
}
