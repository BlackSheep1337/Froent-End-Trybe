import React from 'react';
import userProfile from './userProfile.jsx';

class App extends React.Component {
  render() {
    const Joao = {
      id: 102,
      name: 'Joao',
      email: 'joao@gmail.com',
      avatar: 'https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const Amelia = {
      id: 77,
      name: 'Amelia',
      email: 'amelia@gmail.com',
      avatar: 'https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };
    
    return (
      <div>
        <userProfile user={ Joao }/>
        <userProfile user={ Amelia }/>
      </div>
    )
  }
}

export default App;