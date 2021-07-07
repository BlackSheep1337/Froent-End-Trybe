import { combineReducers } from 'redux';
import { dataReducer } from './Reducers';

const rootReducer = combineReducers({ dataReducer });

export default rootReducer;
