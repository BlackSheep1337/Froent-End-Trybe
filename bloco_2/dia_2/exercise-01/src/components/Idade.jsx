import React, {Component } from 'react';

export default class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Idade
        <input
        name="idade" 
        type="number"
        onChange={handleChange}
        value={value}
        />
      </label>
    );
  }
}