import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {

  const navStyle = {
    color: 'white',
  }

  return (
    <nav>
      <Link style={navStyle} to="/"><h1>Logo</h1></Link>
        <ul className="nav-links">
          <Link  style={navStyle} to="/shop">Shop</Link>
          <Link style={navStyle} to="/about">About</Link>
        </ul>
    </nav>
  )
}
