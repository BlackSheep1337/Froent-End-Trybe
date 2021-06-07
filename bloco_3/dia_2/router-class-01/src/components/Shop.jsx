import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Shop() {
    useEffect(() => {
      fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      const response =  await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      const items = await response.json();
      setItems(items.data);
    }

    return (
      <div>
        {items.map((item) => (<h1 key={item.itemId}>
          <Link to={`/shop/${ item.itemId }`}>{item.item.name}</Link>
          </h1>))}
      </div>
    )
}
