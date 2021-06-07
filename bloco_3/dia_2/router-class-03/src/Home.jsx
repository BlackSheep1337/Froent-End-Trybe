import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

export default class Home extends Component {
  render() {
    const nav = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      listStyle: 'none',
      minHeight: '10vh',
      backgroundColor: 'lightblue',
      fontSize: '30px',
    }
    return (
      <div style={{textAlign: 'center'}}>
        <BrowserRouter>
          <ul style={nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
       </BrowserRouter>
      </div>
    )
  }
}
