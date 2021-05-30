import { Component } from 'react';

export default class PalavraChaveFavorita extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Escolha uma palavra favorita
        <select 
        name="palavraChaveFavorita"
        value={value}
        onChange={handleChange}
        >
          <option value="estado">Estado</option>
          <option value="react">Rect</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>
    );
  }
}