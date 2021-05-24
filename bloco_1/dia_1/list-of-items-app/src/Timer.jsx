import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 5 };
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  tick() {
    this.setState({ elapsed: this.state.elapsed + 1 });
  }
  
  render() {
    return <h1>{this.state.elapsed} seconds</h1>;
  }
}