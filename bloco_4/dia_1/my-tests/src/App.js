import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    email: '',
    salvedEmail: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({ email: '', salvedEmail: inputs.email })

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="name"
            value={ inputs.email }
            onChange={({ target: { value }}) => setInputs({ email : value })}
          />
        </label>
        <input
          type="submit"
          id="btn-enviar"
          data-testid="id-send"
          value="Enviar"
        />
        <input
          type="button"
          value="Voltar"
          data-testid="id-back"
          id="btn-voltar"
        />
      </form>
      <div>
        <h3>Email digitado: {inputs.salvedEmail}</h3>
      </div>
    </div>
  );
}

export default App;
