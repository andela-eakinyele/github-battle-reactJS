'use strict';

import React, {Component} from 'react';
import Link from './link';

class ProfilePic extends Component {
  render() {
    return <img src={this.props.imageUrl} style={{ height:100, width: 100 }} />
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
}

class ProfileName extends Component {
  render() {
    return (
      <div> {this.props.name} </div>
    )
  }
}

class Avatar extends Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

export default Avatar;