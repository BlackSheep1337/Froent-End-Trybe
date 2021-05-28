import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    console.log(this.props);
    const { name, type, image } = this.props.info; 
    const { value, measurementUnit } = this.props.info.averageWeight;
    return (
      <div>
        <div>{ name }</div>
        <div>{ type }</div>
        <div>{`${ value } ${ measurementUnit }`}</div>
        <div><img src={ image } alt={ name } /></div>
      </div>
    );
  }
}
