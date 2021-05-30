import React, { Component } from 'react';

export default class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        <input 
        name="nome"
        placeholder="Nome"
        type="text"
        value={value}
        onChange={handleChange}
        />
      </label>
    );
  }
}