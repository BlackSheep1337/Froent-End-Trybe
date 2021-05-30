import React, { Component } from 'react'

export default class Largadouro extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <fieldset>
        <legend>Largadouro</legend>
          <label htmlFor="casa">Casa</label>
          <input
          id="casa"
          name="largadouro"
          type="radio"
          value="casa"
          checked={value === 'casa'}
          onChange={handleChange}
          />
          <label htmlFor="apartamento">Apartamento</label>
          <input
          name="largadouro"
          id="apartamento"
          type="radio"
          value="apartamento"
          checked={value === 'apartamento'}
          onChange={handleChange}
          />
          </fieldset>
      </div>
    )
  }
}
