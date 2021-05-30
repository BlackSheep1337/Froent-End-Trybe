import React, { Component } from 'react'

export default class Cidade extends Component {
  render() {
    const { value, handleChange, handleErr } = this.props;
    let e = '';
    if (value.length > 28) {
      e = 'Limite de 28 caracteres';
    }
    return (
      <div>
        <label htmlFor="cidade">Cidade</label>
        <input 
        id="cidade"
        type="text"
        name="cidade"
        value={value.toUpperCase()}
        onChange={handleChange}
        onBlur={handleErr}
        placeholder="Digite sua cidade"
        />
        <br />
        <span style={{color: 'red', fontSize: '15px'}}>{e ? e : e = ''}</span>
      </div>
    )
  }
}
