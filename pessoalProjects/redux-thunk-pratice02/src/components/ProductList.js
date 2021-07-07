import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProduct } from '../redux/action';

function ProductList() {
  const url = 'https://fakestoreapi.com/products';
  const dispatch = useDispatch(); 

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(url);
      dispatch(setProduct(data));
    } catch (error) {
      console.log('Err', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
   
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductList
