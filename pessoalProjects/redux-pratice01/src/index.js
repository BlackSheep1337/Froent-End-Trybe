import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import AllReducers from './reducers';
import { Provider } from 'react-redux';


const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={ store }>
    <App /> 
  </Provider>
  , document.getElementById('root')

);
