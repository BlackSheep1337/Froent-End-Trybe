import { Component } from "react"

export default class VaiComparecer extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        vai comparecer a conferencia ?
        <input 
        name="vaiComparecer"
        type="checkbox"
        onChange={handleChange}
        value={value}
        />
      </label>
    );
  }
}