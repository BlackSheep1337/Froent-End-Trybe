import CounterReducer from './counter';
import LoggedReducer from './isLogged';
import { combineReducers } from 'redux';

const AllReducers = combineReducers({
  CounterReducer,
  LoggedReducer
})

export default AllReducers;
