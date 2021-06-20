import React from 'react';
import About from './pages/About';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';


export default function App() {
  return (
    <Router>
      <section className="center">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:id" component={ItemDetails} />
          </Switch>
      </section>
    </Router>
  );
}
