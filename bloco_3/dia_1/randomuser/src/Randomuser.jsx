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

  shouldComponentUpdate(prevState) {
    return true
  }

  render() {
    const { results } = this.state;
    const loading = <span>Loading...</span>
    console.log(results);
    return (
      <div className="main">
 
        {!this.state.loading ?
          results.map(({ name, gender, email, login, phone, picture}) => {
            return (
              <div className="user">
                <img src={picture.medium} alt="" />
                <span key={ phone }>Gender: { gender }</span>
                <span key={ phone }>Email: { email }</span>
                <span key={ phone }>Name: { name.first } { name.last }</span>
                <span key={ phone }>User: { login.username }</span>
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
