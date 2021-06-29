import { createStore } from 'redux';
import allReducers from '../reducers';
// voltar para colocar reducer na createStore(reducer);
const store = createStore(allReducers);

export default store;
