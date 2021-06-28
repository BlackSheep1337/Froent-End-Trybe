import React, { useState, useEffect } from 'react'
import Slider from './components/Slider';
import axios from 'axios';

export default function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const url = 'https://rickandmortyapi.com/api/character';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setList(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <>
      <Slider item={ list[index] } />
    </>
  )
}
