import React, { Component, useState, useEffect } from 'react'

export default function Item({ match }) {
    useEffect(() => {
      fetchItem();
      console.log(match);
    }, [])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
      const respose = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id={${match.params.id}}`);
      const data = await respose.json();
      console.log(data);

      setItem(data);
    }

    return (
      <div>
        <h1>{item.name}</h1>
      </div>
    )
}
