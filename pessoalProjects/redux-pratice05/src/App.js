import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Logout from './components/Logout';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Form /> } />
          <Route path="/logout" render={() => <Logout /> } />
        </Switch>
      </Router>
      </>
  );
}

export default App;
