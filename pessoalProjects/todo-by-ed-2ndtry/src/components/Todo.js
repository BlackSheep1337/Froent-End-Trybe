import React from 'react';

export default function Todo({ text, todos, setTodos, id, completed }) {

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const handleComplete = () => {
    setTodos(todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? 'completed' : ''}`}>{ text }</li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
