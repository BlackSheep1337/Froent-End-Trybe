import React, { Component } from 'react'
import './App.css';

export default class Randomuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      loading: '',
    }
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me';
    this.setState({loading: true},
      async () => {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
        loading: false,
        results: data.results,
        });  
      });
  }

  render() {
    const { results } = this.state;
    const loading = <spa>Loading...</spa>
    console.log(results);
    return (
      <div className="main">
        <h1>User Data</h1>
        {!this.state.loading ?
          results.map(({ name, gender, email, location, cell, phone, id }) => {
            return (
              <div className="user">
                <span key={ id.value }>Gender: { gender }</span>
                <span key={ id.value }>Email: { email }</span>
                <span key={ id.value }>Name: { name.first } { name.last }</span>
                <span key={ id.value }>State: { location.state }</span>
                <span key={ id.value }> City: { location.city }</span>
                <span key={ id.value }>Cell: { cell }</span>
                <span key={ id.value }>Phone: { phone }</span>
              </div>
            );
          })
          :
          loading
        }
      </div>
    )
  }
}
