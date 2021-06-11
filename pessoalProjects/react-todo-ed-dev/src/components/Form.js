import React from 'react';

const Form = ({ setInputText, setTodos, todos, inpuText, setStatus }) => {
  const handdleInputText = ({ target }) => {
    const { value } = target;
    setInputText(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      { text: inpuText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  }

  const handleStatus = ({ target }) => {
    const { value } = target;
    setStatus(value);
  }

  return (
    <div>
      <form>
      <input value={inpuText} onChange={handdleInputText} type="text" className="todo-input" />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
  )
}

export default Form;
