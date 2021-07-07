import React from 'react';
import { Wrapper } from './styles';

function Card({ id, name, image, status, location, species }) {
  return (
    <Wrapper>
      <img src={ image } alt={ name } />
      <div className="article-content">
        <h1>{ name }</h1>
        <h3>{ species }</h3>
        <p>Status { status }</p>
        <p>Location { location.name }</p>
      </div>
    </Wrapper>
  )
}

export default Card
