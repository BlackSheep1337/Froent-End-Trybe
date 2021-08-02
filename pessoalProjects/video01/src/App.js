import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputForm, setInputForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setInputForm({ name: '', email: '', password: ''});
    console.log(inputForm)
  }

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          name="name"
          type="text"
          value={ inputForm.name }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          name="email"
          id="email"
          type="email"
          value={ inputForm.email }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          name="password"
          id="password"
          value={ inputForm.password }
          type="password"
          onChange={ handleChange }
        />
      </label>
      <button type="button" onClick={ handleClick }>
        Entrar
      </button>
    </form>
  );
}
export default App;
