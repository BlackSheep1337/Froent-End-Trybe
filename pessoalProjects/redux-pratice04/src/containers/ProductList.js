import React, { useEffect } from 'react';
import axios from 'axios'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions'; 


function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      console.log(data);
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductList
