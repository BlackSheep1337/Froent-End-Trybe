import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div style={{textAlign: 'center'}}>
      <div><span>{count}</span></div>
      <button style={{width: 100}} onClick={() => setCount(count + 1)}>+</button>
      <button style={{width: 100}} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;