import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path ="/" exact render={() => <Cards />} />
          <Route path="/details/:id" render={() => <CardDetails /> } />
        </Switch>
      </Router>
    </>
  )
}

export default App;
