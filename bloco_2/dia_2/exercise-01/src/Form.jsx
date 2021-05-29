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
      palavraChaveFavorita: ''
    }
  }

  handleTextAreaChange(e) {
    console.log(e.target.value);
    this.setState({ estadoFavorito: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value })
  }

  handleName(e) {
    this.setState({ 
      nome: e.target.value,
    })
  }

  handleIdade(e) {
    this.setState({
      idade: e.target.value
    })
  }

  handleCheckbox(e) {
    console.log(e.target.checked)
    this.setState({
      vaiComparecer: e.target.checked
    })
  }

  handleSelect(e) {
    console.log(e.target.value);
    this.setState({
      palavraChaveFavorita: e.target.value
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
                onChange={this.handleTextAreaChange.bind(this)}>
              </textarea>
            </label>

            <label>
              Email
              <input 
              name="email" 
              type="email" 
              value={this.state.email}
              onChange={this.handleEmail.bind(this)}
              />
            </label>
            
            <label>
              Nome
              <input 
              name="nome" 
              type="text" 
              onChange={this.handleName.bind(this)}
              value={this.state.nome}
              />
            </label>

            <label>
              Idade
              <input
              name="idade" 
              type="number"
              onChange={this.handleIdade.bind(this)}
              value={this.state.idade}
              />
            </label>
            
            <label>
              vai comparecer a conferencia ?
              <input 
              name="vaiComparecer" 
              type="checkbox" 
              onChange={this.handleCheckbox.bind(this)}
              value={this.state.vaiComparecer}
              />
            </label>
            
            <label>
              Escolha uma palavra favorita
              <select 
              name="palavraChaveFavorita"
              value={this.state.palavraChaveFavorita}
              onChange={this.handleSelect.bind(this)}
              >
                <option value="estado">Estado</option>
                <option value="react">Rect</option>
                <option value="props">Props</option>
                <option value="hooks">Hooks</option>
              </select>
            </label>
            
          </form>
        </div>
      </div>
    );
  }
}