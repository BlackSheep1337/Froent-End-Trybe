import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";

const rootReducers = combineReducers({
  account: accountReducer,
})

export default rootReducers;
