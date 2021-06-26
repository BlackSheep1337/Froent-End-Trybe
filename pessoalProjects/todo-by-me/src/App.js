import React, { useState } from 'react'
import Item from './Item';
import './App.css';


export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      return;
    }
    setName('');
    const newItem = {id: Math.random(), title: name }
    setList([...list, newItem]);
  }

  const handleCompleted = id => {
    //need resolve this bug
    setIsCompleted(!isCompleted)
  }

  const handleDelete = id => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return ( 
    <main>
      <section>
        <form onSubmit={handleSubmit} className="form">
          <h1>Todo list</h1>
          <input
            type="text"
            className="input-text"
            placeholder="Digite your todos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            Salvar
          </button>
        </form>
        <div className="list">
          <div className="item-container">
            <Item
              list={list}
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
              isCompleted={isCompleted}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
