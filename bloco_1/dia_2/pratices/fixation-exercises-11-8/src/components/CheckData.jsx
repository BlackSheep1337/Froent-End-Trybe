import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckData extends Component {
  render() {
    return (
      <ol>
        <li>{this.props.name}</li>
        <li>{this.props.number}</li>
      </ol>
    );
  }
}

CheckData.defaultProps = {
  name: 'Alex',
  number: 69,
}

CheckData.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}
