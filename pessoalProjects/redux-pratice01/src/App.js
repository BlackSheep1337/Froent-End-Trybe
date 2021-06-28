import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decriment } from './actions';


export default function App() {
  const counter = useSelector(state => state.CounterReducer)
  const isLogged = useSelector(state => state.LoggedReducer);
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: 'center'}}>
      <h1>React Redux</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch(decriment())}>-</button>

      {isLogged ?   <h3>Valuable information i shouldnt see</h3> : ''}
    
    </div>
  )
}
