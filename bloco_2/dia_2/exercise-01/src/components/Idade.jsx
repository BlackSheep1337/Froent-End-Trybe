import React, {Component } from 'react';

export default class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        <input
        name="idade"
        placeholder="Idade"
        type="number"
        onChange={handleChange}
        value={value}
        />
      </label>
    );
  }
}