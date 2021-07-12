import { ActionTypes } from '../contants/actionTypes';

const INITIAL_STATE = {
  products: [{
    id: 1,
    name: 'XANDAO',
    category: 'Programmer',
  }]
}

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    default:
      return state;
  }
}

export default productReducer;
