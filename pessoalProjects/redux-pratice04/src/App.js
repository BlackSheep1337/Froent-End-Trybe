import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Headers';
import ProductDetail from './containers/ProductDetail';
import ProductList from './containers/ProductList';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ ProductList } />
          <Route path="/product/:id" exact component={ ProductDetail } />
          <Route>404 not Found!</Route>
        </Switch>
      </Router>
    </div>
  )
}
