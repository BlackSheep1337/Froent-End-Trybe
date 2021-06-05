import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    console.log('Constructed');
    super(props);

    this.state = {
      counter: 0,
      showCounter: true,
    };
    this.increment = () => this.setState({counter: this.state.counter + 1});
    this.decrement = () => this.setState({counter: this.state.counter - 1});
    this.hideNshow = () => this.setState({ showCounter: this.state.showCounter ? false : true});
  }
  
  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  componentDidUpdate() {
    console.log('Component updated');
    console.log('-----------------')
  }

  shouldComponentUpdate(prevProp, nextproP) {
    console.log('Shoud component update?')
    return true;
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    console.log('----------------------')
  }

  render() {
    console.log('Render');
    return (
      <div style={{textAlign: 'center'}}>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.hideNshow}>Hide Counter</button>
        {this.state.showCounter ? <h1>Counter: {this.state.counter}</h1> : null }
      </div>
    )
  }
}
