import  { Component } from 'react';
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      background: 'red',
      color: 'white',
    }
    this.handleClick = this.handleClick.bind(this);
    this.countHandle = this.countHandle.bind(this);
    console.log('Componente Sendo Construido');
  }

  countHandle(e) {
    console.log(e.target);

    
    this.setState((curState,_props) => ({
      count: curState.count + 1,
    }));
  }

  handleClick(e) {
    const color = window.getComputedStyle(e.target, null)
    .getPropertyValue("background-color");
    this.setState((curState,_props) => ({
      background: curState.background = color,
    }));
  }

  render() {
    console.log(this);
    return (
      <div className="containerApp">
      <div className="counter" onClick={this.countHandle} style={{background: this.state.background, color: this.state.color}}>
        <div className="count">{this.state.count}</div>
      </div>
      <button className="button red" onClick={this.handleClick}>Vermelho</button>
      <button className="button green" onClick={this.handleClick}>Verde</button>
      <button className="button blue" onClick={this.handleClick}>Azul</button>
    </div>
    );
  }
}
