import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

function handleClick(e) {
  const btn = e.target.innerText;
  btn === 'Vermelho' ? console.log('Vermelho') :
  btn === 'Verde' ? console.log('Verde') : console.log('Azul');
}

export default class App extends Component {
  render() {
    return (
      <div className="containerApp">
      <button className="button red" onClick={handleClick}>Vermelho</button>
      <button className="button green" onClick={handleClick}>Verde</button>
      <button className="button blue" onClick={handleClick}>Azul</button>
    </div>
    );
  }
}

