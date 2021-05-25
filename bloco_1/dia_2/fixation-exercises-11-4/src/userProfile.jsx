import React from 'react';
import Image from './Image.jsx';

class userProfile extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.user.name }</p>
        <p>{ this.props.user.email }</p>
        <Image src={ this.props.user.avatar } alternativeText="User Avatar" />
      </div>
    )
  }
}

export default userProfile;