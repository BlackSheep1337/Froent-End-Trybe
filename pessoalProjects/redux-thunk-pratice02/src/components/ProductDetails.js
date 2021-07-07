import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/action';

function ProductDetails() {
  const { productId } = useParams();
  const url = `https://fakestoreapi.com/products/${productId}`;
  const dispatch = useDispatch();
  const product = useSelector(state => state);
  console.log(product);


  const handleFetchProduct = async () => {
    try {
      const { data } = await axios.get(url);
      dispatch(selectedProduct(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (productId && productId !== '') {
      handleFetchProduct();
    }
  }, [productId])

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <h1>PRODUCT</h1>
      </div>
    </div>
  )
}

export default ProductDetails
