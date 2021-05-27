import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import Data from './data';

export default class App extends Component {
  render() {
    return (
      <main>
        <Pokedex data={ Data } />
      </main>
    );
  }
}