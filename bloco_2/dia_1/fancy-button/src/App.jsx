import  { Component } from 'react';
import './App.css';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      background: 'red',
      color: 'white',
    }
    this.handleClick = this.handleClick.bind(this);
    console.log('Componente Sendo Construido');
  }


  handleClick(e) {
    console.log(this);
    const btn = e.target.innerText;
    btn === 'Vermelho' ? console.log('Vermelho') :
    btn === 'Verde' ? console.log('Verde') : console.log('Azul');
  }

  render() {
    console.log(this);
    return (
      <div className="containerApp">
      <div className="counter" style={{background: this.state.background, color: this.state.color}} >
        <div className="count">{this.state.count}</div>
      </div>
      <button className="button red" onClick={this.handleClick}>Vermelho</button>
      <button className="button green" onClick={this.handleClick}>Verde</button>
      <button className="button blue" onClick={this.handleClick}>Azul</button>
    </div>
    );
  }
}
