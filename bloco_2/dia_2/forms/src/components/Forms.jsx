import { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      age: 0,
      tag: '',
      textarea: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value,
      lastName: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <label>
          <input 
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
          />
        </label>
        <label>
          <input 
          type="text"
          value={this.state.lastName}
          onChange={this.handleInputChange}
          placeholder="Last Name"
          />
        </label>
      </form>
    );
  }
}