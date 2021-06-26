import React, { useEffect, useState } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoLis';

const handleStorage = () => {
  let storage = localStorage.getItem('todos');
  return JSON.parse(storage) || [];
}

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(handleStorage());
  const [status, setStatus] = useState('all');
  const [filtredTodos, setFiltredTodos] = useState([]);

  useEffect(() => {
    filtredTodo()
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [status, todos])

  const filtredTodo = () => {
    if (status === 'completed') {
      setFiltredTodos(todos.filter((item) => item.completed))
    } else if (status === 'uncompleted') {
      setFiltredTodos(todos.filter((item) => !item.completed))
    } else {
      setFiltredTodos(todos);
    }
  }

  return (
    <div>
        <header>
          <h1>Xandys Todo List</h1>
        </header>
        <Form
          setInputText={ setInputText }
          inputText={ inputText }
          todos={ todos }
          setTodos={ setTodos }
          setStatus={ setStatus }
          status={ status }
        />
        <TodoList
          filtredTodos={ filtredTodos }
          setTodos={ setTodos }
        />
    </div>
  )
}
