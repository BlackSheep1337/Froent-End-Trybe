import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filtredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtredTodos.map((todo) => 
        <Todo
          setTodos={setTodos}
          key={todo.id}
          {...todo}
          todos={todos}
        />)}
      </ul>
    </div>
  )
}

export default TodoList
