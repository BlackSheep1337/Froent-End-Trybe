import React, { useState } from 'react';

export default function Questions() {
  const [input, setInput] = useState({
    name: '',
    textarea: '',
  });
  const [list, setList] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]:value,
    })
  }

  const handleForm = (e) => {
    e.preventDefault();
    const { name, textarea } = input;
    const newItem = {id: Math.floor(Math.random() * 100), name, textarea};
    setList([...list, newItem]);
    setInput({name : '', textarea: ''});
  }

  return (
    <form onSubmit={handleForm} className="form-container">
      <textarea
        className="textarea"
        type="text"
        name="textarea"
        placeholder="Ask your question"
        value={ input.textarea }
        onChange={handleChange}
      />
      <div className="form-control">                          
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Digite your name" 
          value={ input.name }
          onChange={handleChange}                                                           
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
      <div className="question-container">
        {list.map(({ id, name, textarea }) => {
          return <article key={ id }>
            <div className="input-containe">
              <h3>{ name }</h3>
              <p>{ textarea }</p>
            </div>
          </article>
        })}
      </div>
    </form>
  )
}
