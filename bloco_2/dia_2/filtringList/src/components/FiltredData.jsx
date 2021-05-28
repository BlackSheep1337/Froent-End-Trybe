import { Component } from 'react';
import Data from './data';

export default class FiltredData extends Component {
  render() {
    const input = this.props.input;
    return (
      <ol>
        {
          Data.filter((item) => item.color.includes(input))
            .map((item) =>  <li key={item.value}>{ item.color }</li> )
        }
      </ol>
    );
  }
}
