import { Component } from 'react';

export default class SelectedOption extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
    <fieldset>
      <legend>Escolha um estado favorito</legend>
      <label>
        <input
        name="selectedOption"
        value="bahia"
        type="radio"
        checked={value === 'bahia'}
        onChange={handleChange}
        />
        Bahia
      </label>
      <label>
        <input 
          name="selectedOption"
          value="minas gerais"
          type="radio"
          checked={value === 'minas gerais'}
          onChange={handleChange}
        />
        Minas Gerais
      </label>
      <label>
        <input
          onChange={handleChange}
          name="selectedOption"
          type="radio"
          checked={value === 'rio de janeiro'}
          value="rio de janeiro"
        />
        Rio de Janeiro
      </label>
      <label>
        <input 
        onChange={handleChange}
        name="selectedOption"
        value="sao paulo"
        type="radio"
        checked={value === 'sao paulo'}
        />
        Sao Paulo
      </label>
    </fieldset>
    );
  }
}