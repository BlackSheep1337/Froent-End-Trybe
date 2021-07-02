import { combineReducers } from "redux";
import { formReducer } from './FormReducer';

const rootReducers = combineReducers({
  form: formReducer,
});

export default rootReducers;
