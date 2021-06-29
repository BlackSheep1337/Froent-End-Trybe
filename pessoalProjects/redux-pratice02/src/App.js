import React, { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_TODO: 'add-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    default:
      return todos;
  }
}

const newTodo = name => {
  return { id: Date.now(), name: name, complete: false }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('')
  }

  const handleChange = e => {
    
  }




console.log(todos);


  return (
    <div style={{textAlign: 'center', fontSize: '30px'}}>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          onChange={(e) => setName(e.target.value) }
          value={ name }
        />
        <select name="inputSelect" onChange={ handleChange }>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
}
