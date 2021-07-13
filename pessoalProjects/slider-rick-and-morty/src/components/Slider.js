import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SliderContent } from './styles';

function Slider() {
  const state = useSelector(state => state.dataReducer.data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      const random = Math.floor(Math.random() * 21);
      setIndex(random);
    }, 3000);
    return () => clearInterval(timeout);
  }, [index]);

  const checkIndex = idx => {
    if (idx < 0) {
      idx = state.length -1;
    } else if (idx > state.length - 1) {
      idx = 0;
    }
    return idx;
  }
  const { name, image, status, location, species } = state[checkIndex(index)];
  
  return (
    <SliderContent>
      <img src={ image } alt={ name } />
      <div className="article-content">
        <h1>{ name }</h1>
        <h3>{ species }</h3>
        <p>Status { status }</p>
        <p>Location { location.name }</p>
      </div>
    </SliderContent>
  )
}

export default Slider
