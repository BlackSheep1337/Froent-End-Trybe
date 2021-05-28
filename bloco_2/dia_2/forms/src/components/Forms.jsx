import { Component } from 'react';
import '../index.css';

export default class Form extends Component {
  constructor(props) {
    super(props);


    this.state = {
      email: '',
      password: ''
    }
    // this.handleEmail = this.handleEmail.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  // handleEmail({ target }) {
  //   console.log(target.value);
  //   this.setState({
  //     email: target.value,
  //   })
  // }
  
  // handlePassword({ target }) {
  //   console.log(target.value);
  //   this.setState({
  //     password: target.value,
  //   })
  // }

  handleInputs({ target }) {
    const { name, value } = target;
    
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <main className="main">
        <form className="form">
          <h3>League of Legends</h3>
          <label className="input">
            <input
            name="email"
            type="text"
            placeholder="Digite seu email"
            value={this.state.email}
            onChange={this.handleInputs}
            />
          </label>

          <label className="input">
            <input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            value={this.state.password}
            onChange={this.handleInputs}
            />
          </label>
          <label className="input">
            <button>Logar</button>
          </label>

        </form>
      </main>
    );
  }
}