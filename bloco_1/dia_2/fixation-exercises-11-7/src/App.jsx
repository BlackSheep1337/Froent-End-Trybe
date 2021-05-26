import React, { Component } from 'react';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {

    return (
      <ol><ShoppingList /></ol>
    );
  }
}

export default App;