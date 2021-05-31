import React, { Component } from 'react';

import Name from './Name';
import Email from './Email';
import Cpf from './Cpf';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Largadouro from './Largadouro';
import CurriculoResum from './CurriculoResum';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estados: '',
      largadouro: 'casa',
      ultimoEmprego: '',
      data: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleErr = this.handleErr.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
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
  
  handleSubmit(e) {
    e.preventDefault()
    const data = this.state
   this.setState({data})
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
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
            <Estado value={this.state.estados} handleChange={this.handleChange} />
            <Largadouro value={this.state.largadouro} handleChange={this.handleChange} />
          </fieldset>
          <br />
          <fieldset>
            <h1>Dados do seu ultimo emprego</h1>
            <CurriculoResum value={this.state.ultimoEmprego} handleChange={this.handleChange} />
          </fieldset>
          <button>Submit</button>
        </form>
        <p>{this.state.data.name}</p> 
        <p>{this.state.data.email}</p>
        <p>{this.state.data.cpf}</p>
        <p>{this.state.data.endereco}</p>
        <p>{this.state.data.cidade}</p>
        <p>{this.state.data.estados}</p>
        <p>{this.state.data.largadouro}</p>
        <p>{this.state.data.ultimoEmprego}</p>
      </main>
    )
  }
}
