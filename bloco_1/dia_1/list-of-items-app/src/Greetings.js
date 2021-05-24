import React from 'react';
import PropTypes from 'prop-types';

export default function Greetings(props) {
    return (
      <main>
        <h1>Hello {props.name} {props.lastName} you are {props.greeting}</h1>
        <p>I prefer do like that {props.position}</p>
      </main>
    );
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired
}