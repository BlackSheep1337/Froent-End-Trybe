import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [ inpuText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filtredTodos, setFiltredTodos ] = useState([]);

  const handleFilter = () => {
    switch(status) {
      case 'completed':
        setFiltredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
          setFiltredTodos(todos.filter((todo) => todo.completed === false));
          break;
      default:
        setFiltredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Today todos</h1>
      </header>
      <Form 
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inpuText={inpuText}
        setStatus={setStatus}
      />
      <TodoList
      setTodos={setTodos}
      todos={todos}
      filtredTodos={filtredTodos}
      />
    </div>
  );
}

export default App;
