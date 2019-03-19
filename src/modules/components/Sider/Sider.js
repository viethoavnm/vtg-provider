import React from 'react';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'intl';

export default class Sider extends React.Component {
  render() {
    return (
      <div className="sider">
        <div className="menu-header">
          <div className="menu-header__logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
        </div>
        <Menu
          className="menu-content"
          selectedKeys={['3']}>
          <Menu.Item key="1">
            <Icon type="dollar" />
            <span className="nav-text">
              <FormattedMessage id="FIN_MANAGEMENT" />
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="shopping-cart" />
            <span className="nav-text">
              <FormattedMessage id="ORDER_MANAGEMENT" />
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="home" />
            <span className="nav-text">
              <FormattedMessage id="HOTE_MANAGEMENT" />
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="shopping-cart" />
            <span className="nav-text">
              <FormattedMessage id="ROOM_AND_PRICE_MANAGEMENT" />
            </span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="eye" />
            <span className="nav-text">
              <FormattedMessage id="ADS_MANAGEMENT" />
            </span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="customer-service" />
            <span className="nav-text">
              <FormattedMessage id="CUSTOMER_TAKE_CARE" />
            </span>
          </Menu.Item>
        </Menu>
      </div>)
  }
}