import React, { Component } from 'react'

export default class Endereco extends Component {
  render() {
    const { value, handleChange } = this.props;
    let e = '';
    if (value.length > 200) {
      e = 'Limite de 200 caracteres';
    } 
    return (
      <div>
        <label htmlFor="endereco">Endereco</label>
        <input
        id="endereco"
        type="text"
        name="endereco"
        value={value.toUpperCase()}
        onChange={handleChange}
        placeholder="Digite seu endereco"
        />
        <br />
        <span style={{color: 'red', fontSize: '15px'}}>{e ? e : e = ''}</span>
      </div>
    )
  }
}
