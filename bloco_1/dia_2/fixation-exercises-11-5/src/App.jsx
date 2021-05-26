import React from 'react';
import './App.css';
import Order from './components/Order';
import { headphone, energyDrink } from './components/Products';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1>Orders recently created</h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>
    );
  }
}

export default App;