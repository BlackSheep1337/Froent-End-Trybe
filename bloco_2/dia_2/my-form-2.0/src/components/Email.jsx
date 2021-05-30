import React, { Component } from 'react'

export default class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    let e ='';
    if (value.length > 50) {
      e = 'Limite de 50 caracteres';
    } 
    return (
      <div>
        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        placeholder="Digite seu email"
        name="email"
        value={value.toUpperCase()}
        onChange={handleChange}
        />
        <br />
        <span style={{color: 'red', fontSize: '15px'}}>{e ? e : e = ''}</span>
      </div>
    )
  }
}
