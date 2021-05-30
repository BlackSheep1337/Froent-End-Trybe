import React, { Component } from 'react';

import Name from './Name';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleErr = this.handleErr.bind(this);
  }

  handleChange({ target }) {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  handleErr({ target }) {
    const name = target.name;
    if (target.value.match(/^\d/)) {
      this.setState({ 
        [name]: ''
      })
    }
  }

  render() {
    return (
      <form>
        <fieldset>
          <h1>Cadastro de curriculo</h1>
          <Name 
          handleChange={this.handleChange} 
          value={this.state.name} 
          />
          <Email
          handleChange={this.handleChange}
          value={this.state.email}
          />
          <Cpf value={this.state.cpf} handleChange={this.handleChange} />
          <Endereco value={this.state.endereco} handleChange={this.handleChange} />
          <Cidade value={this.state.cidade} handleChange={this.handleChange} handleErr={this.handleErr} />
        </fieldset>
      </form>
    )
  }
}
