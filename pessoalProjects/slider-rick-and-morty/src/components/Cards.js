import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from './Slider';
import { fetchData } from '../redux/actions';

function Cards() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.dataReducer.data);



  useEffect(() => {
   dispatch(fetchData(['hellow World']));
  }, [])


  console.log(state);
  return (
    <div>
      <Slider />
      <h1>Cards</h1>
    </div>
  )
}

export default Cards