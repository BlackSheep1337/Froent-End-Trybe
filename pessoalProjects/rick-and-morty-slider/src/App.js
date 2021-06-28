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
  
  useEffect(() => {
    const timeout = setInterval(() => {
      const random = Math.floor(Math.random() * 19);
      setIndex(random);
    }, 3000)
    return () => clearInterval(timeout);
  }, [index])

  const checkIndex = indexToCheck => {
    if(indexToCheck < 0) {
      return list.length - 1;
    }
    if(indexToCheck > list.length - 1) {
      return 0;
    }
    return indexToCheck;
  }

  const handleClickRight = () => {
    setIndex(checkIndex(index + 1));
  }
  const handleClickLeft = () => {
    setIndex(checkIndex(index - 1));
  }

  if (isLoading) {
    return (
      <h1>Carregando...</h1>
    )
  } 

  return (
   
    <>
      <Slider
        item={ list[index] }
        handleClickLeft={ handleClickLeft }
        handleClickRight={ handleClickRight }
      />
    </>
  )
}
