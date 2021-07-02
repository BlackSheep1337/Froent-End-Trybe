import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Logout() {
  const { form: { name, email } } = useSelector(state => state);
  return (
    <section className="logout">
      <div className="logout-container">
      <div className="logout-header">
        <h1>Welcome <span>{ name }🎉</span></h1>
        <h1>Email:<span>{ email }</span> </h1>
      </div>
      <Link to="/">
        <button className="btn-logout">
          <span>Logout</span>
        </button>
      </Link>
      <div className="change-pass">
        <h3><a href="/">Click</a> here to change password</h3>
      </div>
      </div>
    </section>
  )
}

export default Logout
