import React, { Component } from 'react';
import CheckData from './components/CheckData';


export default class App extends Component {
  render() {

    return (
      <div>
        <CheckData name={'Alexandre'} number={1991} />
      </div>
    );
  }
}
