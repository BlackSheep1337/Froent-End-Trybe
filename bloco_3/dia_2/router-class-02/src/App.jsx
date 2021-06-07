import React, { Component } from 'react'
import LadingPage from './components/LadingPage';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Layout from './components/Layout';

export default class App extends Component {
  render() {
    const align = {
      textAlign: 'center',
      color: 'red',
      fontWeight: '900',
      fontSize: '20px',
    }
    return (
      <div style={align}>
        <BrowserRouter>
          <Route path="/" exact component={LadingPage}/>
          <Route path="/layout" component={Layout}/>
        </BrowserRouter>
      </div>
    )
  }
}
