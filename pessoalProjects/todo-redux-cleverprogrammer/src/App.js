import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>{account.count}</h1>
      <button onClick={() => depositMoney(100)}>+</button>
      <button onClick={() => withdrawMoney(100)}>-</button>
    </div>
  )
}

export default App
