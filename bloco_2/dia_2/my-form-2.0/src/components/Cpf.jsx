import React, { Component } from 'react'

export default class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    let e = '';
    if (value.length > 11) {
      e = 'Limite de 11 caracteres';
    }
    return (
      <div>
        <label htmlFor="cpf">CPF</label>
        <input
        id="cpf"
        name="cpf"
        type="number"
        placeholder="Digite seu cpf"
        value={value}
        onChange={handleChange}
        />
        <br />
        <span style={{color: 'red', fontSize: '15px'}}>{e ? e : e = ''}</span>
      </div>
    )
  }
}
