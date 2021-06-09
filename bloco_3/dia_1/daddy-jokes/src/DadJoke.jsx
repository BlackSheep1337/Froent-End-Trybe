import React, { Component } from 'react'

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
    console.log('constructor');
  }


  async componentDidMount() {
    this.setState(
      {loading: true},
    async () => {
    console.log('componentDidMount');
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      loading: false,
      jokeObj: requestObject,
    })
  })
  }

  saveJoke() {
    this.setState(({ storedJokes ,jokeObj }) => ({
      storedJokes:  [...storedJokes, jokeObj],
    }))
    //Salvando a piada no array de piadas existentes

    this.componentDidMount();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    console.log('render');
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <span>{loading ? loadingElement : this.renderJokeElement()}</span>

      </div>
    );
  }
}

export default DadJoke;