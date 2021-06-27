import React, { useState, useEffect } from 'react';
import Alert from './components/alert/Alert';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';


export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const [status, setStatus] = useState('all');
  const [filtredTodos, setFiltredTodos] = useState([]);

  useEffect(() => {
    setFiltredTodos(todos);
    if (status === 'completed') {
      setFiltredTodos(todos.filter(({ completed }) => completed))
    } else if (status === 'uncompleted') {
      setFiltredTodos(todos.filter(({ completed }) => !completed))
    } else {
      setFiltredTodos(todos.map((item) => item))
    }
  }, [status, todos])


  const handleSubmit = e => {
    e.preventDefault();
    if (!inputText) { 
      showAlert(true, 'Invalid item', 'danger');
      return;
    }
    setTodos([...todos, { id: Math.random() * 100, completed: false, text: inputText}]);
    setInputText('');
    showAlert(true, 'Item added', 'success');
  }

  const showAlert = (show=false, msg="", type="") => {
    setAlert({ show, msg, type})
  }

  const deleteItem = id => {
    showAlert(true, 'Removed item', 'danger');
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const completedItem = id => {
    setTodos(todos.map((todo) => {
      if(todo.completed === false) {
       showAlert(true, 'Item done', 'success')
      }
      if (todo.completed === true) {
        showAlert(true, 'Item undone', 'danger');
      }
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  return (
    <main>
      <Form
        inputText={ inputText }
        setInputText={ setInputText }
        status={ status }
        setStatus={ setStatus }
        handleSubmit={ handleSubmit }
      />
      {alert.show && <Alert todos={ todos } setAlert={setAlert} alert={ alert } />}
      <TodoList
        filtredTodos={ filtredTodos }
        showAlert={ showAlert }
        setTodos={ setTodos }
        deleteItem={ deleteItem }
        completedItem={ completedItem }
      />
    </main>
  );
}
