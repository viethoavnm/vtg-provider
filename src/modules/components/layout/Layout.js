import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { LOGOUT_KEY } from 'consts';
import './Layout.less';

class AppLayout extends React.PureComponent {
  onLogout = (e) => {
    if (e.key === LOGOUT_KEY) {
      console.log("#", LOGOUT_KEY);
    }
  }

  componentDidMount() {
    window.addEventListener('storage', this.onLogout, false);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.onLogout, false)
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

export default AppLayout;