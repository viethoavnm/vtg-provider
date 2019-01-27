import React from 'react';
import Avatar from './Avatar';
class AppHeader extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <div className="header__logo" />
        <Avatar />
      </div>)
  }
}

export default AppHeader;