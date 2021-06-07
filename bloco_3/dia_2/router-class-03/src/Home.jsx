import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

export default class Home extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
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
