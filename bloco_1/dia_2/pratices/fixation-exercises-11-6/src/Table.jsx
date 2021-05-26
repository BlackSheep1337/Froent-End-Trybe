import React, { Component } from 'react';
import UserName from './components/UserName/UserName';
import UserOtherInfo from './components/UserOtherInfo/UserOtherInfo';

class Table extends Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'Joao',
        email: 'joao@gmail.com',
        avatar: 'https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette-thumbnail.png'
      },
      {
        id: 77,
        name: 'Amelia',
        email: 'amelia@gmail.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSargeBwHMuUV4YCTX470JlZCbOVMliPXTSrg&usqp=CAU'
      }
    ];

    return (
      users.map((user) =>
        <div>
          <UserName name={user.name} />
          <UserOtherInfo email={user.email} id={user.id} />
        </div>
      )
    );
  }
}

export default Table;