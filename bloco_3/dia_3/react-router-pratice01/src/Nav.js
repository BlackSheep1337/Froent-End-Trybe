import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const style = {
    color: 'white',
  }
  return (
    <div className="App">
      <nav>
        <Link to="/" style={style}><h3>Logo</h3></Link>
        <ul className="nav-links">
          <Link to="/about" style={style}><li>Abaout</li></Link>
          <Link to="/shop" style={style}><li>Shop</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
