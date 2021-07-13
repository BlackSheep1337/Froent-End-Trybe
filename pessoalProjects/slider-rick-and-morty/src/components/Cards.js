import React, { useEffect } from 'react';
import { Section, SliderWrapper } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Slider from './Slider';
import { fetchData, showLoader, hideLoader } from '../redux/actions';
import axios from 'axios';
import Card from './Card';

function Cards() {
  const loading = useSelector(state => state.dataReducer.loading);
  const state = useSelector(state => state.dataReducer.data);
  const dispatch = useDispatch();
  const url = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    dispatch(showLoader());
    const handleFetchData = async () => {
      try {
        const { data } = await axios.get(url);
        dispatch(fetchData(data.results));
        console.log(data);
        dispatch(hideLoader());
      } catch (error) {
        console.log(error);
      }
    }
    handleFetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
      <Section>
        {state.map((card, idx) => <Card key={ idx } {...card }/>)}
      </Section>
    </>
  )
}

export default Cards;
