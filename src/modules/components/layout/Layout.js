import React from 'react';
import Sider from 'components/Sider';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import { startSession } from 'utils/auth';
import { LOGOUT_KEY, LOGIN_KEY } from 'consts';
import { requestLogout, verifyLogin } from 'reduxModule/common';

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
        <div className="wrapper">
          <div className="wrapper__sider">
            <Sider />
          </div>
          <div className="wrapper__content">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </React.Fragment>)
  }
};

export default connect(({ common }) => ({ loggedIn: common.loggedIn }), { requestLogout, verifyLogin })(AppLayout);