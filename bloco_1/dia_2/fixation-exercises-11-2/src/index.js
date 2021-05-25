import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Image 
        source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
        alternativeText="Cute cat staring"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));