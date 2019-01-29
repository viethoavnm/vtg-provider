import React from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import { Route, Redirect } from 'react-router-dom';

export default connect((state) => ({ loggedIn: state.common.loggedIn }))(
  function PrivateRoute({ component: Component, loggedIn, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => (loggedIn
          ? (<Layout><Component {...props} /></Layout>)
          : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
        )}
      />
    );
  })