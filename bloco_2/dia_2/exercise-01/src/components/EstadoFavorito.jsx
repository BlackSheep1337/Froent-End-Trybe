import React, { Component } from 'react';

export default class EstadoFavorito extends Component {
  render() {
    const { value, handleChange  } = this.props;
    let error = undefined;
    if (value.length > 120) {
      error = 'Texto muito grande';
    }
    return (
      <label>
      <textarea 
        name="estadoFavorito" 
        value={value}
        onChange={handleChange}>
      </textarea>
      <span>{error ? error : ''}</span>
    </label>
    );
  }
}