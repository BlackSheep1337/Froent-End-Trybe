import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Poll from './Poll';
import './App.css';

export default function App() {
  return (
    <section className="section">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/questions" component={Questions} />
          <Route path="/polls" component={Poll} />
        </Switch>
      </Router>
    </section>
  );
}
