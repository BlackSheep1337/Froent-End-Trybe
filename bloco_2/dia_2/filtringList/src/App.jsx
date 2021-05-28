import React, { Component } from 'react';
import FiltredData from './components/FiltredData';
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  render() {
    return (
      <div className="App">
          <input onChange={ this.handleChange.bind(this) } type="text" />
          <FiltredData input={ this.state.inputText } />
      </div>
    )
  }
}