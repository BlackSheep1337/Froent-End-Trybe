import React, { Component } from 'react';
import './Form.css';

import EstadoFavorito from './components/EstadoFavorito';
import Email from './components/Email';
import Nome from './components/Nome';
import Idade from './components/Idade';
import VaiComparecer from './components/VaiComparecer';
import PalavraChaveFavorita from './components/PalavraChaveFavorita';
import SelectedOption from './components/SelectedOption'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      selectedOption: 'bahia',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <div>
          <h1>Estados em React: ferramenta incrivel ou reagindo a regionalismos?</h1>
          <form  className="Form">
            <Email value={this.state.email} handleChange={this.handleChange} />
            <Nome value={this.state.nome} handleChange={this.handleChange} />
            <Idade value={this.state.idade} handleChange={this.handleChange} />
            <VaiComparecer handleChange={this.handleChange} value={this.state.vaiComparecer} />
            <PalavraChaveFavorita value={this.state.palavraChaveFavorita} handleChange={this.handleChange} />
            <SelectedOption value={this.state.selectedOption} handleChange={this.handleChange} />
            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}