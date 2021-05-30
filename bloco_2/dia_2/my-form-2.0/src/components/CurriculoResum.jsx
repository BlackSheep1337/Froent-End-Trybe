import React, { Component } from 'react'

export default class CurriculoResum extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label>Ultimo emprego</label>
        <br />
        <textarea
        value={value}
        name="ultimoEmprego"
        onChange={handleChange}
        maxLength="1000"
        rows="10"
        cols="40"
        placeholder="Escreva um resumo do seu ultimo emprego"
        />
      </div>
    )
  }
}
