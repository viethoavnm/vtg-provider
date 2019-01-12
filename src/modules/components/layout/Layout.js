import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { startSession } from 'utils/auth';
import { LOGOUT_KEY, LOGIN_KEY } from 'consts';
import { requestLogout, verifyLogin } from 'reduxModule/common';
import './Layout.less';

class AppLayout extends React.PureComponent {
  onLogging = (e) => {
    const { requestLogout, verifyLogin } = this.props;
    switch (e.key) {
      case LOGOUT_KEY:
        requestLogout();
        break;
      case LOGIN_KEY:
        verifyLogin();
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      startSession();
    } 
    window.addEventListener('storage', this.onLogging, false);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.onLogging, false)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.content}
        <Footer />
      </React.Fragment>)
  }
};

export default connect(({ common }) => ({ loggedIn: common.loggedIn }), { requestLogout, verifyLogin })(AppLayout);