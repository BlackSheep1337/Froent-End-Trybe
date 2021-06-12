import React, { useState, useEffect } from 'react'

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionRecieved)
  }, []);

  function handlePositionRecieved({ coords }) {
    const { latitude, longitude } = coords;
    console.log(latitude, longitude);
    setLocation({ latitude, longitude });
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      longitude: {location.longitude} 
    </>
  )
}
