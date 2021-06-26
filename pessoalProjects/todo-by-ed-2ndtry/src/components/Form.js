import React from 'react'

export default function Form({ setInputText, todos, setTodos, inputText, setStatus, status }) {

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputText) return;
    setTodos([...todos, {text: inputText, id: Math.random() * 1000, completed: false }]);
    setInputText('');
  }

  const handleStatus = e => {
    setStatus(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        value={ inputText }
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select value={ status } onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
