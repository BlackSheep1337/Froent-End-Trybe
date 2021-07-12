import { ActionTypes } from '../contants/actionTypes';
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/users';

export const setProducts = (products) => {
  return {
    type:ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product) => {
  return {
    type:ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get(URL)
      .then((response) => {
        const { data } = response;
        dispatch(setProducts(data));
      })
      .catch((err) => console.log(err.message));
  } 
}