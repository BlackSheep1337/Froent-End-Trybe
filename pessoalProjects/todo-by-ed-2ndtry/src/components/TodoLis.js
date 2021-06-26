import React from 'react';
import Todo from './Todo';

export default function TodoLis({ filtredTodos,  setTodos  }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
       {filtredTodos.map((todo, index) =>
       <Todo todos={ filtredTodos }
        setTodos={ setTodos }
        key={ index }
       {...todo} />)}
      </ul>
    </div>
  )
}
