import { ActionTypes } from '../contants/actionTypes';

const INITIAL_STATE = {
  products: [{
    id: 1,
    title: 'XANDAO',
    category: 'Programmer',
  }]
}

const productReducer = (state = INITIAL_STATE, { type, peyload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default productReducer;
