import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Nav extends Component {
  render() {
    const navStyle = {
      color: 'white',
    }
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/shop"><li style={navStyle}>Shop</li></Link>
          <Link to="about"><li style={navStyle}>About</li></Link>
          <Link to="/"><li style={navStyle}>Home</li></Link>
        </ul>
      </nav>
    )
  }
}
