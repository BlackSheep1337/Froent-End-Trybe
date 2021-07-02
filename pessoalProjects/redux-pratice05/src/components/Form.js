import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { stateForm } from '../redux/actions';
import { withRouter } from 'react-router-dom';

function Form(props) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleCHange = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value,
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(props)
    dispatch(stateForm(form));
    setForm({name: '', email: '', password: '' });
    props.history.push('/logout');
  }

  return (
    <form onSubmit={ handleSubmit } className="form">
      <div className="form-container">
        <h1>Login React Redux</h1>
        <input
          name="name"
          type="text"
          value={ form.name }
          onChange={ handleCHange }
          placeholder="Name"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={ form.email }
          onChange={ handleCHange }
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={ form.password }
          onChange={ handleCHange }
          required
        />
          <button type="submit">
            <span>Login</span>
          </button>
      </div>
    </form>
  )
}

export default withRouter(Form)
