import React, { Component } from 'react'
import About from './components/About';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import ItemDeail from './components/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDeail}/>
          </Switch>
        </div>
      </Router> 
    )
  }
}
