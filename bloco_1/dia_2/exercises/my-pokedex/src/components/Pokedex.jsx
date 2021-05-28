import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        {data.map((card) => {
          console.log(card.id);
          return <div>{<Pokemon info={card} key={card.id} />}</div>  
        })}
      </div>
    );
  }
}