import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  console.log(product);
  const fetchProductDetail = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
      dispatch(selectedProduct(data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (id && id !== '') fetchProductDetail();
  }, [id])

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="card container">
          <div className="card">
            { product.title }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
