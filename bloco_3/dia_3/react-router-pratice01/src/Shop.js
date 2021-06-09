import React, { useEffect, useState } from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [data, setItems] = useState([]);

  const fetchItems = async () => {
    const url = 'https://fakestoreapi.com/products/categories';
    const response = await fetch(url);
    const data  = await response.json();
    console.log(data)
    setItems(data);
  } 


  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
}

export default Shop;
