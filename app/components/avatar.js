'use strict';

import React from 'react';

class ProfilePic extends React.Component {
  render() {
    return <img src={this.props.imageUrl} style={{ height=100, width: 100 }} />
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <a href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div> {this.props.name} </div>
    )
  }
}

class Avatar extends React.Component {
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

module.exports = Avatar;