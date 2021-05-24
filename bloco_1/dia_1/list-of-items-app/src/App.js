import React, { Component } from 'react';
import './App.css';
import Buttom from './buttom.js';
import Greetings from './Greetings';
import Timer from './Timer'

class App extends Component {
  render() {
    return (
      <div className="alignItems">
        <Greetings 
        name="Alexandre"
        lastName="Pereira"
        greeting="Awsome"
        position="69"
        />
        <Timer />
        <Buttom />
      </div>
    );
  };
}

export default App;
