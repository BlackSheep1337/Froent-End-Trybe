import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      selectedOption: 'bahia',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <div>
          <h1>Estados em React: ferramenta incrivel ou reagindo a regionalismos?</h1>
          <form>
            <label>
              <textarea 
                name="estadoFavorito" 
                value={this.state.estadoFavorito} 
                onChange={this.handleChange}>
              </textarea>
            </label>

            <label>
              Email
              <input 
              name="email" 
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
            </label>
            
            <label>
              Nome
              <input 
              name="nome" 
              type="text" 
              onChange={this.handleChange}
              value={this.state.nome}
              />
            </label>

            <label>
              Idade
              <input
              name="idade" 
              type="number"
              onChange={this.handleChange}
              value={this.state.idade}
              />
            </label>
            
            <label>
              vai comparecer a conferencia ?
              <input 
              name="vaiComparecer" 
              type="checkbox" 
              onChange={this.handleChange}
              value={this.state.vaiComparecer}
              />
            </label>
            
            <label>
              Escolha uma palavra favorita
              <select 
              name="palavraChaveFavorita"
              value={this.state.palavraChaveFavorita}
              onChange={this.handleChange}
              >
                <option value="estado">Estado</option>
                <option value="react">Rect</option>
                <option value="props">Props</option>
                <option value="hooks">Hooks</option>
              </select>
            </label>

              <fieldset>
                <legend>Escolha um estado favorito</legend>

              <label>
                <input
                name="selectedOption"
                value="bahia"
                type="radio"
                checked={this.state.selectedOption === 'bahia'}
                onChange={this.handleChange}
                />
                Bahia
              </label>
              
              <label>
   
                <input 
                  name="selectedOption"
                  value="minas gerais"
                  type="radio"
                  checked={this.state.selectedOption === 'minas gerais'}
                  onChange={this.handleChange}
                />
                Minas Gerais
               </label>

               <label>
                <input
                  onChange={this.handleChange}
                  name="selectedOption"
                  type="radio"
                  checked={this.state.selectedOption === 'rio de janeiro'}
                  value="rio de janeiro"
                />
                Rio de Janeiro
               </label>
 
               <label>
                <input 
                onChange={this.handleChange}
                name="selectedOption"
                value="sao paulo"
                type="radio"
                checked={this.state.selectedOption === 'sao paulo'}
                />
                Sao Paulo
              </label>
              </fieldset>
            
          </form>
        </div>
      </div>
    );
  }
}