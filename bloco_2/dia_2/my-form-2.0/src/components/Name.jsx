import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    const { value, handleChange } = this.props;
    let e = '';
    if (value.length > 40) {
       e = 'Limite de 40 caracteres';
    }
    return (
      <div>
        <label htmlFor="name">Nome</label>
        <input
        id="name"
        type="text"
        placeholder="Digite seu nome" 
        name="name"
        value={value.toUpperCase()}
        onChange={handleChange}
        />
        <br />
        <span style={{color: 'red', fontSize: '15px'}}>{e ? e : e = ''}</span>
      </div>
    )
  }
}
