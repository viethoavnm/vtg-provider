import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Popover, Icon, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';

const AvatarHolder = ({ user }) => {
  return (
    <Popover
      placement="bottomRight"
      content={
        <Menu>
          <Menu.Item>
            <a href="#/user-info">
              <Icon type="user" />
              <FormattedMessage id="USER_INFO" />
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#/setting">
              <Icon type="setting" />
              <FormattedMessage id="SETTING" />
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#/sign-out">
              <Icon type="logout" />
              <FormattedMessage id="SIGN_OUT" />
            </a>
          </Menu.Item>
        </Menu>}
      title={<FormattedMessage id="USER_INFO" />}>
      <div className="avatar">
        <span className="avatar__name">{user}</span>
        <Avatar className="avatar__image" style={{ marginLeft: 8 }}>{user}</Avatar>
      </div>
    </Popover>
  )
};

export default connect((state) => ({ user: state.common.user.user_name }))(AvatarHolder);