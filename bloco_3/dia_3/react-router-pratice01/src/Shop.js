import React, { useEffect } from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const url = 'https://fortnite-api.theapinetwork.com/upcoming/get';
    const response = await fetch(url);
    const data  = await response.json();
    console.log(data.data);
  }


  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
}

export default Shop;
