import React from 'react'

function Todo({ text, id, completed, setTodos, todos }) {

  const handleTrashBtn = () => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleCompleted = () => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed
        }
      }
      return todo;
    }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={handleCompleted} className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={handleTrashBtn} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo
