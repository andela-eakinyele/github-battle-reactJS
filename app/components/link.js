import React from 'react';

class Link extends React.Component {
  changeURL() {
    window.location.replace(this.props.href)
  }

  render() {
    return (
      <span style={{ color: 'blue', cursor: 'pointer' }}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
}

module.exports = Link;
