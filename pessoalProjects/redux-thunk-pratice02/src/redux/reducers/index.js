import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from './productReducer';

const rootReducer = combineReducers({
  productReducer,
  selectedProductReducer,
});

export default rootReducer;
